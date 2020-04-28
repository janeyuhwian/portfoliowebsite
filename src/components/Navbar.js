import React, {useState} from 'react'
import styles from '../CSS/navbar.module.css'
import {FaAlignJustify} from 'react-icons/fa'
import socialIcons from '../constants/social-icons'
import links from '../constants/links'
import {Link} from 'gatsby'
import logo from '../images/logo.png'

const Navbar = () => {
    const [isOpen, setNav] = (useState(false))
    const toggleNav = () => {
        setNav(isOpen => !isOpen)
    }
    console.log(isOpen)
    return (
        <nav className={styles.navbar}>
            <div className={styles.navCenter}>
                <div className={styles.navHeader}>
                    <img src={logo} alt="janean logo" />
                    <button type="button" className={styles.logoBtn} onClick={toggleNav}>
                        <FaAlignJustify className={styles.logoIcon} />
                        </button>
                </div>
                <ul className={isOpen ? `${styles.navLinks} ${styles.showNav}` : `${styles.navLinks}`}>
                    {links.map((item, index) => {
                        return (<li key={index}><Link to={item.path}>{item.text}</Link></li>)
                    })}
                </ul>
                <div className={styles.navSocialLinks}>
                    {socialIcons.map((item,index) => {
                        return (
                            <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">{item.icon}</a>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}

export default Navbar

