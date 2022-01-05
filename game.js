import Character, {Fighter,Paladin,Monk,Berzerker,Assassin} from './character.js';

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
    this.playGame(players);
  }

  playGame(players){
    players.forEach(player => {
      console.log(player);
});
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

