var anmationElements=document.querySelectorAll(".show-on-scroll")

function HandelElement(element){
    var react=element.getClientRects()[0]
    var heightScreen=window.innerHeight

    if(!(react.bottom<0||react.top>heightScreen)){
        element.classList.add("start");
    }
    else{
        element.classList.remove("start");
    }
}

function checkAnimation(){
    anmationElements.forEach(el =>{
    HandelElement(el);
   })
}
window.onscroll=checkAnimation