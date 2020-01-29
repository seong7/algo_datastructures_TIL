//#1 -- For loop in Javascript.
const nemo = ['nemo'];
const everone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(10).fill('nemo');

//////////////////////////////
///// Big O notation 1 ////////
//////////////////////////////
// O(n) --> Linear Time   : the operations linearly grow by increase of input 
                            // 컴퓨터의 operation 이 input 의 증과량과 같이 늘어남
///////////////////////////////

function findNemo1(array) {
  // let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
  // let t1 = performance.now();
  // console.log('Call to find Nemo took : ' + (t1 - t0) + ' milliseconds');  
      
      // performance.now() 는 DOMHighResTimeStamp 를 return 하므로 
      // DOM 이 없는 node 에서는 아래의 console.time / timeEnd 를 써야함
      // but , 더 정확함
    }
    
    // console.time(findNemo1);
    // findNemo1(large);  
    // console.timeEnd(findNemo1);
    
    
    

    
    
    
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