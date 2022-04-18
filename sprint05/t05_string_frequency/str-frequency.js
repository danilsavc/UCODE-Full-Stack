module.exports = class StrFrequency {
    constructor(str) {
        this.str = str;
        this.str1 = str.toUpperCase();
    }

    letterFrequencies() {
        this.obj = {};
        for (let i = 0; i < this.str1.length; i++) {
            if (new RegExp(/[A-Z]/).test(this.str1[i]))
                this.obj[this.str1[i]] ? this.obj[this.str1[i]]++ :
                                                this.obj[this.str1[i]] = 1;
        }
        return this.obj;
    }

    wordFrequencies() {
        let text = '';
        this.obj = {};
        for (let i = 0; i < this.str1.length; i++) {
            if (new RegExp(/[A-Z\s]/).test(this.str1[i])) {
                text += this.str1[i];
            }
        }
        text.split(' ').map(item => {
            if (item.length > 0)  {
                this.obj[item] = this.obj[item] ? this.obj[item] + 1 : 1
        }});
        return this.obj
    }

    reverseString() {
        return [...this.str].reverse().join('');
    }
};

