import { actionCreatorFactory } from 'typescript-fsa';

import { LoadImagesByAlbumIdPayload } from './types';

const actionCreator = actionCreatorFactory('IMAGES');

const loadImagesByAlbumId = actionCreator<LoadImagesByAlbumIdPayload>('LOAD_IMAGES_BY_ALBUM_ID');

export {
    loadImagesByAlbumId,
};