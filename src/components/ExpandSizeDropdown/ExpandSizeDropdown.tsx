import * as React from 'react';
import { Dropdown } from 'react-bootstrap';

import { times } from '../../Utils';
import {
    MIN_EXPAND_SIZE,
    MAX_EXPAND_SIZE
} from '../../Config';

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
        <React.Fragment>
            Добавлять в галлерею по

            <Dropdown>
                <Dropdown.Toggle variant="success">
                    {label}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {times(MIN_EXPAND_SIZE, MAX_EXPAND_SIZE).map(item => (
                        <Dropdown.Item
                            key={item}
                            eventKey={String(item)}
                            onSelect={onSelect}
                        >{item}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </React.Fragment>
    );
}