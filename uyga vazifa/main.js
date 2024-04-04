// 1-task


// let prompt_num = +prompt("Sonni kiriting")
// const total = (params) => {
//   let array = (params.toString())
//   let result = 0
//   for(let i = 0; i < array.length; i++) {
//     result += (+array[i])
//   }
//   console.log(result);
// }
// total(prompt_num)


// 2-task


// const total = (...params) => {
//   let array = [...params]
//   let result = 0
//   for(let i = 0; i < array.length; i++) {
//     result += (+array[i])
//   }
//   let arr = Array.from(result.toString(),Number)
//   console.log(arr);
// }
// total(1,42,5)


// 3-task


// const is_Palindrome = (param) => {
//   let type = typeof param
//   if (type === "number") {
//     let arr = Array.from(param.toString(), Number).reverse()
//     let new_num = Number(arr.join(""))
//     if (param === new_num) {
//       return "Palindrome"
//     } else {
//       return "Palindome emas"
//     }
//   }else {
//     let arr = param.split("").reverse()
//     let new_str = arr.join("")
//     if (param === new_str) {
//       return "Palindrome"
//     } else {
//       return "Palindrome emas"
//     }
//   }
// }
// console.log(is_Palindrome(517));


// 4-task 1-usul


// const obj = {num1: 3, num2: 4, num3: 22}
// let total = 0 
// for (const value in obj) {
//   total += obj[value]
// }
// let arr = Array.from(total.toString(),Number)
// let result = arr.reduce((a,b) => a +b, 0)
// console.log(obj);
// console.log(result);


// 4-task 2-usul


// const obj = {num1: 3, num2: 4, num3: 22}
// let total = 0 
// for (const value in obj) {
//   total += obj[value]
// }
// let arr = Array.from(total.toString(),Number)
// let result = 0
// for(let i = 0; i < arr.length; i++){
//   result += arr[i]
// }
// console.log(obj);
// console.log(result);


// 5-task 1-usul


// let str = "Asilbek"
// let new_str = str.toLowerCase().trim()
// let letters = ["a","o","o'","u","i","e"]
// let count = 0
// for (let i = 0; i < new_str.length; i++){
//   for(let g = 0; g < letters.length; g++){
//     if(new_str[i] === letters[g]){
//       count ++
//     }
//   }
// }
// console.log(count);


// 5-task 2-usul


// let str = "Asilbek"
// let new_str = str.toLowerCase().trim()
// let letters = ["a","o","o'","u","i","e"]
// let count = 0
// for (let i = 0; i < new_str.length; i++){
//   if(letters.includes(new_str[i])){
//     count ++
//   }
// }
// console.log(count);


// 6-task 1-usul


// function getInitialOdds(n){
    //     let massiv = []
    //     for (let i = 0; i < (n*2); i++){
    //         if(i % 2 == 1)
    //         massiv.push(i)
    //     }
    //     console.log(massiv);
    // }
    // getInitialOdds(7)
       
       
 // 6-task 2-usul


// function getInitialOdds(n){
//     const arr = []
//     let count = 0
//     for(let i = 1; count < n; i+=2){
//         arr.push(i)
//         count ++
//     }
//     console.log(arr);
// }
// getInitialOdds(7)
