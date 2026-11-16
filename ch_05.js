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
let num=[1,33,4,332,45];
for(let i in num){
    console.log(num[i])
}