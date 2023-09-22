// --------------- (1) JS코드를 실행하는 순가 전역 컨텍스트가 콜 스택에 담김.
var a = 1;
function outer() {
    function inner() {
        console.log(a); // undefined
        var a = 3;
    }
    inner();
    console.log(a);     // 1
}
outer();    /**--------(2) 전역 컨텍스트와 관련된 코드들을 순차로 진행하다가 outer()함수를 호출하면 
                    JS엔진은 outer에 대한 환경정보를 수집해서 Outer실행 컨텍스트를 생성한 후 콜 스택에 담는다. 
                    콜 스택 맨 위에 outer실행 컨텍스트가 놓인 상태가 됐으므로 전역 컨텍스트와 관련된 코드의 실행을 일시 중단하고 
                    outer 실행 컨텍스트(outer함수 내부의 코드들)를 순차로 실행
            */

console.log(a);         // 1