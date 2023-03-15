
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