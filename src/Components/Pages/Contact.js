import React from 'react';
import phoneBg from '../Images/retroPhone.png';
import phone from '../Images/phone.png';
import locat from '../Images/locat.png';
import msg from '../Images/msg.png';

export default function Contact() {
    return (
        <section className='contact'>
            <div className='contact-form'>
                <div className='contact-text'>
                    <h1>Get In Touch</h1>
                    <p>We are here for you! How can we help?</p>
                </div>
                <form>
                    <input type="text" name="username" placeholder="Enter your name" />
                    <input type="email" name="email" placeholder="Enter your email address" />
                    <textarea name="message" placeholder="Send us a message" />
                    <input type="submit" name="submit" />
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
    )
}