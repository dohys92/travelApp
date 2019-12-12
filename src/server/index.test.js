// const request = require('supertest');
// const app = require('./index.js');

// import { addEntry } from './index.js';


// describe('Test, the function "addEntry()" should exist' , () => {
//     test('It should return true', () => {
//         expect(addEntry).toBeDefined();
//     });
// });

//  describe('Test root path', () => {
//     test('It should response the GET method', () => {
//         const response = request(app).get('/');
//         expect(response.statusCode).toBe(200);
//     });
// });


// test('properly defined the function', ()=> {
// 	expect(addEntry).toBeDefined();
// })

const req = require('supertest');
const index = require('./index.js');

test('GET method works', async()=> {
		const res = await req(index).get('/');
		expect(res.statusCode.toBe(200));
	});