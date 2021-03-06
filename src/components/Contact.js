import React, {Component} from 'react';
import '../css/App.css';
import $ from 'jquery';

const axios = require('axios');

/* eslint-disable jsx-a11y/anchor-has-content */

export default class Contact extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
            error: '',
            sent: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event){
        $('#submit').prop('disabled', true);
        $('#submit').html('<i class="fa fa-spinner fa-pulse"></i>');

        if(!this.state.email.includes('@') || !this.state.email.includes('.')){
            this.setState({ error: 'Please enter a valid email' });

            $('#submit').prop('disabled', false);
            $('#submit').text('Send');
        }else{
            let body = {
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            };

            axios.post('https://vqde6no4kj.execute-api.us-west-2.amazonaws.com/prod/PortfolioMessages', body)
            .then(result => {
                console.log(result);
                if(result.data === 'success'){
                    this.name.value = '';
                    this.email.value = '';
                    this.message.value = '';

                    this.setState({ error: '', sent: 'Thank you, your message has been sent' });

                    $('#submit').prop('disabled', false);
                    $('#submit').text('Send');

                    setTimeout(() => this.setState({ sent: '' }), 5000);
                }else{
                    console.log(result.data);
                    this.setState({ error: 'Error' });

                    $('#submit').prop('disabled', false);
                    $('#submit').text('Send');
                }
            });
        }

        event.preventDefault();
    }

    componentDidMount(){
        $('.links').mouseover(event => {
            if(event.target.nodeName === 'IMG')
                event.target.parentElement.nextSibling.style.color = '#949494';
        });

        $('.links').mouseout(event => {
            if(event.target.nodeName === 'IMG')
                event.target.parentElement.nextSibling.style.color = 'white';
        });
    }

    render(){
        return (
            <div>
                <a name='contact' />
                <section className='contact'>
                    <h1>Contact</h1>
                    {this.state.error
                    ? <p className='error'>{this.state.error}</p>
                    : null
                    }
                    {this.state.sent
                    ? <p className='sent'>{this.state.sent}</p>
                    : null
                    }
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' name='name' placeholder='Your name' onChange={this.handleChange} ref={node => {
                            this.name = node;
                        }} required></input>
                        <input type='text' name='email' placeholder='Your email' onChange={this.handleChange} ref={node => {
                            this.email = node;
                        }} required></input>
                        <textarea rows='5' name='message' placeholder='Your message' onChange={this.handleChange} ref={node => {
                            this.message = node;
                        }} required></textarea>
                        <button type='submit' id='submit'>Send</button>
                    </form>
                    <section className='links'>
                        <div>
                            <a href='https://github.com/derekkramer' target='_blank' rel='noopener noreferrer'><img src='./github.png' alt='GitHub' /></a>
                            <p>GitHub</p>
                        </div>
                        <div>
                            <a href='https://linkedin.com/in/derek-kramer' target='_blank' rel='noopener noreferrer'><img src='./linkedin.png' alt='LinkedIn' /></a>
                            <p>LinkedIn</p>
                        </div>
                        <div>
                            <a href='https://builtincolorado.com/member/derek-kramer' target='_blank' rel='noopener noreferrer'><img src='./builtin.png' alt='BuiltInColorado' /></a>
                            <p>BuiltIn</p>
                        </div>
                        <div>
                            <a href='https://talent.galvanize.com/students/1422' target='_blank' rel='noopener noreferrer'><img src='./galvanize.png' alt='Galvanize Talent' /></a>
                            <p>gTalent</p>
                        </div>
                    </section>
                </section>
            </div>
        );
    }
}
