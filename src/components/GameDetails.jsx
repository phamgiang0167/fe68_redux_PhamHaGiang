import React, { Component } from 'react'
import { connect } from 'react-redux'
class GameDetails extends Component {
    render() {
        const { result, scores, times } = this.props
        return (
            <div className="gameDetails">
                <div className="display-4 mb-2"><span>{result}</span></div>
                <div className="display-4 mb-2">Số bàn thắng: <span>{scores}</span></div>
                <div className="display-4 mb-2">Số bàn chơi: <span>{times}</span></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { result, scores, times} = state.gameReducer
    return {
        result,
        scores,
        times
    }
}

export default connect(mapStateToProps)(GameDetails)
