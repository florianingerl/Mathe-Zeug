/// <reference path="jasmine.js"/>
/// <reference path="RomanNumbers.js"/>


describe("Testing the conversion from a decimal number and a roman number and vice versa", function() {

    beforeEach( function() {
            //executed before every test method
        }
    );

    it("DecimalToRomanNumber(3999)==MMMCMXCIX", function() {
        var result = DecimalToRomanNumber(3999);
        expect(result).toBe("MMMCMXCIX");
    });

    it("DecimalToRomanNumber(4)==IV", function() {
        var result = DecimalToRomanNumber(4);
        expect(result).toBe("IV");
    });

    it("DecimalToRomanNumber(8)==VIII", function() {
        var result = DecimalToRomanNumber(8);
        expect(result).toBe("VIII");
    });

    it("DecimalToRomanNumber(9)==IX", function() {
        var result = DecimalToRomanNumber(9);
        expect(result).toBe("IX");
    });

    it("DecimalToRomanNumber(2)==II", function() {
        var result = DecimalToRomanNumber(2);
        expect(result).toBe("II");
    });

    
    it("3999==MMMCMXCIX", function() {
        var result = RomanToDecimalNumber("MMMCMXCIX");
        expect(result).toBe(3999);
    });

    it("3888==MMMDCCCLXXXVIII", function() {
        var result = RomanToDecimalNumber("MMMDCCCLXXXVIII");
        expect(result).toBe(3888);
    });

    it("3444=MMMCDXLIV", function() {
        var result = RomanToDecimalNumber("MMMCDXLIV");
        expect(result).toBe(3444);
    });

    it("502==DII", function() {
        var result = RomanToDecimalNumber("DII");
        expect(result).toBe(502);
    });

    it("helloMMC is not a roman number", function() {
        var result = IsRomanNumber("helloMMC");
        expect(result).toBe(false);
    });

    

});