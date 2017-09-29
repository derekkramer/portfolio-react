import React, {Component} from 'react';
import './css/App.css';
import $ from 'jquery';

import Contact from './components/Contact';

class App extends Component {
    componentDidMount() {
        let $logo = $('.header');
        $(document).scroll(() => {
            $logo.css({'background-color': $(window).scrollTop() > 500 ? 'white' : 'transparent'});
        });
    }

    render() {
        return (
            <div className='App'>
                <Header />
                <Splash />
                <About />
                <Resume />
                <Portfolio />
                <Contact />
            </div>
        );
    }
}

const Header = () =>
    <section className='header'>
        <h1>Derek Kramer</h1>
        <nav>
            <a href='#about'>About</a>
            <a href='#resume'>Resume</a>
            <a href='#portfolio'>Portfolio</a>
            <a href='#contact'>Contact</a>
        </nav>
    </section>

const Splash = () =>
    <section className='splash'>
        <img className='logo' src='./logo-high.png' alt='' />
        <img className='arrow' src='./arrow.png' alt='' />
    </section>

const About = () =>
    <div>
        <a name='about' />
        <section className='about'>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
    </div>

const Resume = () =>
    <div>
        <a name='resume' />
        <section className='resume'>
            <h1>Resumé</h1>
            <img src='./resume.png' alt='' />
        </section>
    </div>

const Portfolio = () =>
    <div>
        <a name='portfolio' />
        <section className='portfolio'>
            <h1>Portfolio</h1>
            <div className='panel'>
                <div>
                    <a href='https://chrome.google.com/webstore/detail/pidream/gacinemcmmanhhomahedjeicpjbgkigb' target='_blank'>
                        <img src='./project1.png' alt='Krzywinskis Circle' />
                    </a>
                </div>
                <div>
                    <a href='https://agile-overload.herokuapp.com/' target='_blank'>
                        <img src='./project2.png' alt='Agile Overload' />
                    </a>
                </div>
                <div>
                    <a href='https://mycro.herokuapp.com/' target='_blank'>
                        <img src='./project3.png' alt='MycroLens' />
                    </a>
                </div>
                <div>
                    <a href='https://spacexaminer.herokuapp.com' target='_blank'>
                        <img src='./project4.png' alt='SpaceXaminer' />
                    </a>
                </div>
            </div>
        </section>
    </div>

export default App;
