function DecimalToRomanNumber(x) {

    var romans = [["I", "V", "X"], ["X", "L", "C"], ["C", "D", "M"], ["M", "", ""]];

    var result = "";

    for (var i = 0; i < 4; ++i, x = Math.floor(x / 10)) {

        var rest = x % 10;
        if (rest == 0) {

        }
        else if (rest >= 1 && rest <= 3) {
            for (var o = rest; rest > 0; --rest) result = romans[i][0] + result;
        }
        else if (rest == 4) {
            result = romans[i][0] + romans[i][1] + result;
        }
        else if (rest >= 5 && rest <= 8) {
            for (var o = rest; rest > 5; --rest) result = romans[i][0] + result;
            result = romans[i][1] + result;
        }
        else if (rest == 9) {
            result = romans[i][0] + romans[i][2] + result;
        }

    }

    return result;

}


function RomanToDecimalNumber(s) {
    var regex = new RegExp("(M{1,3})?(CM|CD|DC{0,3}|C{1,3})?(XC|XL|LX{0,3}|X{1,3})?(IX|IV|VI{0,3}|I{1,3})?");

    var match = regex.exec(s);

    var result = 0;
    if (match[1] != null) {
        result += match[1].length * 1000;
    }

    if (match[2] != null) {
        if (match[2] == "CM") {
            result += 900;
        }
        else if (match[2] == "CD") {
            result += 400;
        }
        else if (match[2].startsWith("D")) {
            result += 500;
            result += (match[2].length - 1) * 100;
        } else {
            result += match[2].length * 100;
        }
    }

    if (match[3] != null) {
        if (match[3] == "XC") {
            result += 90;
        }
        else if (match[3] == "XL") {
            result += 40;
        }
        else if (match[3].startsWith("L")) {
            result += 50;
            result += (match[3].length - 1) * 10;
        } else {
            result += match[3].length * 10;
        }
    }

    if (match[4] != null) {
        if (match[4] == "IX") {
            result += 9;
        }
        else if (match[4] == "IV") {
            result += 4;
        }
        else if (match[4].startsWith("V")) {
            result += 5;
            result += (match[4].length - 1) * 1;
        } else {
            result += match[4].length * 1;
        }
    }

    return result;

}

function IsRomanNumber(s) {
    if (s == null) return false;
    var regex = new RegExp("(M{1,3})?(CM|CD|DC{0,3}|C{1,3})?(XC|XL|LX{0,3}|X{1,3})?(IX|IV|VI{0,3}|I{1,3})?");

    var result = regex.exec(s);

    if (result == null || result[0] != s) {
        return false;
    }

    return true;
}