import React, {Component} from 'react'
import classes from './app.module.scss'
import EqualizerBlock from './component/equalizerBlock/equalizerBlock'

export default class App extends Component {



    render() {
        return(
            <div className={classes.App}>
                <EqualizerBlock />
                <EqualizerBlock />
                <EqualizerBlock />
                <EqualizerBlock />
                <EqualizerBlock />
                <EqualizerBlock />
                <EqualizerBlock />
            </div>
        )
    }
}

