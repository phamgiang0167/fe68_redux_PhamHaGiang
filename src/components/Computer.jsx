import React, { Component } from 'react'
import { connect } from 'react-redux'
class Computer extends Component {
    render() {
        const { computer } = this.props
        return (
            <div>
                <div className="choosen">
                <img className="choosen__computer" src={ computer.img } alt="" />
                </div>
                <div className="speech-bubble"></div>
                <img className="player__image" src="./images/playerComputer.png" alt="thanos" />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        computer: state.gameReducer.computer
    }
}

export default connect(mapStateToProps)(Computer)
