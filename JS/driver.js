import {Data} from "./data.js"

// parameters to be passed to the map: https://developers.google.com/maps/documentation/embed/embedding-map
var api = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=35&gsrsearch="


let frm = document.querySelector("iframe")
let input = document.querySelector(".input")
let output = document.querySelector(".output")
let cList = document.querySelector(".cList")

let searchBtn = document.querySelector(".search")

let flag = document.querySelector(".flag")


function handleSearch(inputvalue) {

    if(inputvalue){ 
    localStorage.setItem("country", inputvalue)
   
    window.location.href = 'https://shubhambawner.github.io/Country_Finder/components/searchpage.html'
    }

}
let list = document.querySelector(".list-group")
function ipdriver(){
    //console.log("IP DRIVER", input.value)
    list.innerHTML = ""
    
    if(input.value.length>=2){ 
    let sl = []
    for(let i in Data){
        
        if(i.toLowerCase().includes(input.value.toLowerCase())){
            sl.push(i)
        }
    }
    
    for(let i in sl){
        let li = document.createElement("li")
        li.className = "list-group-item listItem"
        li.innerHTML = sl[i]
        li.addEventListener("click", function(){
            handleSearch(sl[i])
        })
        list.appendChild(li)
    }
}
}
input.addEventListener("keyup",()=>{ ipdriver()}, false)
searchBtn.addEventListener("click",()=>{ handleSearch(input.value)})

function chainer(i){
   
}

for (let i in Data) {

    if(cList)
    cList.innerHTML+=`<div class="listItem" id=${Data[i]} >${i}</div>`
}

let cv = document.querySelectorAll(".listItem")
cv.forEach((element)=>{
    element.addEventListener("click",()=>{
        input.value = element.innerHTML
        handleSearch(element.innerHTML)
    })
})
//////////////////////////////////////////////////////////////////////////

