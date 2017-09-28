import React, {Component} from 'react';
import './css/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Splash />
                <About />
                <Resume />
            </div>
        );
    }
}

const Header = () =>
    <section className='header'>
        <h1>Derek Kramer</h1>
        <nav>
            <a href='about'>About</a>
            <a href='resume'>Resume</a>
            <a href='portfolio'>Portfolio</a>
            <a href='contact'>Contact</a>
        </nav>
    </section>

const Splash = () =>
    <section className='splash'>
        <img src='./logo-high.png' />
    </section>

const About = () =>
    <section className='about'>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </section>

const Resume = () =>
    <section className='resume'>
        <h1>Resumé</h1>
        <img src='./resume.png' />
    </section>

export default App;
