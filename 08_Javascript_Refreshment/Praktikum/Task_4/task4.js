let bdays = ['10-17', '05-19', '20-19'];

let bday = bdays.map((day) => {
  return day.replace('-', '/');
});

console.log(bday);
