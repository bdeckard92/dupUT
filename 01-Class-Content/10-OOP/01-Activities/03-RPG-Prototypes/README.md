# RPG Prototypes

In this activity, you will generate RPG characters using constructors and prototypes.

## Instructions

* Open [Unsolved/rpg-prototypes.js](Unsolved/rpg-prototypes.js). 

* Create a constructor function called `Character` that takes in 3 arguments and assigns them to the appropriate keys:

  * `name`

  * `strength`

  * `hp` (or `hitpoints`)

* Create 3 prototype methods:

  * `PrintStats()`: Function which prints all of the stats for a character

  * `IsAlive()`: Function which prints whether or not this character is alive by determining whether their hitpoints are above or below zero.

  * `Attack()`: Function which takes in a second character and subtracts this character's strength from their hitpoints.
