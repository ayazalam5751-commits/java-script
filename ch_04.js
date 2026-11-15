//chapter 4

// let name="ayaz";
// console.log(name)
// console.log(name.length) 


//template litrels

// let boy1="ayaz"
// let boy2="keshav";
//ayaz is a friend of keshav
// let sentence =`${boy1} 2 is a friend of ${boy1}`
// console.log(sentence)



//escape sequence character

// let fruit ='bana\'na'
// console.log(fruit)

//  /n new line /t tab space 

// let name ="ayazalam";
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.slice(2,4))
// console.log(name.slice(2,))
// console.log(name.replace("ayaz","pyaz"))
// let name ="keshav";
// let friendn ="ayaz";
// console.log(name.concat("is a friend of ",friendn))
// let n = "       ayan.        ";
// console.log(n.trim())
// console.log(name[0])


//practice set --4

// question--1
// console.log("har\"".length)

// question--2
// const sentence = "The quick brown fox jumps over the lazy dog.";
// const word = "over";
// console.log(sentence.includes(word))

//question --3
// const str = "Saturday night plans";

// console.log(str.startsWith("Sat"));
// // Expected output: true

// console.log(str.startsWith("Sat", 3));
// // Expected output: false

// const str1 = "Cats are the best!";

// console.log(str1.endsWith("best!"));
// // Expected output: true

// console.log(str1.endsWith("best", 17));
// // Expected output: true

// const str2 = "Is this a question?";

// console.log(str2.endsWith("question"));
// // Expected output: false


//question ---4
// sen=' please give rupees ₹100';
// for (let char in sen){
//     console.log(sen[char])
// }


// let str2="please gfive rs 1000";
// let amount=parseInt(str2.slice("please gfive rs ".length));
// console.log(amount)
// console.log(typeof amount)

// question --5
// let name="ayazalam";
// name[2]="p";
// console.log(name) //name is not change beacause string is imutable
