import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Title from '../components/Title'
import styles from '../CSS/items.module.css'
import ProjectTwo from '../components/ProjectTwo'

const getProject = graphql`
query {
    project: allContentfulProject{
      edges{
        node{
          title
          description {
            description
          }
          technologies {
            technologies
          }
          role
          firstUrl
          secondUrl
          image{
            fluid{
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Project = () => {
const response = useStaticQuery(getProject)
const projects = response.project.edges


    return (
        <section className={styles.tours}>
            <Title title="Projects"/>
        <div className={styles.center}>
            {projects.map(({node}) => {
                return <ProjectTwo key={node.contentful_id} project={node} />
            })}
        </div>
        </section>
    )
}

export default Project

