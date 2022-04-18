var Foo = class {
    constructor(name, alias, affiliation) {
        this.name = name;
        this.alias = alias;
        this.affiliation = affiliation;
    }
}

exports.getAnonymous = function (name, alias, affiliation){
    const instance = new Foo(name, alias, affiliation);
    return instance;
}
