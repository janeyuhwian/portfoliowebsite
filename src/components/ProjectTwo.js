import React from "react"
import Image from "gatsby-image"
import styles from '../CSS/project.module.css'
import {FaGithub, FaYoutubeSquare} from "react-icons/fa"
// import { Link } from 'react-router-dom';

const ProjectTwo  = ({ project }) => {
  const { title, technologies, role, image, firstUrl, secondUrl } = project

  let mainImage = image.fluid
  
  return (
    <div>
      <div className={styles.img}>
     <Image fluid={mainImage}/>
     </div>
     <div className={styles.text}>
        <h4 className={styles.title}>Daily Dose | Full Stack Developer</h4>
        <p>Daily Doise is a mobile application that uses visual recognition to process food images and analyze nutritious intake. It provides a historical log of diet enabling you to make healthy choices.</p>
        <p>It is built with React-Native with Expo.io and Redux for the front-end. For the back end, our team used Express to handle the user authentication and data retrieval, PostgresSQL and Sequelize to create the relational database. Daily Dose also incorporated a third-party API that uses AI and machine learning to identify food items in image, and Edamam API to provide a comprehensive nutrition analysis for each ingredient and dish. </p>
        <p>My role in this project was to create access to camera and gallery functionality and to connect Clarifai API ingredient output data with a photo page where users can submit their photo to confirm the final list of ingredients. I also pair-programed with one of my capstone team member to create a meal diary page so the user can store their data and checkout their previous meal.</p>
        <p>If you are more interesting how our team built this mobile application, please checkout our demo or Daily Dose’s github page to see our code. </p>
        <a href="https://github.com/janeyuhwian/Client-Daily-Dose" target="_blank" rel="noopener noreferrer"><FaGithub className={styles.icon} size={28}/></a>
        <a href="https://www.youtube.com/watch?v=13EkumTb080&list=PLx0iOsdUOUmk6YoAw7y5AbHeXf45tuNnF&index=19&t=0s" target="_blank" rel="noopener noreferrer"><FaYoutubeSquare className={styles.icon} size={28}/></a>
        </div>
    </div>
  )
}

export default ProjectTwo 
