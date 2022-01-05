import Character, {Fighter,Paladin,Monk,Berzerker,Assassin} from './character.js';
import Turn from './turn.js';

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

  playGame(){
    console.log("playGame from new Game");
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

