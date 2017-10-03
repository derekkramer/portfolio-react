import React, {Component} from 'react';
import '../css/App.css';

export default class Splash extends Component {
    render() {
        return (
            <section className='splash'>
                <div className='voronoi'></div>
                <img className='logo' src='./logo-high.png' alt='' />
                <img className='arrow' src='./arrow.png' alt='' />
            </section>
        );
    }
}
