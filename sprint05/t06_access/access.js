module.exports = class Access {
    constructor (mark_LXXXV) {
        this.mark_LXXXV = mark_LXXXV;
    }
    set setter(mark_LXXXV) {
        if (mark_LXXXV == '') {
            this.mark_LXXXV = 'undefined';
        }
        else if (mark_LXXXV === null) {
            this.mark_LXXXV = 'null';
        }
        else {
            this.mark_LXXXV = mark_LXXXV;
        } 
    }
    get getter() {
        return this.mark_LXXXV;
    }
}
