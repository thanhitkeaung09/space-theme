import '../style.scss'
import '../stylePage.scss'
import '../blog.scss'

import * as bootstrap from 'bootstrap';
import Typed from 'typed.js';
import ScrollReveal from "scrollreveal";
import counterUp from 'counterup2';
import "waypoints/lib/noframework.waypoints.min";

import imgUrl from '../assets/automation.jpeg'
import imgUrlone from '../assets/automation-phone.jpeg'
import imgUrltwo from '../assets/problem.jpeg'
import imgUrlthree from '../assets/problem-phone.jpeg'


var slideUp = {
    distance: "90px",
    origin: "bottom",
    duration: 700,
    interval: 100,
    cleanup: true,
    easing: "ease-out",
    delay: 200,
}

ScrollReveal().reveal(".content-page",slideUp);



let header = document.getElementById("headerOne");

var waypoint = new Waypoint({
    element: document.getElementById('element-waypoint'),
    handler: function(direction) {
        if(direction === "down"){
            // header.style.display = "block";
            header.classList.add("animate__fadeInUp");
            header.classList.remove("d-none");
            console.log(direction)
        }
        else if(direction === "up"){
            // header.style.display = "none";
            header.classList.remove("animate__fadeInUp");
            header.classList.add("d-none");

            console.log(direction)

        }
    }
    ,
    offset: '75%'
})
