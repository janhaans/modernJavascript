'use strict';

module.exports.anObject = {
    name: "Jan",
    age: 51,
    [Symbol.toPrimitive]: function(hint) {
        return (hint == "string") ? this.name : this.age;
    }
};