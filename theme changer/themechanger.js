const a=document.querySelectorAll(".button");
const body=document.querySelector("body");
a.forEach(function(button){
    button.addEventListener('click',function(e){
        body.style.background= button.id
    })
})