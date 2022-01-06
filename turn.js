import Display from './display.js';
export default class Turn{
  constructor(game){
    this.game = game;
    this.startTurn(game);
    this.makeTurn(game);
    this.endTurn(game);
  }
  startTurn(game){
    game.players.sort((a, b) => 0.5 - Math.random()); //Shuffle the players
    this.playingPlayers = this.game.playingPlayers();
    console.log(this.playingPlayers);
    new Display(this.playingPlayers);
    console.log(`startTurn from round ${game.turnLeft}`);
    new Display(`startTurn from round ${game.turnLeft}`);
    game.players.forEach(player => {
      console.log(player);
      new Display(player);
    });
  }

  makeTurn(){
    console.log(`makeTurn from round ${this.game.turnLeft}`);
    new Display(`makeTurn from round ${this.game.turnLeft}`);
    let continueGame = true;
    this.playingPlayers.forEach(player => {
      if (continueGame == false) {
      }
      else if (this.game.gameIsPlaying()) {
        this.playerTurn(player)
      } else {
        continueGame = false;
      }
    });
  }

  playerTurn(player){
    let ennemies = this.game.playingPlayers().filter(p => p.name != player.name);
    console.log(`${player.name} can attack ${ennemies[0].name}`);
    new Display(`${player.name} can attack ${ennemies[0].name}`);
    player.dealDamage(ennemies[0]);
  }

  endTurn(){
    console.log(`endTurn from round ${this.game.turnLeft}`);
    new Display(`endTurn from round ${this.game.turnLeft}`);
    this.shields(this.game);
  }




  shields(){
    this.game.players.forEach(player => {
      if (player.shieldTurns > 0 ) {
        player.shieldTurns == 1 ? player.shield = 0 : null;
        player.shieldTurns --;
      }
    });
  }
}