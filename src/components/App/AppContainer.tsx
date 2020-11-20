import * as React from 'react';
import { connect } from 'react-redux';

import { StoreState } from '../../store';
import { getGalleryState } from '../../store/gallery';
import { loadAlbums } from '../../store/albums';
import { getImagesState } from '../../store/images';

import { App } from './App';

interface Props extends MapProps, DispatchProps {

}

interface MapProps {
    showPreloader: boolean;
    showControls: boolean;
}

interface DispatchProps {
    loadAlbums: () => void;
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(
    class extends React.PureComponent<Props> {
        public componentDidMount(): void {
            this.props.loadAlbums();
        }

        public render(): JSX.Element {
            const {
                showPreloader,
                showControls
            } = this.props;

            return (
                <App
                    showPreloader={showPreloader}
                    showControls={showControls}
                />
            );
        }
    }
);

function mapStateToProps(state: StoreState): MapProps {
    const {
        pendingAlbumId,
        selectedAlbumId,
        currentPosition
    } = getGalleryState(state);
    const {
        byAlbumId
    } = getImagesState(state);

    const images = selectedAlbumId ? byAlbumId[selectedAlbumId] : [];

    return {
        showPreloader: !!pendingAlbumId,
        showControls: !!selectedAlbumId && currentPosition !== images.length
    }
}

function mapDispatchToProps(dispatch: any): DispatchProps {
    return {
        loadAlbums: () => dispatch(loadAlbums())
    };
}
