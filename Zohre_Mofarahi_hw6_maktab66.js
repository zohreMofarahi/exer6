
function sortByHeight(array) {

    const result = [...array].sort(function(a, b){return a - b}).filter((num) => num !== -1);
    let Index = 0;
    for (let i = 0; i < array.length; i++) {
    
    if (array[i] === -1) continue;
    else {
    
    array[i] = result[Index++];
    }
    }
    return array;
    }