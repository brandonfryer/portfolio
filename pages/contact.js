import styles from '../styles/Contact.module.css'

export default function Contact() {
    return (
        <section className={styles.section}>
            <form className={styles.form}>
                <label className={styles.label}>Name</label>
                <input
                    type="text"
                    name="name"
                    className={styles.name}
                    id="inputName"
                    onInput="checkInput()"
                />
                <label className={styles.label}>Mail</label>
                <input
                    type="text"
                    name="email"
                    className={styles.email}
                    id="inputMail"
                    onInput="checkInput()"
                />
                <label className={styles.label}>Your Message</label>
                <textarea
                    name="message"
                    cols="30"
                    rows="10"
                    className={styles.message}
                    id="inputMessage"
                    onInput="checkInput()"
                ></textarea>
                <button type="submit" className={styles.button} disabled>
                    Submit
                </button>
            </form>
        </section>
    )
}