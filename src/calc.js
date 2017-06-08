import Add from './add.js';

export default function () {

    function subtract(x, y) {
        return x - y;
    }

    return {
        add: Add,
        subtract: subtract
    }
}
