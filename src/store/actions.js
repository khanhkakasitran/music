import { GET_SONG, PLAY_SONG } from './constants'

export const getSong = payload => ({
    type: GET_SONG,
    payload
})

export const playSong = payload => ({
    type: PLAY_SONG,
    payload
})

