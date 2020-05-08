/////////////
// space complexity
////////////////
// time 이 아닌 space 에 대한 Big O 측정을 다룬다.

function booooo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("booooo!");
  }
}
// _ O(1)   _ i 정도는 constant 로 친다.

booooo([1, 2, 3, 4, 5]);

function arrayOfHiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
}

arrayOfHiNTimes(6);

// _ O(n)   _ datasturcture 를 추가하고 loop 에따라 메모리 채움
