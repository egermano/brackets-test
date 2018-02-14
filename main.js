// Find index of closing bracket for a given opening bracket in an expression
function findIndex(str, index) {
    // teste if the index is a bracket
    let colsing = -1;
    let arr = [];

    if (str.charAt(index) !== '[')
        return colsing;

    for (let i = index; i < str.length; i++) {
        const element = str[i];

        // console.log(`current element: ${element}`);
        // console.log(`current temp array: ${arr.join(', ')}`);
        
        if (element === ']') {
            arr.shift();
            // console.log('remove first element');
        } else if (element === '[') {
            arr.push(element);
            // console.log(`pushing element: ${element}`);
        }

        if (arr.length === 0)
            return i;
    }  

    return -1;
}

// Find an equal point in a string of brackets
function findEqual(str) {

    let len = str.length;
    let opens = new Array(len + 1).fill(0);
    let closes = new Array(len + 1).fill(0);
    let index = -1;
    
    opens[0] = 0;
    closes[len] = 0;

    if (str.charAt(0) == '(')
        opens[1] = 1;
    if (str.charAt(len - 1) == ')')
        closes[len - 1] = 1;

    // Store the number of opening brackets
    // at each index
    for (let i = 1; i < len; i++)
    {
        if (str.charAt(i) == '(')
            opens[i + 1] = opens[i] + 1;
        else
            opens[i + 1] = opens[i];
    }


    // Store the number of closing brackets
    // at each index
    for (let i = len - 2; i >= 0; i--)
    {
        if (str.charAt(i) == ')')
            closes[i] = closes[i + 1] + 1;
        else
            closes[i] = closes[i + 1]
    }

    // console.log(str , opens, closes);

    // check if there is no opening or closing
    // brackets
    if (opens[len] == 0)
        return len;

    if (closes[0] == 0)
        return 0;


    // check if there is any index at which
    // both brackets are equal
    for (let i = 0; i <= len; i++) {
        if (opens[i] == closes[i]) {
            index = i;
        }
    }

    return index;
}

module.exports = { findIndex: findIndex, findEqual: findEqual};
