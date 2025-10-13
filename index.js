let listPageButton = document.getElementById("listPageButton");
let homePage = document.getElementById("homePage");
let listPage = document.getElementById("listPage");
let homePageButton = document.getElementById("homePageButton");
let addList = document.getElementById("addList");
let time = document.getElementById("time");
let container = document.getElementById("container")
let bigEgg = document.getElementById("bigEgg")
let playButton = document.getElementById("playButton")
//Home and list page
listPageButton.addEventListener("click", function () {
    homePage.style.display = "none";
    listPage.style.display = "block";
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

let eggId = 1;
//Add to egg array
addList.addEventListener("click", function() {
    
    let newEgg = {
        id:eggId++,
        size: sizeForEgg,
        boilning: boilningForEgg,
        time: calcTimeEgg()
    }
    eggArray.push(newEgg)
    console.log(eggArray)

    
})





function calcTimeEgg() {
    //Source ica 
    if(sizeForEgg === "S" && boilningForEgg === "S") {
        bigEgg.style.width = "110px"
        bigEgg.style.height = "170px"
        time.textContent = "06:00"
        
        return "06:00"
    }
    if(sizeForEgg === "S" && boilningForEgg === "M") {
        bigEgg.style.width = "110px"
        bigEgg.style.height = "170px"
        time.textContent = "08:00"
        return "08:00"
    }
    if(sizeForEgg === "S" && boilningForEgg === "H") {
        bigEgg.style.width = "110px"
        bigEgg.style.height = "170px"
        time.textContent = "10:00"
        return "10:00"
    }

    if(sizeForEgg === "M" && boilningForEgg === "S") {
        time.textContent = "07:00"
        bigEgg.style.width = "120px"
        bigEgg.style.height = "180px"
        return "07:00"
    }
    if(sizeForEgg === "M" && boilningForEgg === "M") {
        bigEgg.style.width = "120px"
        bigEgg.style.height = "180px"
        time.textContent = "09:00"
        return "09:00"
    }
    if(sizeForEgg === "M" && boilningForEgg === "H") {
        bigEgg.style.width = "120px"
        bigEgg.style.height = "180px"
        time.textContent = "11:00"
        return "11:00"
    }

    if(sizeForEgg === "L" && boilningForEgg === "S") {
        time.textContent = "08:00"
        bigEgg.style.width = "130px"
        bigEgg.style.height = "190px"
        return "08:00"
    }
    if(sizeForEgg === "L" && boilningForEgg === "M") {
        bigEgg.style.width = "130px"
        bigEgg.style.height = "190px"
        time.textContent = "10:00"
        return "10:00"
    }
    if(sizeForEgg === "L" && boilningForEgg === "H") {
        bigEgg.style.width = "130px"
        bigEgg.style.height = "190px"
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
        eggsInContainer.classList.add(`${egg.id}`)
        
        const size = document.createElement("p");
        size.textContent = egg.size;
        const boilning = document.createElement("p");
        boilning.textContent = egg.boilning;
        eggsInContainer.appendChild(size);
        eggsInContainer.appendChild(boilning);
        
        const timeForEgg = document.createElement("p");
        timeForEgg.classList.add("timeForEgg");
        timeForEgg.classList.add(`${egg.id}`)
        timeForEgg.textContent = egg.time;
        
        const buttonForEgg = document.createElement("div");
        buttonForEgg.classList.add("buttonForEgg");
        buttonForEgg.classList.add(`${egg.id}`)
        const deletePElement = document.createElement("p");
        deletePElement.textContent = "Delete";
        buttonForEgg.appendChild(deletePElement);
        
        theEgg.appendChild(eggsInContainer);
        theEgg.appendChild(timeForEgg);
        theEgg.appendChild(buttonForEgg);
        
        container.appendChild(theEgg);
    }
}


playButton.addEventListener("click", startCountDown)



function startCountDown() {
    for(let egg of eggArray) {
        let time = egg.time;
        let minutes = time.split(":")[0];
        let seconds = time.split(":")[1];
        console.log(minutes);
        console.log(seconds);
        let ms = 30;

        let getTimeText = document.getElementsByClassName(`timeForEgg ${egg.id}`);
        let getEggContainer = document.getElementsByClassName(`eggsInContainer ${egg.id}`)
        let intervalId = setInterval(() => {
            
            seconds = String(seconds).padStart(2, "0");
            if(seconds === "00" && minutes === "00") {
                clearInterval(intervalId)
                getTimeText[0].textContent = "Klar!";
                getEggContainer[0].style.background = "rgba(255, 132, 0, 1)";
                return
            }

            if (seconds === "00") {
                seconds = 59;
                minutes = String(minutes - 1).padStart(2, "0"); 
            } else {
                seconds = seconds - 1; 
                
            }

            getTimeText[0].textContent = `${minutes} : ${String(seconds).padStart(2, "0")}`;
        }, ms);
        
        
    }
}


