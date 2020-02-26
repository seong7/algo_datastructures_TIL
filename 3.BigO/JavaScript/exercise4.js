function printAllNumbersThenAllPairSums(numbers){

    console.log('these are the numbers: ');
    numbers.forEach(function(number){
        console.log(number);
    });

    console.log('and these are their sums:');
    numbers.forEach(function(firstNumber){
        numbers.forEach(function(secondNumber){
            console.log(firstNumber + secondNumber);
        });
    });

}

printAllNumbersThenAllPairSums([1, 2, 3, 4, ,5]);

// O(n + n^2)
// Big O Rule 4 : Drop Non Dominants (덜 중요한 요소는 제외해라)
                                    // n에 임의 값 대입해 가장 큰 요소만 남기면 됨
                                    // e.g) O(n^2 + 3n + 100 + n/2) ==> O(n^2)
                                    // 참고로 O(n^3) 도 존재할 수 있지만 3 중 for 문은 거의 대부분의 경우 잘 못짠 코드임
// ==> Big O(n^2) 