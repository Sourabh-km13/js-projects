const time=document.querySelector(".box");
const box=document.querySelector(".time")
setInterval(function(){
    const a=new Date();
    time.innerHTML=(a.toLocaleTimeString ());
   
},1000)
