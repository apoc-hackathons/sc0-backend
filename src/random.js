var WeightedRandomNumberGenerator = /** @class */ (function () {
    function WeightedRandomNumberGenerator(weightedNumbers) {
        this.weightedNumbers = weightedNumbers;
    }
    WeightedRandomNumberGenerator.prototype.generateWeightedRandom = function () {
        var totalWeight = this.weightedNumbers.reduce(function (sum, _a) {
            var weight = _a[1];
            return sum + weight;
        }, 0);
        var randomValue = Math.random() * totalWeight;
        for (var _i = 0, _a = this.weightedNumbers; _i < _a.length; _i++) {
            var _b = _a[_i], number = _b[0], weight = _b[1];
            randomValue -= weight;
            if (randomValue <= 0) {
                return number;
            }
        }
        // Fallback (shouldn't happen if weights are properly defined)
        return this.weightedNumbers[this.weightedNumbers.length - 1][0];
    };
    return WeightedRandomNumberGenerator;
}());
// Usage
var weightedNumbers = [
    [1, 0],
    [2, 2],
    [3, 0], // Number 3 with weight 1
];
var generator = new WeightedRandomNumberGenerator(weightedNumbers);
var randomValue = generator.generateWeightedRandom();
console.log(randomValue);
