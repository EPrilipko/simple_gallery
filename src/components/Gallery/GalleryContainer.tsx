import * as React from 'react';
import { connect } from 'react-redux';
import { Image } from '@typings';

import { StoreState } from '../../store';
import { getImagesState } from '../../store/images';
import { getGalleryState } from '../../store/gallery';

import { Gallery } from './Gallery';

interface Props extends MapProps {

}

interface MapProps {
    images: Image[];
    currentPosition: number;

}

export const GalleryContainer = connect(mapStateToProps)(
    class extends React.PureComponent<Props> {
        public render(): JSX.Element {
            const {
                images,
                currentPosition
            } = this.props;

            return (
                <Gallery
                    images={images}
                    currentGalleryPosition={currentPosition}
                />
            );
        }
    }
)

function mapStateToProps(state: StoreState): MapProps {
    const {
        selectedAlbumId,
        currentPosition
    } = getGalleryState(state);
    const {
        byAlbumId
    } = getImagesState(state);

    const images = selectedAlbumId ? byAlbumId[selectedAlbumId] : [];

    return {
        images,
        currentPosition
    };
}
