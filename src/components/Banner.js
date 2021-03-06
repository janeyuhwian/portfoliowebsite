import React from 'react'
import styles from '../CSS/banner.module.css'
// import Typewriter from 'typewriter-effect/dist/core'
import Typist from 'react-typist';

const Banner = ({title,info,children}) => {
    return (
        <Typist>
        <div className={styles.banner}>
            <h2>{title}</h2>
             <h2>{info}</h2>
             {children}
        </div>
        </Typist>
    )
}


export default Banner