


let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

const whoRandom = who[Math.floor(Math.random() * who.length)];
const actionRandom = action[Math.floor(Math.random() * action.length)];
const whatRandom = what[Math.floor(Math.random() * what.length)];
const whenRandom = when[Math.floor(Math.random() * when.length)];



const onLoad = whoRandom + " " + actionRandom + " " +  whatRandom + " " + whenRandom;




console.log(onLoad)

