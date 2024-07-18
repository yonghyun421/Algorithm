function solution(ingredient) {
    const BURGER = [1, 2, 3, 1];
    let count = 0;

    for (let i = 0; i <= ingredient.length - BURGER.length; i++) {
        if (ingredient.slice(i, i + BURGER.length).join('') === BURGER.join('')) {
            count++;
            ingredient.splice(i, BURGER.length);
            i -= BURGER.length;
        }
    }

    return count;
}