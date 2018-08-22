"use strict";

module.exports.isEmpty = (obj) => (Object.keys(obj).length) === 0 ? true : false;

module.exports.sum = (obj) => {
    let values = Object.values(obj);
    let reducer = (accumulator, currentValue) => accumulator + currentValue;

    return (values.length === 0) ? 0 : values.reduce(reducer, 0);
};