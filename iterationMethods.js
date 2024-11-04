// const numbers = [10, 13, 20, 25, 38, 35, 40];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log(sum);  // Outputs: 25

// // You can rewrite the loop using the .reduce method:
// sum = numbers.reduce(function (total, number) {
//   return total + number;
// }, 0);

// console.log(sum);  // Outputs: 25



// Task 1: Filtering

// let multiplesOfThree = [];
//          multiplesOfThree = numbers.filter(function (num) {
//     return num >= 25;
//   });

//   console.log(multiplesOfThree)



//   const multiplesOffive = numbers.filter(function (num) {
//             if(num % 5 === 0) return true;
//                 else return false;
//         return num % 5 === 0;
//     });
  
//     console.log(multiplesOffive)


// //     Part 2: Mapping

// // .map()
//      const numbers = [10, 13, 20, 25, 38, 35, 40];
//      const squares = [];

//     for (let i = 0; i < numbers.length; i++) {
//         squares.push(numbers[i] ** 2);
   
//     }
    

//     const squares = numbers.map(function (num) {
//         return num  ** 2;
//     });

    // console.log(squares);





//Task 3: Filtering && Mapping


const numbers = [10, 13, 20, 25, 38, 35, 40];
        let multiplesOfThree = [];
        multiplesOfThree = numbers.filter(function (num) {
    return num >= 20;
   // .map(function (num) {
        return num  ** 2;
  });
  
    let newarr = [];

     newarr = multiplesOfThree.map(function (num) {
        return num  ** 2;
    });

  let  multiplesOffive = numbers.filter(function (num) {
                    if(num % 5 === 0) return true;
                        else return false;
                return num % 5 === 0;
            });



    console.log(multiplesOffive);



 
