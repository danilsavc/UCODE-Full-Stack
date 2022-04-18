let date = new Date('01-01-1939');

exports.calculateTime = () => {
    let result = {};
    let normal = new Date();
    result.years = () => {
        return normal.getFullYear() - date.getFullYear() -1;
    };
    result.months = () => {
        return normal.getMonth() - date.getMonth() -1;
    };
    result.days = () => {
        return normal.getDate() - date.getDate() -4;
    };
    return result;
}