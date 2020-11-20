import actionCreatorFactory from 'typescript-fsa';
import { asyncFactory } from 'typescript-fsa-redux-thunk';

import { getAlbums } from '../../Api';
import { selectRandomItems } from '../../Utils';
import { N_RANDOM_ALBUMS } from '../../Config';

import { StoreState } from '../';

import * as actions from './actions';

const thunkActionCreator = asyncFactory<StoreState>(
    actionCreatorFactory('ALBUMS_ASYNC')
);

export const loadAlbums = thunkActionCreator<void, void, Error>(
    'LOAD_ALBUMS',
    async(_, dispatch, getState) => {
        const albums = await getAlbums();
        const randomAlbums = selectRandomItems(albums, N_RANDOM_ALBUMS);

        dispatch(actions.loadItems(randomAlbums));
    }
);
