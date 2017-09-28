import React, {Component} from 'react';
import '../css/App.css';

export default class Contact extends Component {
    constructor(props){
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <section className='contact'>
                <h1>Contact</h1>
                <form>
                    <input type='text' name='name' placeholder='Your name'></input>
                    <input type='text' name='email' placeholder='Your email'></input>
                    <textarea name='message' placeholder='Your message'></textarea>
                    <button type='submit'>Send</button>
                </form>
            </section>
        );
    }
}
