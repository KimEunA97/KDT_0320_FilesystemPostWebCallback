const stringExample = "참깨빵 위에 순쇠고기 패티 두 장 특별한 소스 양상추 치즈 피클 양파까지";


//문자열 분해 = 공백 없애기
function splitString(stringParams) {
  let result = stringParams.split(' ');
  console.log(typeof(result));
  return result;
}

//문자열 붙이는 기능 함수
function appendString(stringArray, callback) {
  let body = "";
  stringArray.forEach(function (element) {
    body = body + element;
  });
  //callback(body)는 body를 인자로 전달하여 호출됨.
  //처리된 결과를 콜백함수를 통해 외부로 전달하기 위함.
  callback(body)
};


//본론은 여기. 여기서 함수가 호출돼서 본격적으로 쓰임.
let bodyTemplate = ``;
let resultCase = appendString(splitString(stringExample), function (body) {
  console.log(body);
  bodyTemplate += body.substring(0, body.indexOf(0, body.indexOf("티") + 1));
  console.log(bodyTemplate);
});

//html 요소로 변환
function elementMaker(string) {
  return `<div>${string}</div>`;
}

console.log(elementMaker(bodyTemplate));

// const root = document.getElementById('root')
// const testDiv = elementMaker(bodyTemplate);
// root.append(testDiv);