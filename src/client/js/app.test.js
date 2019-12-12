const getData = require('./app.js');

test('properly gets the country name', async() => {
  const data = await getData('http://api.geonames.org/searchJSON?q=Paris&maxRows=10&username=dohys');
  expect(data.geonames[0].countryName).toEqual("France");
});

// const request = require('supertest');
// const app = require('./index.js');
// 
// import { countDown } from './app.js';


// describe('Test, the function "countDown()" should exist' , () => {
//     test('It should return true', () => {
//         expect(countDown).toBeDefined();
//     });
// });