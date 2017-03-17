'use stict';

class GeneratorSync {
    run(generatorFunction, cb) {
        var that = this;
        this.resume = function(cv) {
            var res = that.generatorItr.next(arguments);
            if (res.done && cb) {
                cb();
            }
        }
        this.generatorItr = generatorFunction(this.resume);
        this.generatorItr.next();
    }
}

module.exports = GeneratorSync;