module.exports.AvengerQuote = class {
    id;
    author;
    quote;
    photo = [];
    publishDate;
    comments;

    constructor(option) {
        for (let key in option) {
            this[key] = option[key];
        }
    }

}

