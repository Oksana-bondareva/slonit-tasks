function getSumObjectNumericFields(obj) {
    let sum = 0;

    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            sum += obj[key];
        }
    }

    return sum;
}

getSumObjectNumericFields({name: 'Vasya', friends: 5, likes: 19, projects: 7}) //31


function getObjectSortedNumericFieldNames(obj) {
    const result = [];

    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            result.push({ name: key, value: obj[key] });
        }
    }

    return result
    .sort((prevValue, nextValue) => (nextValue.value - prevValue.value))
    .map(item => item.name); 
}

getObjectSortedNumericFieldNames({name: 'Vasya', friends: 5, likes: 19, projects: 7}) //[ 'likes', 'projects', 'friends' ]