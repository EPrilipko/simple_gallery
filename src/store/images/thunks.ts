import actionCreatorFactory from 'typescript-fsa';
import { asyncFactory } from 'typescript-fsa-redux-thunk';

import { getImages } from '../../Api';

import { StoreState } from '../';
import { updateAfterImagesLoaded } from '../gallery';

import * as actions from './actions';

const thunkActionCreator = asyncFactory<StoreState>(
    actionCreatorFactory('IMAGES_ASYNC')
);

export const loadImages = thunkActionCreator<number, void, Error>(
    'LOAD_IMAGES',
    async(albumId, dispatch, getState) => {
        // timeout to simmulate images fetching delay
        setTimeout(async () => {
            const images = await getImages(albumId);

            dispatch(actions.loadImagesByAlbumId({
                albumId,
                images
            }));
    
            dispatch(updateAfterImagesLoaded());
        }, 5000);


    }
);
