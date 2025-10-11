let listPageButton = document.getElementById("listPageButton")
let homePage = document.getElementById("homePage") 
let listPage = document.getElementById("listPage")
let homePageButton = document.getElementById("homePageButton")




//Home and list page
listPageButton.addEventListener("click", function () {
    homePage.style.display = "none";
    listPage.style.display = "block";
});
homePageButton.addEventListener("click", function() {
    homePage.style.display = "block"
    listPage.style.display = "none"
    console.log("clikc")
})

