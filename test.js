// function dd() {
//   const number = 100;
//   let res;
//   for (let i = 0; i < number.length; i++) {
//     const val = number[i];
//     console.log(val);
    
//   }
//   //console.log(res);
// }

const cron = require('node-cron');

cron.schedule('* * * * *', () => {
  console.log('running a task every minute');
});
// cron.schedule('1,2,4,5 * * * *', () => {
//   console.log('running every minute 1, 2, 4 and 5');
// });
// if (val % 3 == 0) {
    //   res = 'Fizz';
    // }
    // if (val % 5 == 0) {
    //   res = 'bizz';
    // }
    // let mult = 3 * 5;
    // if (val % mult == 0) {
    //   res = 'fizzbizz';
    // } else {
    //   res = val;
    // }

     // res;
