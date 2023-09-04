let a = 100;
let b = "name";
let c = null;
let d;
let e = true;
let f = BigInt(2332);

console.log(a, b, c, d, e, f);
console.log(typeof(a), typeof(d));

const car = {
    "name": "maruti",
    "owner": "varun",
    "paid": true,
    "insurance":undefined,
    "challan": 1230

}

console.log(car["name"]);
console.log(typeof(car["challan"]));