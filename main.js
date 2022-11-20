function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon=${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon=${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

const gamesList = [
  {
    date: "20/11",
    day: "Domingo",
    games: [
      {
        hour: "13:00",
        player1: "qatar",
        player2: "ecuador",
      },
    ],
  },
  {
    date: "21/11",
    day: "Segunda-feira",
    games: [
      {
        hour: "10:00",
        player1: "england",
        player2: "iran",
      },
      {
        hour: "13:00",
        player1: "senegal",
        player2: "netherlands",
      },
      {
        hour: "16:00",
        player1: "united states",
        player2: "wales",
      },
    ],
  },
  {
    date: "22/11",
    day: "Terça-feira",
    games: [
      {
        hour: "07:00",
        player1: "argentina",
        player2: "saudi arabia",
      },
      {
        hour: "10:00",
        player1: "denmark",
        player2: "tunisia",
      },
      {
        hour: "13:00",
        player1: "mexico",
        player2: "poland",
      },
      {
        hour: "16:00",
        player1: "france",
        player2: "australia",
      },
    ],
  },
  {
    date: "25/11",
    day: "Sexta-feira",
    games: [
      {
        hour: "07:00",
        player1: "wales",
        player2: "iran",
      },
      {
        hour: "10:00",
        player1: "qatar",
        player2: "senegal",
      },
      {
        hour: "13:00",
        player1: "senegal",
        player2: "netherlands",
      },
      {
        hour: "16:00",
        player1: "england",
        player2: "united states",
      },
    ],
  },
]

document.querySelector("#cards").innerHTML = gamesList
  .map((gameDay) => {
    return createCard(
      gameDay.date,
      gameDay.day,
      gameDay.games
        .map((game) => createGame(game.player1, game.hour, game.player2))
        .join(" ")
    )
  })
  .join(" ")

// document.querySelector("#cards").innerHTML =
//   createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) +
//   createCard(
//     "28/11",
//     "segunda",
//     createGame("switzerland", "13:00", "brazil") +
//       createGame("portugal", "16:00", "uruguay")
//   ) +
//   createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon")) +
//   createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) +
//   createCard(
//     "28/11",
//     "segunda",
//     createGame("switzerland", "13:00", "brazil") +
//       createGame("portugal", "16:00", "uruguay")
//   ) +
//   createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"))
