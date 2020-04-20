import React from 'react'
import Layout from '../components/Layout'
import styles from '../CSS/error.module.css'
import {Link} from 'gatsby'
import Banner from '../components/Banner'

export default function error() {
    return (
        <Layout>
            <header className={styles.error}>
            <Banner title="wrong page">
                <Link to="/" className="btn-white">Back to home page</Link>
            </Banner>
            </header>
        </Layout>
    )
}
