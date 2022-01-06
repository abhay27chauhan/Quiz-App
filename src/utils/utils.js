export function calAccuracy(correct, total){
    return Math.round((correct/total)*100);
}

export function calAverage(array){
    return array.reduce(reducer, 0);
}

function reducer(acc, curr){
    return acc + curr;
}