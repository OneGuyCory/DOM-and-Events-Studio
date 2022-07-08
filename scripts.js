// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
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
}
// add load event handler to window
window.addEventListener("load", function() {
    // put DOM code here to ensure elements have been loaded
    console.log('window loaded');
takeOff.addEventListener('click', event => {
    let response = window.confirm('Confirm that the shuttle is ready for takeoff.');
    if (response) {
        flightStatus.innerHTML = 'Shuttle in flight';
        shuttleBackground = blue;
        shuttleHeight = 10,000;
    }
});

//window.addEventListener('load', init);
})
