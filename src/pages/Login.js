import React from 'react'
import Banner from '../components/Banner'

export default function Starships(){
    return(
        <>
        <Banner title='Star Wars Page for Fans' message='A web page for fans of Star Wars'/>
        <section id="three" className="wrapper special container">
            <h3>Login</h3>
            <form /*method="post" action="#"'*/>
                <div class="row uniform">
                    <div class="6u 12u$(xsmall)">
                        <input type="text" name="name" id="name"  placeholder="Name" />
                    </div>
                    <div class="6u$ 12u$(xsmall)">
                        <input type="email" name="email" id="email" placeholder="Email" />
                    </div>
                    <div class="6u$ 12u$(small)">
                        <input type="checkbox" id="human" name="human"/>
                        <label for="human">Remember my decision</label>
                    </div>
                    <div class="12u$">
                        <ul class="actions">
                            <li><input type="submit" value="Login" /></li>
                        </ul>
                    </div>
                </div>
            </form>
        </section>
        </>
    )
}