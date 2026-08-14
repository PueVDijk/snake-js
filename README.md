# JavaScript Snake Game

A Snake game modified as part of an intake assignment for Inholland University of Applied Sciences.

The base project was provided as starter code. The goal of the assignment was to understand the existing JavaScript code and implement several changes and additional features.

## Assignments

The following assignments were implemented:

- Increased the size of the game canvas.
- Increased the initial movement speed of the snake.
- Added the missing keyboard controls so the snake can move in all four directions.
- Changed the edge collision behavior so hitting an edge ends the game.
- Fixed the scoring system so eating an apple awards points.

## Additional Features

I also implemented the optional assignments:

- The snake changes to a random visible color whenever an apple is eaten.
- The same snake color cannot be selected twice in a row.
- The snake becomes faster after every 5 apples eaten.
- The maximum speed is limited to prevent the game from becoming unplayable.
- Added a counter for the number of apples eaten.
- Added a golden apple with a 10% chance of appearing.
- Golden apples award 5 points instead of 1 point.

## Controls

| Key | Action |
| --- | --- |
| ↑ | Move up |
| ↓ | Move down |
| ← | Move left |
| → | Move right |

## Scoring

- Regular apple: **1 point**
- Golden apple: **5 points**

The number of apples eaten is tracked separately from the score. This allows golden apples to award additional points without affecting when the snake's speed increases.

## Running the Game

Open `index.html` in a web browser to play the game.

Use the arrow keys to control the snake.

## About

This project was completed as an intake assignment for Inholland University of Applied Sciences.
The original project was provided as starter code. The changes and additional features described above were implemented by me as part of the assignment.
