function getStringToUpperCase(str) {
    if (str.length === 0) {
        return str;
    };

    return str[0].toUpperCase() + str.slice(1);
}

getStringToUpperCase('hello world!') //'Hello world!'


function getClampString(str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    };
  
    const punctuation = [',', '.', '!', '?', ':', ';', ' ', '(', ')', '/'];
    let truncatedString = str.slice(0, maxLength);
    let cutIndex = null;

    for(let i = truncatedString.length - 1; i >= 0; i--) {
        if(punctuation.includes(truncatedString[i])) {
            cutIndex = i;
            break;
        }
    }

    if(cutIndex === null) {
        return truncatedString + '...'
    } else {
        return truncatedString.slice(0, cutIndex - 1) + '...';
    }
}

getClampString('Это длинная строка, которая должна быть обрезана по знакам препинания или пробелам.', 24) //'Это длинная строка...'


function isSubstring(str1, str2) {
    if (str1.length >= str2.length) {
        return str1.includes(str2);
    } else {
        return str2.includes(str1);
    };
  }

isSubstring('hello world!', 'hello') //true
isSubstring('hello world!', 'good') //false
isSubstring('hello', 'hello world!') //true