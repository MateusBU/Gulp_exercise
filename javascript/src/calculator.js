/*
 * This is a really cool calculator!!!
 */
const Calculator = {
    _result: 0,
    get result() {
        return this._result;
    },
    add(a, b = 0) {
        const sum = a + b;
        this._result += sum;
        return this;
    },
    power(a, b) {
        const pow = a ** b;
        this._result += pow;
        return this;
    },
    reset() {
        this._result = 0;
        return this;
    },
    log() {
        console.log(this._result);
    }
};