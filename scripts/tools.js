function Simplify(bigNum, dp) {
    if (dp == undefined) dp = 3;
    if (bigNum.lessThan(1000)) {
        return bigNum.toFixed(dp);
    }

    var names = ["", "Thousand", "Million", "Billion", "Trillion", "Quadrillion", "Quintillion", "Sextillion", "Septillion",
                "Octillion", "Nonillion", "Decillion", "Undecillion", "Duodecillion", "Tredecillion", "Quattuordecillion",
                "Quindecillion", "Sexdecillion", "Septendecillion", "Octodecillion", "Novemdecillion", "Vigintillion", "Unvigintillion", "Duovigintillion", "Trevigintillion", "Quattuorvigintillion", "Quinvigintillion", "Sexvigintillion", "Septenvigintillion", "Octovigintillion", "Novemvigintillion", "Trigintillion", "Untrigintillion", "Duotrigintillion", "Googol", "Tretrigintillion", "Quattuortrigintillion", "Quintrigintillion", "Sextrigintillion", "Septentrigintillion", "Octotrigintillion", "Novemtrigintillion", "Centillion"];

    let index = (Decimal.log10(bigNum) / 3) | 0;
    let factor = Decimal.pow(10, index * 3);
    
    if (player.settings.numberFormatting == "euler"){
        return Decimal.div(bigNum, factor).toFixed(dp)+"e"+(index*3);
    } else if (player.settings.numberFormatting == "scientific"){
        return Decimal.div(bigNum, factor).toFixed(dp)+`x10<sup>${index * 3}</sup>`;
    } else if (player.settings.numberFormatting == "logarithmic"){
        return Decimal.div(bigNum, factor).toFixed(dp)+`[${index}]`;
    }

    // number format = wordy
    var extra = "";
    if (index < names.length) {
        extra = names[index];
    } else {
        extra = `x10<sup>${index * 3}</sup>`;
    }

    return Decimal.div(bigNum, factor).toFixed(dp) + " " + extra;
}

function NumToRoman(num) {
    return ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX"][num];
}

function Random(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}

function RandomFromArr(arr) {
    return arr[Random(0, arr.length - 1)];
}

function Lerp(a, b, t){
    return a + (b-a) * t;
}

function LerpDecimal(a, b, t){
    return Decimal.add(a, Decimal.mul(Decimal.sub(b,a), t));
}

Math.seed = function(s) {
    var mask = 0xffffffff;
    var m_w  = (123456789 + s) & mask;
    var m_z  = (987654321 - s) & mask;

    return function() {
      m_z = (36969 * (m_z & 65535) + (m_z >>> 16)) & mask;
      m_w = (18000 * (m_w & 65535) + (m_w >>> 16)) & mask;

      var result = ((m_z << 16) + (m_w & 65535)) >>> 0;
      result /= 4294967296;
      return result;
    }
}