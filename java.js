let equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

const a = { name: "Jeyran", age: 20, surname: "Mursalova" };
const b = { name: "Jeyran", age: 20, surname: "Mursalova" };
if (equals(a, b)) {
  console.log(true);
} else {
  console.log(false);
}
let equalss = (c, d) => JSON.stringify(c) === JSON.stringify(d);
const c = { name: "Kamil", age: 31, surname: "Tarverdiev", weight: "70kq" };
const d = { name: "Gullu", age: 49, surname: "Shammadli", weight: "100kq" };

if (equalss(c, d)) {
  console.log(true);
} else {
  console.log(false);
}
