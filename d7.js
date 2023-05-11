/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        let final = x;
        for(var i=functions.length-1;i>=0;i--){
            const curF = functions[i];
            final = curF(final);
        }
        return final;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */