// let numArray = [0, 1, 2, 3, 4]

// // without arrow function
// numArray.forEach(function(element, index){
//     console.log(`${element} is at index ${index}`)
// })

// // with arrow function
// numArray.forEach((elem, i) => console.log(`${elem} is at index ${i}`))


// const numArray = [0, 1, 2, 3, 4]

// const mappedArr = numArray.map(function(num){
//     return num += 2
// })

// // without arrow function
// // const mappedArr = numArray.map(function(num){
// //     return num += 2
// // })

// console.log(mappedArr)

// const numArray = [0, 1, 2, 3, 4]

// // // without arrow function
// // const filteredArr = numArray.filter(function(element){
// //     return element % 2 === 0
// // })

// // with arrow function
// const filteredArr = numArray.filter(element => element % 2 === 0)

// console.log(filteredArr) // [0, 2, 4]

// console.log(4 === 5)

// const numArray = [0, 1, 2, 3, 4]

// without arrow function
// const reduced = numArray.reduce(function(acc, curr){
//     return acc + curr
// // })

// // with arrow function
// const reduced = numArray.reduce((acc, curr) => acc + curr)

// // with initial value
// const newReduced = numArray.reduce((a, c) => {a + c}, 10)

// console.log(reduced) // 10
// console.log(newReduced) // 20

const numArray = [0, 1, 2, 3, 4]

const myNum = numArray.filter(num => num > 2).map(num => num * 3).reduce((acc, curr) => acc - curr)

console.log()