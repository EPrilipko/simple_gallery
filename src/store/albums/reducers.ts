import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Album } from '@typings';

import * as actions from './actions';

import {
    AlbumsState as State
} from './types';

class Reducer {
    public static makeInitialState(): State {
        return {
            items: []
        };
    }

    public static loadItems(state: State, items: Album[]): State {       
        return {
            ...state,
            items
        };
    }
}

export const albumsReducer = reducerWithInitialState(Reducer.makeInitialState())
    .case(actions.loadItems, Reducer.loadItems);
    