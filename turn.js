export default class Turn{
  constructor(players){
    this.players = players;
    this.startTurn(players);
    this.makeTurn(players);
    this.endTurn(players);
  }
  startTurn(players){
    
  }

  endTurn(players){
    shields(players);
  }
  shields(players){
    players.forEach(player => {
      if (player.shieldTurns > 0 ) {
        player.shieldTurns == 1 ? player.shield = 0 : null;
        player.shieldTurns --;
      }
    });
  }
}