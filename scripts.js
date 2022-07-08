// Write your JavaScript code here.
// Remember to pay attention to page loading!

const takeOff = document.getElementById('takeoff');
const flightStatus = document.getElementById ('flightStatus');
const shuttleBackground = document.getElementById('shuttleBackground');
const shuttleHeight = document.getElementById('spaceShuttleHeight');
const landButton = document.getElementById('landing');
const abortMissionButton = document.getElementById('missionAbort');
const upButton = document.getElementById('up');
const downButton = document.getElementById('up');
const leftButton = document.getElementById('up');
const rightButton = document.getElementById('up');
const rocketImage = document.getElementById('rocket');


takeOff.addEventListener('click', event => {
    let response = window.confirm('Confirm that the shuttle is ready for takeoff.');
    if (response) {
        flightStatus.innerHTML = 'Shuttle in flight';
        shuttleBackground = blue;
        shuttleHeight = 10,000;
    } else {
        
    }
});

window.addEventListener('load', event);

