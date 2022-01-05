import Character, {Fighter,Paladin,Monk,Berzerker,Assassin} from './character.js';

export default class Game {
  constructor(turnLeft=10){
    this.turnLeft = turnLeft;
    this.starGame;
  }

  starGame(){
    let players =[];

    this.playGame(players);
  }

  playGame(){

  }

  newTurn(players){
    new Turn(players);
    this.turnLeft-=1;
    if (turnLeft==0) {
      endGame();
    }
  }

  endGame(){

  }
}

