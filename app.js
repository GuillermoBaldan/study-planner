var fs = require("fs");

let chapter1 = [
  "1 Pedro 1:1",
  "1 Pedro 1:2",
  "1 Pedro 1:3",
  "1 Pedro 1:4",
  "1 Pedro 1:5",
  "1 Pedro 1:6",
  "1 Pedro 1:7",
  "1 Pedro 1:8",
  "1 Pedro 1:9",
  "1 Pedro 1:10",
  "1 Pedro 1:11",
  "1 Pedro 1:12",
  "1 Pedro 1:13",
  "1 Pedro 1:14",
  "1 Pedro 1:15",
  "1 Pedro 1:16",
  "1 Pedro 1:17",
  "1 Pedro 1:18",
  "1 Pedro 1:19",
  "1 Pedro 1:20",
  "1 Pedro 1:21",
  "1 Pedro 1:22",
  "1 Pedro 1:23",
  "1 Pedro 1:24",
  "1 Pedro 1:25",
];
let chapter2 = [
  "1 Pedro 2:1",
  "1 Pedro 2:2",
  "1 Pedro 2:3",
  "1 Pedro 2:4",
  "1 Pedro 2:5",
  "1 Pedro 2:6",
  "1 Pedro 2:7",
  "1 Pedro 2:8",
  "1 Pedro 2:9",
  "1 Pedro 2:10",
  "1 Pedro 2:11",
  "1 Pedro 2:12",
  "1 Pedro 2:13",
  "1 Pedro 2:14",
  "1 Pedro 2:15",
  "1 Pedro 2:16",
  "1 Pedro 2:17",
  "1 Pedro 2:18",
  "1 Pedro 2:19",
  "1 Pedro 2:20",
  "1 Pedro 2:21",
  "1 Pedro 2:22",
  "1 Pedro 2:23",
  "1 Pedro 2:24",
  "1 Pedro 2:25",
];
let chapter3 = [
  "1 Pedro 3:1",
  "1 Pedro 3:2",
  "1 Pedro 3:3",
  "1 Pedro 3:4",
  "1 Pedro 3:5",
  "1 Pedro 3:6",
  "1 Pedro 3:7",
  "1 Pedro 3:8",
  "1 Pedro 3:9",
  "1 Pedro 3:10",
  "1 Pedro 3:11",
  "1 Pedro 3:12",
  "1 Pedro 3:13",
  "1 Pedro 3:14",
  "1 Pedro 3:15",
  "1 Pedro 3:16",
  "1 Pedro 3:17",
  "1 Pedro 3:18",
  "1 Pedro 3:19",
  "1 Pedro 3:20",
  "1 Pedro 3:21",
  "1 Pedro 3:22",
];
let chapter4 = [
  "1 Pedro 4:1",
  "1 Pedro 4:2",
  "1 Pedro 4:3",
  "1 Pedro 4:4",
  "1 Pedro 4:5",
  "1 Pedro 4:6",
  "1 Pedro 4:7",
  "1 Pedro 4:8",
  "1 Pedro 4:9",
  "1 Pedro 4:10",
  "1 Pedro 4:11",
  "1 Pedro 4:12",
  "1 Pedro 4:13",
  "1 Pedro 4:14",
  "1 Pedro 4:15",
  "1 Pedro 4:16",
  "1 Pedro 4:17",
  "1 Pedro 4:18",
  "1 Pedro 4:19",
];
let chapter5 = [
  "1 Pedro 5:1",
  "1 Pedro 5:2",
  "1 Pedro 5:3",
  "1 Pedro 5:4",
  "1 Pedro 5:5",
  "1 Pedro 5:6",
  "1 Pedro 5:7",
  "1 Pedro 5:8",
  "1 Pedro 5:9",
  "1 Pedro 5:10",
  "1 Pedro 5:11",
  "1 Pedro 5:12",
  "1 Pedro 5:13",
  "1 Pedro 5:14",
];

let bookOf1Peter = chapter1.concat(chapter2, chapter3, chapter4, chapter5);
/* console.log(typeof bookOf1Peter);
console.log(bookOf1Peter.length);
console.log(bookOf1Peter); */

let workByday = [];

function plannerDays(arrayOfitems, numberOfDays) {
  let aux = [];
  let i;
  let j = 0;
  for (i = 1; i <= numberOfDays; i++) {
    aux.push({ day: i, items: [] });
  }
  for (i = 0; i < arrayOfitems.length; i++) {
    while (j < numberOfDays && i + j < numberOfDays) {
      aux[i + j].items.push(arrayOfitems[i]);
      if (j == 0) {
        j++;
      } else {
        j = 2 * j;
      }
    }
    j = 0;
  }
  return aux;
}

function statistics(workByDay) {
  let maxWorkDay = { day: 0, number: 0 };
  let i;
  let report;
  for (i = 0; i < workByDay.length; i++) {
    if (workByDay[i].items.length > maxWorkDay.number) {
      maxWorkDay = { day: workByDay[i].day, number: workByDay[i].items.length };
    }
  }
  report = `The maximum number of items in a day is ${maxWorkDay.number} and its day is ${maxWorkDay.day}`;
  return report;
}

function putDate(workByDay) {
  let i;
  let j;
  let date;
  for (i = 0; i < workByDay.length; i++) {
    date = new Date();
    date.setDate(date.getDate() + i);
    workByDay[i].day =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    console.log(workByDay[i].day);
  }
  return workByDay;
}

/* workByDay = plannerDays(bookOf1Peter, bookOf1Peter.length);
workByDay = putDate(workByDay);
console.log(workByday); */

function save(workByDay) {
  //save in a text file using fs
  fs.writeFile(
    "./1peterWorkByDay.txt",
    JSON.stringify(workByDay),
    function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("file saved");
      }
    }
  );
  //save in a json file using fs
  fs.writeFile(
    "./1peterWorkByDay.json",
    JSON.stringify(workByDay),
    function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("file saved");
      }
    }
  );
  //save in a text file using fs the report
  fs.writeFile("./1peterReport.txt", statistics(workByDay), function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("file saved");
    }
  });
}

function falloCallback(error) {
  console.log("Error generando reporte" + error);
}

function hazPrimero(arrayOfitems, numberOfDays, callback) {
  let workByDay = plannerDays(arrayOfitems, numberOfDays);
  callback(workByDay);
}

function hazSegundo(workByDay, callback) {
  workByDay = putDate(workByDay);
  callback(workByDay);
}

function hazTercero(workByDay, callback) {
  callback(workByDay);
}

hazPrimero(bookOf1Peter, bookOf1Peter.length, function (workByDay) {
  hazSegundo(workByDay, function (workByDay) {
    hazTercero(workByDay, function (workByDay) {
      save(workByDay);
    });
  });
});
