/**
On an infinite plane, a robot initially stands at (0, 0) and faces north.  The robot can receive one of three instructions:

"G": go straight 1 unit;
"L": turn 90 degrees to the left;
"R": turn 90 degress to the right.
The robot performs the instructions given in order, and repeats them forever.

Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

Example 1:
Input: "GGLLGG"
Output: true
Explanation: 
The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.

Example 2:
Input: "GG"
Output: false
Explanation: 
The robot moves north indefinitely.

Example 3:
Input: "GL"
Output: true
Explanation: 
The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...

Note:

1 <= instructions.length <= 100
instructions[i] is in {'G', 'L', 'R'}
 */
/**
 * @param {string} instructions
 * @return {boolean}
 * Runtime: 60 ms, faster than 42.41%
 * Memory Usage: 33.8 MB, less than 100.00%
 */
var isRobotBounded = function (instructions) {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let curDir = 0;
    let curPos = [0, 0];
    for (let instruction of instructions) {
        if (instruction === 'G') {
            let dir = directions[curDir];
            curPos[0] += dir[0];
            curPos[1] += dir[1];
        } else if (instruction === 'L') {
            curDir = (curDir + 3) % 4;
        } else if (instruction === 'R') {
            curDir = (curDir + 1) % 4;
        }
    }
    return (curPos[0] === 0 && curPos[1] === 0) || curDir !== 0;
};