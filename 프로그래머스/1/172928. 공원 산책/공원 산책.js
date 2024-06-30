function solution(park, routes) {
    const directions = {
        'N': [-1, 0],
        'S': [1, 0],
        'W': [0, -1],
        'E': [0, 1]
    };
    
    let startX, startY;
    for (let i = 0; i < park.length; i++) {
        const startIdx = park[i].indexOf('S');
        if (startIdx !== -1) {
            startX = i;
            startY = startIdx;
            break;
        }
    }
    
    let currentX = startX;
    let currentY = startY;
    
    for (const route of routes) {
        const [direction, stepStr] = route.split(' ');
        const steps = parseInt(stepStr);
        let nextX = currentX;
        let nextY = currentY;
        let validMove = true;
        
        // 이동 시도
        for (let i = 0; i < steps; i++) {
            nextX += directions[direction][0];
            nextY += directions[direction][1];
            
            if (nextX < 0 || nextX >= park.length || nextY < 0 || nextY >= park[0].length || park[nextX][nextY] === 'X') {
                validMove = false;
                break;
            }
        }
        
        if (validMove) {
            currentX = nextX;
            currentY = nextY;
        }
    }
    
    return [currentX, currentY];
}