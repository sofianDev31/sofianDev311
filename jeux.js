let container = document.querySelector('.container');
let btn = document.querySelector('.start_btn');
let scoreContainer= document.querySelector('.score');
let timeContainer= document.querySelector('.time');

btn.onclick = function(){
    let score = 0;
    let time = 20;
    container.innerHTML = "";

    let interval = setInterval(function showTarget (){
        //sible
        let target = document.createElement('img');
        target.id="target";
        target.src='uber.png'
        container.appendChild(target);
        target.style.top = Math.random() * (500 - target.offsetHeight)+ 'px'; //offsetHeight permet au target de pas dépasser container
        target.style.left = Math.random() * (600- target.offsetWidth) + 'px';

        //disparition de la cible
        setTimeout(function(){
            target.remove();
        },2000)

        //quand clique target
        target.onclick = function(){
            score += 1;
            target.style.display = 'none' ;

        }
        time -= 1 ;

        //afficher plus d'info 

        scoreContainer.innerHTML = `score: ${score}`;
        timeContainer.innerHTML = `time: ${time}`;

        //fin du jeux 
        if (time == 0){
            clearInterval(interval);
            
            container.innerHTML =`score: ${score}`;
            
           
        }




    }, 1000);


}