

// grab a reference for necessary HTML elements
// .joke-text
const jokeText = document.querySelector('.joke-text');
// .new-joke-btn 
const newJokeBtn = document.querySelector('.new-joke-btn');
// .tweet-btn (link)
const tweetBtn = document.querySelector('.tweet-btn');

// add 'click' eventListener to .new-joke-btn
newJokeBtn.addEventListener('click', getJoke);

// immediately call getJoke()
getJoke();

// getJoke() function definition
function getJoke() {
  // make an API request to https://icanhazdadjoke.com/'
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  }).then(function(response) {
    /* convert Stringified JSON response to Javascript Object */
    return response.json();
  }).then(function(data) {
    /* replace innerText of .joke-text with data.joke */
    // extract the joke text
    const joke = data.joke;
    // do the replacement
    jokeText.innerText = joke;

    /* make the tweetBtn(.tweet-btn link) work by setting href */
    // create tweet link with joke
    // set the href
  }).catch(function(error) {
    // if some error occured
    jokeText.innerText = 'Oops! Some error happened :(';
    // removes the old href from .tweet-btn if found any
    tweetBtn.removeAttribute('href');
    // console log the error
    console.log(error);
  });
}


particlesJS("particles-js", { "particles": { "number": { "value": 400, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#fff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": true, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 10, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": false, "distance": 500, "color": "#ffffff", "opacity": 0.4, "width": 2 }, "move": { "enable": true, "speed": 3, "direction": "bottom", "random": true, "straight": true, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": true, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 0.5 } }, "bubble": { "distance": 400, "size": 4, "duration": 0.3, "opacity": 1, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }); var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function () { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;