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


takeOff.addEventListener('click', event => {
    let response = window.confirm('Confirm that the shuttle is ready for takeoff.');
    takeOffChanges = () => {
        flightStatus.innerHTML = 'Shuttle in flight';
        shuttleBackground.style.backgroundColor = 'blue';
        shuttleHeight.innerHTML = '10,000';
    }
    
    if (response) {
       takeOffChanges();
    } else {
        
    }
});
}
window.addEventListener('load', init);

