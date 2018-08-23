"use strict";

module.exports.isEmpty = (obj) => (Object.keys(obj).length) === 0 ? true : false;

module.exports.sum = (obj) => {
    let values = Object.values(obj);
    let reducer = (accumulator, currentValue) => accumulator + currentValue;

    return (values.length === 0) ? 0 : values.reduce(reducer, 0);
};

module.exports.multiplyNumeric = (obj) => {
    for (let [key, value] of Object.entries(obj)) {
        if (typeof(value) === "number") { obj[key] = value*2; }
    }
};