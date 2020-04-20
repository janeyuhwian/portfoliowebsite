import React from "react"
import Layout from '../components/Layout'
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'
import {Link} from 'gatsby'

export default () => (
    <Layout>
       <SimpleHero>
           <Banner title="Hello, I'm Jane!" info="a software engineer and a lifelong learner">
            <Link to="/about" className="btn-white"> About me</Link>
           </Banner>

       </SimpleHero>
    </Layout>
)
