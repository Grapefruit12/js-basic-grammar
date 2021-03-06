//async & await
//clear style of using promise π: νλ‘λ―Έμ€λ₯Ό μ‘°κΈλ κ°νΈνκ² λ§λ€μμλ λ°©λ² 

//1. async
async function fetchUser(){
    //do network request in 10 secs....
    return 'ellie';
}

const user=fetchUser();
user.then(console.log);
console.log(user);

//2. await
function delay(ms){
    return new Promise(resolve=>setTimeout(resolve, ms));
}

async function getApple(){
    await delay(1000);
    throw 'error';
    return 'π';
}

async function getBanana(){
    await delay(1000);
    return 'π';
}

async function pickFruits(){
    const apple=await getApple();
    const banana=await getBanana();
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

//3. useful Promise APIs
//.all: λ€ λ°μμ¬λκΉμ§ κΈ°λ€λ €μ€ν λ€ μ λ¬λ¨
//.race: κ°μ₯λ¨Όμ  κ°μ λ¦¬ν΄νλ μμ΄λ§ μ λ¬λμ΄μ§
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits=> fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);

