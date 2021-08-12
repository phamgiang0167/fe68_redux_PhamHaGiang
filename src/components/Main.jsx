import React, { Component } from 'react'
import Computer from './Computer'
import GameDetails from './GameDetails'
import Player from './Player'
import './style.css'
import { connect } from 'react-redux'
import { actPlayGame, actProcessResult  } from '../store/actions/gameActions'
class Main extends Component {
    render() {
        const { playGame } = this.props
        return (
            <div className="main container-fluid" style={{backgroundImage: "url('./images/bgGame.png')"}}>
                <div className="row">
                    <div className="col-3">
                        <Player />
                    </div>  
                    <div className="col-6">
                        <GameDetails />
                        <button 
                            className="btn btn-success"
                            onClick={() => playGame()}
                        >Play game
                        </button>
                    </div>
                    <div className="col-3">
                        <Computer />
                    </div>
                </div>
      
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            let time = 0
            let random = setInterval(() => {
                
                dispatch(actPlayGame())
                time ++
                if(time === 10) {
                    clearInterval(random)
                    dispatch(actProcessResult())
                }
            }, 100)
        }
    }
}
export default connect(null, mapDispatchToProps)(Main)
