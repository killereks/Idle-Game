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