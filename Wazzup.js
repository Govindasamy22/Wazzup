let dp=document.querySelector(".Features");
let nav = document.querySelector("#out-nav");
let dp2 = document.querySelector(".drop");
let featurescount=0;

dp.addEventListener("click",()=>{

    if(featurescount%2==0){
    nav.style.background="white";
    dp2.style.visibility="visible";
    dp.removeChild(dp.lastChild);
    dp.appendChild(document.createElement("i")).className="fa-solid fa-angle-up";
    }else{
        nav.style.background="#fcf5eb";
        dp2.style.visibility="hidden";
         dp.removeChild(dp.lastChild);
    dp.appendChild(document.createElement("i")).className="fa-solid fa-angle-down";

    
    }
featurescount++;
});

//! Going on to Lazy loading!!!! 
let loadbax = Array.from( document.querySelectorAll(".late")); 
window.addEventListener("scroll",load)
function load(){
    console.log(window.innerHeight);
    let triggerbottom = window.innerHeight/5*4.6;
    console.log(triggerbottom);
    loadbax.forEach((a)=>{
        const boxtop = a.getBoundingClientRect().top;
    console.log(boxtop);

        if(boxtop < triggerbottom){
            a.classList.add("show");
        }
        else{
            a.classList.remove("show");
        }

        
    })
    // console.log(triggerbottom);
}




