const player1 = {
  name: "Scorpion",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: "ice",
  attack: function () {
    console.log(`${player1[name]} Fight...`);
  },
};

const player2 = {
  name: "Sonya",
  hp: 80,
  img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  weapon: "whip",
  attack: function () {
    console.log(`${player2[name]} Fight...`);
  },
};

function createPlayer(playerClass, playerName) {
  const $player = document.createElement("div");
  const $progressBar = document.createElement("div");
  const $life = document.createElement("div");
  const $name = document.createElement("div");
  const $character = document.createElement("div");
  const $img = document.createElement("img");

  $img.src = playerName.img;
  $player.classList.add(playerClass);
  $progressBar.classList.add("progerssbar");
  $life.classList.add("life");
  $name.classList.add("name");
  $character.classList.add("character");

  $life.style.width = playerName.hp;
  $name.innerText = playerName.name;

  const $arena1 = document.querySelector(".arena1");

  $arena1.appendChild($player);
  $player.appendChild($progressBar);
  $progressBar.appendChild($life);
  $progressBar.appendChild($name);
  $character.appendChild($img);
  $player.appendChild($character);
}

createPlayer("player1", player1);
createPlayer("player2", player2);
