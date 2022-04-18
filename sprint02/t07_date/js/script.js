function getFormattedDate(arr) {
    let formatDate = {
        day: arr.getDate(),
        month: arr.getMonth() + 1,
        year: arr.getFullYear(),
        hours: arr.getHours(),
        minutes: arr.getMinutes(),
        weekday: arr.toLocaleString("en-US", {weekday: 'long'})
    }
    function time(hourOrMin) {
        return String(hourOrMin).length === 1 ? '0' + hourOrMin : hourOrMin;
    }
    function date(dayOrMonth) {
        return String(dayOrMonth).length === 1 ? '0' + dayOrMonth : dayOrMonth;
    }
    return `${date(formatDate.day)}.${date(formatDate.month)}.${formatDate.year} ${time(formatDate.hours)}:${time(formatDate.minutes)} ${formatDate.weekday}`; 
}

