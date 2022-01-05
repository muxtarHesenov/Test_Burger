// NAVBAR

window.addEventListener("scroll", function(){
    var nav = this.document.getElementById("idNavbar");
    var li = this.document.getElementsByClassName("tColorChangers");
    console.log(li);
    nav.classList.toggle("tWhiteNav", window.scrollY > 0);

    for(let i = 0; i < li.length; i++){
        li[i].classList.toggle("tBlackItem", window.scrollY > 0);
        console.log("for")
    }
})



function tDropDown(){
    var control = document.getElementById("tCheck");
    var drop =  document.getElementById("id_dropdown");
    if(!control.checked){
       drop.style.top = "90px";
    }
    else{
        drop.style.top = "-700px";
    }
}

function fScrollUp(){
    window.scrollTo(0, 0);
}


// END NAVBAR





var myBurger = document.getElementById("myBurger")
var myBurgerT = document.getElementById("myBurgerT")

var mySides = document.getElementById("mySides")
var mySidesT = document.getElementById("mySidesT")

var mySalad = document.getElementById("mySalads")
var mySaladT = document.getElementById("mySaladT")

var myDisserts = document.getElementById("myDisserts")
var myDissertsT = document.getElementById("myDissertsT")




var img1 = document.getElementById("img1")
var img2 = document.getElementById("img2")
var img3 = document.getElementById("img3")
var img4 = document.getElementById("img4")
var img5 = document.getElementById("img5")
var img6 = document.getElementById("img6")
var img7 = document.getElementById("img7")
var img8 = document.getElementById("img8")


var T1 = document.getElementById("T1")
var T2 = document.getElementById("T2")
var T3 = document.getElementById("T3")
var T4 = document.getElementById("T4")
var T5 = document.getElementById("T5")
var T6 = document.getElementById("T6")
var T7 = document.getElementById("T7")
var T8 = document.getElementById("T8")



var b1 = document.getElementById("b1")
var b2 = document.getElementById("b2")
var b3 = document.getElementById("b3")
var b4 = document.getElementById("b4")
var b5 = document.getElementById("b5")
var b6 = document.getElementById("b6")
var b7 = document.getElementById("b7")
var b8 = document.getElementById("b8")




// BURgER FUNCTION

function burgerFunction() {
    myBurger.style.color = "red"
    myBurgerT.style.color = "#283034"

    img1.src = "img/burger-01.png"
    img2.src = "img/burger-02.png"
    img3.src = "img/burger-03.png"
    img4.src = "img/burger-04.png"
    img5.src = "img/burger-05 (1).png"
    img6.src = "img/burger-06 (1).png"
    img7.src = "img/burger-07.png"
    img8.src = "img/burger-08.png"
    
    T1.innerHTML = "CRISPY CHICKEN"
    T2.innerHTML = "ULTIMATE BACON"
    T3.innerHTML = "SMOKEY HOUS"
    T4.innerHTML = "TURKEY BURGER"
    T5.innerHTML = "BLACK SHEEP"
    T6.innerHTML = "DOOBLE BURGER"
    T7.innerHTML = "CLASSIC BURGER"
    T8.innerHTML = "VEGAN BURGER"


    mySides.style.color = "#aaa"
    mySidesT.style.color = "#aaa"

    mySalads.style.color = "#aaa"
    mySaladsT.style.color = "#aaa"

    myDisserts.style.color = "#aaa"
    myDissertsT.style.color = "#aaa"
}


// SIDES FUNCTION

function sidesFunction() {
    myBurger.style.color = "#aaa"
    myBurgerT.style.color = "#aaa"

    mySides.style.color = "red"
    mySidesT.style.color = "#283034"

    img1.src = "imgSides/side-01.png"
    img2.src = "imgSides/side-02.png"
    img3.src = "imgSides/side-03.png"
    img4.src = "imgSides/side-04.png"
    img5.src = "imgSides/side-05.png"
    img6.src = "imgSides/side-06.png"
    img7.src = "imgSides/side-07.png"
    img8.src = "imgSides/side-08.png"

    T1.innerHTML = "ONION RINGS"
    T2.innerHTML = "FRENCH FRIES"
    T3.innerHTML = "MOZZERELLA STICKS"
    T4.innerHTML = "CHICKEN NUGGETS"
    T5.innerHTML = "CHICKEN NUGGETS"
    T6.innerHTML = "CHICKEN NUGGETS"
    T7.innerHTML = "GRILLED CHICKEN"
    T8.innerHTML = "BUFFALO WING"

    mySalads.style.color = "#aaa"
    mySaladsT.style.color = "#aaa"

    myDisserts.style.color = "#aaa"
    myDissertsT.style.color = "#aaa"
}


// SALADS FUNCTION

function saladsFunction() {
    myBurger.style.color = "#aaa"
    myBurgerT.style.color = "#aaa"

    mySides.style.color = "#aaa"
    mySidesT.style.color = "#aaa"

    mySalads.style.color = "red"
    mySaladsT.style.color = "#283034"

    img1.src = "imgSalads/salad-01.png"
    img2.src = "imgSalads/salad-02.png"
    img3.src = "imgSalads/salad-03.png"
    img4.src = "imgSalads/salad-04.png"
    img5.src = "imgSalads/salad-04.png"
    img6.src = "imgSalads/salad-04.png"
    img7.src = "imgSalads/salad-01.png"
    img8.src = "imgSalads/salad-02.png"

    T1.innerHTML = "GREEK SALAD"
    T2.innerHTML = "CHICKEN SALAD"
    T3.innerHTML = "SPINACH SALAD"
    T4.innerHTML = "SEAFOD SALAD"
    T5.innerHTML = "SEAFOD SALAD"
    T6.innerHTML = "CHICKEN NUGGETS"
    T7.innerHTML = "SPINACH SALAD"
    T8.innerHTML = "GREEK SALAD"
    
    myDisserts.style.color = "#aaa"
    myDissertsT.style.color = "#aaa"


    b1.style.marginBottom = "70px"
    b2.style.marginBottom = "70px"
    b3.style.marginBottom = "70px"
    b4.style.marginBottom = "70px"
    b5.style.marginBottom = "70px"
    b6.style.marginBottom = "70px"
    b7.style.marginBottom = "70px"
    b8.style.marginBottom = "70px"
}


// DESSERTS FUNCTION

function dessertsFunction() {
    myBurger.style.color = "#aaa"
    myBurgerT.style.color = "#aaa"

    mySides.style.color = "#aaa"
    mySidesT.style.color = "#aaa"

    mySalads.style.color = "#aaa"
    mySaladsT.style.color = "#aaa"
    
    myDisserts.style.color = "#aaa"
    myDissertsT.style.color = "#aaa"

    myDisserts.style.color = "red"
    myDissertsT.style.color = "#283034"

    img1.src = "imgDesserts/dessert-01.png"
    img2.src = "imgDesserts/dessert-02.png"
    img3.src = "imgDesserts/dessert-03.png"
    img4.src = "imgDesserts/dessert-04.png"
    img5.src = "imgDesserts/dessert-04.png"
    img6.src = "imgDesserts/dessert-03.png"
    img7.src = "imgDesserts/dessert-01.png"
    img8.src = "imgDesserts/dessert-02.png"

    T1.innerHTML = "STRAWBERY CAKEN"
    T2.innerHTML = "BELGIAN WAFFLE"
    T3.innerHTML = "CHEESECAKE"
    T4.innerHTML = "CHOKOLATE CAKE"
    T5.innerHTML = "CHOKOLATE CAKE"
    T6.innerHTML = "CHEESECAKE"
    T7.innerHTML = "STRAWBERY CAKEN"
    T8.innerHTML = "BELGIAN WAFFLE"
}