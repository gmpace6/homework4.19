let numArray = [0, 1, 2, 3, 4]

// without arrow function
numArray.forEach(function(element, index){
    console.log(`${element} is at index ${index}`)
})

// with arrow function
numArray.forEach((elem, i) => console.log(`${elem} is at index ${i}`))