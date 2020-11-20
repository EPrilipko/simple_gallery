import axios from 'axios';
import actionCreatorFactory from 'typescript-fsa';
import { asyncFactory } from 'typescript-fsa-redux-thunk';
import { Album } from '@typings';

import { StoreState } from '../';

import * as actions from './actions';

const thunkActionCreator = asyncFactory<StoreState>(
    actionCreatorFactory('ALBUMS_ASYNC')
);

export const loadAlbums = thunkActionCreator<void, void, Error>(
    'LOAD_ALBUMS',
    async(_, dispatch, getState) => {
        const albums = (await axios.get<Album[]>(
            'https://jsonplaceholder.typicode.com/albums'
        )).data;

        dispatch(actions.loadItems(albums));
    }
);
