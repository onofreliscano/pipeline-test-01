
import * as geolib from 'geolib';
//const geolib = require('geolib');

// Working with W3C Geolocation API

navigator.geolocation.getCurrentPosition(
    (position) => {
        console.log(
            'You are ',
            geolib.getDistance(position.coords, {
                latitude: 51.525,
                longitude: 7.4575,
            }),
            'meters away from 51.525, 7.4575'
        );
    },
    () => {
        console.log('Position could not be determined.');
    }
);


//console.log (geolib);
