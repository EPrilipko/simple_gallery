import * as React from 'react';
import { connect } from 'react-redux';

import { StoreState } from '../../store';
import {
    getGalleryState,
    setExpandSize
} from '../../store/gallery';

import { ExpandSizeDropdown } from './ExpandSizeDropdown';

interface Props extends MapProps, DispatchProps {

}

interface MapProps {
    selectedExpandSize: number | null;
}

interface DispatchProps {
    onSelect: (selectedItem: string | null) => void;
}

export const ExpandSizeDropdownContainer = connect(mapStateToProps, mapDispatchToProps)(
    class extends React.PureComponent<Props> {
        public render(): JSX.Element {
            const {
                selectedExpandSize,
                onSelect
            } = this.props;

            return (
                <ExpandSizeDropdown
                    selectedExpandSize={selectedExpandSize}
                    onSelect={onSelect}
                />
            );
        }
    }
);

function mapStateToProps(state: StoreState): MapProps {
    const {
        expandSize
    } = getGalleryState(state);

    return {
        selectedExpandSize: expandSize
    };
}

function mapDispatchToProps(dispatch: any): DispatchProps {
    return {
        onSelect: (selectedItem: string | null) => {
            const updatedExpandSize = selectedItem && parseInt(selectedItem);

            if (!updatedExpandSize) {
                console.warn(`Unvalid expandedSize selected: ${selectedItem}`);
            } else {
                dispatch(setExpandSize(updatedExpandSize));
            }
        }
    };
}