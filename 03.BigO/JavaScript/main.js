//#1 -- For loop in Javascript.
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
            // Big O 는 최악의 시나리오만 계산한다. --> 즉 'nemo' 가 배열의 마지막에 있다고 가정하여 계산됨
const large = new Array(10).fill('nemo');

//////////////////////////////
///// Big O notation 1 ////////
//////////////////////////////
// O(n) --> Linear Time   : the operations linearly grow by increase of input 
                            // 컴퓨터의 operation 이 input 의 증과량과 같이 늘어남
///////////////////////////////

function findNemo(array) {
  // let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    console.log('running');
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
      break;
    }
  }
  // let t1 = performance.now();
  // console.log('Call to find Nemo took : ' + (t1 - t0) + ' milliseconds');  
      
      // performance.now() 는 DOMHighResTimeStamp 를 return 하므로 
      // DOM 이 없는 node 에서는 아래의 console.time / timeEnd 를 써야함
      // but , 더 정확함
}
    
    // console.time(findNemo);
    //findNemo(everyone);  
    // console.timeEnd(findNemo);
    
    
    

    
    
    
//////////////////////////////
///// Big O notation 2 ////////
//////////////////////////////
// O(1) -->   Constant Time    :  boxes 의 사이즈와 관계 없이 지정한 operation 의 수만큼만 operation 이 증가함
                                // O(2), O(3), O(4) 라고 쓰지 않고 모두 O(1) 로 기입함
                  // scalable 함
///////////////////////////////

const boxes = [0, 1, 2, 3, 4, 5];
function logFirstTwoBoxes(boxes){
 console.log(boxes[0]);  // O(1)
 console.log(boxes[1]);  // O(1)
//  console.log(boxes[2]);   // => 추가되면 전체는 O(3) 가 됨
}

logFirstTwoBoxes(boxes);   // O(2)  : 지정한 operation 의 수만큼만 operation 이 증가함





//////////////////////////////
///// Big O Rule 2 ////////
//// Remove Constants (상수 제거)
//////////////////////////////

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);    // O(1)

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {    // O(n/2)
      console.log(items[index]);    // O(n/2)
      index++;                     // O(n/2)
  }

  for (var i = 0; i < 100; i++) { // O(100)
      console.log('hi');          // O(100)
  }
}

// O(3n/2 + 201) -> O(n + 1)      // 상수를 제거하는 것이 rule 2 ( 상수가 엄청 커도 상관 없음 )
// ==> BIG O(n)                         // 2n -> n ,  n + 2000 -> n