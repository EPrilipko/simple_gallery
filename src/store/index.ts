import {
    applyMiddleware,
    createStore,
    combineReducers
} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {
    GalleryState,
    galleryReducer
} from './gallery';
import {
    AlbumsState,
    albumsReducer
} from './albums';
import {
    ImagesState,
    imagesReducer
} from './images';

export interface StoreState {
    gallery: GalleryState;
    albums: AlbumsState;
    images: ImagesState;
}

const rootReducer = combineReducers<StoreState>({
    gallery: galleryReducer,
    albums: albumsReducer,
    images: imagesReducer
});

export function configureStore() {
    return createStore(
        rootReducer,
        {},
        applyMiddleware(thunkMiddleware)
    )
}
