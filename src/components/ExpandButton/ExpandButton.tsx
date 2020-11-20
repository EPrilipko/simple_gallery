import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { getDeclension, DeclensionCases } from '../../Utils';

import { StoreState } from '../../store';
import { getImagesState } from '../../store/images';
import {
    getGalleryState,
    setCurrentPosition
} from '../../store/gallery';

const BUTTON_DECLENSIONS: DeclensionCases = {
    singular: 'фотографию',
    singularGenitive: 'фотографии',
    plural: 'фотографий'
};

interface Props extends MapProps, DispatchProps {

}

interface MapProps {
    nItemsToAdd: number;
    newCurrentPosition: number;
}

interface DispatchProps {
    setCurrentPosition: (currentPosition: number) => void;
}

export const ExpandButton = connect(mapStateToProps, mapDispatchToProps)(
    class extends React.PureComponent<Props> {
        private onClickBounded: () => void;

        public constructor(props: Props) {
            super(props);

            this.onClickBounded = this.onClick.bind(this);
        }

        public render(): JSX.Element {
            const {
                nItemsToAdd
            } = this.props;

            return (
                <Button onClick={this.onClickBounded}>
                    Показать еще {nItemsToAdd} {getDeclension(BUTTON_DECLENSIONS, nItemsToAdd)}
                </Button>
            );
        }

        private onClick(): void {
            const {
                newCurrentPosition
            } = this.props;

            this.props.setCurrentPosition(newCurrentPosition);
        }
    }
);

function mapStateToProps(state: StoreState): MapProps {
    const {
        selectedAlbumId,
        expandSize,
        currentPosition
    } = getGalleryState(state);
    const {
        byAlbumId
    } = getImagesState(state);

    const nImages = (
        selectedAlbumId ? byAlbumId[selectedAlbumId] : []
    ).length;

    const nItemsToAdd = selectedAlbumId ? Math.min(
        expandSize,
        nImages - currentPosition
    ) : 0;
    const newCurrentPosition = Math.min(
        currentPosition + expandSize,
        nImages
    );;

    return {
        nItemsToAdd,
        newCurrentPosition
    };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
    return {
        setCurrentPosition: (currentPosition: number) => dispatch(setCurrentPosition(currentPosition))
    };
}
