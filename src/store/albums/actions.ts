import { actionCreatorFactory } from 'typescript-fsa';
import { Album } from '@typings';

const actionCreator = actionCreatorFactory('ALBUMS');

const loadItems = actionCreator<Album[]>('LOAD_ITEMS');

export {
    loadItems
};