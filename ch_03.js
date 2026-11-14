//chapter--3

//for loop

/*let sum=0;
let n=4;
let n = prompt("enter the value of n");
n = Number.parseInt(NamedNodeMap);
for(let i=0;i<n;i++){
    sum+=(i+1);
}
    document.write(sum)
    console.log("sum of first" +" "+ n +" "+ "is" + sum)*/


// for in loop

// let obj={
//     harry:90,
//     ayaz:99,
//     keshav:88
// }
// for (let a in obj){
//     console.log("marks of a  "+ a + "is  " +obj[a])
// }


//for of loop


// for (let b of "ayaz"){
//     console.log(b)

// }


//while loop

// let n = prompt('enter the value of n');
// n=Number.parseInt(n);
// let n=4;
// let i=0;
// while( i<n ){
//     console.log(i)
//     i++;
// }


//do while loop

// let n=4;
// let i=0;
// do{
//     console.log(i)
//     i++;
// }while(i<n)








// function

// function onePlusAvrg(x,y){
//     return Math.round(1+(x+y)/2)
// }
// let a=10;
// let b=99;
// let c=9;
// console.log("one plus avrg of a and b", 1+(a+b)/2)
// console.log("one plus avrg of b and c", 1+(c+b)/2)
// console.log("one plus avrg of a and c", 1+(a+c)/2)
// console.log("one plus avrg of a and b", onePlusAvrg(a,b))
// console.log("one plus avrg of b and c", onePlusAvrg(c,b))
// console.log("one plus avrg of a and c", onePlusAvrg(a,c))

// const sum=(p,q)=>{
//     return p + q
// }
// console.log(sum(9,8))





// practice set chapter--3

//question 1
// let marks={
//     ayaz:99,
//     keshav:100,
//     monika:4
// }
// for(let i=0;i<Object.keys(marks).length;i++){
//     console.log("The marks of "+ Object.keys(marks)[i] +" are "+marks[Object.keys(marks)[i]] )
// }

//question 2
// let marks={
//     ayaz:99,
//     keshav:100,
//     monika:4
// }
// for (let key in marks){
//     console.log("the marks of " +key+ " are "+ marks[key])
// }

//question 3
// let cn=99;
// let i;
// while(i!=cn){
//     console.log("try again")
//     i = pronmpt("enter a number")
// }
// console.log('you hhaver entered a correct number')

// question 4
const mean = (a,b,c,d)=>{
    return (a+b+c+d)/4
}
console.log(mean(2,3,4,8))