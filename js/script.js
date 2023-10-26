window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  // let game;
  game = new Game();

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    // game = new Game();

    game.start();
  }

  function handleKeydown(event) {
    const key = event.key;
    const possibleKeysstrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];
    if (possibleKeysstrokes.includes(key)) {
      event.preventDefault();

      switch (key) {
        case "ArrowLeft":
          game.player.directionX = -1;
          console.log("Hello arrowleft");
          break;

        case "ArrowUp":
          game.player.directionY = -1;
          console.log("Hello ArrowUp");

          break;

        case "ArrowRight":
          game.player.directionX = 1;
          console.log("Hello ArrowRight");

          break;

        case "ArrowDown":
          game.player.directionY = 1;
          console.log("Hello ArrowDown");

          break;
      }
    }
  }

  window.addEventListener("keydown", handleKeydown);
  // window.addEventListener("keyup", handleKeyup);
};
