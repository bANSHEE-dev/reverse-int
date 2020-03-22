module.exports = function reverse (n) {
    let array = String(Math.abs(n)).split('');
    array.reverse();
    let result =  array.join(''); 
    return result;  
};
