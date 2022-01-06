import Character, {Fighter,Paladin,Monk,Berzerker,Assassin} from './character.js';
import Turn from './turn.js';
import Display, {DisplayButtons} from './display.js';

export default class Game {
  constructor(turnLeft=10){
    this.turnLeft = turnLeft;
    this.starGame();
  }

  starGame(){
    let players =[];
    let player1 = new Fighter;
    players.push(player1);
    let player2 = new Paladin;
    players.push(player2);
    this.players = players;
    this.playGame();
    
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
    let tata ="init"
    console.log("playGame from new Game");
    new Display("playGame from new Game 1");
    new Display("playGame from new Game 2");
    new Display("Choisicez votre classe :");
    let toto = new DisplayButtons([{text:"1",action: function() {tata= "tata";}},{text:"2",action: this.action2},{text:"3",action: this.action3}]);
    new Display(tata);

    while (this.gameIsPlaying()) {
      this.newTurn();
    }
    console.log('6');
    this.endGame()
  }

  gameIsPlaying(){
    let playersPlaying = this.players.filter(player => player.status == 'playing');
    if (this.playingPlayers().length <= 1) {
      return false
    } else if (this.turnLeft == 0) {
      console.log('2');
      return false
    }
    else {
      return true
    }
  }

  newTurn(){
    new Turn(this);
    this.turnLeft-=1;
    console.log(`------------------`);
  }

  endGame(){
    console.log(`THE GAME IS OVER`);
  }

  playingPlayers(){
    return this.players.filter(player => player.status === 'playing');
  }
}

