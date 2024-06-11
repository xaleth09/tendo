import styled from "styled-components";
import {Column} from "~/components/general/Flex";
import {useState} from "react";

const RoundedBox = styled.div<{ selected: boolean }>`
    display: flex;
    border: 2px solid ${({selected}) => selected ? '#00417D' : '#EEEEEE'};
    border-radius: 8px;
    cursor: pointer;
    padding: 11px 22px;
`

const CheckboxSquare = styled(RoundedBox)<{ selected: boolean }>`
    padding: 0;
    height: 18px;
    width: 18px;
`


const Copy = styled.div`
    color: #556676;
`

const ColumnWithGap = styled(Column)`
    gap: 10px;
`


const Checkbox = ({option, selected, handleSelect}: {
    option: Option, selected: boolean, handleSelect: (id: string) => void
}) => {
    const {title, id} = option;
    return (
        <RoundedBox
            selected={selected}
            onClick={() => {
                handleSelect(id);
            }}
        >
            <CheckboxSquare selected={selected}/>
            <Copy>
                {title}
            </Copy>
        </RoundedBox>
    )
}

type Option = {
    id: string,
    title: string
}

export const SimpleCheckboxGroup = ({options}: { options: Option[] }) => {
    const [selectedIds, setSelectedId] = useState<string[]>([]);

    const handleSelectId = (id: string) => {
        if (selectedIds.includes(id)) {
            setSelectedId(selectedIds.filter((selectedId) => selectedId !== id))
        } else {
            setSelectedId([...selectedIds, id])
        }
    }

    return (
        <ColumnWithGap>
            {options.map((option) => {
                const {id} = option;
                const selected = selectedIds.includes(id)

                return (
                    <Checkbox
                        key={id}
                        option={option}
                        selected={selected}
                        handleSelect={handleSelectId}
                    />
                )
            })}
        </ColumnWithGap>
    )
}

