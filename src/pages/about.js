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
                        <h3>Hi there! I'm Jane, a full-stack software engineer based in NYC.</h3>
                        <p>I was born in Korea, raised in Kentucky, and moved to NYC 4 years ago to pursue my master's degree in International Education at <a href="https://steinhardt.nyu.edu/programs/international-education" target="_blank" rel="noopener noreferrer" style={style.color}>NYU</a>. After I graduated, I worked at a non-profit International Student Exchange program to help deliver meaningful intercultural experiences for students around the world.</p>
                        <p>While I worked as an International Educator, I was facinated by the tech field and saw the power of technology, which allowed us to connect and work with people around the country. So I taught myself Javascipt and completed one of the most well-known Software Engineer program for women at <a href="https://www.gracehopper.com/" target="_blank" rel="noopener noreferrer" style={style.color}>Grace Hopper Program.</a></p>
                        <p>Besides my passion for coding, I love reading, traveling, and learning new languages! I commit to being a lifelong learner and I am excited to begin my new journey as a software engineer.</p>
                        <a href="https://drive.google.com/open?id=1nVMI8aMvyOdT1fR6CuTBcWkA-r6aZrql" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="btn-primary">Click me</button>
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

