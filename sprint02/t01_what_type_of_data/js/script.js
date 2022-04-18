var num = 1;
var bigint = 13n;
var str = "Hello";
var bool = false;
var nul = null;
var undef = undefined;
var obj = {};
var symb = Symbol();
var func = function(){};


alert(
    num + ' is ' + typeof(num) + '\n' +
    bigint + ' is ' + typeof(bigint) + '\n' +
    str + ' is ' + typeof(str) + '\n' +
    bool + ' is ' + typeof(bool) + '\n' +
    nul + ' is ' + typeof(nul) + '\n' +
    undef + ' is ' + typeof(undef) + '\n' +
    obj + ' is ' + typeof(obj) + '\n' +
    symb.toString + ' is ' + typeof(symb) + '\n' +
    func + ' is ' + typeof(func) + '\n'
);
