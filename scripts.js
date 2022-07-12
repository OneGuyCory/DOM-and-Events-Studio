// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', () => {

    
        const takeOff = document.getElementById('takeoff');
        const flightStatus = document.getElementById ('flightStatus');
        const shuttleBackground = document.getElementById('shuttleBackground');
        const shuttleHeight = document.getElementById('spaceShuttleHeight');
        const landButton = document.getElementById('landing');
        const abortMissionButton = document.getElementById('missionAbort');
        const upButton = document.getElementById('up');
        const downButton = document.getElementById('down');
        const leftButton = document.getElementById('left');
        const rightButton = document.getElementById('right');
        const rocketImage = document.getElementById('rocket');
       
        
        
        takeOff.addEventListener('click', () => {
            let response = window.confirm('Confirm that the shuttle is ready for takeoff.');
            if (response) {
               
               flightStatus.innerHTML = 'Shuttle in flight';
                shuttleBackground.style.backgroundColor = 'blue';
                shuttleHeight.innerHTML = 10000;
                const movement = parseInt(rocketImage.style.bottom) + 10 + "px";
                rocketImage.style.bottom = movement;
            } else {
                
            }
        });
        
        landButton.addEventListener('click', () => {
            window.alert('The shuttle is landing. Landing gear engaged.');
            flightStatus.innerHTML = 'The Shuttle has landed.';
            shuttleBackground.style.backgroundColor = 'green';
            shuttleHeight.innerHTML = 0;
            rocketImage.style.left = '0px';
            rocketImage.style.bottom = '0px';
        });
        
        abortMissionButton.addEventListener('click', () => {
            let response = window.confirm('Confirm that you want to abort the mission.');
        
            if (response) {
                flightStatus.innerHTML = 'Mission aborted.';
                shuttleBackground.style.backgroundColor = 'green';
                shuttleHeight.innerHTML = 0;
                rocketImage.style.left = '0px';
                rocketImage.style.bottom = '0px';
            }
        });

        rocketImage.style.position = 'absolute';
        rocketImage.style.left = '0px';
        rocketImage.style.bottom = '0px';

        upButton.addEventListener('click', () => {
            const movement = parseInt(rocketImage.style.bottom) + 10 + "px";
            rocketImage.style.bottom = movement;
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
            if (rocketImage.style.bottom === '260px') {
                rocketImage.style.left = '0px';
                rocketImage.style.bottom = '0px';
            }
        });

        downButton.addEventListener('click', () => {
            const movement = parseInt(rocketImage.style.bottom) - 10 + "px";
            rocketImage.style.bottom = movement;
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
            if (rocketImage.style.bottom === '-20px') {
                rocketImage.style.left = '0px';
                rocketImage.style.bottom = '0px';
            }
        });

        leftButton.addEventListener('click', () => {
            const movement = parseInt(rocketImage.style.left) - 10 + "px";
            rocketImage.style.left = movement;
            if (rocketImage.style.left === '-30px') {
                rocketImage.style.left = '0px';
                rocketImage.style.bottom = '0px';
            }
        });

        rightButton.addEventListener('click', () => {
            const movement = parseInt(rocketImage.style.left) + 10 + "px";
            rocketImage.style.left = movement;
            if (rocketImage.style.left === '750px') {
                rocketImage.style.left = '0px';
                rocketImage.style.bottom = '0px';
            }
        });
        

        
        

});

