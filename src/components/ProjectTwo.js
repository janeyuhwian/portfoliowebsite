import React from "react"
import Image from "gatsby-image"
import styles from '../CSS/project.module.css'
import {FaGithub, FaYoutubeSquare} from "react-icons/fa"
// import { Link } from 'react-router-dom';

const ProjectTwo  = ({ project }) => {
  const { image,} = project

  let mainImage = image.fluid
  
  return (
    <div>
      <div className={styles.img}>
     <Image fluid={mainImage}/>
     </div>
     <div className={styles.text}>
        <h4 className={styles.title}>Daily Dose | Full Stack Developer</h4>
        <p>Daily Dose is a mobile application that uses visual recognition to process food images and analyze nutritious intake. It provides a historical log of diet enabling you to make healthy choices.</p>
        <p>Frontend: React-Native with Expo.io, Redux Backend: Express.js, PostgresSQL, Sequelize, Clarifai API, Edamam API</p>
        <a href="https://github.com/janeyuhwian/Client-Daily-Dose" target="_blank" rel="noopener noreferrer"><FaGithub className={styles.icon} size={28}/></a>
        <a href="https://www.youtube.com/watch?v=13EkumTb080&list=PLx0iOsdUOUmk6YoAw7y5AbHeXf45tuNnF&index=19&t=0s" target="_blank" rel="noopener noreferrer"><FaYoutubeSquare className={styles.icon} size={28}/></a>
        </div>
    </div>
  )
}

export default ProjectTwo 
