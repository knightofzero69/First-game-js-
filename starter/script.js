'use strict';

const random=function(){
    let y=Math.ceil(Math.random()*20);
    return y;
}



const hints=function(n,y){
    highscore(t);
if(n>y){

    n-y >3 ? document.querySelector('.message').textContent='too high!':document.querySelector('.message').textContent='close but lower!';
    return 1;
}
else  if (n===y) {
    document.querySelector('.message').textContent='Correct!!'
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').textContent=String(n);
    
    return 0;  
} 
else{
    y-n>3 ? document.querySelector('.message').textContent='too low!':document.querySelector('.message').textContent='close but higher!';
    return -1;   
}
}



const scorecounter=function(n){
    let t=Number(document.querySelector('.score').textContent);
    n===0 ? t=t:t-=1;
    if(t>0){
        document.querySelector('.score').textContent = t;
    }
    else{
        document.querySelector('.score').textContent = 0; 
        document.querySelector('.message').textContent='😫 Game over!!!';
    }
    
}


const highscore = function(n){
let scoreM =20;
     scoreM <n ? scoreM=n: scoreM-=1;
     document.querySelector('.highscore').textContent=String(scoreM);
}



let t=random();
console.log(t);

document.querySelector('.check').addEventListener('click',function(){
    const n=Number(document.querySelector('.guess').value);
    let i=20;
        let b=hints(n,t);
        scorecounter(b);


})



document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.score').textContent='20';
    document.querySelector('.guess').value=null;
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('number').textContent='?';


    })
    