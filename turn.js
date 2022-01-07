import Display, {DisplayButtons} from './display.js';
export default class Turn{
  constructor(game){
    this.game = game;
    this.playerIndex = 0;
    this.playingPlayers = this.game.playingPlayers();
    this.startTurn(game);
    
    // this.endTurn(game);
  }
  startTurn(game){
    
    this.playingPlayers.sort((a, b) => 0.5 - Math.random()); //Shuffle the players
    new Display(`ROUND ${game.turnLeft}`);
    game.players.forEach(player => {
      new Display(`${player.name} is ${player.status} with ${player.hp} hp`);
    });
    new Display('**')
    this.makeTurn();
  }

  makeTurn(){
    let continueGame = true;
      if (continueGame == false) {
      }
      else if (this.game.gameIsPlaying()) {
        this.playerTurn(this.playingPlayers[this.playerIndex]);
      } else {
        continueGame = false;
      }
    }

  playerTurn(player){

    let ennemies = this.playingPlayers.filter(p => p != player);
    new Display(`${player.name}, chose your action :`);
    ennemies.forEach(ennemie => {
      new DisplayButtons([
        {text:`Normal Attack on ${ennemie.name}`,action: () => this.normalAttack(player,ennemie)},
        {text:`Special Attack on ${ennemie.name}`,action: () => this.specialAttack(player,ennemie)},
      ]);
    });

    
  }



  normalAttack(player,target){
  
    player.dealDamage(target);
    this.game.gameIsPlaying() ? this.endPlayerTurn() : this.game.endGame();
  }

  specialAttack(player,target){
    player.special(target);
    this.game.gameIsPlaying() ? this.endPlayerTurn() : this.game.endGame();
  }

  endPlayerTurn(){
    this.playerIndex ++;
    this.playerIndex < this.playingPlayers.length ? this.makeTurn(): this.endTurn();
    
  }

  endTurn(){
    new Display(`endTurn from round ${this.game.turnLeft}`);
    this.shields(this.game);
    this.game.turnLeft-=1;
    new Display(`------------------`);
    this.game.endTurn();
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