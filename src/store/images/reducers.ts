import { reducerWithInitialState } from 'typescript-fsa-reducers';

import * as actions from './actions';

import {
    ImagesState as State,
    LoadImagesByAlbumIdPayload
} from './types';

class Reducer {
    public static makeInitialState(): State {
        return {
            byAlbumId: {}
        };
    }

    public static loadImagesByAlbumId(state: State, payload: LoadImagesByAlbumIdPayload): State {
        const {
            albumId,
            images
        } = payload;

        return {
            ...state,
            byAlbumId: {
                ...state.byAlbumId,
                [albumId]: images
            }
        };
    }
}

export const imagesReducer = reducerWithInitialState(Reducer.makeInitialState())
    .case(actions.loadImagesByAlbumId, Reducer.loadImagesByAlbumId);