/**
 * Pangram인지 판단하려면 모든 알파벳이 문장에 있어야 하므로 
 * 알파벳 목록에 있는 알파벳 중 하나라도 문장에 없을 경우만 찾으면 된다.
 */

function isPangram(string) {
    string = string.toLowerCase()
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for (const c of alphabet) {
        if (string.indexOf(c) === -1) {
            return false
        }
    }
    return true
}

module.exports = isPangram