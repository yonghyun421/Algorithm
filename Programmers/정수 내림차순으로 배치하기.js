// 정수 내림차순으로 배치하기
// dark
// light
// sublime
// vim
// emacs
//  JavaScript
// 문제 설명

// 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.
// 제한 조건
// n은 1이상 8000000000 이하인 자연수입니다.
// 입출력 예
// n	return
// 118372	873211

// 내 풀이

function solution(n) {
  return (
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .join("") * 1
  );
}

// 다른 사람 풀이

function solution(n) {
  const newN = n + "";
  const newArr = newN.split("").sort().reverse().join("");

  return +newArr;
}

// 이건 좀 내가 더 깔끔하게 푼것 같기도...?
