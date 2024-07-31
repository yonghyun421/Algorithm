function solution(n, lost, reserve) {
    let realLost = lost.filter(student => !reserve.includes(student));
    let realReserve = reserve.filter(student => !lost.includes(student));
    
    realLost.sort((a, b) => a - b);
    realReserve.sort((a, b) => a - b);

    let borrowed = 0;

    for (let i = 0; i < realLost.length; i++) {
        if (realReserve.includes(realLost[i] - 1)) {
            borrowed++;
            realReserve = realReserve.filter(student => student !== realLost[i] - 1);
        }
        else if (realReserve.includes(realLost[i] + 1)) {
            borrowed++;
            realReserve = realReserve.filter(student => student !== realLost[i] + 1);
        }
    }

    return n - (realLost.length - borrowed);
}