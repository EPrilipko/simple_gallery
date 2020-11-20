import * as React from 'react';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { Album } from '@typings';

import { StoreState } from '../../store';
import { getAlbumsState } from '../../store/albums';
import {
    getGalleryState,
    setSelectedAlbumId
} from '../../store/gallery';

import { AlbumDropdown } from './AlbumDropdown';

interface Props extends MapProps, DispatchProps {

}

interface MapProps {
    albums: Album[];
    selectedAlbumId: number | null;
}

interface DispatchProps {
    onSelect: (selectedItem: string | null) => void;
}

export const AlbumDropdownContainer = connect(mapStateToProps, mapDispatchToProps)(
    class extends React.PureComponent<Props> {
        public render(): JSX.Element {
            const {
                albums,
                selectedAlbumId,
                onSelect
            } = this.props;

            return (
                <AlbumDropdown
                    albums={albums}
                    selectedAlbumId={selectedAlbumId}
                    onSelect={onSelect}
                />
            );
        }
    }
);

function mapStateToProps(state: StoreState): MapProps {
    const {
        items
    } = getAlbumsState(state);
    const {
        selectedAlbumId
    } = getGalleryState(state);

    return {
        albums: items,
        selectedAlbumId
    };
}

function mapDispatchToProps(dispatch: ThunkDispatch<StoreState, Error, AnyAction>): DispatchProps {
    return {
        onSelect: (selectedItem: string | null) => {
            const updatedAlbumId = selectedItem && parseInt(selectedItem);

            if (!updatedAlbumId) {
                console.warn(`Unvalid albumId selected: ${selectedItem}`);
            } else {
                dispatch(setSelectedAlbumId(updatedAlbumId));
            }
        }
    };
}