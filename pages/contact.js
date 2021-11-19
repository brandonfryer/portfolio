import React, { useEffect, useState, useRef } from 'react';
import styles from '../styles/Contact.module.css'

export default function Contact() {
    const [name, setName] = useState('');
    const nameInputRef = useRef(null);

    useEffect(() => {
        console.log(nameInputRef)
    }, [nameInputRef.current]);

    useEffect(() => {
        console.log(name)
    }, [name])

    return (
        <section className={styles.section}>
            <form className={styles.form}>
                <label className={styles.label}>Name</label>
                <input
                    className={styles.name}
                    id="inputName"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    ref={nameInputRef}
                    type="text"
                />
                <label className={styles.label}>Mail</label>
                <input
                    className={styles.email}
                    id="inputMail"
                    name="email"
                    onChange={(e) => setName(e.target.value)}
                    ref={nameInputRef}
                    type="text"
                />
                <label className={styles.label}>Your Message</label>
                <textarea
                    className={styles.message}
                    cols="30"
                    id="inputMessage"
                    name="message"
                    onChange={(e) => setName(e.target.value)}
                    ref={nameInputRef}
                    rows="10"
                ></textarea>
                <button type="submit" className={styles.button} disabled>
                    Submit
                </button>
            </form>
        </section>
    )
}