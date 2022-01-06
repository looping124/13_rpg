import Display from "./display.js";

export default class Character {
  constructor(name,hp,dmg,mana){
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = 'playing';
    this.shield = 0;
    this.shieldTurns = 0;
    new Display(`${this.name} has been created !`)
  }
  takeDamage(amont){
    amont -= this.shield;
    amont > 0 ? this.hp -= amont : null;
    this.hp <= 0 ? this.status='loser' : null;
    new Display(`${this.name} has now ${this.hp} hp with status ${this.status}`);
  }
  dealDamage(victim,dmg=this.dmg){
    new Display(`${this.name} attacks ${victim.name} with ${dmg} dmg`);
    victim.takeDamage(dmg);
    if (victim.status=='loser') {
      this.mana += 20;
    }
  }
  isWinner(){
    this.status='winner';
  }
}

export class Fighter extends Character {
  constructor(name='Grace',hp=12, dmg=4, mana=40){
    super(name,hp,dmg,mana);
  }
  special(victim){
    this.dealDamage(victim,5) //special attack with 5 damages
    //shield
    //mana
  }
}
export class Paladin extends Character {
  constructor(name='Ulder',hp=16, dmg=3, mana=160){
    super(name,hp,dmg,mana);
  }
}
export class Monk extends Character {
  constructor(name='Moana',hp=8, dmg=2, mana=200){
    super(name,hp,dmg,mana);
  }
}
export class Berzerker extends Character {
  constructor(name='Draven',hp=8, dmg=4, mana=0){
    super(name,hp,dmg,mana);
  }
}
export class Assassin extends Character {
  constructor(name='Carl',hp=6, dmg=6, mana=20){
    super(name,hp,dmg,mana);
  }
}