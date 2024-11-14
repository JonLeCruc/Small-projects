function rollDice(){
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var dice1 = document.getElementById('img1');
    var dice2 = document.getElementById('img2');

    dice1.setAttribute('src', '/images/dice' + randomNumber1 + '.png');
    dice2.setAttribute('src', '/images/dice' + randomNumber2 + '.png');

    var player1 = document.getElementById('p1').textContent.trim();
    var player2 = document.getElementById('p2').textContent.trim();

    if(randomNumber1 > randomNumber2){
        document.getElementById('title').innerHTML = `${player1} Wins!`;
        $('#points1').append('<li></li>');
    } else if(randomNumber1 == randomNumber2){
        document.getElementById('title').innerHTML = 'Draw!';
    } else {
        document.getElementById('title').innerHTML = `${player2} Wins!`;
        $('#points2').append('<li></li>');
    }
}

function makeEditable(element){
    element.contentEditable = true;
    element.focus();

    element.onblur = function () {
        element.contentEditable = false;
        
        document.getElementById('playerOne').innerHTML = document.getElementById('p1').textContent.trim();
        document.getElementById('playerTwo').innerHTML = document.getElementById('p2').textContent.trim();

        console.log(element)
        if(document.getElementById('title').innerHTML != 'Dice Game'){
            if(element.id == 'p1'){
                document.getElementById('title').innerHTML = document.getElementById('p1').textContent.trim() + ' Wins!';
            } else {
                document.getElementById('title').innerHTML = document.getElementById('p2').textContent.trim() + ' Wins!';
            }
        }
    }
}