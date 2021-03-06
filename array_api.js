// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result=fruits.join('๐ฅฐ ');
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '๐, ๐ฅ, ๐, ๐';
  const result=fruits.split(',');
  //fruits.split(',',2); 2๊ฐ๋ง ๋ฐ๊ณ ์ถ์๋
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result=array.reverse();
  console.log(result);
  console.log(array);
  //reverse()๋ return๊ฐ๋ฟ๋ง์๋๋ผ ๋ฐฐ์ด์์ฒด๋ ๋ณํ์ํจ๋ค
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result=array.slice(2, 5);
  //splice:์ํ๋ index๊ฐ ์ญ์ ํ๊ณ  ๊ทธ ๊ฐ๋ค์ return
  //slilce:์ํ๋ index๊ฐ๋ง ๋ฐ์์ค๊ณ  ๊ทธ ๊ฐ๋ค์ return
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result=students.find((student)=>student.score===90);
  console.log(result);
  
}

// Q6. make an array of enrolled students
{
  const result=students.filter((student)=>student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result=students.map((student)=>student.score);
  console.log(result);
  //map: ๋ฐฐ์ด์ ์ฝ๋ฐฑํจ์๋ฅผ ํตํ์ฌ ๋ฐฐ์ด์ ๋ณํ์ํด
}

// Q8. check if there is a student with the score lower than 50(50์ ๋ณด๋ค ๋ฎ์ ํ์์๋์ง ์๋์ง ๋ฐํํด๋ผ: true or false)
{
  console.clear();
  const result=students.some((student)=>student.score<50);
  console.log(result);
  //some: ํ๋๋ผ๋ ์กฐ๊ฑด๋ง์กฑํ๋ฉด true
  //every: ์ ์ฒด๊ฐ ์กฐ๊ฑด์ด ๋ง์์ผ true
}

// Q9. compute students' average score
{
  const result=students.reduce((prev,curr)=>{
    //console.log('--------');
    //console.log(prev);
    //console.log(curr);
    return prev+curr.score;
  },0);//0๋ถํฐ ์์
  //reduce: ์ฐ๋ฆฌ๊ฐ ์ํ๋ ์์์ ๋ถํฐ ๋๋ฉด์ ๊ฐ์ ๋์ ํจ
  //reduceRight: ๋ฐฐ์ด์ ๋งจ๋ค๋ถํฐ ์์ํ๋ฉด์ ๊ฐ์ ๋์ 
  console.log(result/students.length);
  
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result=students.map((student)=>student.score)
  .join();
  console.log(result);
  //.map().join();
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result=students.map((student)=>student.score)
  .sort((a,b)=>a-b)//sort: ์ค๋ฆ์ฐจ์
  .join();
  console.log(result);
}