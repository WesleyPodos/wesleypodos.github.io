// // Store a reference to the <h1> in a variable
// const myHeading = document.querySelector("h1");
// // Update the text content of the <h1>
// myHeading.textContent = "Hello world!";

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc == "Images/graph.jpg") {
        myImage.setAttribute("src",
            "Images/budgeting.jpeg");
        
    } else {
        myImage.setAttribute("src", "Images/graph.jpg");
    }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Net Worth Forecaster, built for ${myName}`;
    }
    
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Net Worth Forecaster, built for ${storedName}`;
}

//Click button event
myButton.addEventListener("click", () => {
    setUserName();
})