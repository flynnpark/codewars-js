# Codewars 연습 프로젝트

각 문제의 답은 `solutions` 폴더 내에 정리되어 있으며, 테스트 코드는 `test` 폴더에 정리되어 있음.

<details>
<summary>006. Detect Pangram</summary>

[Codewars Link](https://www.codewars.com/kata/545cedaa9943f7fe7b000048)

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

</details>
<details>
<summary>005. String ends with?</summary>

[Codewars Link](https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d)

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

```javascript
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
```

</details>
<details>
<summary>004. Isograms</summary>

[Codewars Link](https://www.codewars.com/kata/54ba84be607a92aa900000f1)

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

```javascript
isIsogram("Dermatoglyphics") == true;
isIsogram("aba") == false;
isIsogram("moOse") == false; // -- ignore letter case
```

</details>
<details>
<summary>003. Sort the odd</summary>

[Codewars Link](https://www.codewars.com/kata/578aa45ee9fd15ff4600090d)

You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

_Example_

```javascript
sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4];
```

</details>
<details>
<summary>002. Sum of odd numbers</summary>

[Codewars Link](https://www.codewars.com/kata/55fd2d567d94ac3bc9000064)

Given the triangle of consecutive odd numbers:

```
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
```

Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

```javascript
rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8
```

</details>
<details>
<summary>001. Regex validate PIN code</summary>

[Codewars Link](https://www.codewars.com/kata/55f8a9c06c018a0d6e000132)

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

</details>
