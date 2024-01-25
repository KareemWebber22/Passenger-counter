/* let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times
function totalLaps() {
    lapsCompleted = lapsCompleted + 1
}
totalLaps()
totalLaps()
totalLaps()


console.log(lapsCompleted)


// document.getElementById("count").innerText = 5

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

let count = 0
function increment() {
    count = count + 1
    console.log(count)
}
***
let username = "per"

let message = "You have three new notifications"
console.log(username + message)
***
// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console
var name = "Kareem"
var greeting = "Hi,my name is "
var myGreeting = (name + greeting)
console.log(myGreeting)
***
console.log(4 + 5) // 9
console.log("2" + "4") // "24"
console.log("5" + 1) // "51"
console.log(100 + "100") // "100100"
***

// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText

let welcomeEl = document.getElementById("welcome-el")
let name = "Kareem Ahmed Khedr"
let  greeting = "Hello, my name is "
welcomeEl.innerText = (greeting + name)
welcomeEl()
***
*/
// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCase

let countEl = document.getElementById("count-el") // pass in arguments

let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}
function decrement() {
    if (count>0) {
    count -= 1
    countEl.innerText = count
    }
    else {
    count = 0
    countEl.innerText = count
    }
}
function reset() {
    count = 0
    countEl.innerText = count
}

// 1. Create a function, save(), which logs out the count when it's called

let saveEl = document.getElementById("save-el")

function save() {
     // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    
    countEl.innerText = count
    console.log(count)
    let entries = count + " - "
    saveEl.textContent += entries
    countEl.textContent = 0
    count = 0
}

// 1. Grab the save-el paragrah and store it in a variable called saveEl


