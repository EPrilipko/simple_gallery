import axios from 'axios';
import { Album, Image } from '@typings';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function getAlbums(): Promise<Album[]> {
    const res = await axios.get<Album[]>(
        `${BASE_URL}/albums`
    );

    return res.data;
}

export async function getImages(albumId: number): Promise<Image[]> {
    const res = await axios.get<Image[]>(
        `${BASE_URL}/photos?albumId=${albumId}`
    );

    return res.data;
}