function createGame(player1, hour, player2){
    return`
    <li>
    <img src="./img/${player1}.svg" alt="bandeira do ${player1} "/>
    <strong>${hour}</strong>
    <img src="./img/${player2}.svg" alt="bandeira do ${player2}"/>

</li>
    `
}
let delay= -0.4;

function createCard(date, day, games){
    delay = delay + 0.4;
    return`
    <div class="card" style="animation-delay: ${delay} ">
        <h2>${date}<span>${day} </span> </h2>
        <ul>
          ${games}
        </ul>

    </div>
    `
}

document.querySelector("#cards").innerHTML =


createCard("24/11", "quinta", createGame('Switzerland', '07:00', 'Cameroon') +  createGame('Portugal', '13:00', 'Ghana')+ createGame('Brasil', '16:00', 'Serbia'))+

createCard("28/11", "segunda",  createGame('SouthKorea', '08:00', 'Ghana')+ createGame('Brasil', '13:00', 'Switzerland') +  createGame('Portugal', '16:00', 'Uruguai'))+

createCard("02/12", "sexta", createGame('Brasil', '16:00', 'Cameroon')+ createGame('Hungary', '13:00', 'Argentina')+ createGame('Colombia', '20:00', 'Japao'))



