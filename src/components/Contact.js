import React from 'react'
import Title from './Title'
import styles from '../CSS/contact.module.css'

const Contact = () => {
    return (
        <section className={styles.contact}>
            <Title title="Contact" subtitle="Me"/>
            <div className={styles.center}>
                <form action="https://formspree.io/janeyuhwian@gmail.com" method="POST" className={styles.form}>
                    <div>
                        <input type="text" name="name" id="name" className={styles.formControl} placeholder="Name" />
                    </div>
                    <div>
                        <input type="email" name="email" id="email" className={styles.formControl} placeholder="Email" />
                    </div>
                    <div>
                        <textarea name="message" id="message" rows="10" className={styles.formControl} placeholder="Message"/>
                    </div>
                    <div>
                        <input type="submit" value="send" className={styles.submit}/>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
