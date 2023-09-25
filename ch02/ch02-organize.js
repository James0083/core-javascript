/** 실행 컨텍스트 Execution context
 *      : 실행할 코드에 제공할 환경 정보들을 모아놓은 객체 
 * 
 * 자바스크립트는 어떤 실행 컨텍스트가 활성화 되는 시점에서 
 *  선언된 변수를 위로 끌어올리고(호이스팅 hoisting),
 *  외부 환경 정보를 구성하고, 
 *  this값을 설정하는 등의 동작을 수행.
 * 
 * 동일한 환경에 있는 코드들을 싱행할 때 필요한 환경정보들을 모아 컨텍스트를 구성하고, 이를 콜스택(call stack)에 쌓아 올렸다가, 
 * 가장 위에 쌓여있는 컨텍스트와 관련있는 코드들을 싱행하는 식으로 전체 코드의 환경과 순서를 보장한다. 
 * 
 * 여기서 '동일한 환경'(하나의 실행 컨텍스트)을 구성할 수 있는 방법으로 전역공간, eval() 함수, 함수 등이 있다. 
 * 흔히 실행 컨텍스트를 구성하는 방법은 '함수를 실행'하는 것 뿐이다.
 * 
 *  - [예제 2-2]
 * 어떤 실행 컨텍스트가 활성화 될 때 JavaScript엔진이 해당 컨텍스트에 관련된 코드들을 실행하는 데 필요한 환경 정보들을 수집해서 
 * 실행 컨텍스트 객체에 저장한다. 
 * 이 객체는 JS엔진이 활용할 목적으로 생성할 뿐 개발자가 코드를 통해 확인할 수는 없다.
 * - VariableEnvironment(가변환경) : 현재 컨텍스트 내의 식별자들에 대한 정보 + 외부 환경정보, 선언지점의(최초 실행 시의) LexicalEnvironment의 스냅삿으로, 
 *                          변경 사항은 반영되지 않음.
 * - LexicalEnvironment(사전적 환경) : 처음에는 VariableEnvironment와 같지만 변경 사항이 실시간으로 반영됨.
 *                                     - "현재 컨텍스트의 내부에는 a,b,c와 같은 식별자들이 있고 그 외부 정보는 D를 참조하도록 구성돼 있다" 같이 
 *                                      컨텍스트를 구성하는 환경정보들을 사전에서 접하는 느낌으로 모아놓은 것
 * - ThisBinding : this 식별자가 바라봐야 할 대상 객체.
 * 
 * === 실행 컨텍스트를 생성할 때 VariableEnvironment를 만들고, 이후에는 LexicalEnvironment를 주로 활용한다. ===
 * 
 * VariableEnvironment와 LexicalEnvironment의 내부는 environmentRecord와 outer-EnvironmentReference로 구성되어있다.
 * 초기화 과정 중에는 사실상 완전히 동일. 이후 코드진행에 따라서 서로 달라지게 된다. 
 * 
 * environment Record에는 현재 컨텍스트와 관련된 코드의 식별자 정보들
 *  (컨텍스트를 구성하는 함수에 지정된 매개변수 식별자, 함수 자체, var로 선언된 변수의 식별자 등)이 저장된다. 
 * 컨텍스트 내부 전체를 처음부터 끝까지 쭉 훑어나가며 '순서대로' 수집한다.
 * 
 * ==> 코드가 실행되기 전임에도 JS엔진은 이미 해당 환경에 속한 코드의 변수명을 모두 알고 있게 된다.
 *      따라서 JS엔진이 실제로 변수들을 끌어올린건 아니지만 끌어올린 것과 같은 상태이므로, 끌어올린(hoisting)것으로 간주한다.
 * 
 * | inner - VariableEnvironment    - environmentRecord (snapshot)          | 
 * |       |                        L outer-EnvironmentReference (snapshot) | 
 * |       |                                                                | 
 * |       L LexicalEnvironment     - environmentRecord                     | 
 * |       |                        L outer-EnvironmentReference            | 
 * |       |                                                                | 
 * |       L ThisBinding                                                    | 
 * |                                                                        | 
 * | outer                                                                  | 
 * | 전역 컨텍스트                                                             |
 * -------------------------------------------------------------------------
 */

/** SnapShot(스냅샷) : 특정 시간에 데이터 저장 장치의 상태를별도의 파일이나 이미지로 저장하는 기술 */

/** 실행 컨텍스트를 생성할 때는 VariableEnvironment와 LexicalEnvironment가 동일한 내용으로 구성되지만,
 *  LexicalEnvironment는 함수 실행 도중에 변경되는 사항이 즉시 반영되는 반면, 
 * VariableEnvironment는 초기 상태를 유지한다.
 *  둘 다 매개변수명, 변수의 식별자, 선언한 함수의 함수명 등을 수집하는 environmentRecord와 
 *  바로 직전 컨텍스트의 LexicalEnvironment 정보를 참조하는 outerEnvironment로 구성됨.
 * 
 *  전역 컨텍스트의 LexicalEnvironment에 담긴 변수를 전역번수라고 하고, 
 *  그 밖의 함수에 의해 생성된 실행 컨텍스트의 변수들은 모두 지역변수.
 *  *안전한 코드구성을 위해 가급적 전역변수의 사용은 최소화*
 */