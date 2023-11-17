


let tabs=document.querySelectorAll(".tabs li");
let tabsArray=Array.from(tabs);
let divs=document.querySelectorAll(".content > div");
let divsArray=Array.from(divs);


tabsArray.forEach((ele) => {
    ele.addEventListener("click", function(e){
        tabsArray.forEach((ele)=>{
            ele.classList.remove("active")
        });
        e.currentTarget.classList.add("active");
        divsArray.forEach((div)=>{
            div.style.display="none";
        });
        document.querySelector(e.currentTarget.dataset.cont).style.display="block";

    });
    
});






/*//my solution and so true

let listli=document.querySelectorAll(".tabs li");
let divs=document.querySelectorAll(".content div");

listli.forEach((li) => {
    li.addEventListener("click",activadd);
    li.addEventListener("click", appeardiv);
    
});

function activadd (){
    listli.forEach((li)=>{
        li.classList.remove("active");
        this.classList.add("active")

    })
}

function appeardiv (){
    divs.forEach((div)=>{
        div.style.display="none";
    })

    // document.querySelectorAll(this.dataset.cont).forEach((div)=>{
    //     div.style.display="block";

    // })
    document.querySelector(this.dataset.cont).style.display="block";

    
}*/

