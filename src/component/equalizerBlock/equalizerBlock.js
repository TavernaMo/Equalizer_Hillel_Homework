import React, {Component} from 'react'
import classes from './equalizerBlock.module.scss'

export default class EqualizerBlock extends Component {

    state = {
        regularEqualizer : Math.floor(Math.random() * Math.floor(40))
    }

    handlerChange=(e) => {
        console.log(e.target.value)
        this.setState({
            regularEqualizer :e.target.value
        })
    }

    render() {
        return(
            <div className={classes.equalizerBlock}>
                <div className={classes.equalizer}>
                    <div className={classes.equalizerBg} style={{height: this.state.regularEqualizer + '%'}}/>
                </div>
                <div className={classes.regularEqualaizer}>
                    <h3>{this.state.regularEqualizer} &nbsp; VOLUME</h3>
                    <input type="range" id={'#eqInput'} onChange={this.handlerChange} value={this.state.regularEqualizer}/>
                    <label htmlFor="eqInput"></label>
                </div>
            </div>
        )
    }
}