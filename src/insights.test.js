import {test} from 'node:test';
import assert from 'node:assert/strict';
import {analyzeRestaurant} from './insights.js';
import {demoRestaurants} from './data.js';
test('consistent positive themes yield green',()=>assert.equal(analyzeRestaurant(demoRestaurants[0]).status,'green'));
test('repeated service issues yield yellow despite good food',()=>{const a=analyzeRestaurant(demoRestaurants[2]);assert.equal(a.status,'yellow');assert.equal(a.dimensions.food.status,'green');assert.equal(a.dimensions.service.status,'red')});
test('multiple recurring negative themes yield red',()=>assert.equal(analyzeRestaurant(demoRestaurants[5]).status,'red'));
test('star ratings do not influence the review classification',()=>assert.equal(analyzeRestaurant({...demoRestaurants[5],rating:5}).status,'red'));
test('missing review evidence stays mixed',()=>assert.equal(analyzeRestaurant({reviews:[]}).status,'yellow'));
