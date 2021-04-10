$(document).ready(function(){
    const connect4 = new Game("#connectFour");
    $("#restart").click(function(){
        connect4.restartGame();
    })
})