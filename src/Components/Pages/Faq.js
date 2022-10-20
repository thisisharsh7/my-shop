import React from 'react';

export default function Faq() {
    function getQuery(e) {
        e.preventDefault();
        const k = document.querySelector("#query");
        const s = document.querySelector("#send");
        if (k.value == "") {
            s.innerText = "Query cannot be blank";
        } else {
            s.innerText = "Great! We will post the answer to your query soon.";
        }
        k.value = "";

    }
    return (
        <section className='faq'>
            <div className='faq-text'>
                <h1>
                    Ask us anything
                </h1>
                <p>Have any questions? We're here to assist you.</p>
            </div>
            <div className='form-query'>
                <form onSubmit={getQuery}>
                    <div>
                        <input
                            name="query"
                            id="query"
                            placeholder="Post your question here"
                        />
                    </div>
                    <div>
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
    )
}