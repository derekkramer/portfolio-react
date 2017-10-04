import React, {Component} from 'react';
import '../css/App.css';
import $ from 'jquery';

const axios = require('axios');
const jwt = require('jsonwebtoken');

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
        if(!this.state.email.includes('@') || !this.state.email.includes('.')){
            this.setState({ error: 'Please enter a valid email' });
        }else{
            jwt.sign(this.state, process.env.REACT_APP_TOKEN, (err, token) => {
                axios.post('http://ec2-34-215-7-76.us-west-2.compute.amazonaws.com:3000/', {token})
                .then(result => {
                    if(result.data.status === 'success'){
                        this.name.value = '';
                        this.email.value = '';
                        this.message.value = '';

                        this.setState({ error: '', sent: result.data.data });

                        setTimeout(() => this.setState({ sent: '' }), 5000);
                    }else{
                        console.log(result.data);
                        this.setState({ error: result.data.data });
                    }
                });
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
                        <input type='text' name='name' placeholder='Your name' onChange={this.handleChange} ref={(node) => {
                            this.name = node;
                        }} required></input>
                        <input type='text' name='email' placeholder='Your email' onChange={this.handleChange} ref={(node) => {
                            this.email = node;
                        }} required></input>
                        <textarea rows='5' name='message' placeholder='Your message' onChange={this.handleChange} ref={(node) => {
                            this.message = node;
                        }} required></textarea>
                        <button type='submit'>Send</button>
                    </form>
                    <section className='links'>
                        <div>
                            <a href='https://github.com/derekkramer' target='_blank'><img src='./github.png' alt='' /></a>
                            <p>GitHub</p>
                        </div>
                        <div>
                            <a href='https://linkedin.com/in/derek-kramer' target='_blank'><img src='./linkedin.png' alt='' /></a>
                            <p>LinkedIn</p>
                        </div>
                        <div>
                            <a href='https://builtincolorado.com/member/derek-kramer' target='_blank'><img src='./builtin.png' alt='' /></a>
                            <p>BuiltIn</p>
                        </div>
                        <div>
                            <a href='https://talent.galvanize.com/students/1422' target='_blank'><img src='./galvanize.png' alt='' /></a>
                            <p>gTalent</p>
                        </div>
                    </section>
                </section>
            </div>
        );
    }
}
