function largest_among_three(num1, num2, num3) {
    var largest = num1;
    if (num2 > largest) {
       largest = num2;
    }
    if (num3 > largest) {
       largest = num3;
    }
    return largest;
}

var largest = largest_among_three(5,1,888);
console.log('Largest between three numbers : '+largest);
