function maxIceCream(costs: number[], coins: number): number {
    costs.sort((a, b) => a - b);
    const n = costs.length;
    for (let i = 0; i < n; ++i) {
        if (coins < costs[i]) {
            return i;
        }
        coins -= costs[i];
    }
    return n;
}
