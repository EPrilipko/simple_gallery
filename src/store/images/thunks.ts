import axios from 'axios';
import actionCreatorFactory from 'typescript-fsa';
import { asyncFactory } from 'typescript-fsa-redux-thunk';
import { Image } from '@typings';

import { StoreState } from '../';
import { updateAfterImagesLoaded } from '../gallery';

import * as actions from './actions';

const thunkActionCreator = asyncFactory<StoreState>(
    actionCreatorFactory('IMAGES_ASYNC')
);

export const loadImages = thunkActionCreator<number, void, Error>(
    'LOAD_IMAGES',
    async(albumId, dispatch, getState) => {
        const images = (await axios.get<Image[]>(
            `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
        )).data;

        // timeout to simmulate images fetching delay
        setTimeout(() => {
            dispatch(actions.loadImagesByAlbumId({
                albumId,
                images
            }));
    
            dispatch(updateAfterImagesLoaded());
        }, 5000);


    }
);
