import './sass/main.scss';
import axios from 'axios';

const AUTH_KEY = '563492ad6f91700001000001926c4fbb77504078a21e31a37ce51bbd';

axios.defaults.baseURL = 'https://api.pexels.com/v1/search?query=nature&per_page=10';
axios.defaults.headers.common['Authorization'] = AUTH_KEY;

async function getFotos() {
  try {
    const response = await axios.get();
    console.log(response.data.photos);
  } catch (error) {
    console.error(error);
  }
}

// getFotos();

// function getFotos() {
//   return fetch('https://api.pexels.com/v1/search?query=nature&per_page=10', {
//     method: 'GET',
//     headers: {
//       Authorization: '563492ad6f91700001000001926c4fbb77504078a21e31a37ce51bbd',
//     },
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data.photos);
//       return data.photos;
//     });
// }

// getFotos();

// async function getFotos() {
//   const response = await fetch('https://api.pexels.com/v1/search?query=nature&per_page=10', {
//     method: 'GET',
//     headers: {
//       Authorization: '563492ad6f91700001000001926c4fbb77504078a21e31a37ce51bbd',
//     },
//   });

//   const data = await response.json();

//   return data;
// }

// getFotos().then(data => {
//   console.log(data);
// });
