
// 문자열 합치기

1 + 1 // 출력결과 2

'애플' + '망고' // 출력결과 애플망고
'애플' - '망고' // 출력결과 NaN
'애플' * '사과' // 출력결과 NaN
'애플' / '사과' // 출력결과 NaN

5/2 // 출력결과 2.5

// 숫자

typeof 0x1a1 // 출력결과 number타입
typeof NaN // 출력결과 number타입

"123" + 4 // 출력결과 127이 아닌 "1234"

parseInt("123") + 4 // 출력결과 127
typeof parseInt("123") // 출력결과 number타입

Number("123") + 4 // 출력결과 127
typeof Number("123") // 출력결과 number타입

parseFloat("3.14") // 출력결과 3.14
typeof parseFloat("3.14") // 출력결과 number타입

Number("3.14") // 출력결과 3.14 !Number은 소수도 알아서 숫자로 바꿔준다!
parseInt("3월") // 출력결과 3 -> parseInt는 문자열에서 숫자를 parsing
Number("3월") // 출력결과 NaN -> Number은 문자열에서 숫자를 parsing하지 못하고 NaN을 return

// 문자열 자르기
'12321'.substring(0, 3) // 출력결과 123

// input
prompt() //
// prompt parsing
parseInt(prompt()) // 출력결과 NaN, NaN은 Not a Number의 약자

// 진법 parsing
parseInt("101", 2) // 2진법

// Infinity
2 / 0 // 출력결과 Infinity, Infinity의 타입은 Number

// 형 변환(type casting) +
"문자열" + 12 // 출력결과 "문자열12", 문자열을 다른 자료형과 더하게 되는 경우 문자열로 return

// 문자열 parsing
parseInt("문자열") // 출력결과 NaN

// 형 변환(type casting) -
"문자열" - 0 // 출력결과 NaN
"3" - 0 // 출력결과 Number타입의 3

// 연산자 우선순위
// 퀴즈1. 3 ** 2 + 1 = 27 ?
3 ** (2 + 1) // return 27, ()부터 연산

// 실수 연산
0.5 + 0.5 // 출력결과 1 return
// 0.1 + 0.2 = 0.3 ?
0.1 + 0.2 // 출력결과 0.3000000000004 return, 2진법과 10진법의 차이로 인하여 부동소수점 오차 발생
// 가장 간단한 방법은 실수를 정수로 바꿔서 계산한 뒤 마지막에 다시 실수로 바꾸는 방법.
( 0.1*10 + 0.2*10 ) / 10 // 0.3
