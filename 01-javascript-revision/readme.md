# How do we model the data
How do we represent the reality of our application. 

* In a game of Blackjack, each player is given two cards. 
* Players can choose to pass or to draw
* When a player draws, they get one card
  * If the sum of the cards are higher than 21, the player has gone bust
  * King, Queen and Jack = 10 points
* if both player passes, then the one with the most points win

## Data to Represent
* Represent the hand (what cards the player have)
* Represent a card (suit, number)

```
[
    {
        "suit":"D",
        "rank":"A"
    },
    {
        "suit:"S",
        "rank":"Q"
    }
]
```