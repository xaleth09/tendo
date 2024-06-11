import {useEffect, useState} from "react";
import {mockControllerToTransformBundleIntoFormData} from "~/fake-backend/fakeFormPageController";
import {FormPage} from "~/api/types";


export const useFakeFetchGETFormPage = () => {
    const [data, setData] = useState<FormPage | null>(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const {page_index = 1, next_page_index = 1} = data || {};

    const fetchData = async (page_num: number) => {
        setLoading(true);
        try {
            const result_1 = await new Promise<FormPage>((resolve, reject) => {
                setTimeout(() => {
                    try {
                        const fakeFormData = mockControllerToTransformBundleIntoFormData({page_num});
                        resolve(fakeFormData);
                    } catch (err) {
                        reject(err);
                    }
                }, 250); // Simulate network delay
            });
            setData(result_1);
            setLoading(false);
        } catch (err_1) {
            setError('Some really helpful error message');
            setLoading(false);
        }
    };

    const fetchNextPage = () => {
        if (next_page_index !== undefined) {
            fetchData(next_page_index);
        }
    };

    const fetchPreviousPage = () => {
        if (page_index > 1) {
            fetchData(page_index - 1);
        }
    };

    useEffect(() => {
        fetchData(1)
    }, []);

    return {
        data,
        loading,
        error,
        fetchNextPage,
        fetchPreviousPage,
    };
}
