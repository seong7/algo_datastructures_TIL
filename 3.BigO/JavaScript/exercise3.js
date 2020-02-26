// What is the Big O of the below function? (Hint, you may want to go line by line)
function compressBoxesTwice(boxes, boxes2){
  boxes.forEach(function(box) {
    console.log(box);
  });

  boxes2.forEach(function(box){ // 매개변수 = element
    console.log(box);
  });
}

// O(a + b)   // a: 첫번째 매개변수 b: 두번째


// What is the Big O of the below function? (Hint, you may want to go line by line)
function compressBoxesTwice(boxes, boxes2){
  boxes.forEach(function(box) {
    console.log(box);
    boxes2.forEach(function(box){ // 매개변수 = element
      console.log(box);
    });
  });
}

// O(a * b)   // a: 첫번째 매개변수 b: 두번째
// nested for (이중 for 문) 은 operation 수 곱해야함

//Log all pairs of array

const boxes = ['a', 'b', 'c', 'd', 'e'];
function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j])
    }
  }
}

logAllPairsOfArray(boxes)

// O( n * n )
// ==> O( n^2 )   // 컴퓨터의 operation 이 제곱으로 늘어남

