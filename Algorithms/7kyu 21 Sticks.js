// The game

// In this game, there are 21 sticks lying in a pile. Players take turns taking 1, 2, or 3 sticks. The last person to take a stick wins. For example:

// 21 sticks in the pile

// Bob takes 2  -->  19 sticks left
// Jim takes 3  -->  16 sticks
// Bob takes 3  -->  13 sticks
// Jim takes 1  -->  12 sticks
// Bob takes 2  -->  10 sticks
// Jim takes 2  -->   8 sticks
// Bob takes 3  -->   5 sticks
// Jim takes 3  -->   2 sticks
// Bob takes 2  -->  Bob wins!

// Your task

// Create a robot that will always win the game. Your robot will always go first. The function should take an integer and returns 1, 2, or 3.

// Note: The input will always be valid (a positive integer)

// Hint: https://youtu.be/9KABcmczPdg
// Games
// Algorithms
// Mathematics
// Game Solvers



// P: sticks = integer; number of sticks remaining
// R: integer; number of sticks that the robot should remove in order to ensure a win

// P:
// General pattern:
    // 4 -> no guaranteed win
    // 5 -> take 1
    // 6 -> 2
    // 7 -> 3
    // 8 -> no guaranteed win
    // 9 -> 1
    // etc.
// Strategy: take sticks corresponding to n_sticks % 4. If 0, there is no strategy to guarantee a win.


function makeMove(sticks) {
    return sticks % 4
  }