//* https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript


function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function() { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
	while (fighter2.health > 0 && fighter1.health > 0) {
		if (fighter1.name === firstAttacker) {
			fighter2.health -= fighter1.damagePerAttack;
			if (fighter2.health >= 0) {
				fighter1.health -= fighter2.damagePerAttack;
			}
		} else {
			fighter1.health -= fighter2.damagePerAttack;
			if (fighter1.health >= 0) {
				fighter2.health -= fighter1.damagePerAttack;
			}
		}
	}

	return fighter2.health > 0 ? fighter2.name : fighter1.name;
}


console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")); // Output: "Lew"