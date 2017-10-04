import React, {Component} from 'react';
import '../css/App.css';

const d3 = require('d3');

const color = d3.hcl('#60b158'),
    n = 900,
    particles = new Array(n),
    voronoi = d3.voronoi();

let element,
    canvas,
    width,
    height,
    context;

function changeLumosity(inc){
    return Math.abs((inc % 161) - 80) + 15;
}

function init(){
    width = canvas.width = window.innerWidth / 3;
    height = canvas.height = window.innerHeight / 2;
    voronoi.size([width, height]);
    context = canvas.getContext('2d');

    for(let i = 0; i < n; ++i){
        particles[i] = {
            0: Math.random() * width,
            1: Math.random() * height,
            vx: 0,
            vy: 0
        };
    }
}

function drawCell(cell){
    if (!cell[0]) return;

    context.moveTo(cell[0][0], cell[0][1]);
    cell.forEach((c) => context.lineTo(c[0], c[1]));
    context.closePath();
}

function parallax(){
  let scrollTop = window.pageYOffset;

  document.getElementById('background').style.top = -scrollTop * 0.5 + 'px';
}

export default class Splash extends Component {
    componentDidMount(){
        element = document.getElementById('voronoi');
        canvas = element.appendChild(document.createElement('canvas'));

        init();

        d3.timer(elapsed => {
            particles.forEach(particle => {
                particle[0] += particle.vx;
                particle[0] = (particle[0] + width) % width;
                particle[1] = (particle[1] + height) % height;

                particle.vx += 0.2 * (Math.random() - .5) - 0.01 * particle.vx;
                particle.vy += 0.2 * (Math.random() - .5) - 0.01 * particle.vy;
            });

            const cells = voronoi.polygons(particles);

            context.globalAlpha = 1.0;
            context.lineWidth = 1;

            let incrementer = 0;
            cells.forEach(cell => {
                context.beginPath();
                drawCell(cell);
                color.l = changeLumosity(incrementer);
                context.strokeStyle = color.toString();
                context.stroke();

                incrementer++;
            });
        });

        window.addEventListener('resize', init);

        window.addEventListener('scroll', () => requestAnimationFrame(parallax), false);
    }

    render(){
        return (
            <section className='splash'>
                <img id='background' src='./whiteboard-background-dark.jpg' />
                <div id='voronoi'></div>
                <img className='arrow' src='./arrow.png' alt='' />
            </section>
        );
    }
}
