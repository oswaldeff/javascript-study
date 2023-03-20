// && and 연산자
3 > 2 && 6 < 8; // 출력결과 true

// || or 연산자
3 > 2 || 5 > 6; // 출력결과 true

// bool이 !와 결합시, 반대의 bool
!true; // 출력결과 false, true의 역
!false; // 출력결과 true, false의 역

// 문자열에 !와 결합시, false
!'a'; // 출력결과 false
// 문자열에 !!와 결합시, true
!!'a'; // 출력결과 true
// 빈 문자열에 !!와 결합시, false
!!''; // 출력결과 false
// false와 !!결합시, false
!!false; // 출력결과 false
// 숫자와 !!결합시, false
!!0; // 출력결과 false
// NaN과 !!결합시, false
!!NaN; // 출력결과 false

// 연산자의 우선순위: !연산자가 <>연산자보다 우선순위가 높다.
