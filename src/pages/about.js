import React, { Component } from 'react'
import styles from '../CSS/about.module.css'
import img from '../images/me.jpg'
import Navbar from '../components/Navbar'

export default class about extends Component {
    render() {
        return (
            <div>
            <Navbar/>
                <section className={styles.about}></section>
                <div className={styles.aboutCenter}>
                    <article className={styles.aboutImg}>
                        <div className={styles.imgContainer}>
                            <img src={img} alt="about company" />
                        </div>
                    </article>
                    <article className={styles.aboutInfo}>
                        <h4>ABOUT ME:</h4>
                        <p>lorem ;aiefja;eijfa;efja;dsijfae;ifja;oijfja;eoifjaoeijfoaeijfo</p>
                        <p>lorem ;aiefja;eijfa;efja;dsijfae;ifja;oijfja;eoifjaoeijfoaeijfo</p>
                        <button type="button" className="btn-primary">RESUME</button>
                    </article>
            </div>
            </div>
        )
    }
}
