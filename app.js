let array1 = [
  {name : "pat", age : 10 , phone : "091-999-9999"},
  {name : "Ma", age : 15 , phone : "092-999-9999"},
  {name : "John", age : 20 , phone : "093-999-9999"},
  {name : "Bam", age : 25 , phone : "095-999-9999"},
  {name : "YY", age : 78 , phone : "095-499-9999"}
];
const map1 = array1.map(n => `Name is ${n.name} || Age is ${n.age} || Phone is ${n.phone}`);
console.log(map1);
