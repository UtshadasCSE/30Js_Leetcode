let car = {
  brand: "BMW",
  color: "Pink",
  door: 4,
  relaseDate: 2025,
  drive: function () {
    return "230 Km/h";
  },
};

// let text = "";
// for (let x in car) {
//   text += car[x];
// }

// console.log(text);

let myObj = JSON.stringify(car);
console.log(myObj);
