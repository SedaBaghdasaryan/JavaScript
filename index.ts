const studentScoreObject = {
  student1: 1,
  student2: 6,
  student3: 5,
  student4: 4,
  student5: 8,
  student6: 2,
  student7: 10,
  student8: 7,
  student9: 6,
};

const object1 = Object.entries(studentScoreObject);
console.log(object1);

const object2 = object1.filter(function (item) {
  if (item[1] >= 4 && item[1] < 7) {
    return true;
  }
});
console.log(object2);

const object3 = Object.fromEntries(object2);

console.log(object3);
