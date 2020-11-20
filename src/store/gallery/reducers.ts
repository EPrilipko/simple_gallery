import { reducerWithInitialState } from 'typescript-fsa-reducers';

import * as actions from './actions';

import {
    GalleryState as State
} from './types';

class Reducer {
    public static makeInitialState(): State {
        return {
            expandSize: 5,
            currentPosition: 5,
            selectedAlbumId: null,
            pendingAlbumId: null
        };
    }

    public static setExpandSize(state: State, expandSize: number): State {
        return {
            ...state,
            expandSize
        }
    }

    public static setCurrentPosition(state: State, currentPosition: number): State {
        return {
            ...state,
            currentPosition
        };
    }

    public static setSelectedAlbumId(state: State, selectedAlbumId: number | null): State {
        return {
            ...state,
            selectedAlbumId
        };
    }

    public static setPendingAlbumId(state: State, pendingAlbumId: number | null): State {
        return {
            ...state,
            pendingAlbumId
        };
    }

    public static updateAfterImagesLoaded(state: State): State {
        const {
            pendingAlbumId
        } = state;

        const {
            expandSize,
            currentPosition
        } = Reducer.makeInitialState();

        return {
            expandSize,
            currentPosition,
            selectedAlbumId: pendingAlbumId,
            pendingAlbumId: null
        };
    }
}

export const galleryReducer = reducerWithInitialState(Reducer.makeInitialState())
    .case(actions.setExpandSize, Reducer.setExpandSize)
    .case(actions.setCurrentPosition, Reducer.setCurrentPosition)
    .case(actions.setSelectedAlbumId, Reducer.setSelectedAlbumId)
    .case(actions.setPendingAlbumId, Reducer.setPendingAlbumId)
    .case(actions.updateAfterImagesLoaded, Reducer.updateAfterImagesLoaded);