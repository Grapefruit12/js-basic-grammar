'use strict';

async function fetchUser(){
  return 'ellie';
}

const user=fetchUser();
user.then(console.log);
console.log(user);

function delay(ms){
  return new Promise(resolve=>setTimeout(resolve,ms));
}

async function getApple(){
  await delay(1000);
  // throw 'μ¬κ³Όμμ';
  return 'π';
}

async function getBanana(){
  await delay(1000);
  // throw 'λ°λλμμ';
  return 'π';
}

async function pickFruits(){
  const apple=await getApple();
  const banana=await getBanana();
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

function pickAllFruits(){
  return Promise.all([getApple(), getBanana()])
  .then(fruits=>fruits.join('+'));
}
pickAllFruits().then(console.log);

function pickOnlyOne(){
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);