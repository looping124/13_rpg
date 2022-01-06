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
    new Display(`Round ${this.game.turnLeft}`)
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
    // let ennemies = this.playingPlayers.filter(p => p.name != player.name);
    // console.log(this.playerIndex);
    // let ennemies = this.playingPlayers.slice(this.playerIndex, 1);
    
    let ennemies = this.playingPlayers.slice(this.playerIndex);
    
    new Display(`${player.name}, chose your action :`);
    new DisplayButtons([
      {text:"Normal Attack",action: () => this.normalAttack(player,ennemies[0])},
      {text:"Special Attack",action: () => this.specialAttack(player,ennemies[0])},

      // {text:"Continue",action: () => this.endPlayerTurn()},
    ]);
    
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