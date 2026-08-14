/**
 * This is the apple object. It contains all the important information for the apple.
 */
let apple = {
    // The apple's initial position (bottom right)
    x: (CANVAS_SIZE - 1) * CELL_SIZE,
    y: (CANVAS_SIZE - 1) * CELL_SIZE,

    // The apple's color
    color: 'red',
    golden = false
};

// Get a random integer in a specific range
function getRandomInt(min, max) {
    // Math is a library built into JavaScript. It deals with mathematics that are more complicated than adding or subtracting numbers.
    return Math.floor(Math.random() * (max - min)) + min;
}

// Places the apple at a random location on the canvas
function randomizeApple() {
    // Golden apple spawn chance is 10%
    if (Math.random() < 0.1) {
        apple.golden = true;
        apple.color = "gold";
    } else {
        apple.golden = false;
        apple.color = "red";
    }

    apple.x = getRandomInt(0, CANVAS_SIZE) * CELL_SIZE;
    apple.y = getRandomInt(0, CANVAS_SIZE) * CELL_SIZE;
}