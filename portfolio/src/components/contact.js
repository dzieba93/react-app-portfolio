import React, {Component} from 'react';
import {Grid} from "react-mdl";

class Contact extends Component {
    render() {
        return (
            <div>
                <Grid style={{padding: 0}} className="contact-grid">
                    <div className="contact-box">
                        <h4>Contact Me</h4>
                        <div>
                            <form>
                                <label>Email</label>
                                <input type="email" id="first-name" name="first_name" placeholder="Enter your email"/>

                                <label>Subject</label>
                                <input type="text" id="first-name" name="first_name" placeholder="Enter subject"/>

                                <label>Message</label>
                                <textarea id="subject" name="subject" placeholder="Enter message"/>

                                <input type="submit" value="Submit"/>
                            </form>
                        </div>
                    </div>
                </Grid>
            </div>
        );
    }
}

export default Contact;