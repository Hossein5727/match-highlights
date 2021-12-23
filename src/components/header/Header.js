import React from 'react'
import { HeaderStyles } from './HeaderStyles'
import marcelo from '../../images/Marcelo.png'
import messi from '../../images/messi.png'

function Header() {

    const classes = HeaderStyles()

    return (
        <div className={classes.container}>
            <img src={marcelo} className={classes.cover} />
            <img src={messi} className={classes.cover2} />
        </div>
    )
}

export default Header
