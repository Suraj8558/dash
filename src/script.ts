// function sum (num) {
//   return function abc(count) {
//     return(num + count)
//   }
// }

// const adition = sum(30)
// console.log('first', adition(10))


// function gretting(greet) {
//   return function name(name) {
//     return `${greet} ${name}`
//   }
// }

// const hello = gretting('Hello')
// console.log(hello('John'))

// const howAreYou = gretting("how are you");
// console.log(howAreYou("suraj")
// )


// function addMomoized () {
//   let cache = {}
//   return function sum(n) {
//     if (n in cache) {
//       console.log("form cache ");
//       return cache[n];
      
//     }else{
//       console.log("from function");

//       cache[n] = n + 10;
//       return cache[n]
//     }
//   }

// }

// const add = addMomoized()
// // console.log(add(10));
// console.log(add(5));

// console.log(add(5));



//  console.log('this', this)

// const UserData = {
//   abc:'suraj',
//   user: () => {
//     console.log('this.name ', this.abc )
//   }
  
// }

    

// UserData.user();


// const info = {
//   name : "suraj",
//   abc(){
//    const xyz = () => {
//       console.log('this.name', this.name)
//     }

//     xyz()
//   }
// }

// info.abc();