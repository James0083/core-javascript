//스코프(scope) : 식별자에 대한 유효범위
//'식별자 유효범위(스코프)'를 안에서부터 바깥으로 차례로 검색해 나가는 것을 스코프 체인(scope chain)이라고 한다.
// 이때 사용되는 것이 outerEnvironmentReference이다.

/**
 * outerEnvironmentReference는 현재 호출된 함수가 '선언될 당시'의 LexicalEnvironment를 참조한다. 
 * ('선언하다'라는 행위가 실제로 일어날 수 있는 시점 = 콜 스택 상에서 어떤 실행 컨텍스트가 활성화된 상태)
 * 
 * 예를 들어 함수 A내부에 함수 B를 선언, 함수 B 내부에 함수 C를 선언한 경우,
 * 함수 C의 outerEnvironmentReference는 함수 B의 LexicalEnvironment를 참조,
 * 함수 B의 outerEnvironmentReference는 함수 B가 선언되던 때(함수 A)의 LexicalEnvironment를 참조,
 * ==> outerEnvironmentReference는 '연결리스트(linked list)'의 형태를 띈다.
 * ==> 각 outerEnvironmentReference는 오직 자신이 선언된 시점의 LexicalEnvironment만 참고하고 있기 때문에
 * 가장 가까운 요소부터 차례로 접근할 수 있다. 
 * 
 * '선언 시점의 LexicalEnvironment'를 계속 찾아올라가면 마지막에는 전역 컨텍스트의 LexicalEnvironment가 있다.
 * 
 * 
 * ==> 여러 스코프에서 동일한 식별자를 선언한 경우에는 무조건 스코프 체인 상에서 가장 먼저 발견된 식별자에만 접근 가능.
 */

var a = 1;
var outer = function () {
    var inner = function () {
        console.log(a);
        var a = 3;
    }
    inner();
    console.log(a);
}
outer();  
console.log(a);

/** 프로그램 시작
 * 1. 전역 컨텍스트 활성화. 전역 컨텍스트의 environmentRecord에 { a, outer } 식별자를 저장.
 *      (전역 컨텍스트의 outerEnvironmentReference에는 아무것도 담기지 않음)
 *  || 전역 컨텍스트
 *  | L.E(LexicalEnvironment)
 *  | - e : { a, outer }
 * 
 * 2. a에 1을, outer에 함수를 할당한다.
 * 3. outer함수를 호출. 전역 컨텍스트의 코드는 일시중단. outer 실행 컨텍스트가 활성화 되어 outer함수로 이동.
 * 4. outer 실행 컨텍스트의 environmentRecord에 { inner } 식별자를 저장.
 *      outerEnvironmentReference에는 outer 함수가 선언될 당시의 LexicalEnvironment가 담기고, 
 *      전역 공간에서 선언됐으므로 전역 컨텍스트의 LexicalEnvironment를 참조복사한다. [ GLOBAL, { a, outer } ]라고 표기한다.
 *                                                                [실행 컨텍스트 이름, environmentRecord객체]
 *  || outer 컨텍스트
 *  | L.E
 *  | - e : { inner }
 *  | - o : [ GLOBAL, { a, outer } ]
 * 
 * 5. outer 스코프에 있는 변수 inner에 함수를 할당.
 * 6. inner 함수를 호출. ==> outer실팽 컨텍스트의 코드 일시중단, inner 실행 컨텍스트 활성화.
 * 7. inner 실행 컨텍스트의 environmentRecord에 { a } 식별자를 저장.(var a; 호이스팅)
 *      outerEnvironmentReference에는 Inner함수가 선언될 당시의 LexicalEnvironment(outer함수의 LexicalEnvironment)가 담긴다.
 *      ==> [ outer, { inner } ]
 *  || inner 컨텍스트
 *  | L.E
 *  | - e : { a }
 *  | - o : [ outer, { inner } ]
 * 
 * 8. 식별자 a에 접근. 현재 활성화 상태인 inner 컨텍스트의 environmentRecord에서 a를 검색 -> a를 발견했지만 아직 할당된 값이 없음. -> undefined 출력.
 * 9. inner 스코프에 있는 변수 a에 3 할당.
 * 10. inner 함수 종료. inner 실행 컨텍스트가 콜 스택에서 제거됨. outer 실행 컨텍스트 다시 활성화.
 * 11. 식별자 a에 접근. 활성화된 실행 컨텍스트의 L.E에 접근. environmentRecord에서 a를 검색 -> 없음 -> outerEnvironmentRecord로 넘어감.
 *      -> 두번째 L.E(전역 L.E) 에 a가 있음. -> a에 저장된 값인 1을 반환.
 * 12. outer함수 실행 종료. outer 실행 컨텍스트가 콜스택에서 제거. 전역 컨텍스트 활성화.
 * 13. 식별자 a에 접근 시도. environmentRecord에 a 있음. 저장된 값인 1을 반환.
 * 14. 전역 컨텍스트가 콜스택에서 제거. 프로그램 종료
 * 
 */

// 7에서 var a; 선언으로 undefine 으로 처리된것.
// var a를 선언하지 않고 a=3; 으로 했으면 undefined가 아니라 1이 출력

// inner 함수 내부에서 a변수를 선언했기 때문에 전역공간에서 선언한 동일한 이름의 a변수에는 접근할 수 없었다. 
//      ==> 변수 은닉화(variable shadowing)
