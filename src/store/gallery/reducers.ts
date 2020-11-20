import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { DEFAULT_EXPAND_SIZE } from '../../Config';

import * as actions from './actions';
import {
    GalleryState as State
} from './types';

class Reducer {
    public static makeInitialState(): State {
        return {
            expandSize: DEFAULT_EXPAND_SIZE,
            currentPosition: DEFAULT_EXPAND_SIZE,
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

    public static resetPositions(state: State): State {
        const {
            expandSize,
            currentPosition
        } = Reducer.makeInitialState();

        return {
            ...state,
            expandSize,
            currentPosition
        };
    }

    public static updateAfterImagesLoaded(state: State): State {
        const {
            pendingAlbumId
        } = state;

        const stateWithResetedPosition = Reducer.resetPositions(state);

        return {
            ...stateWithResetedPosition,
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
    .case(actions.resetPositions, Reducer.resetPositions)
    .case(actions.updateAfterImagesLoaded, Reducer.updateAfterImagesLoaded);