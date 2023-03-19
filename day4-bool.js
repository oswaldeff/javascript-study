// true & false
"true" // ""사용시 문자열로 인식
true
true;
false
false;

typeof true; // 출력결과 boolean
5 > 3; // 출력결과 true

5 != 5; // 출력결과 false
5 == 5; // 출력결과 true

// NaN 비교
NaN == NaN; // 출력결과 false
NaN != NaN; // 출력결과 true

// 문자열 비교
'b' > 'a'; // 출력결과 ture

// 문자열 숫자 비교
'3' < 5; // 출력결과 true // 문자열 형변환시 값을 기준으로 비교한다.

'abc' < 5; // 출력결과 false, 'abc'는 숫자로 형변환시 NaN이므로 숫자와 비교시 false를 return

// == 과 ===차이 비교
'1' == 1; // 출력결과 true
1 == true; // 출력결과 true
1 == '1'; // 출력결과 true
// ==은 자료형까지 변환해서 비교해주므로, 자료형까지 같은지 비교하려면 ===을 사용한다.
'1' === 1; // 출력결과 false
