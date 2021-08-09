import * as gameConstant from '../constants/gameConstants'
const initialState = {
    pictures: [
        {picture: 'keo', img: './images/keo.png', picked: true},
        {picture: 'bua', img: './images/bua.png', picked: false},
        {picture: 'bao', img: './images/bao.png', picked: false}
    ],
    result: "Game",
    scores: 0,
    times: 0,
    computer: {picture: 'keo', img: './images/keo.png'}
}

const gameReducer = (state=initialState, action) => {
    const { type, payload } = action;
    let { pictures , computer } = state
    switch(type){
        case gameConstant.PICK_PICTRUE:
            let pictureUpdate = [...pictures]

            // get picture picked
            pictureUpdate = pictureUpdate.map((item, index) => {
                if( item.picture === payload.picture) return {...item, picked: true}
                return {...item, picked: false}
            })
            return {...state, pictures: pictureUpdate}

        case gameConstant.PLAY_GAME:

            // pick a random picture for the computer
            let computerUpdate = pictures[Math.floor(Math.random()* pictures.length)]
            return {...state, computer: computerUpdate}
        
        case gameConstant.PROCESS_RESULT:

            // find index of player and computer in all pictures
            let playerIndex = pictures.findIndex((item) => item.picked === true)
            let computerIndex = pictures.findIndex((item) => item.picture === computer.picture)

            /** player - computer:
             * -1 or 2 => lose
             * 0 => draw
             * other case: win
             */ 
            if((playerIndex - computerIndex) === -1 || (playerIndex - computerIndex) === 2){
                state.result = "thua"
            }else if((playerIndex - computerIndex) === 0){
                state.result = "Hòa"
            }else{
                state. result = "thắng"
                state.scores +=1
            }
            state.times += 1
            return {...state}

        default: return {...state}
    }
}

export default gameReducer