import * as React from 'react';
import { Dropdown } from 'react-bootstrap';

const ITEMS = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
];

interface Props {
    selectedExpandSize: number | null;
    onSelect: (selectedItem: string | null) => void;
}

export function ExpandSizeDropdown({
    selectedExpandSize,
    onSelect
}: Props): JSX.Element {
    const label = selectedExpandSize || '#';

    return (
        <div>
            Добавлять в галлерею по

            <Dropdown>
                <Dropdown.Toggle variant="success">
                    {label}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {ITEMS.map(item => (
                        <Dropdown.Item
                            key={item}
                            eventKey={item}
                            onSelect={onSelect}
                        >{item}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}