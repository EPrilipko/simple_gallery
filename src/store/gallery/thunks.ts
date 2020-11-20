import actionCreatorFactory from 'typescript-fsa';
import { asyncFactory } from 'typescript-fsa-redux-thunk';

import { StoreState } from '../';
import {
    areImagesForAlbumLoaded,
    loadImages
} from '../images';

import * as actions from './actions';

const thunkActionCreator = asyncFactory<StoreState>(
    actionCreatorFactory('GALLERY_ASYNC')
);

export const setSelectedAlbumId = thunkActionCreator<number | null, void, Error>(
    'SET_SELECTED_ALBUM_ID',
    async(selectedId, dispatch, getState) => {
        if (selectedId) {
            if (!areImagesForAlbumLoaded(getState(), selectedId)) {
                dispatch(actions.setPendingAlbumId(selectedId));
                dispatch(loadImages(selectedId));
            } else {
                dispatch(actions.setSelectedAlbumId(selectedId));
            }
        }
    }
);
