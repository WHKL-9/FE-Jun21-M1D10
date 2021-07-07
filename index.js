// 38) Console log "Page loaded" when the page is correctly loaded
window.onload = function(){
    console.log("Page loaded")
}

// JS EXERCISES
// 21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
let x = "John"
let y= "Doe"
console.log(`${x}<>${y}`)

// 22) Create an object with properties such name, surname, email
let myObject = {
    name: "Vanessa",
    surname: "Prizkau",
    email: "vanessa.prizkau@gmail.com",
}

// 23) Delete Email from the previously created object
delete myObject.email
// for testing
// console.log(myObject)

// 24) Create an array with 10 strings in it &&
// 25) Print in the console every string in the previous array
const createArrayWithTenStrings = function(){
    let arrayWithTenStrings = []
    for (let i=1; i<=10; i++){
        let currentString = `I am String Number ${i}`
        arrayWithTenStrings.push(currentString)
        //arrayWithTenStrings.push("I am string Numer" + i) one line to replace two lines above
    }
    console.log(arrayWithTenStrings) 
}

createArrayWithTenStrings()

// 26) Create an array with 100 random numbers in it
// 27) Wrote a function to get the MAX and the MIN from the previously created array
let arrayWith100RandomNumbers = [] 

//generate random number between 1 to 100
const randomNumber = function(){
    return Math.floor(Math.random()*(100+1)) 
}
    for (i=1; i<=100; i++){
        arrayWith100RandomNumbers.push(randomNumber())
    }
console.log(arrayWith100RandomNumbers)

const getMaxFromArray = function(array){
    let maxNumber = array[0]
    for (i=0;i<array.length;i++){
        if (array[i]>array[i+1]){
            maxNumber = array[i]
        }
    }
    console.log(maxNumber)
}
getMaxFromArray(arrayWith100RandomNumbers)

const getMinFromArray = function(array){
    let minNumber = array[0]
    for (i=0;i<array.length;i++){
        if (array[i]<array[i+1]){
            minNumber = array[i]
        }
    }
    console.log(minNumber)
}
getMinFromArray(arrayWith100RandomNumbers)


// 28) Create an array of arrays, in which every array has 10 random numbers

const arrayOfXArraysGenerator = function(x,y){ //x being number of "outer" arrays, y being number of elements in the "inner" array
    let arrayOfXArrays = []
    for (i=1;i<=x;i++){
        let innerArrays = []
            for(j=1;j<=y;j++){
            innerArrays.push(randomNumber())
            }
        arrayOfXArrays.push(innerArrays)
    }
    return arrayOfXArrays //don't forget to return! 
}

let arrayOf5Arrays = arrayOfXArraysGenerator(5,10)
console.log(arrayOf5Arrays)

// 29) Create a function that gets 2 arrays and returns the longest one
let arrayOf2Arays = arrayOfXArraysGenerator(2,10)
const getLongerArray = function(x,y){ // need to parse in 2 arrays for comparison
    if(x.length > y.length){
        return `${x} is the longer array`
    } else if (x.length <y.length){
        return `${y} is the longer array`
    }else{
        return "Both arrays are of the same length"
    }
}

console.log(getLongerArray(arrayOf2Arays[0], arrayOf5Arrays[0]))

// 30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
//first create a function to get sum of the values in an array
const getTotalSum = function(x){
    sumOfX =0 
    for(i=0; i<x.length;i++){
        sumOfX += x[i] 
    }
    return sumOfX
}

const getBiggerSum = function(x,y){
    if(getTotalSum(x)>getTotalSum(y)){
        return `The array consisting (${x}) has a higher sum of values`
    } else if(getTotalSum(y)>getTotalSum(x)){
        return `The array consisting (${y}) has a higher sum of values`
    } else {
       return "The total sum of both arrays are the same." 
    }

}

console.log(getBiggerSum(arrayOf5Arrays[3],arrayOf2Arays[1]))



// DOM 



// 31) Get element with ID "container" from the page
let elementWithContainerAsId = document.getElementById("container")

// 32) Get every "td" from the page
let getThoseTds = document.querySelectorAll("td")

// 33) Create a cycle that prints the text inside every td of the page
//what is a cycle -> loop 
function getTextfromTds(){
    const tds = getThoseTds()    
    for (let i=0;i<tds.length;i++){
        console.log(tds[i].innerText)
    }
}

// 34) Write a function to change the heading of the page
const  changeH1ToH2 = function(){
    let getH1Element = document.querySelector("h1")
    getH1Element.outerHTML = '<h3>' + getH1Element.innerHTML + '</h3>' //use OuterHTML to change the headings 
}

// 35) Write a function to add an extra row to the table
const addExtraRow = function(){
    //target the tr 
    const table = document.querySelector("table")
    const newRow = document.createElement("tr")
    newRow.innerText = "Testing" // for testing
    table.appendChild(newRow)
}
// 36) Write a function to add the class "test" to each row in the table

// 37) Write a function to add a red background to every link in the page
const addRedBackgroundToLink = function (){
    //target those links
    let getAllLinks = document.getElementsByTagName("a")
    getAllLinks.style.background = red 
}

// 39) Write a function to add new items to a UL
const addNewItem = function(){
    //target the parent container
    let getUlContainer = document.querySelector("ul")
    //to get the user's input 
    let getUserInput = document.getElementById("new-item")
    getUserInput = getUserInput.value
    //assign user input to the empty list 
    let newListItem = document.createElement("li")
    newListItem.innerHTML = getUserInput
    //add user input into the current list as the last child

    getUlContainer.appendChild(newListItem)
}


// const addToTheSecond = function () {
//     //get the user input 
//     let userItem = document.getElementById("user-item")
//     userItem = userItem.value
//     //assign user input to the empty list 
//     let newItem = document.createElement("li")
//     newItem.innerHTML = userItem
//     //find the parent container
//     let container = document.getElementById("secondList")
//     container.appendChild(newItem)
//   };


// 40) Write a function to empty a list
const emptyTheList = function(){
    let getTheLists = document.getElementsByTagName("li") //this will give us an array back
    for (list of getTheLists){
        list.outerHTML = "" //how do I make the numbers disappear too? - by using outerHTML? 
    }
}

// EXTRA 

// 41) Add an eventListener to alert when the mouse is over a link, displaying the URL
function addAlertToLinks(){
    const links = document.querySelectorAll("a")    
    for (let i=0;i<links.length;i++){
        links[i].addEventListener("mouseover", function() {
            alert(links[i].getAttribute('href'))
        })
    }
}
// 42) Add a button to hide every image on the page
// 43) Add a button to hide and show the table from the page
// 44) Write a function to sum every number inside the TD (if the content is numeric)
// 45) Delete the last letter from the title each time the user clicks on it
// 46) Change a single TD background color when the user clicks on it
// 47) Add a button DELETE, on click it should delete a random TD from the page
// 48) Add a pink border to a cell when the mouse is over it
// 49) Write a function to add a table with 4 rows and 3 columns programmatically
// 50) Write a function to remove the table from the page


