let a = prompt("a: ");
let b = prompt("b: ");
let c = prompt("c: ");


if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Invalid input data");
}

if (b ** 2 - 4 * a * c >= 0) {
    var D = b ** 2 - 4 * a * c
    if (D = 0) {
        var x = -b / 2 * a
        console.log("x: ", x);
    }
    if (D > 0) { //something's wrong here
        var x1 = (-b + Math.sqrt(D)) / 2 * a
        var x2 = (-b - Math.sqrt(D)) / 2 * a
        console.log("x1: ", x1);
        console.log("x2: ", x2);
    }
} else {
    console.log("no solution");
}