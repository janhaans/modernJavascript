'use strict';

module.exports.ladder = {
    step: 0,
    up: function() {
        this.step++;
        return this;
    },
    down: function() {
        if (this.step > 0) {
            this.step--
        }
        return this;
    },
    showStep: function() {
        return this.step;
    }
};