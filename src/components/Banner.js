import React from 'react'
import styles from '../CSS/banner.module.css'

const Banner = ({title,info,children}) => {
    return (
        <div className={styles.banner}>
            <h2>{title}</h2>
             <h3>{info}</h3>
             {children}
        </div>
    )
}

export default Banner