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
let sizeForEgg = "";
let boilningForEgg = "";


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
    if(!(sizeForEgg === "" || boilningForEgg === "")) {
        let newEgg = {
            id:eggId++,
            size: sizeForEgg,
            boilning: boilningForEgg,
            time: calcTimeEgg(),
            running: false
        }
        eggArray.push(newEgg)
        console.log(eggArray)  
        
    } else {

        time.textContent = "Invalid Input"
        time.style.fontSize = "26px"
    }
    

    
})





function calcTimeEgg() {
    //Source ica 
    if(sizeForEgg === "S" && boilningForEgg === "S") {
        bigEgg.style.width = "110px"
        bigEgg.style.height = "170px"
        time.textContent = "06:00"
        time.style.fontSize = "64px"

        
        return "06:00"
    }
    if(sizeForEgg === "S" && boilningForEgg === "M") {
        bigEgg.style.width = "110px"
        bigEgg.style.height = "170px"
        time.textContent = "08:00"
        time.style.fontSize = "64px"

        return "08:00"
    }
    if(sizeForEgg === "S" && boilningForEgg === "H") {
        bigEgg.style.width = "110px"
        bigEgg.style.height = "170px"
        time.textContent = "10:00"
        time.style.fontSize = "64px"

        return "10:00"
    }

    if(sizeForEgg === "M" && boilningForEgg === "S") {
        time.textContent = "07:00"
        bigEgg.style.width = "120px"
        bigEgg.style.height = "180px"
        time.style.fontSize = "64px"

        return "07:00"
    }
    if(sizeForEgg === "M" && boilningForEgg === "M") {
        bigEgg.style.width = "120px"
        bigEgg.style.height = "180px"
        time.textContent = "09:00"
        time.style.fontSize = "64px"

        return "09:00"
    }
    if(sizeForEgg === "M" && boilningForEgg === "H") {
        bigEgg.style.width = "120px"
        bigEgg.style.height = "180px"
        time.textContent = "11:00"
        time.style.fontSize = "64px"

        return "11:00"
    }

    if(sizeForEgg === "L" && boilningForEgg === "S") {
        time.textContent = "08:00"
        bigEgg.style.width = "130px"
        bigEgg.style.height = "190px"
        time.style.fontSize = "64px"

        return "08:00"
    }
    if(sizeForEgg === "L" && boilningForEgg === "M") {
        bigEgg.style.width = "130px"
        bigEgg.style.height = "190px"
        time.textContent = "10:00"
        time.style.fontSize = "64px"

        return "10:00"
    }
    if(sizeForEgg === "L" && boilningForEgg === "H") {
        bigEgg.style.width = "130px"
        bigEgg.style.height = "190px"
        time.textContent = "12:00"
        time.style.fontSize = "64px"

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


let globalIntervalId;

function startCountDown() {
    if (playButton.classList.contains("startTimerStyle")) {
        playButton.classList.remove("startTimerStyle");
        playButton.classList.add("pauseTimerStyle");
        playButton.innerHTML = `<svg class="Icon" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.6667 34.8333V9.16663H33V34.8333H25.6667ZM11 34.8333V9.16663H18.3333V34.8333H11Z" fill="#1D1B20"/>
                                </svg>`;
        isPaused = false; // Återuppta timern
    } else {
        playButton.classList.remove("pauseTimerStyle");
        playButton.classList.add("startTimerStyle");
        playButton.innerHTML = `<svg class="Icon" width="30" height="38" viewBox="0 0 30 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Icon" d="M2.1665 2.5L27.8332 19L2.1665 35.5V2.5Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>`;
        isPaused = true; // Pausa timern
    }

    if (!globalIntervalId) {
        globalIntervalId = setInterval(() => {
            if (isPaused) return;

            for (let egg of eggArray) {
                let [minutes, seconds] = egg.time.split(":").map(Number);

                if (seconds === 0 && minutes === 0) {
                    egg.running = false;
                    document.getElementsByClassName(`timeForEgg ${egg.id}`)[0].textContent = "Klar!";
                    document.getElementsByClassName(`eggsInContainer ${egg.id}`)[0].style.background = "rgba(255, 132, 0, 1)";
                    continue;
                }

                if (seconds === 0) {
                    seconds = 59;
                    minutes -= 1;
                } else {
                    seconds -= 1;
                }

                egg.time = `${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`;
                document.getElementsByClassName(`timeForEgg ${egg.id}`)[0].textContent = egg.time;
            }
        }, 1000);
    }
}

playButton.addEventListener("click", startCountDown);


