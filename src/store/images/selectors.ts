import createCashedSelector from 're-reselect';

import { StoreState } from '../';

import { ImagesState } from './types';

export const getImagesState = (state: StoreState) => state.images;

export const areImagesForAlbumLoaded = createCashedSelector(
    getImagesState,
    (state: StoreState, albumId: number) => albumId,
    (state: ImagesState, albumId: number): boolean => !!state.byAlbumId[albumId]
)(
    (state: StoreState, albumId: number) => albumId
);
