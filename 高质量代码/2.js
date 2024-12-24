// Increment function simulates incrementing a number represented by a string
function increment(number) {
  let isOverflow = false;
  let carry = 0;
  let nLength = number.length;

  // Start incrementing from the last character
  for (let i = nLength - 1; i >= 0; i--) {
    let sum = parseInt(number[i]) + carry;

    if (i === nLength - 1) {
      sum++; // Increment the last digit
    }

    if (sum >= 10) {
      if (i === 0) {
        isOverflow = true; // Overflow happens when we are at the first digit
      } else {
        sum -= 10;
        carry = 1; // Set carry for the next digit
        // Update the number string by replacing the current character with the sum
        number = number.slice(0, i) + sum + number.slice(i + 1);
      }
    } else {
      // No carry needed, just update the current position and break the loop
      number = number.slice(0, i) + sum + number.slice(i + 1);
      break;
    }
  }

  return isOverflow;
}

// Print the number represented as a string, skipping leading zeros
function printNumber(number) {
  let isBeginning0 = true;
  for (let i = 0; i < number.length; i++) {
    if (isBeginning0 && number[i] !== "0") {
      isBeginning0 = false;
    }
    if (!isBeginning0) {
      process.stdout.write(number[i]);
    }
  }
  console.log(); // End the line after printing the number
}

// Print all numbers from 1 to the maximum n-digit number
function print1ToMaxOfNDigits(n) {
  if (n <= 0) {
    return;
  }

  let number = "0".repeat(n); // Initialize the number as '000...000'

  while (!increment(number)) {
    printNumber(number);
  }
}

// Example usage:
print1ToMaxOfNDigits(3); // This will print numbers from 1 to 999
