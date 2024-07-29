// Activity 1: Selecting and Manipulating Elements
// Task 1: Select an HTML element by its ID and change its text content.
const extraInfo = document.getElementById("extra-info");
extraInfo.textContent =
    "India's golden boy Neeraj Chopra is going to take the Paris 2024 by storm on 6th & 8th of August, in the Men's Javelin throw event.";

// Task 2: Select an HTML element by its class and change its background color.
const upcomingEvents = document.getElementsByClassName("upcoming-events")[0];
upcomingEvents.style.backgroundColor = "yellow";

//
//

// Activity 2: Creating and Appending Elements
// Task 3: Create a new div element with some text and append it to the body.
let extraInfo2 = document.createElement("div");
extraInfo2.innerText =
    "Athletics events at Paris 2024 are scheduled from 1st to 11th August.";
const headlines = document.getElementById("headlines");
headlines.appendChild(extraInfo2);

// Task 4: Create a new li element and add it to an existing ul list.
let badmintonDuo = document.createElement("li");
badmintonDuo.innerText = "Satvik - Chirag duo";
const athletesList = document.getElementById("athletes-list");
athletesList.appendChild(badmintonDuo);

//
//

// Activity 3: Removing Elements
// Task 5: Select an HTML element and remove it from the DOM.
const manuBhakerWin = document.getElementById("content-para-1-child");
manuBhakerWin.parentElement.removeChild(manuBhakerWin);

// Task 6: Remove the last child of a specific HTML element.
headlines.removeChild(headlines.lastChild);

//
//

// Activity 4: Modifying Attributes and Classes
// Task 7: Select an HTML element and change one of its attrbutes (e.g., src of an img tag).
const manuBhakerImg = document.getElementById("manu-bhaker-win-img");
manuBhakerImg.setAttribute("src", "./images/manu-bhaker2.jpeg");

// Task 8: Add and remove a CSS class to/from an HTML element.
const extraInfoEle = document.getElementById("extra-info");
extraInfoEle.classList.add("blue-bg");

//
//

// Activity 5: Event Handling
// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
const btn = document.getElementById("text-change-btn");
btn.addEventListener("click", () => {
    const content1 = document.getElementById("content-para-1-child-1");
    content1.innerText =
        "Manu Bhaker opened India's medal tally at Paris 2024, by winning Bronze at Women's 10m Air Piston event.";
    // console.log("Button clicked !");
});

// Task 10: Add a mouseover event listener to an element that changes its border color.
btn.addEventListener("mouseover", () => {
    // Change border color of img
    btn.style.borderColor = "orange";
    // img1.style.marginBottom = 20;
    img1.style.borderRadius = "10";
    img1.style.borderWidth = 150;
});
