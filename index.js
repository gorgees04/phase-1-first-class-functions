
// receivesAFunction
function receivesAFunction(anything) {
    return anything()
}

receivesAFunction(() => "heey")

// returnsANamedFunction
function returnsANamedFunction() {
    let fn
    
    return fn = function() {
        return "hey"
    }
}

// returnsAnAnonymousFunction
function returnsAnAnonymousFunction() {
    return function() {
        return "hey"
    }
}