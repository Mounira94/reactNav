import React, { Component } from 'react';
class Contact extends Component {
    constructor(props) {
        super(props)
    }
    render(props) {
        return ( 
            <div className="component">
                <h1 class="component-tilte">Contactez-nous</h1>
                <p class="contact-text">Téléphone Mobile:25648358</p>
                <p class="contact-text">Fax:{this.props.phoneNumber}</p>
                <p class="contact-text">E-mail:{this.props.email}</p>
            </div>
            
         )
    }
}
export default Contact;