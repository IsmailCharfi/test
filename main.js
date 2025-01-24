/* function push(array, element) {

    return [...array, element]
}

function pop(array) {
    const a = array[0]
    array = array.splice(0, 1)
    return [array, a]
}
 */
function Rotate(array, x) {
    let result = new Array(array.length)

    for(let i=0; i<x; i++) {
        result[i] = array[i + x - 1]
    }

    for (let i=x+1; i<array.length; i++) {
        result[i] = array[array.length - i - x + 1]
    }

    return result
}


const array = [7, 3, 5, 0, 8, 1, 6]


console.log(Rotate(array, 3))