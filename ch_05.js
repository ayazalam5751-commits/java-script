// chapter --5 

//---------------- Arrays---------------------------
// let marks_12=[91,82,43,88,null,false,"not present"];
// console.log(marks_12)
// console.log(marks_12[0])
// console.log(marks_12[1])
// console.log(marks_12[2])
// console.log(marks_12[3])
// console.log(marks_12[4])
// console.log(marks_12[5])
// console.log(marks_12[6])
// console.log(marks_12[7])
// console.log(marks_12.length)
// marks_12[7]="pung";// adding A NEW VALUE TO THE ARRAY
// marks_12[1]="AYAZ";// changing the value of an array
// console.log(marks_12[1])
// console.log(typeof marks_12)// TYPE OF ARRAY IS OBJECT
// for (let i in marks_12){
//     console.log(marks_12[i])
// }


//------------------Array methods---------------------------
// let num =[1,2,3,4,22];
// let b = num.toString();// b is now string 
// console.log(b)
// console.log(num.join("-"))//
// let k = num.join("-");
// console.log(k)
// console.log(typeof k)
// let c=num.pop();// pop returns the popped elements
// console.log(c)
// console.log(num)

// let num =[1,2,3,4,22];
// let a = num.push(23);//push returns the new array length
// console.log(num,a)

// let num =[1,2,3,4,22];
// let r = num.shift()// remopves the first element of the array
// console.log(r,num)
// let d = num.unshift(79)//returns new array length
// console.log(d,num)


//-----------array method--2------------------
// let num =[1,2,3,4,5,6];
// console.log(num.length)
// delete num[0];
// console.log(num)
// console.log(num.length)


// let num=[1,2,3,4,5,6,7];
// let num2=[11,22,44,55];
// let num_even =[112,22,444,666];
// let num_new = num.concat(num2);
// console.log(num_new)
// console.log(num)
// console.log(num2)
// let newarray = num.concat(num2,num_even);
// console.log(newarray)


// let a = [1, 3, 34, 22, 10, 2];
// console.log(a.sort())
// console.log(a)

// let compare =(a,b)=>{
//     return b-a
// }
// let a = [1, 3, 34, 22, 10, 2];
// console.log(a.sort(compare))
// console.log(a)
// console.log(a.reverse())



//--------------slice and splice------------

// let num =[22,44,5,6,7,8,9,54,33];
// num.splice(2,4,111,222,333,444);
// console.log(num)
// let delet = num.splice(2,4,111,222,333,444);
// console.log(delet)

// let num=[1,2,3,4,5,99,6];
// let new_num = num.slice(2)
// console.log(new_num)
// console.log(num)
// let d= num.slice(2,5)
// console.log(d)

//-------------------using loops with array--------------
// let num =[12,23,45,5,6];
// for (let i=0;i<num.length;i++){
//     console.log(num[i])
// }

// ----for each loop-----
// num.forEach((element)=>{
//     console.log(element*element)
// })

// ----Array.from-----
// let name = 'harry';
// let arr = Array.from(name)
// console.log(arr)

//-----for of loop-----
// let num=[1,33,4,332,45];
// for (let item of num){
//     console.log(item)
// }


//----for in loop-----
// let num=[1,33,4,332,45];
// for(let i in num){
//     console.log(num[i])
// }


// -------map ,filter , reduce--------
//---map---
// let arr =[22,34,56];
// let a =arr.map((value, index,arr)=>{
//     console.log(value,index,arr)
//     return value + index

// })
// console.log(a)

//      -------filter-----
// let arr2=[1,2,3,45,0];
// let a2 =arr2.filter((a)=>{
//     return a>10
// })
// console.log(a2,arr2)



//-----------reduce method---
// let arr3=[2,1,1,43,54,3];
// let newarr=arr3.reduce((h1,h2)=>{
//     return h1+h2
// })
// console.log(newarr)



//-------------------pratice set 5----------------------------

//problem1
// let arr=[1,2,34,5,66,777];
// let a=prompt("enter a number")
// a=Number.parseInt(a)
// arr.push(a)
// console.log(arr)

//problem 2
// let arr2 = [1, 2, , 34, 66, 6, 77];
// let a;
// do {
//     a = prompt("enter a number")
//     a = Number.parseInt(a)
//     arr2.push(a)
// } while (a != 0);
// console.log(arr2)


//problem 3
// let arr=[22,34,90,80,640,2,3,4,5];
// let n = arr.filter((x)=>{
//     return x%10==0

// })
// console.log(n)


// problem 4

// let arr4=[11,2,3,56,6,7];
// let s = arr4.map((x)=>{
//     return x**2
// })
// console.log(s)


//problem -

// let arr5=[1,2,3,45,6,67,7,8];
// let n =arr5.reduce((x1,x2)=>{
//     return x1*x2
// })
// console.log(n)



//----------------guess number 1 to 10-------------
// Exercise 1: Guess the Number


let number = Math.floor(Math.random() * 100) + 1;
let chances = 0;
let guess;
while (guess !== number) {
    guess = Number(prompt("Guess a number between 1 and 100"));
    chances++;

    if (guess > number) {
        alert("Your guess is too high! Try again.");
    }
    else if (guess < number) {
        alert("Your guess is too low! Try again.");
    }
    else {
        alert("Congratulations! You guessed the correct number.");
    }
}

// Display final result
alert("Your score is: " + (100 - chances));
alert("Actual Number was: " + number);
