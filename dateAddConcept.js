let dt = new Date();
console.log(dt);
dt.setDate(dt.getDate() + 30);

// console.log(dt.getMonth()+1);
// console.log("0"+(dt.getMonth()+1));

//  dt.setDate(dt.getDate() + 15);

console.log(dt.toLocaleDateString()); // .toLocaleDateString() is a format