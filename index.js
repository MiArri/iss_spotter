const { fetchMyIP, fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  fetchCoordsByIP(ip, (coords, error) => {
    if (error) {
      console.log("It didn't work!", error);
      return;
    }

    console.log('It worked!');
    console.log('Returned IP:', ip);
    console.log('Returned coordinates:', coords);
  });
});


// const fetchMyIP = function(callback) {
//   request('https://api.ipify.org?format=json', (error, response, body) => {

// // error can be set if invalid domain, user is offline, etc.
//     if (error) {
//       callback(error, null);
//     return;
//     }
// // if non-200 status, assume server error
//     if (response.statusCode !== 200) {
//       const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
//     callback(Error(msg), null);
//     return;
//     }

//     const ip = JSON.parse(body).ip;
//     callback(null, ip);
//   });
// };
