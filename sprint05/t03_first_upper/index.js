exports.firstUpper = function (str) {
    if (str == ''  || str ==  null) {
        return '';
    }
    str = str.trim();
    str = str.substring(0,1).toUpperCase() + str.substring(1).toLowerCase();
    return str;
}