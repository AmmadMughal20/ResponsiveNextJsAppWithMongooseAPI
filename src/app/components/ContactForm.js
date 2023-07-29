'use client'

import styles from '@/app/contactus/contactus.module.css';
import { Mulish } from "next/font/google";
import { useState } from 'react';

const mulish = Mulish({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900']
})


export default function ContactForm() {

    const [user, setUser] = useState({
        username: '',
        email: '',
        phone: '',
        message: '',
    })

    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { "Content_Type": "application/json" },
                body: JSON.stringify({
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    message: user.message
                })
            })

            if (res.status === 200) {
                setUser({
                    username: '',
                    email: '',
                    phone: '',
                    message: ''
                })
                setStatus("success")
            }
            else {
                setStatus('error')
            }

        }
        catch (e) {
            console.log(e)
        }
    }



    return (
        <form className={styles.contact_form} onSubmit={handleSubmit}>
            <div className={styles.input_field}>
                <label htmlFor='username' className={styles.label}>
                    Enter your name
                    <input type='text' name='username' placeholder='Enter your name' id='username' className={mulish.className} required autoComplete='off' value={user.username} onChange={handleChange} />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor='email' className={styles.label}>
                    Email
                    <input type='email' name='email' placeholder='Enter your email' id='email' className={mulish.className} required autoComplete='off' value={user.email} onChange={handleChange} />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor='phone' className={styles.label}>
                    Phone
                    <input type='number' name='phone' placeholder='Enter your phone' id='phone' className={mulish.className} required autoComplete='off' value={user.phone} onChange={handleChange} />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor='message' className={styles.label}>
                    Message
                    <textarea rows={5} name='message' placeholder='Enter your message' id='message' className={mulish.className} required autoComplete='off' value={user.message} onChange={handleChange} />
                </label>
            </div>
            <div>
                {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
                {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message!</p>}
                <button type='submit' className={mulish.className} >Send Message</button>
            </div>
        </form>
    )
}
