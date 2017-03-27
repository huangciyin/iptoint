/**  use this regexp for:
 * 1. validate the IP String
 * 2. split the IP string by dot
 * @type {RegExp}
 */
var IP_REGEX = /^(?:\s+)?(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\s+)?\.(?:\s+)?(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\s+)?\.(?:\s+)?(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\s+)?\.(?:\s+)?(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\s+)?$/;

/**
 * convertIPTo32BitInt
 * @param ipAddr: source ip string
 * @returns {number}: 32 bit int
 */
function ipToInt(ipAddr) {
    // iterate the ipAddr, validate and split by dot
    var result = IP_REGEX.exec(ipAddr);
    // got an error, ipAddr is invalid
    if (!result) return -1;
    // ipAddr is valid, convert to int
    return (parseInt(result[1]) << 24
        | parseInt(result[2]) << 16
        | parseInt(result[3]) << 8
        | parseInt(result[4])) >>> 0;
}

module.exports = ipToInt;