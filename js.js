function startGame(){
    gameLoop()
    
}
//Переменна подсчета количества прогонов
var count = 0;
var personVis = false; //переменная переключателя
var score = 0; //переменная подсчета баллов



function gameLoop(){
    personVis = !personVis //переключение видимости
    //условие проверки на переключение
    if(personVis == true){
        var classToset = "character visible"
    }
    else{
        var classToset = "character hidden"
    }
    //Загрузка области где распологается блоки
    var gamezone = document.getElementById("gamezone");
    //применение  стиля для всех блоков
    for(  i = 0 ; i<8; i++){
        gamezone.children[i].className = classToset;
        gamezone.children[i].innerHTML = "Персонаж";  //добавление ко всем div-кам текста Персонаж
        //при нажатии на персонажа отнимается 2 балла
        gamezone.children[i].onclick = function(){score-=2; 
        document.getElementById("scorediv").innerHTML = score;};
           
        
    }
    //выбор случайного персонажа
    var randomNum = Math.floor(Math.random()*8) +1; //
    //Приклепление слово лишний к рандомному блоку 
    gamezone.children[randomNum-1].innerHTML = "Лишний";
    //при нажатии на лишнего добавляется 1 балл
    gamezone.children[randomNum-1].onclick = function(){score+=1; 
    document.getElementById("scorediv").innerHTML = score;};
    // Применение внешнего вида лишнему
    gamezone.children[randomNum-1].className = classToset + " characterFake ";
    count++;
    if (count < 18){
        setTimeout(gameLoop, personVis ? 1000:3000);
    
    }
    else{
        alert("Игра окончена");
        alert("Твой счет" +score);
    }
    
}

