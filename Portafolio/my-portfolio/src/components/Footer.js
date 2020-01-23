import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <section>
                <footer className="flex-footer">
                    <ul className="footer-item">
                        <li className="liTitle">My favorite projects</li>
                        <li >GifOs</li>
                        <li >VoxBuuzz</li>
                        <li >ShopyHack</li>
                    </ul>
                    <ul className="footer-item">
                        <li className="liTitle">Let's get in touch</li>
                        <li >Linkedin</li>
                        <li >GitHub</li>
                        <li >Twitter</li>
                        <li >Download my CV</li>
                    </ul>
               </footer>
          </section>
        )  
    }
}

export default Footer