import React, { Component } from 'react'
import styles from '../CSS/about.module.css'
import img from '../images/me.jpg'
import Navbar from '../components/Navbar'
import Title from '../components/Title'

export default class about extends Component {
    render() {
        return (
            <div>
            <Navbar/>
                <section className={styles.about}></section>
                <Title title="About" subtitle="Me" />
                <div className={styles.aboutCenter}>
                    <article className={styles.aboutImg}>
                        <div className={styles.imgContainer}>
                            <img src={img} alt="about company" />
                        </div>
                    </article>
                    <article className={styles.aboutInfo}>
                        <h3>Hi there, I'm Jane An!</h3>
                        <p>I'm a full-stack software enginner with a background in <a href="https://steinhardt.nyu.edu/programs/international-education" target="_blank" rel="noopener noreferrer" style={style.color}>International Education</a>. After completing the immersive Software programs for women at <a href="https://www.gracehopper.com/" target="_blank" rel="noopener noreferrer" style={style.color}>Grace Hopper Program</a> in April 2020. I joined an incredible software team at <a href="https://mesh-systems.com/" target="_blank" rel="noopener noreferrer" style={style.color}>Mesh System</a> as an Associate Software Engineer.</p>
                        <p>Mesh System is an Internet of Thing (IoT) innovator that helps the <a href="https://fortune.com/fortune500/" target="_blank" rel="noopener noreferrer" style={style.color}>Fortune 500s companies</a> achieve digital transformation.</p>
                        <p>I commit to being a lifelong learner so I can continue to grow as a developer. I also hope to be a good role model and mentor to other female software enginners.</p>
                        <p>Feel free to contact me through my contact page or connect with me on LinkedIn if you want to discuss anything tech-related. If you are curious about my software enginner journey, you can also check out my <a href="https://medium.com/@janeyuhwian" target="_blank" rel="noopener noreferrer" style={style.color}>blog</a>. Thanks for visiting my website!</p>
                        <a href="https://drive.google.com/file/d/1MH5nmuvrq0X18FfEXCTxjB3at0THPu8v/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="btn-primary">Resume</button>
                        </a>
                    </article>
            </div>
            </div>
        )
    }
}

const style= {
    color: {
        color: 'black',
        textDecorationLine: 'underline'
    }
}

