let listPageButton = document.getElementById("listPageButton");
let homePage = document.getElementById("homePage");
let listPage = document.getElementById("listPage");
let homePageButton = document.getElementById("homePageButton");
let addList = document.getElementById("addList");
let time = document.getElementById("time");
let container = document.getElementById("container")
//Home and list page
listPageButton.addEventListener("click", function () {
    homePage.style.display = "none";
    listPage.style.display = "block";
    console.log("klick")
    addToContainer()
});
homePageButton.addEventListener("click", function() {
    homePage.style.display = "block"
    listPage.style.display = "none"
})

/////////////////////////////////////
let eggArray = [];
let sizeForEgg;
let boilningForEgg;


//Event listener for radio size button
let radioButtonSize = document.querySelectorAll("input[name = 'size']")
for(let i = 0; i<radioButtonSize.length; i++) {
    radioButtonSize[i].addEventListener("click", function() {
        sizeForEgg = radioButtonSize[i].value;
        calcTimeEgg()


    }) 
}
//Event listener for radio boilning button
let radioButtonsBoilning = document.querySelectorAll("input[name='boilning']")
for(let i = 0; i<radioButtonsBoilning.length; i++) {
    radioButtonsBoilning[i].addEventListener("click", function() {
        boilningForEgg = radioButtonsBoilning[i].value;
        calcTimeEgg()
    })
}

//Add to egg array
addList.addEventListener("click", function() {
    let newEgg = {
        size: sizeForEgg,
        boilning: boilningForEgg,
        time: calcTimeEgg()
    }
    eggArray.push(newEgg)
    console.log(eggArray)
    
})





function calcTimeEgg() {
    //Source ica 
    if(sizeForEgg === "small" && boilningForEgg === "soft") {
        time.textContent = "06:00"
        return "06:00"
    }
    if(sizeForEgg === "small" && boilningForEgg === "medium") {
        time.textContent = "08:00"
        return "08:00"
    }
    if(sizeForEgg === "small" && boilningForEgg === "hard") {
        time.textContent = "10:00"
        return "10:00"
    }

    if(sizeForEgg === "medium" && boilningForEgg === "soft") {
        time.textContent = "07:00"
        return "07:00"
    }
    if(sizeForEgg === "medium" && boilningForEgg === "medium") {
        time.textContent = "09:00"
        return "09:00"
    }
    if(sizeForEgg === "medium" && boilningForEgg === "hard") {
        time.textContent = "11:00"
        return "11:00"
    }

    if(sizeForEgg === "large" && boilningForEgg === "soft") {
        time.textContent = "08:00"
        return "08:00"
    }
    if(sizeForEgg === "large" && boilningForEgg === "medium") {
        time.textContent = "10:00"
        return "10:00"
    }
    if(sizeForEgg === "large" && boilningForEgg === "hard") {
        time.textContent = "12:00"
        return "12:00"
    }
}

function addToContainer() {
    container.innerHTML = "";
    for(let egg of eggArray) {
        const theEgg = document.createElement("div");
        const eggsInContainer = document.createElement("div");
        eggsInContainer.classList.add("eggsInContainer");
        
        const size = document.createElement("p");
        size.textContent = egg.size;
        const boilning = document.createElement("p");
        boilning.textContent = egg.boilning;
        eggsInContainer.appendChild(size);
        eggsInContainer.appendChild(boilning);
        
        const timeForEgg = document.createElement("p");
        timeForEgg.classList.add("timeForEgg");
        timeForEgg.textContent = egg.time;
        
        const buttonForEgg = document.createElement("div");
        buttonForEgg.classList.add("buttonForEgg");
        const deletePElement = document.createElement("p");
        deletePElement.textContent = "Delete";
        buttonForEgg.appendChild(deletePElement);
        
        theEgg.appendChild(eggsInContainer);
        theEgg.appendChild(timeForEgg);
        theEgg.appendChild(buttonForEgg);
        
        container.appendChild(theEgg);
    }
}