import React, { useRef } from 'react';
import phoneBg from '../Images/retroPhone.png';
import phone from '../Images/phone.png';
import locat from '../Images/locat.png';
import msg from '../Images/msg.png';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

export default function Contact() {
    const form = useRef();
    function sendForm(e) {
        e.preventDefault();
        const email = document.getElementById("email");
        const name = document.getElementById("name");
        const msg = document.getElementById("message");
        const email_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        const name_pattern = /^[A-Za-z]+$/;
        if (email.value !== " " && name.value !== " " && msg.value !== " " && email_pattern.test(email.value) && name_pattern.test(name.value)) {
            emailjs.sendForm('service_u65dn0o', 'template_cwxksxg', form.current, 'kaobwBiU0Spgr3VIe').then((result) => {
                alert('message send');
            }, (error) => {
                alert('error');
            });
        } else {
            alert("input error")
        }

        e.target.reset();
    }
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <section className='contact'>
                <div className='contact-form'>
                    <div className='contact-text'>
                        <h1>Get In Touch</h1>
                        <p>We are here for you! How can we help?</p>
                    </div>
                    <form ref={form} onSubmit={sendForm}>
                        <input id="name" type="text" name="username" placeholder="Enter your name" />
                        <input id="email" type="email" name="useremail" placeholder="Enter your email address" />
                        <textarea id="message" className='area' name="usermessage" placeholder="Send us a message" />
                        <input type="submit" name="submit" value="Submit" />
                    </form>
                </div>
                <div className='contactImg'>
                    <img src={phoneBg} alt="" />
                    <div>
                        <p><span><img src={locat} alt="" /></span><span>Sector-9, Dwarka, New Delhi</span></p>
                        <p><span><img src={msg} alt="" /></span><span>admin@welcome-myshop.com</span></p>
                        <p><span><img src={phone} alt="" /></span><span>9310845435</span></p>
                    </div>
                </div>

            </section>
        </motion.main>
    )
}