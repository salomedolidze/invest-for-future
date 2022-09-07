// burger menu
let burrger = document.querySelector(".burger")
let main = document.querySelector(".main-menu_div");
let contact = document.querySelector(".contact")
let downicon = document.querySelector(".hah")
let upicon = document.querySelector(".hah1")
let blog = document.querySelector(".blogg")


let drop_down = document.querySelector(".drop_down")
let downn = document.querySelector(".down")
if(burrger){
    burrger.addEventListener("click", function () {
        main.classList.toggle("toggle-nav")
    })
}


let width = window.screen.availWidth;
console.log(width)
if (width <= 1198) {
    drop_down.addEventListener("click", function () {

        downn.classList.toggle("opacity_1");
        contact.classList.toggle("marg_top");
        downicon.classList.toggle("hah_after");
        upicon.classList.toggle("hah1_after")
        blog.classList.toggle("orange")

    })
}



// view_all



let view_all = document.querySelector(".view_all")
let cards = document.querySelector(".js_none")
if (view_all){
    view_all.addEventListener("click", function () {
        cards.classList.toggle("js_flex")
        if (view_all.innerText === "View All Pachage") {
            view_all.innerText = "See Less"
        } else {
            view_all.innerText = "View All Pachage"
        }
    
    })
}





// package calculator
let package = document.querySelector(".package")
let invest = document.querySelector(".invest")
let profit = document.querySelector(".profit")


if(invest){
    invest.addEventListener("keypress", function (event) {
        let val = invest.value;
        if (event.key === "Enter") {
            if (package.value == "Basic Package") {
                let val = invest.value;
    
                profit.value = val * 0.1
                invest.value = ""
            } else if (package.value == "standart Package") {
                let val = invest.value;
                profit.value = val * 0.2
                invest.value = ""
            }
            else if (package.value == "silver Package") {
                let val = invest.value;
                profit.value = val * 0.4
                invest.value = ""
            }
            else if (package.value == "premium Package") {
                let val = invest.value;
                profit.value = val * 0.5
                invest.value = ""
            }
            else if (package.value == "platinium Package") {
                let val = invest.value;
                profit.value = val * 0.8
                invest.value = ""
            } else {
                alert("choose the right one")
            }
        }
    })
    
}




// question

let bttn = document.querySelectorAll("#question")
let h = document.querySelectorAll("quest_card")
let non = document.querySelectorAll(".none")



if(bttn){
    for (var i = 0; i < bttn.length; i++) {
        bttn[i].addEventListener("click", function () {
            let content = this.nextElementSibling;
            this.classList.toggle("active_")
            content.classList.toggle("block")
    
    
            // console.log(content)
    
        })
    }
    
}



// btn class active
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let s = document.getElementsByClassName(".table1")

if(btn2){
    btn2.addEventListener("click", function () {
        btn2.classList.add("act");
        btn1.classList.remove("act");
    
    })
    btn1.addEventListener("click", function () {
        btn1.classList.add("act")
        btn2.classList.remove("act")
    
    })
    
    
    
}



// scrool bar


function scrollheader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}

window.addEventListener("scroll", scrollheader)














