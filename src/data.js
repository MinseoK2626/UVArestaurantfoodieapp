// Prototype fixtures. Restaurant names are local examples; every rating, review,
// theme, price, and map placement below is simulated and is not a real assessment.
export const demoRestaurants = [
 {id:'bodos',name:"Bodo’s Bagels",cuisine:'Bagels & deli',category:'Breakfast',emoji:'🥯',color:'#f3dfbf',rating:4.7,count:1248,price:'$',distance:'8 min walk',x:39,y:24,tag:'A classic start to your day',reviews:[
  {text:'The bagels were fresh and the egg sandwich was a great start to the day. The line moved quickly.',signals:{food:1,service:1,value:1}},
  {text:'A filling lunch at a student-friendly price. Everyone at the counter was helpful.',signals:{food:1,service:1,value:1}},
  {text:'Consistently good bagels and generous portions. Busy at breakfast, but worth the short wait.',signals:{food:1,service:0,value:1}}]},
 {id:'roots',name:'Roots Natural Kitchen',cuisine:'Salads & grain bowls',category:'Healthy',emoji:'🥗',color:'#dce7c4',rating:4.6,count:682,price:'$$',distance:'3 min walk',x:57,y:48,tag:'Your between-classes recharge',reviews:[
  {text:'Fresh ingredients and a bowl that kept me full all afternoon. Friendly staff helped with the toppings.',signals:{food:1,service:1,value:1}},
  {text:'The roasted vegetables and dressing were delicious. A generous portion for the price.',signals:{food:1,service:1,value:1}},
  {text:'Great bowl, though the lunchtime queue was a bit slow.',signals:{food:1,service:-1,value:0}}]},
 {id:'christians',name:'Christian’s Pizza',cuisine:'Pizza',category:'Pizza',emoji:'🍕',color:'#f5d1b8',rating:4.3,count:536,price:'$',distance:'4 min walk',x:67,y:57,tag:'One more slice? Always.',reviews:[
  {text:'Loved the topping choices and crispy crust. A slice makes an affordable late-night meal.',signals:{food:1,service:0,value:1}},
  {text:'The pizza was tasty, but our order took a long time and the counter seemed disorganized.',signals:{food:1,service:-1,value:1}},
  {text:'Good slices for the money. Another visit had a long wait and an incorrect order.',signals:{food:1,service:-1,value:1}}]},
 {id:'lemongrass',name:'Lemongrass',cuisine:'Thai & Vietnamese',category:'Asian',emoji:'🍜',color:'#e6d8bf',rating:4.2,count:318,price:'$$',distance:'5 min walk',x:74,y:39,tag:'Comfort food, with a little heat',reviews:[
  {text:'The curry was flavorful and the staff were welcoming. Good portion size.',signals:{food:1,service:1,value:1}},
  {text:'Enjoyed the noodles, though the portion felt small for the price.',signals:{food:1,service:1,value:-1}},
  {text:'Friendly service, but my meal was more expensive than expected for the portion.',signals:{food:0,service:1,value:-1}}]},
 {id:'takeit',name:'Take It Away',cuisine:'Sandwiches & deli',category:'Sandwiches',emoji:'🥪',color:'#ead4ba',rating:4.8,count:427,price:'$',distance:'3 min walk',x:48,y:65,tag:'A sandwich worth the study break',reviews:[
  {text:'Fresh bread, delicious house dressing, and a generous sandwich. Staff were lovely.',signals:{food:1,service:1,value:1}},
  {text:'A quick pickup and a satisfying lunch without spending too much.',signals:{food:1,service:1,value:1}},
  {text:'Reliable sandwiches and good value. They handled the lunch rush well.',signals:{food:1,service:1,value:1}}]},
 {id:'late-night-demo',name:'Midnight Grill',cuisine:'Burgers & fries',category:'American',emoji:'🍔',color:'#dfd2e7',rating:3.8,count:164,price:'$$',distance:'6 min walk',x:83,y:66,tag:'Fictional restaurant · demo example',fictional:true,reviews:[
  {text:'The burger arrived cold and our order was wrong. It felt expensive for the quality.',signals:{food:-1,service:-1,value:-1}},
  {text:'Long wait and lukewarm fries. Staff forgot part of our order.',signals:{food:-1,service:-1,value:-1}},
  {text:'The burger was okay this time, but service was slow again and prices felt high.',signals:{food:0,service:-1,value:-1}}]}
];
// Swap this provider for a licensed review API adapter. Normalize review themes
// into signals (-1 concern, 0 neutral, 1 praise) with source/provenance metadata.
export async function getRestaurants(){return {source:'demo',restaurants:demoRestaurants};}
