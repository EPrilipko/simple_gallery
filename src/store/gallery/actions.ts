import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory('GALLERY');

const setExpandSize = actionCreator<number>('SET_EXPAND_SIZE');
const setCurrentPosition = actionCreator<number>('SET_CURRENT_POSITION');
const setSelectedAlbumId = actionCreator<number | null>('SET_SELECTED_ALBUM');
const setPendingAlbumId = actionCreator<number | null>('SET_PRELOADER');
const resetPositions = actionCreator('RESET_POSITIONS');
const updateAfterImagesLoaded = actionCreator('UPDATE_AFTER_IMAGES_LOADED');

export {
    setExpandSize,
    setCurrentPosition,
    setSelectedAlbumId,
    setPendingAlbumId,
    resetPositions,
    updateAfterImagesLoaded
};