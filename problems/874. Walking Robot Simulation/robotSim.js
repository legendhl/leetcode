/**
A robot on an infinite grid starts at point (0, 0) and faces north.  The robot can receive one of three possible types of commands:

-2: turn left 90 degrees
-1: turn right 90 degrees
1 <= x <= 9: move forward x units
Some of the grid squares are obstacles. 

The i-th obstacle is at grid point (obstacles[i][0], obstacles[i][1])

If the robot would try to move onto them, the robot stays on the previous grid square instead (but still continues following the rest of the route.)

Return the square of the maximum Euclidean distance that the robot will be from the origin.

Example 1:
Input: commands = [4,-1,3], obstacles = []
Output: 25
Explanation: robot will go to (3, 4)

Example 2:
Input: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
Output: 65
Explanation: robot will be stuck at (1, 4) before turning left and going to (1, 8)

Note:

0 <= commands.length <= 10000
0 <= obstacles.length <= 10000
-30000 <= obstacle[i][0] <= 30000
-30000 <= obstacle[i][1] <= 30000
The answer is guaranteed to be less than 2 ^ 31.
 */
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 * Runtime: 1916 ms, faster than 14.81%
 * Memory Usage: 42.5 MB, less than 85.19%
 */
var robotSim = function (commands, obstacles) {
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let curDir = 0;
    let curPos = [0, 0];
    let res = 0;
    for (let command of commands) {
        if (command === -2) {
            curDir = (curDir + 3) % 4;
        } else if (command === -1) {
            curDir = (curDir + 1) % 4;
        } else {
            let dir = dirs[curDir];
            let targetPos = [curPos[0] + dir[0] * command, curPos[1] + dir[1] * command];
            for (let obstacle of obstacles) {
                if (isObstacle(curPos, targetPos, obstacle)) {
                    targetPos = [obstacle[0] - dir[0], obstacle[1] - dir[1]];
                }
            }
            curPos = targetPos;
            res = Math.max(res, curPos[0] * curPos[0] + curPos[1] * curPos[1])
        }
    }
    return res;

    function isObstacle(origin, target, obstacle) {
        if ((origin[0] === target[0] && origin[0] === obstacle[0] &&
            ((origin[1] < target[1] && origin[1] < obstacle[1] && obstacle[1] <= target[1]) ||
                (origin[1] > target[1] && target[1] <= obstacle[1] && obstacle[1] < origin[1])))
            ||
            (origin[1] === target[1] && origin[1] === obstacle[1] &&
                ((origin[0] < target[0] && origin[0] < obstacle[0] && obstacle[0] <= target[0]) ||
                    (origin[0] > target[0] && target[0] <= obstacle[0] && obstacle[0] < origin[0])))) {
            return true;
        }
        return false;
    }
};