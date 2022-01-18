// Changed the values and operators to test if the algorithm meets all conditions
var x = 50;
var expression1 = x < 25;
var expression2 = x > 50;

// Checked if both expressions are true using &&
if (expression1 && expression2) {
  console.log('True ✅ True ✅');

  // If both conditions are not true, checked if expression1 is true
} else if (expression1) {
  console.log('True ✅ False ❌');

  // If expression1 is not true, then checked if expression2 is true
} else if (expression2) {
  console.log('False ❌ True ✅');

  // If none of the conditions above evaluated to true, both expressions must be false
} else {
  console.log('False ❌ False ❌');
}
