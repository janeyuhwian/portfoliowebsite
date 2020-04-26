import React from "react"
import Image from "gatsby-image"
import styles from '../CSS/project.module.css'

const ProjectTwo  = ({ project }) => {
  const { title, technologies, role, image, firstUrl, secondUrl } = project

  let mainImage = image.fluid
  
  return (
    <article className={styles.box}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single tour" />
        <a href={firstUrl} className={styles.linktwo} target="_blank" rel="noopener noreferrer">Github</a>
        <a href={secondUrl} className={styles.linkthree} target="_blank" rel="noopener noreferrer">Demo</a>
      </div>
      <div className={styles.footer}>
        <h3>{title}</h3>
        <div className={styles.info}>
          <div className={styles.country}>
            <h6>Role:{role}</h6>
          </div>
          <div className={styles.details}>
            <h6>{Object.values(technologies)}</h6>
        </div>
        </div>
      </div>
    </article>
  )
}


export default ProjectTwo 
