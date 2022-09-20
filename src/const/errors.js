const formatDate = (date) => {
    let d = new Date(date);
    let month = (d.getMonth() + 1).toString();
    let day = d.getDate().toString();
    let year = d.getFullYear();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let milseconds = d.getMilliseconds();
    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }
    //return [year, month, day, hours].join('-');
    return year + '-' + month + '-' + day + 'T' + hours + ':' + minutes + ':' + seconds + '.' + milseconds;
}

module.exports = {

    'BadRequest': {
        timestamp: formatDate(Date()),
        status: 400,
        error: "Bad Request",
        message: "A required field is missing"
    }
}