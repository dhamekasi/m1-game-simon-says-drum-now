# Simon Says Drum Now!

## Description

A take on a childhood game - Simon - where a randomized sequence of colors and sounds is displayed, with the player having to replicate the sequence using the keyboard in order to pass to the next level. Each round adds an additional step to the sequence.

## MVP

Be able to start a game, have colors flash defined by the sequence pattern, and receive input from the user and check if sequence matches. If player is successful, proceeds to next round. If not, player has X ammount of tries before the game ends.

## Backlog

-Associate a specific sound to each color, in essence turning the color pattern into a sound pattern as well.
-Turn sequence into beats, with timing of the step sequence.
-Have a difficulty selector, which increases the BPM of the sequence.
-Turn the sequence non-linear, meaning two steps can appear at the same time, in essence turning the game into a simple drum machine.

## Data structure

```none
1. index.html
2. main.js
3. game.js
4. player.js
5. pattern.js
```

1. index.html

2) main.js

   - buildDom

   - createStartScreen

   - createGameScreen

   - createGameOverScreen

   - removeScreen

   - StartGame / endGame

3. game.js Class

   **Properties**

   - canvas
   - ctx
   - currentLevel
   - gameState
   - isPatternMatch

   **Methods**

   - playPattern

   - drawPattern

   - comparePatterns

   - nextLevel

   - endGame

   - printLives

   - printLevel

4) player.js

   **Properties**

   - currentLives
   - lastInput

**Methods**

- receiveInput

- loseLife

5. pattern.js Class

   **Properties**

   - currentPattern

   **Methods**

   - generatePattern

## States y States Transitions

- splashScreen
  Intro splash page. Able to start the game.

* gameScreen

  shows current level and player lives remaining

  plays pattern

  allows player input

  goes to next level in patterns match

  goes to gameOverScreen if player lives === 0

- gameOverScreen

  Shows player score, level reached and reset button

  goes back to gameScreen when reset button

## Task

1. splashScreen html
2. GameScreen html
3. gameOverScreen html
4. transition from 1. => 2.
5. Transition from 3. => 2.
6. Game class definition
7. Player class definition
8. pattern class definition
9. main.js orchestration
10. presentation
11. backlog

## Links

### Trello

[trello board](https://trello.com/invite/b/7Jb89yAZ/10053de8d415472baebd723b1476c5fc/simon-says-drum-now)

### Git

[Link Repo](https://github.com/dhamekasi/m1-game-simon-says-drum-now)
[Link Deploy](http://github.com)

### Slides

[Link Slides.com](http://slides.com)
