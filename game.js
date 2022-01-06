import Character, {Fighter,Paladin,Monk,Berzerker,Assassin} from './character.js';
import Turn from './turn.js';
import Display, {DisplayButtons} from './display.js';

export default class Game {
  constructor(turnLeft=10){
    this.turnLeft = turnLeft;
    this.starGame();
    this.players = [];
  }

  starGame(){
    new Display('Start game :')
    new Display('Choose player 1\'s class:')
    new DisplayButtons([
      {text:"Fighter",action: () => this.createPlayer("Fighter")},
      {text:"Paladin",action: () => this.createPlayer("Paladin")},
      {text:"Monk",action: () => this.createPlayer("Monk")},
      {text:"Berzerker",action: () => this.createPlayer("Berzerker")},
      {text:"Assassin",action: () => this.createPlayer("Assassin")},

      {text:"Start Game",action: () => this.playGame()},
    ]);
  }

  createPlayer(playerClass){
    switch (playerClass) {
      case "Fighter":
        this.players.push(new Fighter);
        break;

      case "Paladin":
        this.players.push(new Paladin);
        break;

      case "Monk":
        this.players.push(new Monk);
        break;

      case "Berzerker":
        this.players.push(new Berzerker);
        break;

      case "Assassin":
        this.players.push(new Assassin);
        break;
    
      default:
        break;
    }
  }

  action1(){
    new Display("ACTION 1")
  }
  action2(){
    new Display("ACTION 2")
  }
  action3(){
    new Display("ACTION 3")
  }

  playGame(){

    new Display("playGame from new Game ");

    // let toto = new DisplayButtons([{text:"1",action: function() {tata= "tata";}},{text:"2",action: this.action2},{text:"3",action: this.action3}]);


    while (this.gameIsPlaying()) {
      this.newTurn();
    }
  
    this.endGame()
  }

  gameIsPlaying(){
    let playersPlaying = this.players.filter(player => player.status == 'playing');
    if (this.playingPlayers().length <= 1) {
      return false
    } else if (this.turnLeft == 0) {

      return false
    }
    else {
      return true
    }
  }

  newTurn(){
    new Turn(this);
    this.turnLeft-=1;
    new Display(`------------------`);
  }

  endGame(){
    new Display(`THE GAME IS OVER`);
  }

  playingPlayers(){
    return this.players.filter(player => player.status === 'playing');
  }
}

