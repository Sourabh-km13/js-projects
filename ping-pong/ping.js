document.addEventListener('DOMContentLoaded',()=>{
    let start= document.getElementById('start')
    start.setAttribute('status','run')
    start.addEventListener('click',()=>{
        if(start.getAttribute('status')=='run'){
            start.textContent='stop'
            start.setAttribute('status','stop')
            let paddle=document.getElementById('paddle')
            let table=document.getElementById('table')
            let ball=document.getElementById('ball')
            let ballX=100
            let ballY=100
            let score=0
            let scoreBar=document.getElementById('score')
            setInterval(() => {
                score++
                scoreBar.textContent=`Score:${score}`
            }, 1000);
            ball.style.top=`${ballY}px`
            ball.style.left=`${ballX}px`
            let dx=2
            let dy=2
        
           
        
            setInterval(() => {
                ballX+=dx
                ballY+=dy
                ball.style.top=`${ballY}px`
                ball.style.left=`${ballX}px`
                
                if(ballX<paddle.offsetLeft+paddle.offsetWidth
                    && ballY>paddle.offsetTop
                    && ballY+ball.offsetHeight<paddle.offsetHeight+paddle.offsetTop){
                    
                    dx*=-1
                }
                
                if(ballX>table.offsetWidth-ball.offsetWidth||ballX<=0){
                    dx*=-1
                }
                if(ballY>table.offsetHeight-ball.offsetHeight||ballY<=0){
                    dy*=-1
                }
        
                if(ballX==0){
                    alert('you Loss')
                    location.reload()
                }
            }, 1);
        
            let paddleY=0
            let dpy=10        
            document.addEventListener('keydown',(event)=>{
                event.preventDefault
                if(event.keyCode==38 && paddleY>0){
                    paddleY+=(-1)*dpy
                }
                else if(event.keyCode==40&& paddleY<table.offsetHeight-paddle.offsetHeight   ){
                    paddleY+=dpy
                }
                paddle.style.top=`${paddleY}px`
            })
        
            document.addEventListener('mousemove',(event)=>{
                let pointerFromtop=event.clientY
                let tableFromtop=table.offsetTop
                let pointer=pointerFromtop-tableFromtop-paddleY/2
        
                paddleY=pointer
                if(paddleY<=0 || paddleY>table.offsetHeight-paddle.offsetHeight) return;
                paddle.style.top=`${paddleY}px`
            })
            
        }
        else if(start.getAttribute('status')=='stop'){

            start.textContent='start'
            start.setAttribute('status','run')
            location.reload()
            alert('newgame')
        }
    })
    })