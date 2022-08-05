export const units = [
  {
    "name": "Infantry",
    "move": 8,
    "attackRange": 0,
    "footprint": "standard",
    "defaultStrength": [],
    "defaultWeakness": [],
    "strength": [],
    "weakness": [],
    "cost": 250,
    "costMultiplier": 1
  },
  {
    "name": "Missile Troops",
    "move": 8,
    "attackRange": 24,
    "footprint": "standard",
    "defaultStrength": [],
    "defaultWeakness": [],
    "strength": [],
    "weakness": [],
    "cost": 200,
    "costMultiplier": 1
  },
  {
    "name": "Foot Knights",
    "move": 8,
    "attackRange": 0,
    "footprint": "standard",
    "defaultStrength": [],
    "defaultWeakness": [],
    "strength": [],
    "weakness": [],
    "cost": 400,
    "costMultiplier": 2
  },
  {
    "name": "Monstrous Infantry",
    "move": 10,
    "attackRange": 0,
    "footprint": "standard",
    "defaultStrength": [],
    "defaultWeakness": [],
    "strength": [],
    "weakness": [],
    "cost": 450,
    "costMultiplier": 2
  },
  {
    "name": "Light Cavalry",
    "move": 12,
    "attackRange": 6,
    "footprint": "standard",
    "defaultStrength": [
      {
        "name": "Nimble",
        "cost": 0,
        "ignoreMultiplier": true,
        "description": "This unit may reform for 2 movement points."
      }
    ],
    "defaultWeakness": [],
    "strength": [],
    "weakness": [],
    "cost": 250,
    "costMultiplier": 1
  },
  {
    "name": "Heavy Cavalry",
    "move": 8,
    "attackRange": 0,
    "footprint": "standard",
    "defaultStrength": [
      {
        "name": "Devastating Charge",
        "cost": 0,
        "ignoreMultiplier": true,
        "description": "While this unit has the Charged strength, it may decrease its target number by one, to a minimum of 2, when attacking in close combat."
      }
    ],
    "defaultWeakness": [],
    "strength": [],
    "weakness": [],
    "cost": 500,
    "costMultiplier": 2
  },
  {
    "name": "Monster",
    "move": 8,
    "attackRange": 0,
    "footprint": "standard",
    "defaultStrength": [
      {
        "name": "Large",
        "cost": 0,
        "ignoreMultiplier": true,
        "description": "When drawing line of sight from or to this unit, ignore other units unless they too are Large ."
      }
    ],
    "defaultWeakness": [],
    "strength": [],
    "weakness": [],
    "cost": 700,
    "costMultiplier": 2
  },
  {
    "name": "Chariot",
    "move": 8,
    "attackRange": 0,
    "footprint": "standard",
    "defaultStrength": [
      {
        "name": "Devastating Charge",
        "cost": 0,
        "ignoreMultiplier": true,
        "description": "While this unit has the Charged strength, it may decrease its target number by one, to a minimum of 2, when attacking in close combat."
      }
    ],
    "defaultWeakness": [
      {
        "name": "Fragile (5)",
        "cost": 0,
        "ignoreMultiplier": true,
        "description": "Decrease this unit’s break point by 5."
      }
    ],
    "strength": [],
    "weakness": [],
    "cost": 250,
    "costMultiplier": 1
  },
  {
    "name": "Beasts",
    "move": 8,
    "attackRange": 0,
    "footprint": "standard",
    "defaultStrength": [],
    "defaultWeakness": [],
    "strength": [],
    "weakness": [],
    "cost": 200,
    "costMultiplier": 1
  },
  {
    "name": "Artillery",
    "move": 8,
    "attackRange": 0,
    "footprint": "standard",
    "defaultStrength": [],
    "defaultWeakness": [
      {
        "name": "Fragile (5)",
        "cost": 0,
        "ignoreMultiplier": true,
        "description": "Decrease this unit’s break point by 5."
      }
    ],
    "strength": [],
    "weakness": [],
    "cost": 250,
    "costMultiplier": 1
  }
]
