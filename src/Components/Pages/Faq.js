import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Faq() {
    const form = useRef();
    function sendQuery(e) {
        const pBg = document.querySelector('.pBg');
        const k = document.getElementById('query');
        const s = document.getElementById('send');
        e.preventDefault();
        if (k.value === "") {
            s.innerText = "Query cannot be blank";
        } else {
            pBg.classList.toggle('ploader');
            emailjs.sendForm('service_u65dn0o', 'template_k1jhtyk', form.current, 'kaobwBiU0Spgr3VIe').then((result) => {

                s.innerText = "Great! We will post the answer to your query soon.";
                pBg.classList.toggle('ploader');
            }, (error) => {
                alert('server error')
                pBg.classList.toggle('ploader');
            });
        }
        k.value = "";

    }
    return (
        <>
            <Header />
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <section className='faq'>
                    <div className='faq-text'>
                        <h1>
                            Ask us anything
                        </h1>
                        <p>Have any questions? We're here to assist you.</p>
                    </div>
                    <div className='form-query'>
                        <form ref={form} onSubmit={sendQuery}>
                            <div>
                                <input
                                    name="query"
                                    id="query"
                                    placeholder="Post your question here"
                                />
                            </div>
                            <div className='pBg'>
                                <input type="submit" value="POST" />
                            </div>
                        </form>
                        <p id="send"></p>
                    </div>
                    <div className='faq-answers'>
                        <details>
                            <summary>
                                Is Writesonic free?
                            </summary>
                            <p>Writesonic is for marketers, entrepreneurs, agencies, students - basically anyone who wants to create content. Writesonic is for marketers, entrepreneurs, agencies, students - basically anyone who wants to create content.</p>
                        </details>
                        <details>
                            <summary>
                                Is Writesonic free?
                            </summary>
                            <p>Writesonic is for marketers, entrepreneurs, agencies, students - basically anyone who wants to create content. Writesonic is for marketers, entrepreneurs, agencies, students - basically anyone who wants to create content.</p>
                        </details>
                        <details>
                            <summary>
                                Is Writesonic free?
                            </summary>
                            <p>Writesonic is for marketers, entrepreneurs, agencies, students - basically anyone who wants to create content. Writesonic is for marketers, entrepreneurs, agencies, students - basically anyone who wants to create content.</p>
                        </details>
                        <details>
                            <summary>
                                Is Writesonic free?
                            </summary>
                            <p>Writesonic is for marketers, entrepreneurs, agencies, students - basically anyone who wants to create content. Writesonic is for marketers, entrepreneurs, agencies, students - basically anyone who wants to create content.</p>
                        </details>
                        <details>
                            <summary>
                                Is Writesonic free?
                            </summary>
                            <p>Writesonic is for marketers, entrepreneurs, agencies, students - basically anyone who wants to create content. Writesonic is for marketers, entrepreneurs, agencies, students - basically anyone who wants to create content.</p>
                        </details>
                        <details>
                            <summary>
                                Is Writesonic free?
                            </summary>
                            <p>Writesonic is for marketers, entrepreneurs, agencies, students - basically anyone who wants to create content. Writesonic is for marketers, entrepreneurs, agencies, students - basically anyone who wants to create content.</p>
                        </details>
                        <details>
                            <summary>
                                Is Writesonic free?
                            </summary>
                            <p>Writesonic is for marketers, entrepreneurs, agencies, students - basically anyone who wants to create content. Writesonic is for marketers, entrepreneurs, agencies, students - basically anyone who wants to create content.</p>
                        </details>
                        <details>
                            <summary>
                                Is Writesonic free?
                            </summary>
                            <p>Writesonic is for marketers, entrepreneurs, agencies, students - basically anyone who wants to create content. Writesonic is for marketers, entrepreneurs, agencies, students - basically anyone who wants to create content.</p>
                        </details>
                        <details>
                            <summary>
                                Is Writesonic free?
                            </summary>
                            <p>Writesonic is for marketers, entrepreneurs, agencies, students - basically anyone who wants to create content. Writesonic is for marketers, entrepreneurs, agencies, students - basically anyone who wants to create content.</p>
                        </details>
                        <details>
                            <summary>
                                Is Writesonic free?
                            </summary>
                            <p>Writesonic is for marketers, entrepreneurs, agencies, students - basically anyone who wants to create content. Writesonic is for marketers, entrepreneurs, agencies, students - basically anyone who wants to create content.</p>
                        </details>
                    </div>
                </section>
            </motion.main>
            <Footer />
        </>
    )
}