function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const directions = [
        [1, 0],  // 아래로 이동
        [0, 1],  // 오른쪽으로 이동
        [-1, 0], // 위로 이동
        [0, -1]  // 왼쪽으로 이동
    ];

    const isValid = (x, y) => x >= 0 && y >= 0 && x < n && y < m && maps[x][y] === 1;

    const queue = [[0, 0, 1]];
    maps[0][0] = 0;

    while (queue.length > 0) {
        const [x, y, distance] = queue.shift();

        if (x === n - 1 && y === m - 1) {
            return distance;
        }

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (isValid(nx, ny)) {
                maps[nx][ny] = 0;
                queue.push([nx, ny, distance + 1]);
            }
        }
    }

    return -1;
}