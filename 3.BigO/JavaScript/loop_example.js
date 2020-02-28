const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "grill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank"
];
const large = new Array(100000).fill("nemo");   // O(n)

/* 
    아래 function 들은 모두 같은 내용이지만
    다른 방식으로 표현됨
    
    : READABLity 의 차이를 가짐
*/

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {      // O(n)
    if (array[i] === "nemo") {                  // O(1)
      console.log("Found Nemo!");
    }
  }
}
                                                // O(2n+1) = O(n)

findNemo(everyone);


const findNemo2 = (array) => {
    array.forEach((fish) => {
        if (fish === "nemo") {
            console.log("Found NEMO!");
        }
    })
}

const findNemo3 = (array) => {
    for (let fish of array) {
        if(fish === "nemo"){
            console.log("Found NEMO!");
        } 
    }
}

findNemo2(everyone);
findNemo3(everyone);