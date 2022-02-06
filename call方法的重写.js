Function.prototype.call = function(context) {

    var fn = this

    if (context && typeof context === 'object') {

        var prop = symbol();

        var args = [];

        args = [].slice.call(arguments)

        args.shift() = this

        var res = eval('context[prop](' + args + ')');

        delete context[prop]

        return res

    }

}


function test(a, b) {
    console.log(a + b);
    return a + b
}


test.call({}, 1, 2)