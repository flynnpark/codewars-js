/**
 * 중복 캐릭터가 존재하면 false, 존재하지 않으면 true를 반환하는 함수를 만들면 된다.
 * 대문자가 포함될 수 있으므로 먼저 모두 소문자로 변경한다.
 * 이후 오브젝트의 키-밸류를 활용하여 단어 내의 해당 캐릭터가 이미 존재 했었는지 체크한다.
 */

function isIsogram(str) {
  const hash = {};
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]]) {
      return false;
    }
    hash[str[i]] = true;
  }
  return true;
}

module.exports = isIsogram;
