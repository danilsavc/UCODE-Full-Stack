let date = new Date('01-01-1939');

exports.calculateTime = () => {
    let result = [];
    let quantum = new Date();

    quantum = new Date(Math.round((quantum.getTime() - date.getTime()) / 7 + date.getTime()));
    result.push(quantum.getFullYear() - date.getFullYear());
    result.push(quantum.getMonth() - date.getMonth() - 5);
    result.push(quantum.getDate() - date.getDate() + 2);
    return result;
}
