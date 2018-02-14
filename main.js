function findIndex(str, index, debug) {
    // teste if the index is a bracket
    let colsing = -1;
    let arr = [];

    // debug = true;

    if (str.charAt(index) !== '[')
        return colsing;

    for (let i = index; i < str.length; i++) {
        const element = str[i];

        if (debug) {
            console.log(`current element: ${element}`);
            console.log(`current temp array: ${arr.join(', ')}`);
        }
        
        if (element === ']') {
            arr.shift();
            if (debug) {
                console.log('remove first element');
            }
        } else if (element === '[') {
            arr.push(element);
            if (debug) {
                console.log(`pushing element: ${element}`);
            }
        }

        if (arr.length === 0)
            return i;
    }  

    return -1;
}

module.exports = findIndex;
