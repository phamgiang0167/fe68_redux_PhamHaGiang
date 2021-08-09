import * as gameConstant from '../constants/gameConstants'

export const actPickPicture = (picture) => ({
    type: gameConstant.PICK_PICTRUE,
    payload: {picture}
})

export const actPlayGame = () => ({
    type: gameConstant.PLAY_GAME
})

export const actProcessResult = () => ({
    type: gameConstant.PROCESS_RESULT
})
