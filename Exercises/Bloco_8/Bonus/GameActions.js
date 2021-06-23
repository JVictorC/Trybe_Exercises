const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  let damage = Math.floor(Math.random() * dragon.strength) + 1
  while (damage <= 15 || damage >= dragon.strength) {
    damage = Math.floor(Math.random() * dragon.strength) + 1
  }
  return damage;
}


const warriorDamge = () => {
  const maxDamage = warrior.strength * warrior.weaponDmg
  let damage = Math.floor(Math.random() * maxDamage) + 1
  while (damage <= warrior.strength || damage >= maxDamage) {
    damage = Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg)) + 1
  }
  return damage;
}

const mageDamage = () => {
  let mana = mage.mana
  let damage = 0;
  const maxDamage = mage.intelligence * 2
  if (mana < 15) {
    return "Não possui mana suficient";
  } else {
    damage = Math.floor(Math.random() * maxDamage) + 1
    while (damage <= mage.intelligence || damage >= maxDamage) {
      damage = Math.floor(Math.random() * maxDamage) + 1
    }
    mana -= 15;
  }
  return objectReturn = {
    dan: damage,
    mana: mana
  };
}

const gameActions = {
  warriorTurn: (turnDamageWarrior) => {
    const damage = turnDamageWarrior();
    warrior.damage = damage;
    dragon.healthPoints -= damage
  },
  mageTurn: (turnDamageMage) => {
    const objectMage = turnDamageMage();
    mage.damage = objectMage.dan
    mage.mana = objectMage.mana
    dragon.healthPoints -= objectMage.dan 
  },
  dragonTurn: (turnDamageDragon) => {
    const damage = turnDamageDragon();
    dragon.damage = damage;
    mage.healthPoints -= damage;
    warrior.healthPoints -= damage;
  },
  result: () => {
    console.log(battleMembers);
  }
};

gameActions.warriorTurn(warriorDamge);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
gameActions.result();