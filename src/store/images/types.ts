import { Image } from '@typings';

export interface ImagesState {
    byAlbumId: {
        [id: number]: Image[];
    };
}

export interface LoadImagesByAlbumIdPayload {
    albumId: number;
    images: Image[];
}
