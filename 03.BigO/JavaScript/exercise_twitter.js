////////////////////////
// 첫번째 tweet / 마지막 tweet 찾아라
const array = ["1st", "2nd", "3rd"];
array[0]; // 첫번째   __ O(1)
array[array.length - 1]; // 마지막   __ O(1)
// ___ Array 의 Access : O(1)



//////////////////
// 각각의 날짜를 비교해라
const array = [
  {
    tweet: "1st",
    date: 2012
  },
  {
    tweet: "2nd",
    date: 2014
  },
  {
    tweet: "3rd",
    date: 2020
  }
];
// O(n^2)
// __각각 모두를 비교하려면 nested loop 을 사용하므로 



//////////
// String 의 길이를 구하라
'skdjfkasjdfasdkfj'.length;
// String 에 내장된 method 에 따라 다르다.
// 즉, 언어마다 내장된 method 에 따라 다름
/////
// Javascript : length 는 function 이 아니라
//              String object 의 length property 값을 찾는 것이므로
//              O(1)  