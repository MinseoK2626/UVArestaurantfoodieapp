// Prototype fixtures. Restaurant names are local examples; every rating, review,
// theme, price, and map placement below is simulated and is not a real assessment.
// Local restaurant names are illustrative; current operation and menus are unverified.
export const demoRestaurants = [
 {id:'bodos',name:"Bodo’s Bagels",cuisine:'Bagels & deli',category:'Breakfast',emoji:'🥯',color:'#f3dfbf',rating:4.7,count:1248,price:'$',distance:'8 min walk',x:34,y:14,tag:'A classic start to your day',reviews:[
  {text:'The bagels were fresh and the egg sandwich was a great start to the day. The line moved quickly.',signals:{food:1,service:1,value:1}},
  {text:'A filling lunch at a student-friendly price. Everyone at the counter was helpful.',signals:{food:1,service:1,value:1}},
  {text:'Consistently good bagels and generous portions. Busy at breakfast, but worth the short wait.',signals:{food:1,service:0,value:1}}]},
 {id:'roots',name:'Roots Natural Kitchen',cuisine:'Salads & grain bowls',category:'Healthy',emoji:'🥗',color:'#dce7c4',rating:4.6,count:682,price:'$$',distance:'3 min walk',x:54,y:14,tag:'Your between-classes recharge',reviews:[
  {text:'Fresh ingredients and a bowl that kept me full all afternoon. Friendly staff helped with the toppings.',signals:{food:1,service:1,value:1}},
  {text:'The roasted vegetables and dressing were delicious. A generous portion for the price.',signals:{food:1,service:1,value:1}},
  {text:'Great bowl, though the lunchtime queue was a bit slow.',signals:{food:1,service:-1,value:0}}]},
 {id:'christians',name:'Christian’s Pizza',cuisine:'Pizza',category:'Pizza',emoji:'🍕',color:'#f5d1b8',rating:4.3,count:536,price:'$',distance:'4 min walk',x:74,y:14,tag:'One more slice? Always.',reviews:[
  {text:'Loved the topping choices and crispy crust. A slice makes an affordable late-night meal.',signals:{food:1,service:0,value:1}},
  {text:'The pizza was tasty, but our order took a long time and the counter seemed disorganized.',signals:{food:1,service:-1,value:1}},
  {text:'Good slices for the money. Another visit had a long wait and an incorrect order.',signals:{food:1,service:-1,value:1}}]},
 {id:'lemongrass',name:'Lemongrass',cuisine:'Thai & Vietnamese',category:'Asian',emoji:'🍜',color:'#e6d8bf',rating:4.2,count:318,price:'$$',distance:'5 min walk',x:87,y:26,tag:'Comfort food, with a little heat',reviews:[
  {text:'The curry was flavorful and the staff were welcoming. Good portion size.',signals:{food:1,service:1,value:1}},
  {text:'Enjoyed the noodles, though the portion felt small for the price.',signals:{food:1,service:1,value:-1}},
  {text:'Friendly service, but my meal was more expensive than expected for the portion.',signals:{food:0,service:1,value:-1}}]},
 {id:'takeit',name:'Take It Away',cuisine:'Sandwiches & deli',category:'Sandwiches',emoji:'🥪',color:'#ead4ba',rating:4.8,count:427,price:'$',distance:'3 min walk',x:27,y:28,tag:'A sandwich worth the study break',reviews:[
  {text:'Fresh bread, delicious house dressing, and a generous sandwich. Staff were lovely.',signals:{food:1,service:1,value:1}},
  {text:'A quick pickup and a satisfying lunch without spending too much.',signals:{food:1,service:1,value:1}},
  {text:'Reliable sandwiches and good value. They handled the lunch rush well.',signals:{food:1,service:1,value:1}}]},
 {id:'late-night-demo',name:'Midnight Grill',cuisine:'Burgers & fries',category:'American',emoji:'🍔',color:'#dfd2e7',rating:3.8,count:164,price:'$$',distance:'6 min walk',x:45,y:28,tag:'Fictional restaurant · demo example',fictional:true,reviews:[
  {text:'The burger arrived cold and our order was wrong. It felt expensive for the quality.',signals:{food:-1,service:-1,value:-1}},
  {text:'Long wait and lukewarm fries. Staff forgot part of our order.',signals:{food:-1,service:-1,value:-1}},
  {text:'The burger was okay this time, but service was slow again and prices felt high.',signals:{food:0,service:-1,value:-1}}]}
,
{
 "id": "virginian",
 "name": "The Virginian",
 "cuisine": "American pub fare",
 "category": "American",
 "emoji": "🍟",
 "color": "#ead4ba",
 "rating": 4.5,
 "count": 742,
 "price": "$$",
 "distance": "4 min walk",
 "x": 63,
 "y": 28,
 "tag": "A classic Corner catch-up",
 "reviews": [
  {
   "text": "The burgers were flavorful and the fries were crisp. Our server was welcoming and the portions felt fair.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": 1
   }
  },
  {
   "text": "The sandwich was tasty, but our table waited a while to order during the dinner rush.",
   "signals": {
    "food": 1,
    "service": -1,
    "value": 0
   }
  },
  {
   "text": "A satisfying pub meal, though service was slow again on a busy evening.",
   "signals": {
    "food": 1,
    "service": -1,
    "value": 1
   }
  }
 ]
},
{
 "id": "white-spot",
 "name": "The White Spot",
 "cuisine": "Diner & burgers",
 "category": "American",
 "emoji": "🍳",
 "color": "#f0dfb8",
 "rating": 4.6,
 "count": 593,
 "price": "$",
 "distance": "4 min walk",
 "x": 79,
 "y": 42,
 "tag": "A diner-style study break",
 "reviews": [
  {
   "text": "The egg-topped burger was satisfying and the fries were hot. Friendly service and a filling meal for the price.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": 1
   }
  },
  {
   "text": "A simple, tasty diner lunch. The staff were helpful and the portions were generous.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": 1
   }
  },
  {
   "text": "The burger came out quickly and tasted great. An affordable comfort-food stop.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": 1
   }
  }
 ]
},
{
 "id": "boylan",
 "name": "Boylan Heights",
 "cuisine": "Burgers & sports bar",
 "category": "American",
 "emoji": "🍔",
 "color": "#d7dfc5",
 "rating": 4.3,
 "count": 624,
 "price": "$$",
 "distance": "5 min walk",
 "x": 27,
 "y": 44,
 "tag": "Burgers with your game-day crew",
 "reviews": [
  {
   "text": "The burger was juicy and the toppings were fresh. The server checked in regularly.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": 0
   }
  },
  {
   "text": "Enjoyed the burger, but the meal felt pricey for the portion.",
   "signals": {
    "food": 1,
    "service": 0,
    "value": -1
   }
  },
  {
   "text": "Friendly staff and tasty fries, though the bill was high for a casual lunch.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": -1
   }
  }
 ]
},
{
 "id": "biltmore",
 "name": "The Biltmore",
 "cuisine": "American & pub fare",
 "category": "American",
 "emoji": "🥨",
 "color": "#e5d3bf",
 "rating": 4.1,
 "count": 406,
 "price": "$$",
 "distance": "5 min walk",
 "x": 45,
 "y": 44,
 "tag": "A laid-back group hangout",
 "reviews": [
  {
   "text": "The sandwich was enjoyable and the staff were friendly.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": 0
   }
  },
  {
   "text": "The food was good, but we waited a long time for someone to take our order.",
   "signals": {
    "food": 1,
    "service": -1,
    "value": 0
   }
  },
  {
   "text": "The fries were crisp, though service was slow again and the portion felt small for the price.",
   "signals": {
    "food": 1,
    "service": -1,
    "value": -1
   }
  }
 ]
},
{
 "id": "trinity",
 "name": "Trinity Irish Pub",
 "cuisine": "Irish & pub fare",
 "category": "American",
 "emoji": "🍀",
 "color": "#dbe1c4",
 "rating": 4.2,
 "count": 487,
 "price": "$$",
 "distance": "4 min walk",
 "x": 61,
 "y": 44,
 "tag": "Pub plates for the whole group",
 "reviews": [
  {
   "text": "The pub-style meal was warm and filling. Our server was helpful.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": 0
   }
  },
  {
   "text": "Friendly service, but the entree portion felt small for what we paid.",
   "signals": {
    "food": 0,
    "service": 1,
    "value": -1
   }
  },
  {
   "text": "The food tasted good and the staff were attentive, though the price was high for the serving size.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": -1
   }
  }
 ]
},
{
 "id": "asado",
 "name": "Asado",
 "cuisine": "Wings & tacos",
 "category": "Mexican",
 "emoji": "🌮",
 "color": "#f1d2af",
 "rating": 4.4,
 "count": 351,
 "price": "$$",
 "distance": "5 min walk",
 "x": 88,
 "y": 54,
 "tag": "Wings, tacos, and a little kick",
 "reviews": [
  {
   "text": "The tacos were flavorful and the wings were crisp. Helpful staff and good portions.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": 1
   }
  },
  {
   "text": "Tasty wings and a filling meal. The team was welcoming.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": 1
   }
  },
  {
   "text": "The tacos were fresh, but the order took longer than expected at lunch.",
   "signals": {
    "food": 1,
    "service": -1,
    "value": 0
   }
  }
 ]
},
{
 "id": "got-dumplings",
 "name": "Got Dumplings",
 "cuisine": "Dumplings & noodles",
 "category": "Asian",
 "emoji": "🥟",
 "color": "#e6ddc4",
 "rating": 4.5,
 "count": 468,
 "price": "$",
 "distance": "4 min walk",
 "x": 27,
 "y": 60,
 "tag": "A dumpling-shaped lunch break",
 "reviews": [
  {
   "text": "The dumplings were flavorful and freshly cooked. Fast, friendly service and a filling portion.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": 1
   }
  },
  {
   "text": "Enjoyed the noodles and crispy dumplings. A good lunch for the price.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": 1
   }
  },
  {
   "text": "The staff helped me choose a dish, and everything tasted fresh. Good portions without a big bill.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": 1
   }
  }
 ]
},
{
 "id": "kuma",
 "name": "Kuma Sushi-Noodles & Bar",
 "cuisine": "Japanese & sushi",
 "category": "Asian",
 "emoji": "🍣",
 "color": "#edd0cb",
 "rating": 4.4,
 "count": 279,
 "price": "$$",
 "distance": "5 min walk",
 "x": 45,
 "y": 60,
 "tag": "A sushi night between deadlines",
 "reviews": [
  {
   "text": "The sushi tasted fresh and the noodles were comforting. The team was friendly.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": 0
   }
  },
  {
   "text": "The rolls were tasty, but portions were small for the price.",
   "signals": {
    "food": 1,
    "service": 0,
    "value": -1
   }
  },
  {
   "text": "Helpful staff and enjoyable noodles, though dinner cost more than expected for the serving size.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": -1
   }
  }
 ]
},
{
 "id": "fig",
 "name": "Fig",
 "cuisine": "Southern-inspired café",
 "category": "American",
 "emoji": "🧇",
 "color": "#ead7bd",
 "rating": 4.6,
 "count": 392,
 "price": "$$",
 "distance": "7 min walk",
 "x": 63,
 "y": 60,
 "tag": "Slow down for a little brunch",
 "reviews": [
  {
   "text": "The brunch plate was flavorful and well prepared. The staff were welcoming and the portion felt fair.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": 1
   }
  },
  {
   "text": "Enjoyed the breakfast and relaxed service. A filling meal for the price.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": 1
   }
  },
  {
   "text": "The food was consistently tasty and our server was attentive. Good portions.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": 1
   }
  }
 ]
},
{
 "id": "grit",
 "name": "Grit Coffee",
 "cuisine": "Coffee & café bites",
 "category": "Coffee",
 "emoji": "☕",
 "color": "#dfd4c5",
 "rating": 4.6,
 "count": 338,
 "price": "$",
 "distance": "4 min walk",
 "x": 78,
 "y": 69,
 "tag": "Your next caffeine checkpoint",
 "reviews": [
  {
   "text": "The coffee was balanced and the pastry was fresh. The barista was friendly and the combo felt fairly priced.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": 1
   }
  },
  {
   "text": "A tasty latte and helpful service. A good little coffee break for the price.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": 1
   }
  },
  {
   "text": "Fresh coffee and a satisfying pastry. The team handled our order quickly.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": 1
   }
  }
 ]
},
{
 "id": "starbucks",
 "name": "Starbucks · The Corner",
 "cuisine": "Coffee & quick bites",
 "category": "Coffee",
 "emoji": "🧋",
 "color": "#d5e2d1",
 "rating": 4.0,
 "count": 296,
 "price": "$",
 "distance": "4 min walk",
 "x": 30,
 "y": 77,
 "tag": "A familiar coffee between classes",
 "reviews": [
  {
   "text": "The drink tasted good and the staff were helpful.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": 0
   }
  },
  {
   "text": "The coffee was as expected, but the pickup took a long time.",
   "signals": {
    "food": 1,
    "service": -1,
    "value": 0
   }
  },
  {
   "text": "Enjoyed the drink, though my order was delayed again during the morning rush.",
   "signals": {
    "food": 1,
    "service": -1,
    "value": 0
   }
  }
 ]
},
{
 "id": "mellow",
 "name": "Mellow Mushroom",
 "cuisine": "Pizza & casual dining",
 "category": "Pizza",
 "emoji": "🍄",
 "color": "#e1d3e6",
 "rating": 4.5,
 "count": 806,
 "price": "$$",
 "distance": "8 min walk",
 "x": 48,
 "y": 77,
 "tag": "Share a pie, split the study stress",
 "reviews": [
  {
   "text": "The pizza crust was delicious and the toppings were generous. Friendly service and a good meal to share.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": 1
   }
  },
  {
   "text": "The pizza was tasty and the staff were helpful. Sharing a pie felt like good value.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": 1
   }
  },
  {
   "text": "Enjoyed the pizza, but it took a while to arrive during dinner.",
   "signals": {
    "food": 1,
    "service": -1,
    "value": 0
   }
  }
 ]
},
{
 "id": "inka",
 "name": "Inka Grill",
 "cuisine": "Peruvian cuisine",
 "category": "Latin American",
 "emoji": "🍗",
 "color": "#eddbb8",
 "rating": 4.7,
 "count": 263,
 "price": "$$",
 "distance": "3 min walk",
 "x": 64,
 "y": 82,
 "tag": "Add a little Peruvian flavor",
 "reviews": [
  {
   "text": "The chicken was flavorful and the sides were fresh. Helpful staff and generous portions.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": 1
   }
  },
  {
   "text": "A delicious, filling meal. Friendly service and a fair price for the portion.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": 1
   }
  },
  {
   "text": "The seasoning was great and the staff explained the menu. Plenty of food for the money.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": 1
   }
  }
 ]
},
{
 "id": "insomnia",
 "name": "Insomnia Cookies",
 "cuisine": "Cookies & desserts",
 "category": "Desserts",
 "emoji": "🍪",
 "color": "#e7cfb6",
 "rating": 4.3,
 "count": 224,
 "price": "$",
 "distance": "4 min walk",
 "x": 85,
 "y": 84,
 "tag": "A sweet reward for finishing that paper",
 "reviews": [
  {
   "text": "The cookies were warm and soft. The team was friendly.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": 0
   }
  },
  {
   "text": "The cookies tasted great, but the small box felt expensive.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": -1
   }
  },
  {
   "text": "Friendly staff and fresh cookies, though the price per cookie felt high.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": -1
   }
  }
 ]
},
{
 "id": "chipotle",
 "name": "Chipotle · The Corner",
 "cuisine": "Burritos & bowls",
 "category": "Mexican",
 "emoji": "🌯",
 "color": "#dce1c3",
 "rating": 4.0,
 "count": 514,
 "price": "$",
 "distance": "3 min walk",
 "x": 47,
 "y": 91,
 "tag": "A build-your-own lunch fix",
 "reviews": [
  {
   "text": "The bowl was flavorful and filling. Good portions for the price.",
   "signals": {
    "food": 1,
    "service": 1,
    "value": 1
   }
  },
  {
   "text": "The food tasted good, but our pickup order was late and a topping was missing.",
   "signals": {
    "food": 1,
    "service": -1,
    "value": 1
   }
  },
  {
   "text": "A satisfying burrito for the price, though service was slow again at lunch.",
   "signals": {
    "food": 1,
    "service": -1,
    "value": 1
   }
  }
 ]
}
];
// Swap this provider for a licensed review API adapter. Normalize review themes
// into signals (-1 concern, 0 neutral, 1 praise) with source/provenance metadata.
export async function getRestaurants(){return {source:'demo',restaurants:demoRestaurants};}
