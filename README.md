# Codewars 연습 프로젝트

각 문제의 답은 `solutions` 폴더 내에 정리되어 있으며, 테스트 코드는 `test` 폴더에 정리되어 있음.

<details>
<summary>011. Simple Pig Latin</summary>

#### [Codewars Link](https://www.codewars.com/kata/520b9d2ad5c005041100000f)

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

### Examples

```javascript
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !'); // elloHay orldway !
```

</details>
<details>
<summary>010. Extract the domain name from a URL</summary>

#### [Codewars Link](https://www.codewars.com/kata/514a024011ea4fb54200004b)

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

```javascript
domainName('http://github.com/carbonfive/raygun') == 'github';
domainName('http://www.zombie-bites.com') == 'zombie-bites';
domainName('https://www.cnet.com') == 'cnet';
```

</details>
<details>
<summary>009. Directions Reduction</summary>

#### [Codewars Link](https://www.codewars.com/kata/5202ef17a402dd033c000009)

### Once upon a time, on a way through the old wild mountainous west,…

… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

### How I crossed a mountain desert the smart way.

The directions given to the man are, for example, the following (depending on the language):

```
["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
```

or

```
{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
```

or

```
[North, South, South, East, West, North, West]
```

You can immediatly see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

```
["WEST"]
```

or

```
{ "WEST" }
```

or

```
[West]
```

### Other examples:

In `["NORTH", "SOUTH", "EAST", "WEST"]`, the direction `"NORTH" + "SOUTH"` is going north and coming back right away.

The path becomes `["EAST", "WEST"]`, now `"EAST"` and `"WEST"` annihilate each other, therefore, the final result is `[]` (nil in Clojure).

In `["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"]`, `"NORTH"` and `"SOUTH"` are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to `["WEST", "WEST"]`.

### Task

Write a function `dirReduc` which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

The Haskell version takes a list of directions with `data Direction = North | East | West | South`.
The Clojure version returns nil when the path is reduced to nothing.
The Rust version takes a slice of `enum Direction {NORTH, SOUTH, EAST, WEST}`.
See more examples in "Sample Tests:"

### Notes

- Not all paths can be made simpler. The path `["NORTH", "WEST", "SOUTH", "EAST"]` is not reducible. `"NORTH"` and `"WEST"`, `"WEST"` and `"SOUTH"`, `"SOUTH"` and `"EAST"` are _not directly_ opposite of each other and can't become such. Hence the result path is itself : `["NORTH", "WEST", "SOUTH", "EAST"]`.
- if you want to translate, please ask before translating.

</details>
<details>
<summary>008. Title Case</summary>

#### [Codewars Link](https://www.codewars.com/kata/5202ef17a402dd033c000009)

A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

### Arguments (Haskell)

- First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
- Second argument: the original string to be converted.

### Arguments (Other languages)

- First argument (required): the original string to be converted.
- Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.

### Example

```javascript
titleCase('a clash of KINGS', 'a an the of'); // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In'); // should return: 'The Wind in the Willows'
titleCase('the quick brown fox'); // should return: 'The Quick Brown Fox'
```

</details>
<details>
<summary>007. Break camelCase</summary>

#### [Codewars Link](https://www.codewars.com/kata/5208f99aee097e6552000148)

Complete the solution so that the function will break up camel casing, using a space between words.

```javascript
solution('camelCasing') == 'camel Casing';
```

</details>
<details>
<summary>006. Detect Pangram</summary>

#### [Codewars Link](https://www.codewars.com/kata/545cedaa9943f7fe7b000048)

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

</details>
<details>
<summary>005. String ends with?</summary>

#### [Codewars Link](https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d)

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

```javascript
solution('abc', 'bc'); // returns true
solution('abc', 'd'); // returns false
```

</details>
<details>
<summary>004. Isograms</summary>

#### [Codewars Link](https://www.codewars.com/kata/54ba84be607a92aa900000f1)

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

```javascript
isIsogram('Dermatoglyphics') == true;
isIsogram('aba') == false;
isIsogram('moOse') == false; // -- ignore letter case
```

</details>
<details>
<summary>003. Sort the odd</summary>

#### [Codewars Link](https://www.codewars.com/kata/578aa45ee9fd15ff4600090d)

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

#### [Codewars Link](https://www.codewars.com/kata/55fd2d567d94ac3bc9000064)

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

#### [Codewars Link](https://www.codewars.com/kata/55f8a9c06c018a0d6e000132)

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

</details>
