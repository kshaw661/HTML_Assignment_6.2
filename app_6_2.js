function max3num(num1, num2, num3) {
    var max_so_far = num1;
    if (num2 > max_so_far) {
       max_so_far = num2;
    }
    if (num3 > max_so_far) {
       max_so_far = num3;
    }
    return max_so_far;
}

var xxx = max3num(5,1,888);
console.log(xxx);