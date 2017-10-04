import React, {Component} from 'react';
import './css/App.css';
import $ from 'jquery';

import Splash from './components/Splash';
import Contact from './components/Contact';

class App extends Component {
    componentDidMount() {
        $(document).scroll(() => {
            let opacity = ($(window).scrollTop() - 600) / 100;
            $('.headercontainer').css({'opacity': opacity});
        });

        $('.panel').mouseover(event => {
            event.target.parentElement.firstChild.style.filter = 'brightness(30%)';
            console.log(event);
        });

        $('.panel').mouseout(event => {
            event.target.parentElement.firstChild.style.filter = 'brightness(100%)';
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
    <div>
        <section className='header'>
            <h1>Derek Kramer</h1>
            <nav>
                <a href='#about'>About</a>
                <a href='#resume'>Resume</a>
                <a href='#portfolio'>Portfolio</a>
                <a href='#contact'>Contact</a>
            </nav>
        </section>
        <div className='headercontainer'></div>
    </div>

const About = () =>
    <div>
        <a name='about' />
        <section className='about'>
            <h1>About</h1>
            <p>I am a full stack web developer interested in both front and back end positions. I enjoy collaborating on projects and am a natural leader. I am passionate about innovative and unique applications, and enjoy creating my own in my free time. I enjoy mountain biking, hiking, and camping.</p>
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
        </section>
        <div className='panel'>
            <div>
                <a href='https://chrome.google.com/webstore/detail/pidream/gacinemcmmanhhomahedjeicpjbgkigb' target='_blank'>
                    <img src='./project1.png' alt='Krzywinskis Circle' />
                    <div>Krzywinski's Circle</div>
                </a>
            </div>
            <div>
                <a href='https://agile-overload.herokuapp.com/' target='_blank'>
                    <img src='./project2.png' alt='Agile Overload' />
                    <div>Agile Overload</div>
                </a>
            </div>
            <div>
                <a href='https://mycro.herokuapp.com/' target='_blank'>
                    <img src='./project3.png' alt='MycroLens' />
                    <div>MycroLens</div>
                </a>
            </div>
            <div>
                <a href='https://spacexaminer.herokuapp.com' target='_blank'>
                    <img src='./project4.png' alt='SpaceXaminer' />
                    <div>SpaceXaminer</div>
                </a>
            </div>
        </div>
    </div>

export default App;
