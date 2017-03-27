var ipToInt = require('../src/ipToInt');
var expect = require('chai').expect;

describe('ipToInt Test', function() {

    it('normal ip addr, should be converted rightly', function() {
        expect(ipToInt("172.168.5.1")).to.be.equal(2896692481);
    });

    it('0.0.0.0, should be converted rightly', function() {
        expect(ipToInt("0.0.0.0")).to.be.equal(0);
    });

    it('255.255.255.255, should be converted rightly', function() {
        expect(ipToInt("255.255.255.255")).to.be.equal(4294967295);
    });

    it('spaces between a digit and a dot, should be converted rightly', function() {
        expect(ipToInt("172 . 168.5.1")).to.be.equal(2896692481);
    });

    it('spaces between two digits, should got an error', function() {
        expect(ipToInt("1 72.168.5.1")).to.be.equal(-1);
    });
});