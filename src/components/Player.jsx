import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actPickPicture } from '../store/actions/gameActions'
class Player extends Component {
    render() {
        const { picturesArr, pickPicture } = this.props
        return (
            <div>
                <div className="choosen">
                    <img className="choosen__player"
                        src={
                            picturesArr.find((item) => {
                                return item.picked === true
                            }).img
                        }
                        alt="picked"
                    />
                </div>
                <div className="speech-bubble"></div>
                <img className="player__image" src="./images/player.png" alt="iron man" />

                <div className="text-center">
                    {picturesArr.map((item, index) => {
                        const { picture, img, picked} = item
                        let border
                        if (picked) {
                            border = { border: '3px solid orange' }
                        }
                        return (
                            <button 
                                className="mr-2" 
                                key={picture} 
                                style={border}
                                onClick={ () => pickPicture(picture)}
                            >
                                <img className="dice" src={img} alt="a dice" />
                            </button>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        picturesArr: state.gameReducer.pictures
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        pickPicture: (picture) => {
            dispatch(actPickPicture(picture))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)