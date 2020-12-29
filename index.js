console.log("Ola mundo")
console.log("sem escândalo familia")
/**
 * @example verifica se o número é par ou nao
 * @param {number} num numero para analizar
 * @param {boolean} isEven variavel que indicará se este número é par ou não
 */
function isEven(number){
    if(number %2 === 0) {
     return true
    } else {
        return false
    }
}
console.log(isEven(4))