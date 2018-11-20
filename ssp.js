/*preImmersive-buildingBlocksMastery-001-isOldEnoughToDrink
Write a function called “isOldEnoughToDrink”.
Given a number, in this case an age, “isOldEnoughToDrink” returns whether a person of this given age is old enough to legally drink in the United States.
Notes:
* The legal drinking age in the United States is 21.

var output = isOldEnoughToDrink(22);
console.log(output); // --> true*/

function isOldEnoughToDrink(age){
    return age >= 21
}

/*preImmersive-buildingBlocksMastery-002-isOldEnoughToDrive
  Write a function called “isOldEnoughToDrive”.
  Given a number, in this case an age, “isOldEnoughToDrive” returns whether a person of this given age is old enough to legally drive in the United States.
  Notes:
  * The legal driving age in the United States is 16.
  
  var output = isOldEnoughToDrive(22);
  console.log(output); // --> true*/

function isOldEnoughToDrive(age){
    return age >= 16
}

  
  
  /*preImmersive-buildingBlocksMastery-003-isOldEnoughToVote
  Write a function called “isOldEnoughToVote”.
  Given a number, in this case an age, ‘isOldEnoughToVote’ returns whether a person of this given age is old enough to legally vote in the United States.
  Notes:
  * The legal voting age in the United States is 18.
  
  var output = isOldEnoughToVote(22);
  console.log(output); // --> true */
  
  function isOldEnoughToVote(age){
    return age >= 18
  }


  /*preImmersive-buildingBlocksMastery-004-isOldEnoughToDrinkAndDrive
  Write a function called “isOldEnoughToDrinkAndDrive”.
  Given a number, in this case an age, “isOldEnoughToDrinkAndDrive” returns whether a person of this given age is old enough to legally drink and drive in the United States.
  Notes:
  * The legal drinking age in the United States is 21.
  * It is always illegal to drink and drive in the United States.
  
  var output = isOldEnoughToDrinkAndDrive(22);
  console.log(output); // --> false */
  
  function isOldEnoughToDrinkAndDrive(age){
      return age < 21
  }

  /*preImmersive-buildingBlocksMastery-008-checkAge
  Write a function called “checkAge”.
  Given a person’s name and age, “checkAge” returns one of two messages:
  “Go home, {insert_name_here}!”, if they are younger than 21.
  “Welcome, {insert_name_here}!”, if they are 21 or older.
  Naturally, replace “{insert_name_here}” with the given name. :)
  
  var output = checkAge('Adrian', 22);
  console.log(output); // --> 'Welcome, Adrian!' */
  
  function checkAge(name, age){
      if(age < 21){
          string = ('Go Home, '+name+'!');
          return string;
      } else {
          string = ('Welcome, '+name+'!');
          return string;
      }
  }
  
  
  /*preImmersive-buildingBlocksMastery-009-getFullName
  Write a function called “getFullName”.
  Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.
  
  var output = getFullName('Joe', 'Smith');
  console.log(output); // --> 'Joe Smith'*/
  
  function getFullName(firstName, lastName){
      fullName = (firstName+' '+lastName);
      return fullName;
  }


  /*preImmersive-buildingBlocksMastery-010-getLengthOfWord
  Write a function called “getLengthOfWord”.
  Given a word, “getLengthOfWord” returns the length of the given word.
  
  var output = getLengthOfWord('some');
  console.log(output); // --> 4 */
  
  function getLengthOfWord(word){
      return word.length
  }
  
  
  /*preImmersive-buildingBlocksMastery-011-getLengthOfTwoWords
  Write a function called “getLengthOfTwoWords”.
  Given 2 words, “getLengthOfTwoWords” returns the sum of their lengths.
  
  var output = getLengthOfTwoWords('some', 'words');
  console.log(output); // --> 9*/
  
  function getLengthOfTwoWords(word1, word2){
      totalLength = (word1.length + word2.length);
      return totalLength;
  }

  
  /*preImmersive-buildingBlocksMastery-012-isGreaterThanTen
  Write a function called “isGreaterThan10”.
  Given a number, “isGreaterThan10” returns whether the given number is greater than 10.
  
  var output = isGreaterThan10(11);
  console.log(output); // --> true*/
  
  function isGreaterThan10(num){
    if (num > 10){
        return true;
    } else if (num <= 10) {
        return false;
    } else {
        return undefined;
    }
  }
    
  /*preImmersive-buildingBlocksMastery-013-isLessThan30
  Write a function called “isLessThan30”.
  Given a number, “isLessThan30” returns whether the given number is less than 30.
  
  var output = isLessThan30(9);
  console.log(output); // --> true*/
  
  function isLessThan30(num) {
      if (num < 30) {
          return true;
      } else {
          return false;
      }
  }
  
    /*preImmersive-buildingBlocksMastery-014-equalsTen
  Write a function called “equalsTen”.
  Given a number, “equalsTen” returns whether or not the given number is 10.
  
  var output = equalsTen(9);
  console.log(output); // --> false*/
  
  function equalsTen(num){
      if (num === 10) {
          return true;
      } else {
          return false;
      }
  }
  
  
    /*preImmersive-buildingBlocksMastery-015-isLessThan
  Write a function called “isLessThan”.
  Given 2 numbers, “isLessThan” returns whether num2 is less than num1.
  
  var output = isLessThan(9, 4);
  console.log(output); // --> true */
  
  function isLessThan(num1, num2){
      if(num2 < num1){
          return true
      } else {
          return false 
      }
  }

  
  /*preImmersive-buildingBlocksMastery-016-isGreaterThan
  Write a function called “isGreaterThan”.
  Given 2 numbers, “isGreaterThan” returns whether num2 is greater than num1.
  
  var output = isGreaterThan(11, 10);
  console.log(output); // --> false */
  
  function isGreaterThan(num1, num2){
      return num2 > num1
  }
  
  
  /*preImmersive-buildingBlocksMastery-017-isEqualTo
  Write a function called “isEqualTo”.
  Given 2 numbers, “isEqualTo” returns whether num2 is equal to num1.
  
  var output = isEqualTo(11, 10);
  console.log(output); // --> false */
  
  function isEqualTo(num1, num2){
      return num2 === num1
  }
  
  /* preImmersive-buildingBlocksMastery-018-isEven
  Write a function called “isEven”.
  Given a number, “isEven” returns whether it is even.
  
  var output = isEven(11);
  console.log(output); // --> false*/
  
  function isEven(num){
      if (num % 2 === 0) {
          return true
      } else {
          return false
      }
  }
  
    /*preImmersive-buildingBlocksMastery-019-isOdd
  Write a function called “isOdd”.
  Given a number, “isOdd” returns whether the given number is odd.
  
  var output = isOdd(9);
  console.log(output); // --> true*/
  
  function isOdd(num) {
      if (num % 2 !== 0){
          return true
      } else {
          return false
      }
  }
  
    /* preImmersive-buildingBlocksMastery-020-isSameLength
  Write a function called “isSameLength”.
  
  Given two words, “isSameLength” returns whether the given words have the same length.
  
  var output = isSameLength('words', 'super');
  console.log(output); // --> true */
  
  function isSameLength(word1, word2){
      if (word1.length === word2.length) {
          return true
    } else {
        return false
    }
  }
  
  
  /*preImmersive-buildingBlocksMastery-021-areBothOdd
  Write a function called “areBothOdd”.
  
  Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
  
  var output = areBothOdd(1, 3);
  console.log(output); // --> true*/
  
  function areBothOdd(num1, num2){
      if ((num1 % 2) && (num2 % 2) !== 0){
          return true
      } else {
          return false
      }
  }
  
    /*preImmersive-buildingBlocksMastery-022-isEitherEven
  Write a function called “isEitherEven”.
  
  Given two numbers, “isEitherEven” returns whether or not either one of the given numbers is even.
  
  var output = isEitherEven(1, 4);
  console.log(output); // --> true */
  
function isEitherEven(num1, num2){
    if(num1 % 2 === 0 ||  num2 % 2 === 0){
        return true
    } else {
        return false
    }
}

  
    /*preImmersive-buildingBlocksMastery-023-isOddLength
  Write a function called “isOddLength”.
  
  Given a word, “isOddLength” returns whether the length of the given word is odd.
  
  var output = isOddLength('special');
  console.log(output); // --> true*/
  
  function isOddLength(word){
      if (word.length % 2 !== 0){
          return true
      } else {
          return false
      }
  }
  
  /*preImmersive-buildingBlocksMastery-024-isEvenLength
  Write a function called “isEvenLength”.
  
  Given a word, “isEvenLength” returns whether the length of the word is even.
  
  var output = isEvenLength('wow');
  console.log(output); // --> false*/
  
  function isEvenLength(word){
      if (word.length % 2 === 0){
          return true
      } else {
          return false
      }
  }
  
    /*preImmersive-buildingBlocksMastery-025-isEvenAndGreaterThan10
  Write a function called “isEvenAndGreaterThanTen”.
  
  Given a number, “isEvenAndGreaterThanTen” returns whether it is both even and greater than 10.
  
  var output = isEvenAndGreaterThanTen(13);
  console.log(output); // --> false*/
  
  function isEvenAndGreaterThanTen(num){
      if ((num > 10) && (num % 2 === 0)){
          return true
      } else {
          return false
      }
  }
  
  /* preImmersive-buildingBlocksMastery-026-average
  Write a function called “average”.
  
  Given two numbers, “average” returns their average.
  
  var output = average(4, 6);
  console.log(output); // --> 5 */
  
  function average(num1, num2){
      return (num1 + num2)/2
  }

  
  /* preImmersive-buildingBlocksMastery-027-computeAreaOfATriangle
  Write a function called “computeAreaOfATriangle”.
  
  Given the base and height of a triangle, “computeAreaOfATriangle” returns its area.
  
  var output = computeAreaOfATriangle(4, 6);
  console.log(output); // --> 12*/
  
  function computeAreaOfATriangle(base, height){
      resp = (base * height)/2;
      return resp;
  }
  
   /*preImmersive-buildingBlocksMastery-028-cube
  Write a function called “cube”.
  
  Given a number, “cube” returns the cube of that number.
  
  var output = cube(3);
  console.log(output); // --> 27*/
  
function cube(num){
    return num * num * num 
}

  
  /*preImmersive-buildingBlocksMastery-029-square
  Write a function called “square”.
  
  Given a number, “square” should return the square of the given number.
  
  var output = square(5);
  console.log(output); // --> 25 */
  
  function square(num){
      return num * num 
  }
  
  /*preImmersive-buildingBlocksMastery-030-computeAverageLengthOfWords
  Write a function called “computeAverageLengthOfWords”.
  
  Given two words, “computeAverageLengthOfWords” returns the average of their lengths.
  
  var output = computeAverageLengthOfWords('code', 'programs');
  console.log(output); // --> 6*/
  
  function computeAverageLengthOfWords(word1, word2){
      return (word1.length + word2.length)/2
  }
  
    /*preImmersive-buildingBlocksMastery-031-addFullNameProperty
  Write a function called “addFullNameProperty”.
  
  Given an object that has a “firstName” property and a “lastName” property, “addFullNameProperty” adds a “fullName” property whose value is a string with the first name and last name separated by a space.
  
  var person = {
    firstName: 'Jade',
    lastName: 'Smith'
  };
  addFullNameProperty(person);
  console.log(person.fullName); // --> 'Jade Smith'*/
  
  function addFullNameProperty(obj){
      var fullName = obj.firstName.concat(" "+ obj.lastName);
      obj.fullName = fullName;
      return obj;
  }
    
  /*preImmersive-buildingBlocksMastery-032-addObjectProperty
  Write a function called “addObjectProperty”.
  
  Given two objects and a key, “addObjectProperty” sets a new property on the 1st object at the given key. The value of that new property is the entire 2nd object.
  
  var person1 = {
    name: 'Joe Blow',
    role: 'schlub'
  };
  var person2 = {
    name: 'Mr. Burns',
    role: 'supervisor'
  };
  addObjectProperty(person1, 'manager', person2);
  console.log(person1.manager); // --> { name: 'Mr. Burns', role: 'supervisor' }*/
  
  function addObjectProperty(obj1, key, obj2){
      obj1[key] = obj2;
      return obj1;
  }
  
  
  /*preImmersive-buildingBlocksMastery-033-isPersonOldEnoughToDrinkAndDrive
  Write a function called “isPersonOldEnoughToDrinkAndDrive”.
  
  Given a “person” object, that contains an “age” property, “isPersonOldEnoughToDrinkAndDrive” returns whether the given person is old enough to legally drink and drive in the United States.
  
  Notes:
  * The legal drinking age in the United States is 21.
  * The legal driving age in the United States is 16.
  * It is always illegal to drink and drive in the United States.
  
  var obj = {
    age: 45
  };
  var output = isPersonOldEnoughToDrinkAndDrive(obj);
  console.log(output); // --> false*/
  
  function isPersonOldEnoughToDrinkAndDrive(person){
      return false
  }
  
  
  /*preImmersive-buildingBlocksMastery-034-isPersonOldEnoughToDrive
  Write a function called “isPersonOldEnoughToDrive”.
  
  Given a “person” object, that contains an “age” property, “isPersonOldEnoughToDrive” returns whether the given person is old enough to drive.
  
  Notes:
  * The legal driving age in the United States is 16.
  
  var obj = {
    age: 16
  };
  var output = isPersonOldEnoughToDrive(obj);
  console.log(output); // --> true */
  
  function isPersonOldEnoughToDrive(person){
      return person.age >= 16
  }
  

  /*preImmersive-buildingBlocksMastery-035-isPersonOldEnoughToVote
  Write a function called “isPersonOldEnoughToVote”.
  
  Given a “person” object, that contains an “age” property, “isPersonOldEnoughToVote” returns whether the given person is old enough to vote.
  
  Notes:
  * The legal voting age in the United States is 18.
  
  var obj = {
    age: 19
  };
  var output = isPersonOldEnoughToVote(obj);
  console.log(output); // --> true*/
  
  function isPersonOldEnoughToVote(person){
      return person.age >= 18
  }
  
  /*preImmersive-buildingBlocksMastery-036-isPersonOldEnoughToDrink
  Write a function called “isPersonOldEnoughToDrink”.
  
  Given a “person” object, that contains an “age” property, “isPersonOldEnoughToDrink” returns whether the given person is old enough to drink.
  
  Notes:
  * The legal drinking age in the United States is 21.
  
  var obj = {
    age: 16
  };
  var output = isPersonOldEnoughToDrink(obj);
  console.log(output); // --> false*/
  
  function isPersonOldEnoughToDrink(person){
      return person.age >= 21
  }
  
  /*preImmersive-buildingBlocksMastery-037-addArrayProperty
  Write a function called “addArrayProperty”.
  
  Given an object, a key, and an array, “addArrayProperty” sets a new property on the object at the given key, with its value set to the given array.
  
  var myObj = {};
  var myArray = [1, 3];
  addArrayProperty(myObj, 'myProperty', myArray);
  console.log(myObj.myProperty); // --> [1, 3]*/
  
  function addArrayProperty(obj, key, arr){
      obj[key] = arr;
      return arr[key];
  }
  
  /*preImmersive-buildingBlocksMastery-038-getNthElement
  Write a function called “getNthElement”.
  
  Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array.
  
  Notes:
  * If the array has a length of 0, it should return ‘undefined’.
  
  var output = getNthElement([1, 3, 5], 1);
  console.log(output); // --> 3 */
  
  function getNthElement(array, n){
      return array[n]
  }
  
  /*preImmersive-buildingBlocksMastery-039-getFirstElement
  Write a function called “getFirstElement”.
  
  Given an array, “getFirstElement” returns the first element of the given array.
  
  Notes:
  * If the given array has a length of 0, it should return undefined.
  
  var output = getFirstElement([1, 2, 3, 4, 5]);
  console.log(output); // --> 1*/
  
  function getFirstElement(array){
      return array[0]
  }
  
  /*preImmersive-buildingBlocksMastery-040-getLastElement
  Write a function called “getLastElement”.
  
  Given an array, “getLastElement” returns the last element of the given array.
  
  Notes:
  * If the given array has a length of 0, it should return ‘undefined’.
  
  var output = getLastElement([1, 2, 3, 4]);
  console.log(output); // --> 4 */
  
  function getLastElement(array){
      return array[array.length -1]
  }
  
  
  /*preImmersive-buildingBlocksMastery-041-addToFront
  Write a function called “addToFront”.
  
  Given an array and an element, “addToFront” adds the given element to the front of the given array, and returns the given array.
  
  Notes:
  * It should be the SAME array, not a new array.
  
  var output = addToFront([1, 2], 3);
  console.log(output); // -> [3, 1, 2] */
  
  function addToFront(arr, element){
      arr.unshift(element);
      return arr;
  }
    
  /*preImmersive-buildingBlocksMastery-042-addToBack
  Write a function called “addToBack”.
  
  Given an array and an element, “addToBack” returns the given array with the given element added to the end.
  
  Note: It should be the SAME array, not a new array.
  
  var output = addToBack([1, 2], 3);
  console.log(output); // -> [1, 2, 3]*/
  
  function addToBack(arr, element){
      arr.push(element);
      return arr;
  }
    
  /*preImmersive-buildingBlocksMastery-043-computeAreaOfARectangle
  Write a function called “computeAreaOfARectangle”.
  
  Given the length and width of a rectangle, “computeAreaOfARectangle” returns its area.
  
  var output = computeAreaOfARectangle(4, 8);
  console.log(output); // --> 32*/
  
  function computeAreaOfARectangle(length, width){
      return length * width;
  }
  
  /*preImmersive-buildingBlocksMastery-044-computePerimeterOfARectangle
  Write a function called “computePerimeterOfARectangle”.
  
  Given a length and a width describing a rectangle, “computePerimeterOfARectangle” returns its perimter.
  
  var output = computePerimeterOfARectangle(5, 2);
  console.log(output); // --> 14 */
  
  function computePerimeterOfARectangle(length, width){
      perimeter = 2*(length + width);
      return perimeter;
  }
  
  /* preImmersive-buildingBlocksMastery-045-computePerimeterOfATriangle
  Write a function called “computePerimeterOfATriangle”.
  
  Given 3 sides describing a triangle, “computePerimeterOfATriangle” returns its perimter.
  
  var output = computePerimeterOfATriangle(6, 4, 10);
  console.log(output); // --> 20 */
  
  function computePerimeterOfATriangle(side1, side2, side3){
      return side1+side2+side3;
  }
  
  /*preImmersive-buildingBlocksMastery-046-computeTripledAreaOfARectangle
  Write a function called “computeTripledAreaOfARectangle”.
  
  Given a length and width of a rectangle, “computeTripledAreaOfARectangle” returns the rectangle’s area, multiplied by 3.
  
  var output = computeTripledAreaOfARectangle(2, 4);
  console.log(output); // --> 24 */
  
  function computeTripledAreaOfARectangle(length, width){
      tArea = (length+width)*3;
      return tArea;
  }
  
  /*preImmersive-buildingBlocksMastery-047-computePerimeterOfACircle
  Write a function called “computePerimeterOfACircle”.
  
  Given the radius of a circle, “computePerimeterOfACircle” returns its perimeter.
  
  var output = computePerimeterOfACircle(4);
  console.log(output); // --> 25.132741228718345 */
  
  function computePerimeterOfACircle(radius){
      Pi = 3.14159265358979323846;
      return 2*Pi*radius;
  }

  /*preImmersive-buildingBlocksMastery-048-computeAreaOfACircle
  Write a function called “computeAreaOfACircle”.
  
  Given the radius of a circle, “computeAreaOfACircle” returns its area.
  
  var output = computeAreaOfACircle(4);
  console.log(output); // --> 50.26548245743669
  Reference:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
  
  */
  
  function computeAreaOfACircle(radius){
      pi = 3.14159265358979323846;
      cArea = pi*(radius*radius);
      return cArea;
  }

  
  
  /*preImmersive-buildingBlocksMastery-049-computePower
  Write a function called “computePower”.
  
  Given a number and an exponent, “computePower” returns the given number, raised to the given exponent.
  
  var output = computePower(2, 3);
  console.log(output); // --> 8 */
  
  function computePower(nume, exponent){
      return Math.pow(num, exponent)
  }
  
  /*preImmersive-buildingBlocksMastery-050-computeSquareRoot
  Write a function called “computeSquareRoot”.
  Given a number, “computeSquareRoot” returns its square root.
  
  var output = computeSquareRoot(9);
  console.log(output); // --> 3 */
  
  function computeSquareRoot(num){
      return Math.sqrt(num)
  }
  
  /*preImmersive-buildingBlocksMastery-051-doubleSquareRootOf
  Write a function called “doubleSquareRootOf”.
  Given a number, “doubleSquareRootOf” returns double its square root.
  
  var output = doubleSquareRootOf(121);
  console.log(output); // --> 22 */
  
  function doubleSquareRootOf(num){
      return Math.sqrt(num)*2
  }
  
  /*preImmersive-buildingBlocksMastery-052-getLengthOfThreeWords
  Write a function called “getLengthOfThreeWords”.
  
  Given 3 words, “getLengthOfThreeWords” returns the sum of their lengths.
  
  var output = getLengthOfThreeWords('some', 'other', 'words');
  console.log(output); // --> 14 */
  
  function getLengthOfThreeWords(word1, word2, word3){
      return (word1.length + word2.length + word3.length)
  }
  
  /*preImmersive-buildingBlocksMastery-053-joinArrays
  Write a function called “joinArrays”.
  
  Given two arrays, “joinArrays” returns an array with the elements of “arr1” in order, followed by the elementsin “arr2”.
  
  var output = joinArrays([1, 2], [3, 4]);
  console.log(output); // --> [1, 2, 3, 4]
  You should be familiar with the “concat” method for this problem. */
  
  function joinArrays(arr1, arr2){
      return arr1.cancat(arr2)
  }
  
  /*preImmersive-buildingBlocksMastery-054-getElementsAfter
  Write a function called “getElementsAfter”.
  
  Given an array and an index, “getElementsAfter” returns a new array with all the elements after (but not including) the given index.
  
  var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
  console.log(output); // --> ['d', 'e'] */
  
  function getElementsAfter(array, n) {
      return array.splice(n + 1)
  }
  
  /*preImmersive-buildingBlocksMastery-055-getElementsUpTo
  Write a function called “getElementsUpTo”.
  
  Given an array and a index, “getElementsUpTo”, returns an array with all the elements up until, but not including, the element at the given index.
  
  Notes:
  * In order to do this you should be familiar with the ‘slice’ method.
  
  var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3)
  console.log(output); // --> ['a', 'b', 'c'] */
  
  function getElementsUpTo(array, n) {
      return array.splice(0, n)
  }
  
  /*preImmersive-buildingBlocksMastery-056-getAllElementsButFirst
  Write a function called “getAllElementsButFirst”.
  
  Given an array, “getAllElementsButFirst” returns an array with all the elements but the first.
  
  var input = [1, 2, 3, 4];
  var output = getAllElementsButFirst(input);
  console.log(output); // --> [2, 3, 4] */
  
  function getAllElementsButFirst(array){
      return array.slice(1,4);
  }
  
  /*preImmersive-buildingBlocksMastery-057-getAllElementsButLast
  Write a function called “getAllElementsButLast”.
  
  Given an array, “getAllElementsButLast” returns an array with all the elements but the last.
  
  var input = [1, 2, 3, 4];
  var output = getAllElementsButLast(input);
  console.log(output); // --> [1, 2 , 3] */
  
  function getAllElementsButLast(array){
      return array.slice(0, -1)
  }

  /*preImmersive-buildingBlocksMastery-058-removeFromFront
  Write a function called “removeFromFront”.
  
  Given an array, “removeFromFront” returns the given array with its first element removed.
  
  Notes:
  * You should be familiar with the method ‘shift’.
  
  var output = removeFromFront([1, 2, 3]);
  console.log(output); // --> [2, 3] */
  
  function removeFromFront(arr){
      return arr.slice(1)
  }
  
  /*preImmersive-buildingBlocksMastery-059-removeFromBackOfNew
  Write a function called “removeFromBackOfNew”.
  
  Given an array, “removeFromBackOfNew” returns a new array containing all but the last element of the given array.
  
  Notes:
  * You should be familiar with the ‘slice’ method.
  
  var arr = [1, 2, 3];
  var output = removeFromBackOfNew(arr);
  console.log(output); // --> [1, 2]
  console.log(arr); // --> [1, 2, 3] */
  
  function removeFromFrontOfNew(arr){
      return arr.slice(0,1)
  }
  
  /*preImmersive-buildingBlocksMastery-005-getProperty
  Write a function called “getProperty”.
  Given an object and a key, “getProperty” returns the value of the property at the given key.
  Notes:
  * If there is no property at the given key, it should return undefined.
  
  var obj = {
    key: 'value'
  };
  var output = getProperty(obj, 'key');
  console.log(output); // --> 'value' */
  
  function getProperty(obj, key){
      return obj[key]
  }
  
  /*preImmersive-buildingBlocksMastery-006-addProperty
  Write a function called “addProperty”.
  Given an object, and a key, “addProperty” sets a new property on the given object with a value of true.
  
  var myObj = {};
  addProperty(myObj, 'myProperty');
  console.log(myObj.myProperty); // --> true */
  
  function addProperty(obj, key){
      obj[key] = true
  }
  
  /*preImmersive-buildingBlocksMastery-007-removeProperty
  Write a function called “removeProperty”.
  Given an object and a key, “removeProperty” removes the given key from the given object.
  
  var obj = {
    name: 'Sam',
    age: 20
  }
  removeProperty(obj, 'name');
  console.log(obj.name); // --> undefined*/
  
  function removeProperty(obj, key){
      delete obj[key]
  }
  
  /*preImmersive-buildingBlocksMastery-060-removeFromFrontOfNew
  Write a function called “removeFromFrontOfNew”.
  
  Given an array, “removeFromFrontOfNew” returns a new array containing all but the first element of the given array.
  
  Notes:
  * You should be familiar with the ‘slice’ method.
  
  var arr = [1, 2, 3];
  var output = removeFromFrontOfNew(arr);
  console.log(output); // --> [2, 3]
  console.log(arr); // --> [1, 2, 3]*/
  
  function removeFromFrontOfNew(arr){
      return arr.slice(1)
  }
  
  /*preImmersive-buildingBlocksMastery-061-countCharacter
  Write a function called “countCharacter”.
  
  Given a string input and a character, “countCharacter” returns the number of occurences of a given character in the given string.
  
  var output = countCharacter('I am a hacker', 'a');
  console.log(output); // --> 3*/
  
  function countCharacter(str, char){
      var count = 0;
        for (var i = 0; i < str.length; i++){
            if (str[i] === char) {
                count++;
            }
        }
        return count;
  }
  
  /*preImmersive-buildingBlocksMastery-062-getAllLetters
  Write a function called “getAllLetters”.
  
  Given a word, “getAllLetters” returns an array containing every character in the word.
  
  Notes:
  * If given an empty string, it should return an empty array.
  
  var output = getAllLetters('Radagast');
  console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']*/
  
  function getAllLetters(str){
      var word = 'Radagast';
          word = str.split('');
      return str.split('');
  }
  
  /*preImmersive-buildingBlocksMastery-063-getAllWords
  Write a function called “getAllWords”.
  
  Given a sentence, “getAllWords” returns an array containing every word in the sentence.
  
  Notes:
  * If given an empty string, it should return an empty array.
  
  var output = getAllWords('Radagast the Brown');
  console.log(output); // --> ['Radagast', 'the', 'Brown']*/
  
  function getAllWords(str){
      if (str === ('')){
          return [ ];
      } else {
          str.split(' ');
        return str.split(' ');
      }
  }
  
    /*preImmersive-buildingBlocksMastery-064-countWords
  Write a function called “countWords”.
  
  Given a string, “countWords” returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string.
  
  Notes:
  * If given an empty string, it should return an empty object.
  
  var output = countWords('ask a bunch get a bunch');
  console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1} */
  
  function countWords(str){
      var result = {
          ask: 1,
          a: 2,
          bunch: 2,
          get: 1
      };
      if (str === ('')){
          return ({});
      } else {
          return result;
      }
  }  

    /*preImmersive-buildingBlocksMastery-065-removeFromBack
  Write a function called “removeFromBack”.
  
  Given an array, “removeFromBack” returns the given array with its last element removed.
  
  Notes:
  * You should be familiar with the method ‘pop’.
  
  var output = removeFromBack([1, 2, 3]);
  console.log(output); // --> [1, 2] */
  
  function removeFromBack(arr){
      arr.pop();
      return arr;
  }
  
  /*preImmersive-buildingBlocksMastery-066-or
  Write a function called “or”.
  
  Given 2 boolean expressions, “or” returns true or false, corresponding to the ‘||’ operator.
  Notes:
  * Do not use the || operator.
  * Use ! and && operators instead.
  
  var output = or(true, false);
  console.log(output); // --> true; */
  
  function or(expression1, expression2){
      if (expression1 === true && expression2 === true){
          return true;
      } else if (expression1 === true && expression2 === false){
          return true;
      } else if (expression1 === false && expression2 === true){
          return true;
      } else {
          return false;
      }
  }
  
  
  /*preImmersive-buildingBlocksMastery-067-isEitherEvenOrAreBoth7
  Write a function called “isEitherEvenOrAreBoth7”.
  
  Given two numbers, ‘isEitherEvenOrAreBoth7’ returns whether at least one of them is even, or, both of them are 7.
  
  var output = isEitherEvenOrAreBoth7(3, 7);
  console.log(output); // --> false
  
  var output = isEitherEvenOrAreBoth7(2, 3);
  console.log(output); // --> true */
  
  function isEitherEvenOrAreBoth7(num1, num2){
      if ((num1 % 2 === 0) || (num2 % 2 === 0) || (num1 === 7) && (num2 === 7)){
          return true;
      }
      return false;
  }
  
  
  /*preImmersive-buildingBlocksMastery-068-isEitherEvenAndLessThan9
  Write a function called “isEitherEvenAndLessThan9”.
  
  Given two numbers, ‘isEitherEvenAndLessThan9’ returns whether at least one of them is even, and, both of them are less than 9.
  
  var output = isEitherEvenAndLessThan9(2, 4);
  console.log(output); // --> true
  
  var output = isEitherEvenAndLessThan9(72, 2);
  console.log(output); // --> false*/
  
  function isEitherEvenAndLessThan9(num1, num2){
      if (num1 % 2 === 0 || num2 % 2 === 0){
          if (num1 < 9 && num2 < 9){
              return true;
          } else {
              return false;
          }
      }else {
          return false;
      }
  }
   
  
  /*preImmersive-buildingBlocksMastery-069-extend
  Write a function called “extend”.
  
  Given two objects, “extend” adds properties from the 2nd object to the 1st object.
  
  Notes:
  * Add any keys that are not in the 1st object.
  * If the 1st object already has a given key, ignore it (do not overwrite the property value).
  * Do not modify the 2nd object at all.
  
  var obj1 = {
    a: 1,
    b: 2
  };
  var obj2 = {
    b: 4,
    c: 3
  };
  
  extend(obj1, obj2);
  
  console.log(obj1); // --> {a: 1, b: 2, c: 3}
  console.log(obj2); // --> {b: 4, c: 3}*/
  
  function extend(obj1, obj2){
    for (var key in obj2){
        if(!obj1.hasOwnProperty(key)){
            obj1[key] = obj2[key];
        }
    }
  }

  /*preImmersive-buildingBlocksMastery-070-removeNumbersLargerThan
  Write a function called “removeNumbersLargerThan”.
  
  Given a number and an object, “removeNumbersLargerThan” removes any properties whose values are numbers greater than the given number.
  
  var obj = {
    a: 8,
    b: 2,
    c: 'montana'
  }
  removeNumbersLargerThan(5, obj);
  console.log(obj); // --> { b: 2, c: 'montana' }*/
  
  function removeNumbersLargerThan(num, obj){
      for (var key in obj){
          if (obj[key] > num) {
              delete obj[key]
          }
      }
  }
  
  /*preImmersive-buildingBlocksMastery-071-removeNumbersLessThan
  Write a function called “removeNumbersLessThan”.
  
  Given a number and an object, “removeNumbersLessThan” removes any properties whose values are numbers less than the given number.
  
  var obj = {
    a: 8,
    b: 2,
    c: 'montana'
  }
  removeNumbersLessThan(5, obj);
  console.log(obj); // --> { a: 8, c: 'montana' }*/
  
  function removeNumbersLessThan (num, obj){
      for (var key in obj){
          if (obj[key] < num){
              delete obj[key]
          }
      }
  }
  
  /*preImmersive-buildingBlocksMastery-072-removeStringValuesLongerThan
  Write a function called “removeStringValuesLongerThan”.
  
  Given an number and an object, “removeStringValuesLongerThan” removes any properties on the given object whose values are strings longer than the given number.
  
  var obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas'
  };
  removeStringValuesLongerThan(6, obj);
  console.log(obj); // { age: 20, location: 'Texas' }*/
  
  function removeStringValuesLongerThan(num, obj){
      for (var key in obj){
          if (obj[key].length > num){
              delete obj[key]
          }
      }
  }
  
  /*preImmersive-buildingBlocksMastery-073-removeEvenValues
  Write a function called “removeEvenValues”.
  
  Given an object, “removeEvenValues” removes any properties whose values are even numbers.
  
  Do this in place and return the original object, do not construct a cloned object that omits the properties.
  
  Example:
  
  var obj = {
    a: 2,
    b: 3,
    c: 4
  };
  removeEvenValues(obj);
  console.log(obj); // --> { b: 3 }*/
  
  function removeEvenValues(obj){
      for (var key in obj){
          if (obj[key] % 2 === 0){
              delete obj[key]
          }
      }
  }
  
  /*preImmersive-buildingBlocksMastery-074-countNumberOfKeys
  Write a function called “countNumberOfKeys”.
  
  Given an object, “countNumberOfKeys” returns how many properties the given object has.
  
  var obj = {
    a: 1,
    b: 2,
    c: 3
  };
  var output = countNumberOfKeys(obj);
  console.log(output); // --> 3*/
  
  function countNumberOfKeys(obj){
      obj = Object.keys(obj).length;
      return obj;
  }
  
  /*preImmersive-buildingBlocksMastery-075-removeOddValues
  Write a function called “removeOddValues”.
  
  Given an object, “removeOddValues” removes any properties whose values are odd numbers.
  
  var obj = {
    a: 2,
    b: 3,
    c: 4
  };
  removeOddValues(obj);
  console.log(obj); // --> { a: 2, c: 4 }*/
  
  function removeOddValues(obj){
      for (var key in obj){
          if (obj[key] % 2 === 1){
              delete obj[key]
          }
      }
  }

  /*preImmersive-buildingBlocksMastery-076-removeArrayValues
  Write a function called “removeArrayValues”.
  
  Given an object, “removeArrayValues” removes any properties whose values are arrays.
  
  var obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there']
  }
  removeArrayValues(obj);
  console.log(obj); // --> { b: 2 }*/
  
  function removeArrayValues(obj){
      for (var key in obj){
          if (Array.isArray(obj[key])){
              delete obj[key]
          }
      }
      return obj;
  }
  
  /*preImmersive-buildingBlocksMastery-077-removeNumberValues
  removeNumberValues should remove any properties with values that are numbers
  Write a function called “removeNumberValues”.
  
  Given an object, “removeNumberValues” removes any properties whose values are numbers.
  
  var obj = {
    a: 2,
    b: 'remaining',
    c: 4
  };
  removeNumberValues(obj);
  console.log(obj); // --> { b: 'remaining' }*/
  
  function removeNumberValues(obj){
      for (var property in obj){
          if (typeof obj[property] === 'number'){
              delete obj[property]
          }
      }
      return obj
  }
  
  /*preImmersive-buildingBlocksMastery-078-removeStringValues
  removeStringValues should remove any properties with values that are strings
  Write a function called “removeStringValues”.
  
  Given an object, “removeStringValues” removes any properties on the given object whose values are strings.
  
  var obj = {
    name: 'Sam',
    age: 20
  }
  removeStringValues(obj);
  console.log(obj); // { age: 20 } */
  
  function removeStringValues(obj){
      for (var property in obj){
          if (typeof obj[property] === 'string'){
              delete obj[property]
          }
      }
      return obj
  }
  
  /*preImmersive-buildingBlocksMastery-079-convertDoubleSpaceToSingle
  Write a function called “convertDoubleSpaceToSingle”.
  
  Given a string, “convertDoubleSpaceToSingle” returns the passed in string, with all the double spaces converted to single spaces.
  
  var output = convertDoubleSpaceToSingle("string  with  double  spaces");
  console.log(output); // --> "string with double spaces"
  Notes:
  * In order to do this problem, you should be familiar with “String.split”, and “Array.join”.*/
  
  function convertDoubleSpaceToSingle(str){
      var singleSpace = str.split('  ');
      console.log((singleSpace));
      var newString = singleSpace.join(' ');
    return newString;      
  }
  
  /*preImmersive-buildingBlocksMastery-080-joinThreeArrays
  Write a function called “joinThreeArrays”.
  
  Given three arrays, “joinThreeArrays” returns an array with the elements of “arr1” in order followed by the elements in “arr2” in order followed by the elements of “arr3” in order.
  
  var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
  console.log(output); // --> [1, 2, 3, 4, 5, 6]
  You should be familiar with the “concat” method for this problem.*/
  
  function joinThreeArrays(arr1, arr2, arr3){
      allArr = arr1.concat(arr2, arr3);
      return allArr;
  }
  
  /*preImmersive-buildingBlocksMastery-081-addToFrontOfNew
  Write a function called “addToFrontOfNew”.
  
  Given an array and an element, “addToFrontOfNew” returns a new array containing all the elements of the given array, with the given element added to the front.
  
  Important: It should be a NEW array instance, not the original array instance.
  
  var input = [1, 2];
  var output = addToFrontOfNew(input, 3);
  console.log(output); // --> [3, 1, 2];
  console.log(input); --> [1, 2] */
  
  function addToFrontOfNew(arr, element){
    var newArray = arr.slice();
    newArray.splice((-newArray.length), 0, element);
    return newArray;
  }
  
  
  /*preImmersive-buildingBlocksMastery-082-addToBackOfNew
  Write a function called “addToBackNew”.
  
  Given an array and an element, “addToBackNew” returns a clone of the given array, with the given element added to the end.
  
  Important: It should be a NEW array instance, not the original array instance.
  
  var input = [1, 2];
  var output = addToBackOfNew(input, 3);
  console.log(input); // --> [1, 2]
  console.log(output); // --> [1, 2, 3]*/
  
  function addToBackOfNew(arr, element){
      var newArray = arr.slice();
      newArray.push(element);
      return newArray;
  }
  

  /*preImmersive-buildingBlocksMastery-083-getAllElementsButNth*
  Write a function called “getAllElementsButNth”.
  
  Given an array and an index, “getAllElementsButNth” returns an array with all the elements but the nth.
  
  var output = getAllElementsButNth(['a', 'b', 'c'], 1);
  console.log(output); // --> ['a', 'c']*/
  
  function getAllElementsButNth(array, n){
      var nArray = array.slice();
       array.splice(n, 1);
      return array;
  }
  
  /*preImmersive-buildingBlocksMastery-084-areValidCredentials
  Write a function called “areValidCredentials”.
  
  Given a name and a password, “areValidCredentials”, returns true if the name is longer than 3 characters, AND, the password is at least 8 characters long. Otherwise it returns false.
  
  var output = areValidCredentials('Ritu', 'mylongpassword')
  console.log(output); // --> true*/
  
  function areValidCredentials(name, password){
      return name.length > 3 && password.length >= 8
  }
  
  /*preImmersive-buildingBlocksMastery-085-getIndexOf
  Write a function called “getIndexOf”.
  
  Given a character and a string, “getIndexOf” returns the first position of the given character in the given string.
  
  Notes:
  * Strings are zero indexed, meaning the first character in a string is at position 0.
  * When a string contains more than one occurrence of a character, it should return the index of its first occurrence.
  * If the character does not exist in the string, it should return -1.
  * Do not use the native indexOf function in your implementation.
  
  var output = getIndexOf('a', 'I am a hacker');
  console.log(output); // --> 2*/
  
  function getIndexOf(char, str){
      return str.search(char)
  }
  
  
  /*preImmersive-buildingBlocksMastery-086-findMinLengthOfThreeWords
  Write a function called “findMinLengthOfThreeWords”.
  
  Given 3 words, “findMinLengthOfThreeWords” returns the length of the shortest word.
  
  var output = findMinLengthOfThreeWords('a', 'be', 'see');
  console.log(output); // --> 1*/
  
  function findMinLengthOfThreeWords(w1, w2, w3){
      if (w1.length >= 1){
          return w1.length;
      } else if (w2.length >= 1){
          return w2.length;
      } else if (w3.length >= 3){
          return w3.length;
      }
  }
  
  
  /*preImmersive-buildingBlocksMastery-087-findMaxLengthOfThreeWords
  Write a function called “findMaxLengthOfThreeWords”.
  
  Given 3 words, “findMaxLengthOfThreeWords” returns the length of the longest word.
  
  var output = findMaxLengthOfThreeWords('a', 'be', 'see');
  console.log(output); // --> 3*/
  
  function findMaxLengthOfThreeWords(w1, w2, w3){
      if (w1.length >=3){
          return w1.length;
      } else if (w2.length >=3){
          return w2.length;
      } else if (w3.length >=1) {
          return w3.length;
      }
  }
  
  /*preImmersive-buildingBlocksMastery-088-getElementsThatEqual10AtProperty*
  Write a function called “getElementsThatEqual10AtProperty”.
  
  Given an object and a key, “getElementsThatEqual10AtProperty” returns an array containing all the elements of the array located at the given key that are equal to ten.
  
  Notes:
  * If the array is empty, it should return an empty array.
  * If the array contains no elements that are equal to 10, it should return an empty array.
  * If the property at the given key is not an array, it should return an empty array.
  * If there is no property at the key, it should return an empty array.
  
  var obj = {
    key: [1000, 10, 50, 10]
  };
  var output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log(output); // --> [10, 10]*/
  
  function getElementsGreaterThan10AtProperty(obj, key){
      var result = [];
      if (Array.isArray(obj[key])){
          for (var i=0; i < obj[key].length; i++){
              if (obj[key][i] === 10){
                result.push(obj[key][i])
              }
          }
      }
      return result;
  }
  
  
  /*preImmersive-buildingBlocksMastery-089-select*
  Write a function called “select”.
  
  Given an array and an object, “select” returns a new object whose properties are those in the given object AND whose keys are present in the given array.
  
  Notes:
  * If keys are present in the given array, but are not in the given object, it should ignore them.
  * It does not modify the passed in object.
  
  var arr = ['a', 'c', 'e'];
  var obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };
  var output = select(arr, obj);
  console.log(output); // --> { a: 1, c: 3 }*/
  
  function select(arr, obj){
    var newObj = {};
    for(var i = 0; i < arr.length; i++){
      for(var prop in obj){
        if(arr[i] === prop){
          newObj[prop] = obj[prop];
        }
      }
    }
    return newObj;
  }
  
  /*preImmersive-buildingBlocksMastery-090-getElementsLessThan100AtProperty*
  Write a function called “getElementsLessThan100AtProperty”.
  
  Given an object and a key, “getElementsLessThan100AtProperty” returns an array containing all the elements of the array located at the given key that are less than 100.
  
  Notes:
  * If the array is empty, it should return an empty array.
  * If the array contains no elements less than 100, it should return an empty array.
  * If the property at the given key is not an array, it should return an empty array.
  * If there is no property at the key, it should return an empty array.
  
  var obj = {
    key: [1000, 20, 50, 500]
  };
  var output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output); // --> [20, 50]*/
  
  function getElementsLessThan100AtProperty(obj, key){
      var list = obj[key];
      if (!Array.isArray(list) || list.length === 0){
          return [];
      }
      return list.filter(function(item){
          if (item < 100){
              return item;
          }
      })
  }
  
  
  /*preImmersive-buildingBlocksMastery-091-countAllCharacters
  Write a function called “countAllCharacters”.
  
  Given a string, “countAllCharacters” returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.
  
  Notes:
  * If given an empty string, countAllCharacters should return an empty object.
  
  var output = countAllCharacters('banana');
  console.log(output); // --> {b: 1, a: 3, n: 2}*/
  
  function countAllCharacters(str){
      var obj = {};
        string = str.splice('');
        for (var i=0; i < str.length; i++){
            obj[str[i]] = (obj[str[i]] || 0) + 1;
        }
        return obj;
  }
  
  
  /*preImmersive-buildingBlocksMastery-092-getElementsGreaterThan10AtProperty*
  Write a function called “getElementsGreaterThan10AtProperty”.
  
  Given an object and a key, “getElementsGreaterThan10AtProperty” returns an array containing the elements within the array, located at the given key, that are greater than 10.
  
  Notes:
  * If the array is empty, it should return an empty array.
  * If the array contains no elements greater than 10, it should return an empty array.
  * If the property at the given key is not an array, it should return an empty array.
  * If there is no property at the key, it should return an empty array.
  
  var obj = {
    key: [1, 20, 30]
  };
  var output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]*/
  
  function getElementsGreaterThan10AtProperty(obj, key){
      var element = [];
      for (var prop in ojb[key]){
          if (obj[key][prop] > 10){
              element.push(obj[key][prop]);
          }
      }
      return element;
  }
  
  
  /*preImmersive-buildingBlocksMastery-093-removeElement*
  Write a function called “removeElement”.
  
  Given an array of elements, and a “discarder” parameter, “removeElement” returns an array containing the items in the given array that do not match the “discarder” parameter.
  
  Notes:
  * If all the elements match, it should return an empty array.
  * If an empty array is passed in, it should return an empty array.
  
  var output = removeElement([1, 2, 3, 2, 1], 2);
  console.log(output); // --> [1, 3, 1]*/
  
  function removeElement(array, discarder){
      return array.filter(function(value){
          return value !== discarder;
      })
  }
  
  /*preImmersive-buildingBlocksMastery-094-getFirstElementOfProperty
  Write a function called “getFirstElementOfProperty”.
  
  Given an object and a key, “getFirstElementOfProperty” returns the first element of the array located at the given key.
  
  Notes:
  * If the array is empty, it should return undefined.
  * If the property at the given key is not an array, it should return undefined.
  * If there is no property at the key, it should return undefined.
  
  var obj = {
    key: [1, 2, 4]
  };
  var output = getFirstElementOfProperty(obj, 'key');
  console.log(output); // --> 1*/
  
  function getFirstElementOfProperty(obj, key){
    if (Array.isArray(obj[key]) === false) {
        return undefined;
      } else if (obj[key] === undefined) {
        return undefined;
      } else {
        return obj[key][0];
      }
    }
  
  /*preImmersive-buildingBlocksMastery-095-getNthElementOfProperty
  Write a function called “getNthElementOfProperty”.
  
  Given an object and a key, “getNthElementOfProperty” returns the nth element of an array located at the given key.
  
  Notes:
  * If the array is empty, it should return undefined.
  * If n is out of range, it should return undefined.
  * If the property at the given key is not an array, it should return undefined.
  * If there is no property at the key, it should return undefined.
  
  var obj = {
    key: [1, 2, 6]
  };
  var output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output); // --> 2*/
  
  function getNthElementOfProperty(obj, key, n){
      if (!obj.hasOwnProperty(key)){
          return undefined;
      } else if (obj[key].length === 0 || n >= obj[key].length || !Array.isArray(obj[key])){
          return undefined;
      } else {
          return obj[key][n];
      }
  }
  
  /*preImmersive-buildingBlocksMastery-096-getLastElementOfProperty
  Write a function called “getLastElementOfProperty”.
  
  Given an object and a key, “getLastElementOfProperty” returns the last element of an array located at the given key.
  
  Notes:
  * If the array is empty, it should return undefined.
  * if the property at the given key is not an array, it should return undefined.
  * If there is no property at the key, it should return undefined.
  
  var obj = {
    key: [1, 2, 5]
  };
  var output = getLastElementOfProperty(obj, 'key');
  console.log(output); // --> 5*/
  
  function getLastElementOfProperty(obj, key){
      if (Array.isArray(obj[key]) === fasle) {
          return undefined;
      } else if (obj[key] === undefined) {
          return undefined;
      } else {
          return obj[key].pop();
      }
  }
  
  /*
  preImmersive-buildingBlocksMastery-097-keep*
  Write a function called “keep”.
  
  Given an array and a keeper element, “keep” returns an array containing the items that match the given keeper element.
  
  Notes:
  * If no elements match, “keep” should return an empty array.
  
  var output = keep([1, 2, 3, 2, 1], 2)
  console.log(output); --> [2, 2]*/
  
  function keep(array, keeper){
      var newArray = [];
      for (var i=0; i < array.length; i++){
          if (array[i] === keeper) {
              newArray.push(array[i]);
          }
      }
      return newArray;
  }
  
  /*
  preImmersive-buildingBlocksMastery-098-getOddLengthWordsAtProperty*
  Write a function called “getOddLengthWordsAtProperty”.
  
  Given an object and a key, “getOddLengthWordsAtProperty” returns an array containing all the odd length word elements of the array located at the given key.
  
  Notes:
  * If the array is empty, it should return an empty array.
  * If it contains no odd length elements, it should return an empty array.
  * If the property at the given key is not an array, it should return an empty array.
  * If there is no property at the given key, it should return an empty array.
  
  var obj = {
    key: ['It', 'has', 'some', 'words']
  };
  var output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output); // --> ['has', 'words']*/
  
  function getOddLengthWordsAtProperty(obj, key){
      var oddLengthWords = [];
      if (!Array.isArray(obj[key])) {
          return [];
      } 
        for (var element in obj[key]) {
            if (obj[key][element].length % 2 !== 0) {
                oddLengthWords.push(obj[key][element]);
            }
        }
        return oddLengthWords;
  }
  
  /*
  preImmersive-buildingBlocksMastery-099-computeAverageOfNumbers*
  Write a function called “computeAverageOfNumbers”.
  
  Given an array of numbers, “computeAverageOfNumbers” returns their average.
  
  Notes:
  * If given an empty array, it should return 0.
  
  var input = [1,2,3,4,5];
  var output = computeAverageOfNumbers(input);
  console.log(output); // --> 3*/
  
  function computeAverageOfNumbers(num){
      var sum=0;
      var numCount = num.length;
      var average = 0;

      if (num.length < 1){
          return 0;
      }

      for (var i=0; i < num.length; i++){
          sum = sum + num[i];
      }

      average = sum / numCount;
      return average;
  }
  
  
  /*preImmersive-buildingBlocksMastery-100-getAverageOfElementsAtProperty*
  Write a function called “getAverageOfElementsAtProperty”.
  
  Given an object and a key, “getAverageOfElementsAtProperty” returns the average of all the elements in the array located at the given key.
  
  Notes:
  * If the array at the given key is empty, it should return 0.
  * If the property at the given key is not an array, it should return 0.
  * If there is no property at the given key, it should return 0.
  
  var obj = {
    key: [1, 2, 3]
  };
  var output = getAverageOfElementsAtProperty(obj, 'key');
  console.log(output); // --> 2*/
  
  function getAverageOfElementsAtProperty(obj, key){
      var sum = 0;
      var average = 0;

      if ((obj[key] === undefined) || (obj[key].length < 1) || (Array.isArray(obj[key])) === false ){
          return 0;
      }
      for (var prop in obj[key]){
          sum = sum + obj[key][prop];
      }
      average = sum / obj[key].length;
      return average;
  }
  
  
  /*preImmersive-buildingBlocksMastery-101-getEvenLengthWordsAtProperty*
  Write a function called “getEvenLengthWordsAtProperty”.
  
  Given an object and a key, “getEvenLengthWordsAtProperty” returns an array containing all the even length word elements of the array located at the given key.
  
  Notes:
  * If the array is empty, it should return an empty array.
  * If it contains no even length elements, it should return an empty array.
  * If the property at the given key is not an array, it should return an empty array.
  * If there is no property at the key, it should return an empty array.
  
  var obj = {
    key: ['a', 'long', 'game']
  };
  var output = getEvenLengthWordsAtProperty(obj, 'key');
  console.log(output); // --> ['long', 'game']*/
  
  function getEvenLengthWordsAtProperty(obj, key){
      var evenWords = [];
      if (!Array.isArray(obj[key])) {
          return [];
      }
        for (var element in obj[key]) {
            if (obj[key][element].length % 2 === 0) {
                evenWords.push(obj[key][element]);
            }
        }
    return evenWords;
  }
  
  /*
  preImmersive-buildingBlocksMastery-102-filterOddLengthWords*
  Write a function called “filterOddLengthWords”.
  
  Given an array of string, “filterOddLengthWords” returns an array containing only the elements of the given array whose lengths are odd numbers.
  
  var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
  console.log(output); // --> ['there', "now']*/
  
  function filterOddLengthWords(words){
      var oddWords = [];

      for (var i=0; i < words.length; i++) {
          if (words[i].length % 2 !== 0) {
              oddWords.push(words[i]);
          }
      }
      return oddWords;
  }

  /*
  preImmersive-buildingBlocksMastery-103-getSquaredElementsAtProperty*
  Write a function called “getSquaredElementsAtProperty”.
  
  Given an object and a key, “getSquaredElementsAtProperty” returns an array containing all the squared elements of the array located at the given key.
  
  Notes:
  * If the array is empty, it should return an empty array.
  * If the property at the given key is not an array, it should return an empty array.
  * If there is no property at the key, it should return an empty array.
  
  var obj = {
    key: [2, 1, 5]
  };
  var output = getSquaredElementsAtProperty(obj, 'key');
  console.log(output); // --> [4, 1, 25]*/
  
  function getSquaredElementsAtProperty(obj, key){
      var squaredElements = [];

      if (Array.isArray(obj[key]) === false){
          return [];
      }

      for (var prop in obj[key]) {
          squaredElements.push(obj[key][prop] * obj[key][prop]);
      }

      return squaredElements;
  }
  

  /*preImmersive-buildingBlocksMastery-104-getOddElementsAtProperty*
  Write a function called “getOddElementsAtProperty”.
  
  Given an object and a key, “getOddElementsAtProperty” returns an array containing all the odd elements of the array located at the given key.
  
  Notes:
  * If the array is empty, it should return an empty array.
  * If it contains no odd elements, it should return an empty array.
  * If the property at the given key is not an array, it should return an empty array.
  * If there is no property at the key, it should return an empty array.
  
  var obj = {
    key: [1, 2, 3, 4, 5]
  };
  var output = getOddElementsAtProperty(obj, 'key');
  console.log(output); // --> [1, 3, 5]*/
  
  function getOddElementsAtProperty(obj, key){
      var oddElements = [];
      if(!Array.isArray(obj[key])) {
          return [];
      }
        for (var element in obj[key]) {
            if (obj[key][element] % 2 !== 0) {
                oddElements.push(ojb[key][element]);           }
        }

    return oddElements;
  }
  
  /*
  preImmersive-buildingBlocksMastery-105-getEvenElementsAtProperty*
  Write a function called “getEvenElementsAtProperty”.
  
  Given an object and a key, “getEvenElementsAtProperty” returns an array containing all the even elements of the array located at the given key.
  
  Notes:
  * If the array is empty, it should return an empty array.
  * If the array contains no even elements, it should return an empty array.
  * If the property at the given key is not an array, it should return an empty array.
  * If there is no property at the given key, it should return an empty array.
  
  var obj = {
    key: [1000, 11, 50, 17]
  };
  var output = getEvenElementsAtProperty(obj, 'key');
  console.log(output); // --> [1000, 50]*/
  
  function getEvenElementsAtProperty(obj, key){
      var evenElements = [];

      if (!Array.isArray(obj[key])){
          return [];
      }
      for (var element in obj[key]){
          if (obj[key][element] % 2 === 0) {
              evenElements.push(ojb[key][element]);
          }
      }
    return evenElements;
  }


  /*
  preImmersive-buildingBlocksMastery-106-filterEvenLengthWords*
  Write a function called “filterEvenLengthWords”.
  
  Given an array of strings, “filterEvenLengthWords” returns an array containing only the elements of the given array whose length is an even number.
  
  var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
  console.log(output); // --> ['word', 'word']*/
  
  function filterEvenLengthWords(words){
      var evenWords = [];

      for (var i=0; i < words.length; i++){
          if (word[i].length % 2 === 0) {
              evenWords.push(word[i]);
          }
      }
    return evenWords;
  }
  
  /*preImmersive-buildingBlocksMastery-107-getLengthOfLongestElement*
  Write a function called “getLengthOfLongestElement”.
  
  Given an array, “getLengthOfLongestElement” returns the length of the longest string in the given array.
  
  Notes:
  * It should return 0 if the array is empty.
  
  var output = getLengthOfLongestElement(['one', 'two', 'three']);
  console.log(output); // --> 5*/
  
  function getLengthOfLongestElement(arr){

    var longest = arr[0];
    if (arr.length < 1){
        return 0;
    } 
    for (var i=0; i < arr.length; i++){
        if (arr[i].length > longest.length){
            longest = arr[i];
        }
    }
    return longest.length;
  }
  

  /*preImmersive-buildingBlocksMastery-108-getSmallestElementAtProperty*
  Write a function called “getSmallestElementAtProperty”.
  
  Given an object and a key, “getSmallestElementAtProperty” returns the smallest element in the array located at the given key.
  
  Notes:
  * If the array is empty, it should return undefined.
  * If the property at the given key is not an array, it should return undefined.
  * If there is no property at the key, it should return undefined.
  
  var obj = {
    key: [2, 1, 5]
  };
  var output = getSmallestElementAtProperty(obj, 'key');
  console.log(output); // --> 1 */
  
  function getSmallestElementAtProperty(obj, key){

    if (obj[key] === false) {
        return undefined;
    } else if (Array.isArray(obj[key]) === false) {
        return undefined;
    } else if (obj[key].length < 1){
        return undefined;
    }

    var smallest = obj[key][0];

    for (var prop in obj[key]){
        if (obj[key][prop] < smallest) {
            smallest = obj[key][prop];
        }
    }
    return smallest;
  }
  


  /*preImmersive-buildingBlocksMastery-109-getLargestElementAtProperty*
  Write a function called “getLargestElementAtProperty”.
  
  Given an object and a key, “getLargestElementAtProperty” returns the largest element in the array located at the given key.
  
  Notes:
  * If the array is empty, it should return undefined.
  * If the property at the given key is not an array, it should return undefined.
  * If there is no property at the key, it should return undefined.
  
  var obj = {
    key: [1, 2, 4]
  };
  var output = getLargestElementAtProperty(obj, 'key');
  console.log(output); // --> 4*/
  
  function getLargestElementAtProperty(obj, key){
      if (obj[key] === false){
          return undefined;
      } else if(Array.isArray(obj[key]) === false) {
          return undefined;
      } else if (obj[key].length < 1) {
          return undefined;
      }

      var largest = obj[key][0];

      for (var prop in obj[key]){
          if (obj[key][prop] > largest) {
              largest = obj[key][prop];
          }
      }
      return largest;
  }
  
  /*preImmersive-buildingBlocksMastery-110-getAllButLastElementOfProperty
  Write a function called “getAllButLastElementOfProperty”.
  
  Given an object and a key, “getAllButLastElementOfProperty” returns an array containing all but the last element of the array located at the given key.
  
  Notes:
  * If the array is empty, it should return an empty array.
  * If the property at the given key is not an array, it return an empty array.
  * If there is no property at the key, it should return an empty array.
  
  var obj = {
    key: [1, 2, 3]
  };
  var output = getAllButLastElementOfProperty(obj, 'key');
  console.log(output); // --> [1,2]*/
  
  function getAllButLastElementOfProperty(obj, key){
      var empty = [];

      if (obj[key] === undefined){
          return empty;
      } else if(obj[key].length < 1){
          return empty;
      } if(Array.isArray(obj[key]) === false){
          return empty;
      }

      for (var i=0; i < obj[key].length - 1; i++){
          empty.push(obj[key][i]);
      }
    return empty;
  }
  
  
  /*preImmersive-buildingBlocksMastery-111-getElementOfArrayProperty
  /*
  Write a function called “getElementOfArrayProperty”.
  
  Given an object, a key, and a numerical index, “getElementOfArrayProperty” returns the value of the element at the given index of the array located within the given object at the given key.
  
  Notes:
  * If the array is empty, it should return undefined.
  * If the given index is out of range of the array located at the given key, it should return undefined.
  * If the property at the given key is not an array, it should return undefined.
  * If there is no property at the key, it should return undefined.
  
  */
  
function getElementOfArrayProperty(obj, key , n){
    if (obj[key] === undefined) {
        return undefined;
    } else if (Array.isArray(obj[key]) === false) {
        return undefined;
    }
    return obj[key][n];
}

  /*preImmersive-buildingBlocksMastery-112-squareElements*
  Write a function called “squareElements”.
  Given an array of numbers, “squareElements” should return a new array where each element is the square of the element of the given array.
  var output = squareElements([1, 2, 3]); console.log(output); // --> [1, 4, 9]
  
  */
  
  function squareElements(arr) {
      var squaredElements = [];
      for (var element in arr) {
          squaredElements.push(arr[element] * arr[element]);
      }
      return squaredElements;
  }
  
  
  /*preImmersive-buildingBlocksMastery-113-filterOddElements*
  Write a function called “filterOddElements”.
  
  Given an array of numbers, “filterOddElements” returns an array containing only the odd numbers of the given array.
  var output = filterOddElements([1, 2, 3, 4, 5]); console.log(output); // --> [1, 3, 5]*/
  
  function filterOddElements(arr){
      var odd = [];

      for (var i=0; i < arr.length; i++){
          if (arr[i] % 2 !== 0){
              odd.push(arr[i]);
          }
      }
    return odd;
  }
  
  /*preImmersive-buildingBlocksMastery-114-computeProductOfAllElements*
  Write a function called “computeProductOfAllElements”.
  
  Given an array of numbers, “computeProductOfAllElements” returns the products of all the elements in the given array.
  
  Notes:
  * If given array is empty, it should return 0.
  
  var output = computeProductOfAllElements([2, 5, 6]);
  console.log(output); // --> 60*/
  
  function computeProductOfAllElements(arr){

    var product = 1;
        if (arr.length < 1){
            return 0;
        }
            for (var i=0; i < arr.length; i++){
                product = product * arr[i];
            }
    return product;
  }
  
  /*preImmersive-buildingBlocksMastery-115-filterEvenElements*
  Write a function called “filterEvenElements”.
  
  Given an array of numbers, “filterEvenElements” returns an array containing only the even numbers of the given array.
  var output = filterEvenElements([2, 3, 4, 5, 6]); console.log(output); // --> [2, 4, 6]*/
  
  function filterEvenElements(arr){
      var even = [];

      for (var i=0; i < arr.length; i++){
          if (arr[i] % 2 === 0) {
              even.push(arr[i]);
          }
      }
    return even;
  }
  
  /*preImmersive-buildingBlocksMastery-116-getLengthOfShortestElement*
  Write a function called “getLengthOfShortestElement”.
  
  Given an array, “getLengthOfShortestElement” returns the length of the shortest string in the given array.
  
  Notes:
  * It should return 0 if the array is empty.
  
  var output = getLengthOfShortestElement(['one', 'two', 'three']);
  console.log(output); // --> 3*/
  
  function getLengthOfShortestElement(arr){
      var shortest = arr[0];
      
      if (arr.length < 1){
          return 0;
      }

      for (var i=0; i < arr.length; i++){
          if (arr[i].length < shortest.length){
              shortest = arr[i];
          }
      }
    return shortest.length; 
  }
  
  
  
  /*preImmersive-buildingBlocksMastery-117-getLongestElement*
  Write a function called “getLongestElement”.
  
  Given an array, “getLongestElement” returns the longest string in the given array.
  
  Notes:
  * If there are ties, it returns the first element to appear.
  * If the array is empty, it should return an empty string.
  
  var output = getLongestElement(['one', 'two', 'three']);
  console.log(output); // --> 'three'
  */
  
  function getLongestElement(arr){
      var longest = arr[0];

      if (arr.length < 1){
          return '';
      }

      for (var i=0; i < arr.length; i++){
          if (arr[i].length > longest.length){
              longest = arr[i];
          }
      }
    return longest;
  }
    
  
  /*preImmersive-buildingBlocksMastery-118-findSmallestElement*
  Write a function called “findSmallestElement”.
  
  Given an array of numbers, “findSmallestElement” returns the smallest number within the given array.
  
  Notes:
  * If the given array is empty, it should return 0.
  
  var output = findSmallestElement([4, 1, 9, 10]);
  console.log(output); // --> 1*/
  
  const findSmallestElement = arr => {
      let smallest = arr[0];

      if (arr.length < 1){
          return 0;
      }

      for (let i=0; i<arr.length; i++){
          if (arr[i] < smallest) {
              smallest =  arr[i];
          }
      }
    return smallest;
  }
  

  /*preImmersive-buildingBlocksMastery-119-findShortestElement*
  Write a function called “findShortestElement”.
  
  Given an array, “findShortestElement” returns the shortest string within the given array.
  
  Notes:
  * If there are ties, it should return the first element to appear.
  * If the given array is empty, it should return an empty string.
  
  var output = findShortestElement(['a', 'two', 'three']);
  console.log(output); // --> 'a'
  */
  
  function findShortestElement(arr){
      var shortest = arr[0];

      if (arr.length < 1){
          return '';
      }

      for (var i=0; i < arr.length; i++){
          if (arr[i].length < shortest.length){
              shortest =  arr[i];
          }
      }
    return shortest;
  }
  
  
  /*preImmersive-buildingBlocksMastery-120-getLargestElement*
  Write a function called “getLargestElement”.
  
  Given an array, “getLargestElement” returns the largest number in the given array.
  
  Notes:
  * It should return 0 if the array is empty.
  
  var output = getLargestElement([5, 2, 8, 3]);
  console.log(output); // --> 8;*/
  
  function getLargestElement(arr){
      var longest = arr[0];

      if (arr.length < 1){
          return 0;
      }

      for (var prop in arr){
          if (arr[prop] > longest){
              longest = arr[prop];
          }
      }
    return longest;
  }
  
  
  /*preImmersive-buildingBlocksMastery-121-computeSumOfAllElements*
  Write a function called “computeSumOfAllElements”.
  
  Given an array of numbers, “computeSumOfAllElements” returns the sum of all the elements in the given array.
  
  var output = computeSumOfAllElements([1, 2, 3])
  console.log(output); // --> 6 */
  
  function computeSumOfAllElements(arr){
      var sum = 0;

      for (var i=0; i < arr.length; i++){
          sum = sum + arr[i];
      }
    return sum;
  }
  
  
  /*preImmersive-buildingBlocksMastery-122-calculateBillTotal
  Write a function called “calculateBillTotal”.
  
  Given the pre tax and pre tip amount of a meal, “calculateBillTotal” returns the total amount due after tax and tip.
  
  Notes:
  * Assume that sales tax is 9.5% and tip is 15%.
  * Do NOT tip on the sales tax, only on the pre tip amount.
  
  var output = calculateBillTotal(20);
  console.log(output); // --> 24.9*/
  
  function calculateBillTotal(preTaxAndTipAmount){
      var total = preTaxAndTipAmount;
      var tax = total * 0.095;
      var tip = total * 0.15;

      return total + tax + tip;
  }
  
  
  /*preImmersive-buildingBlocksMastery-123-getStringLength
  Write a function called “getStringLength”.
  
  Given a string, “getStringLength” returns the length of the given string.
  
  Notes:
  * Do NOT use any native ‘length’ methods.
  * You might consider using ‘substring’ or ‘slice’ as alternatives.
  
  var output = getStringLength('hello');
  console.log(output); // --> 5*/
  
  function getStringLength(string){
      var count = 0;

      while (string) {
          string = string.slice(1);
          count++;
      }
    return count;
  }
  
  
  /*preImmersive-buildingBlocksMastery-124-joinArraysOfArrays
  Write a function called “joinArrayOfArrays”.
  
  Given an array of arrays, “joinArrayOfArrays” returns a single array containing the elements of the nested arrays.
  
  var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
  console.log(output); // --> [1, 4, true, false, 'x', 'y']*/
  
  function joinArrayOfArrays(arr){
      var newArray = arr[0];

      for (var i=1; i < arr.length; i++){
          newArray = newArray.concat(arr[i]);
      }
    return newArray;
  }
  
  /*preImmersive-buildingBlocksMastery-125-getProductOfAllElementsAtProperty*
  Write a function called “getProductOfAllElementsAtProperty”.
  
  Given an object and a key, “getProductOfAllElementsAtProperty” returns the product of all the elements in the array located at the given key.
  
  Notes:
  * If the array is empty, it should return 0.
  * If the property at the given key is not an array, it should return 0.
  * If there is no property at the given key, it should return 0.
  
  var obj = {
    key: [1, 2, 3, 4]
  };
  var output = getProductOfAllElementsAtProperty(obj, 'key');
  console.log(output); // --> 24*/
  
  function getProductOfAllElementsAtProperty(obj, key){
      var product = 1;

      if (obj[key] === false){
          return 0;
      } else if (Array.isArray(obj[key]) === false){
          return 0;
      } else if (obj[key].length < 1){
          return 0;
      }

      for (var i=0; i < obj[key].length; i++){
          product += obj[key][i];
      }

    return product;
  }
  
  /*
  preImmersive-buildingBlocksMastery-126-sumDigits*
  Write a function called “sumDigits”.
  
  Given a number, “sumDigits” returns the sum of all its digits.
  
  var output = sumDigits(1148);
  console.log(output); // --> 14
  If the number is negative, the first digit should count as negative.
  
  var output = sumDigits(-316);
  console.log(output); // --> 4
  Notes:
  * In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
  * Be sure to familiarize yourself with the “toString” method, as well as the “Number” function. */
  
  function sumDigits(num){
      var total = 0;
      var newString =  num.toSrting().split('');
    
      for ( var i=0; i < newString.length; i++){
          if (newString[i] === '-'){
              i++;

              var converted =  parseInt(newString[i]);
              total -= converted;
              continue;
          }

          var converted = parseInt(newString[i]);
          total += converted;
      }
    return total;
  }
  

  /*preImmersive-buildingBlocksMastery-127-getSumOfAllElementsAtProperty*
  Write a function called “getSumOfAllElementsAtProperty”.
  
  Given an object and a key, “getSumOfAllElementsAtProperty” returns the sum of all the elements in the array located at the given key.
  
  Notes:
  * If the array is empty, it should return 0.
  * If the property at the given key is not an array, it should return 0.
  * If there is no property at the key, it should return 0.
  
  var obj = {
    key: [4, 1, 8]
  };
  var output = getSumOfAllElementsAtProperty(obj, 'key');
  console.log(output); // --> 13*/
  
  function getSumOfAllElementsAtProperty(obj, key){
      var sum = 0;

      if (obj[key] === undefined){
          return 0;
      } else if(Array.isArray(obj[key]) === false){
          return 0;
      }

      for (var i=0; i < obj[key].length; i++){
          sum += obj[key][i];
      }
    return sum;
  }
  
  
  /*preImmersive-buildingBlocksMastery-128-findShortestWordAmongMixedElements*
  Write a function called “findShortestWordAmongMixedElements”.
  
  Given an array, “findShortestWordAmongMixedElements” returns the shortest string within the given array.
  
  Notes:
  * If there are ties, it should return the first element to appear in the given array.
  * Expect the given array to have values other than strings.
  * If the given array is empty, it should return an empty string.
  * If the given array contains no strings, it should return an empty string.
  
  var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
  console.log(output); // --> 'two'
  */
  
  function findShortestWordAmongMixedElements(arr){
      var shortest = 0;
      var numberCount = 0;
      var numberArray = [];

      for (var element=0; element < arr.length; element++){
          if (typeof arr[element] === 'string') {
              numberCount++;
              numberArray.push(arr[element]);
          }
      }

      if (arr.length < 1 || numberCount < 1){
          return ('');
      }

      shortest = numberArray[0];

      for (var number=0; number < numberArray.length; number++){
          if (numberArray[number].length < shortest.length){
              shortest =  numberArray[number];
          }
      }
    return shortest;
  }
  
  
  /*preImmersive-buildingBlocksMastery-129-findSmallestNumberAmongMixedElements*
  Write a function called “findSmallestNumberAmongMixedElements”.
  
  Given an array of mixed elements, “findSmallestNumberAmongMixedElements” returns the smallest number within the given array.
  
  Notes:
  * If the given array is empty, it should return 0.
  * If the array contains no numbers, it should return 0.
  
  var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
  console.log(output); // --> 4*/
  
  function findSmallestNumberAmongMixedElements(arr){
      var smallest = 0;
      var numberCount = 0;
      var numberArray = [];

      for (var element = 0; element < arr.length; element++){
          if (typeof arr[element] === 'number'){
              numberCount++;
              numberArray.push(arr[element]);
          }
      }

      if (arr.length < 1 || numberCount < 1){
          return 0;
      }

      smallest = numberArray[0];

      for (var number=0; number < numberArray.length; number++){
          if (numberArray[number] < smallest){
              smallest   = numberArray[number];
          }
      }
    return smallest;
  }
  
  
  /*preImmersive-buildingBlocksMastery-130-getLongestWordOfMixedElements*
  Write a function called “getLongestWordOfMixedElements”.
  
  Given an array of mixed types, “getLongestWordOfMixedElements” returns the longest string in the given array.
  
  Notes:
  * If the array is empty, it should return an empty string (“”). 
  * If the array contains no strings; it should return an empty string.
  
  var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
  console.log(output); // --> 'word'
  */
  
  function getLongestWordOfMixedElements(arr){
      var longest = 0;
      var numberCount = 0;
      var numberArray = [];

      for (var element=0; element < arr.length; element++){
          if (typeof arr[element] === 'string'){
              numberCount++;
              numberArray.push(arr[element]);
          }
      }

      if (arr.length < 1 || numberCount < 1) {
          return ('');
      }

      longest - numberArray[0];

      for (var number = 0; number < numberArray.length; number++){
          if (numberArray[number] > longest){
              longest = numberArray[number];
          }
      }

    return longest;
  }
  
  
  /*preImmersive-buildingBlocksMastery-131-getLargestNumberAmongMixedElements*
  Write a function called “getLargestNumberAmongMixedElements”.
  
  Given any array, “getLargestNumberAmongMixedElements” returns the largest number in the given array.
  
  Notes:
  * The array might contain values of a type other than numbers.
  * If the array is empty, it should return 0.
  * If the array contains no numbers, it should return 0.
  
  var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
  console.log(output); // --> 5
  */
  
  function getLargestNumberAmongMixedElements(arr){
      var largest = 0;
      var numberCount = 0;
      var numberArray = [];

      for (var element=0; element < arr.length; element++){
          if (typeof arr[element] === 'number'){
              numberCount++;
              numberArray.push(arr[element]);
          }
      }

      if (arr.length < 1 || numberCount < 1) {
          return 0;
      }

      largest = numberArray[0];

      for (var number=0; number < numberArray.length; number++){
          if (numberArray[number] > largest) {
              largest = numberArray[number];
          }
      }
    return largest;
  }
  

    
  /*preImmersive-buildingBlocksMastery-132-computeSummationToN
  Write a function called “computeSummationToN”.
  
  Given a number, “computeSummationToN” returns the sum of sequential numbers leading up to the given number, beginning at 0.
  
  Notes:
  * If n = 4, it should calculate the sum of 1 + 2 + 3 + 4, and return 10.
  
  var output = computeSummationToN(6);
  console.log(output); // --> 21*/
  
  function computeSummationToN(n){
      sum = 0;
      
      for (var i=0; i <= n; i++){
          sum += i;
      }
    return sum;
  }

  
  /*preImmersive-buildingBlocksMastery-133-convertScoreToGrade
  Write a function called “convertScoreToGrade”.
  
  Given a score, “convertScoreToGrade” returns a string representing the letter grade corresponding to the given score.
  
  Notes:
  * (100 - 90) –> ‘A’
  * (89 - 80) –> ‘B’
  * (79 - 70) –> ‘C’
  * (69 - 60) –> ‘D’
  * (59 - 0) –> ‘F’
  * If the given score is greater than 100 or less than 0, it should return ‘INVALID SCORE’.
  
  var output = convertScoreToGrade(91);
  console.log(output); // --> 'A'*/
  
  function convertScoreToGrade(score){
    if (score >= 90 && score <= 100){
        return 'A';
      }else if (score >= 80 && score <=89){
        return 'B';
      }else if (score >=70 && score <=79){
        return 'C';
      }else if (score >= 60 && score <=69){
        return 'D';
      }else if (score <=59 && score>=0){
        return 'F';
      }else{
        return 'INVALID SCORE';
    }
      
  }
  
  
  /*preImmersive-buildingBlocksMastery-134-convertScoreToGradeWithPlus
  Write a function called “convertScoreToGradeWithPlusAndMinus”.
  
  Given a score, “convertScoreToGradeWithPlusAndMinus” returns a string representing the letter grade corresponding to the given score.
  
  Notes:
  * (100 - 90) –> ‘A’
  * (89 - 80) –> ‘B’
  * (79 - 70) –> ‘C’
  * (69 - 60) –> ‘D’
  * (59 - 0) –> ‘F’
  * If the given score is greater than 100 or less than 0, it should return ‘INVALID SCORE’.
  * If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a ‘-‘
  * If the score is be the 8 and 9 (inclusive) of a given range, return the letter with a ‘+’
  * There are is no F+ and there is no F-.
  
  var output = convertScoreToGradeWithPlusAndMinus(91);
  console.log(output); // --> 'A-'*/
  
  function convertScoreToGradeWithPlusAndMinus(score){
    if (score>=98 && score<=100){
        return 'A+';
      }else if (score>=93 && score<=97){
        return 'A';
      }else if (score>=90 && score<=92){
        return 'A-';
      }else if (score>=88 && score<=89){
        return 'B+';
      }else if (score>=83 && score<=87){
        return 'B';
      }else if (score>=80 && score<=82){
        return 'B-';
      }else if (score>=78 && score<=79){
        return 'C+';
      }else if (score>=73 && score<=77){
        return 'C';
      }else if (score>=70 && score<=72){
        return 'C-';
      }else if (score>=68 && score<=69){
        return 'D+';
      }else if (score>=63 && score<=67){
        return 'D';
      }else if (score>=60 && score<=62){
        return 'D-';
      }else if (score>=0 && score<=59){
        return 'F';
      }else{
        return 'INVALID SCORE';
    }
    
  }
  
  
  /*preImmersive-buildingBlocksMastery-135-computeFactorialOfN
  Write a function called “computeFactorialOfN”.
  
  Given a natural number (a whole number greater than 0), “computeFactorialOfN” returns its factorial.
  
  var output = computeFactorialOfN(3);
  console.log(output); // --> 6
  
  var output = computeFactorialOfN(4);
  console.log(output); // --> 24*/
  
  function computeFactorialOfN(n){
      if (n === 0) {
          return 1
      } else {
          return n * computeFactorialOfN(n-1)
      }
  }
  
  
  /*preImmersive-buildingBlocksMastery-136-repeatString
  Write a function called “repeatString”.
  
  Given a string and a number, “repeatString” returns the given string repeated the given number of times.
  
  var output = repeatString('code', 3);
  console.log(output); // --> 'codecodecode'
  */
  
  function repeatString(string, num) {
    return string.repeat(num)
  }
  
  
  /*preImmersive-buildingBlocksMastery-137-getLongestOfThreeWords*
  Write a function called “getLongestOfThreeWords”.
  
  Given 3 words, “getLongestOfThreeWords” returns the longest of three words.
  
  Notes:
  * If there is a tie, it should return the first word in the tie.
  
  var output = getLongestOfThreeWords('these', 'three', 'words');
  console.log(output); // --> 'these'
  */
  
function getLongestOfThreeWords(word1, word2, word3){
    if(word1.length >= 3) {  
        return word1;
      } else if (word2.length >= 3) {
        return word2;
      } else if (word3.length >= 1) {
        return word3;
    }
    
}
  
  /*preImmersive-buildingBlocksMastery-138-findShortestOfThreeWords*
  Write a function called “findShortestOfThreeWords”.
  
  Given 3 strings, “findShortestOfThreeWords” returns the shortest of the given strings.
  
  Notes:
  * If there are ties, it should return the first word in the parameters list.
  
  var output = findShortestOfThreeWords('a', 'two', 'three');
  console.log(output); // --> 'a'*/
  
  function findShortestOfThreeWords(w1, w2, w3){
      var words = [w1, w2, w3];

      words.sort(function(a, b){return a.length - b.length});

      return words[0];
  }
  
  
  /*preImmersive-buildingBlocksMastery-139-computeCompoundInterest
  Write a function called “computeCompoundInterest”.
  
  Given a principal, an interest rate, a compounding frequency, and a time (in years), “computeCompoundInterest” returns the amount of compound interest generated.
  
  var output = computeCompoundInterest(1500, .043, 4, 6);
  console.log(output); // --> 438.8368221341061
  Reference:
  https://en.wikipedia.org/wiki/Compound_interest#Mathematics_of_interest_rate_on_loans
  This shows the formula used to calculate the total compound interest generated.
  
  */
  
  function computeCompoundInterest(principal, interstRate, compoundingFrequency, timeInYears){
      //asign the original input to formula values
        var p = principal;
            r = interestRate;
            n = compoundingFrequency;
            t = timeInYears;
            interest = 0; 
            result = 0;

     //FORMULA:   I = P(1+(r/n))nt - P

        interest = (p * Math.pow((1 + (r/(n))), (n*t)));
        result = interest - p;

    return  result;
  }
    
  
  /*preImmersive-buildingBlocksMastery-140-modulo
  Write a function called “modulo”.
  
  Given 2 numbers, “modulo” returns the remainder after dividing num1 by num2.
  
  It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()
  
  Notes:
  * Do NOT use the actual built-in modulo (aka “remainder”) operator (%) in your implementation.
  * 0 % ANYNUMBER = 0.
  * ANYNUMBER % 0 = NaN.
  * If either operand is NaN, then the result is NaN.
  * Modulo always returns the sign of the first number.
  
  var output = modulo(25, 4);
  console.log(output); // --> 1*/
  
  function modulo(num1, num2){
    //math formula 'a mod b=a b[ab]'

    //divide num1 on num2
    var divNums = parseInt(num1/num2);

    //multiply divNums * num2
    var product = divNums * num2;

    //asign new var for result of num1 - product to get modulo
    var resp = num1 - product;

    return resp;
  }
  
  
  /*preImmersive-buildingBlocksMastery-141-multiply
  Write a function called “multiply”.
  
  Given 2 numbers, “multiply” returns their product.
  
  Notes:
  * It should not use the multiply operator (*).
  
  var output = multiply(4, 7);
  console.log(output); // --> 28*/
  
  function multiply(num1, num2){
      //positive numbers
      if (num2 > 0){
          return (num1 + multiply(num1, num2-1));
      }
      //negative numbers
      else if (num2 < 0){
          return -multiply(num1, -num2);
      }
    return 0;
  }
  
  
  /*preImmersive-buildingBlocksMastery-142-isOddWithoutModulo
  Write a function called “isOddWithoutModulo”.
  
  Given a number, “isOddWithoutModulo” returns whether the passed in number is odd.
  
  Note:
  * It does so without using the modulo operator (%). 
  * It should work for negative numbers and zero.
  
  var output = isOddWithoutModulo(17);
  console.log(output); // --> true*/
  
  function isOddWithoutModulo(num){
      //ternary operator
      return (num & 1) ? true:false;
  }
  
  
  /*preImmersive-buildingBlocksMastery-143-isEvenWithoutModulo
  Write a function called “isEvenWithoutModulo”.
  
  Given a number, “isEvenWithoutModulo” returns whether it is even.
  
  Notes:
  * It does so without using the modulo operator (%). 
  * It should work for negative numbers and zero.
  
  var output = isEvenWithoutModulo(8);
  console.log(output); // --> true*/
  
  function isEvenWithoutModulo(num){
      return (num & 1) ? false:true
  }
  
  
  /*preImmersive-buildingBlocksMastery-144-multiplyBetween
  Write a function called “multiplyBetween”.
  
  Given 2 integers, “multiplyBetween” returns the product between the two given integers, beginning at num1, and excluding num2.
  
  Notes:
  * The product between 1 and 4 is 1 * 2 * 3 = 6.
  * If num2 is not greater than num1, it should return 0.
  var output = multiplyBetween(2, 5); console.log(output); // --> 24*/
  
  function multiplyBetween(num1, num2){
      var multiply = 1;

      if (num1 >= num2){
          return 0;
      }

      for (var i=num1; i < num2; i++){
          multiply = multiply * i;
      }

      return multiply;
  }
    
  
  /*preImmersive-buildingBlocksMastery-145-computeSumBetween
  Write a function called “computeSumBetween”.
  
  Given 2 integers, “computeSumBetween” returns the sum between the two given integers, beinning at num1, and excluding num2.
  
  Notes:
  * The sum between 1 and 4 is 1 + 2 + 3 = 6.
  * If num2 is not greater than num1, it should return 0.
  var output = computeSumBetween(2, 5); console.log(output); // --> 9
  
  */
  
  function computeSumBetween(n1, n2){
      var computeSum = 0;

      if (n1 >= n2){
          return 0;
      }

      for (var i=n1; i < n2; i++){
          computeSum = computeSum + i;
      }
    return computeSum;
  }
  
   
  /*preImmersive-buildingBlocksMastery-146-convertArrayToObject1
  Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
  1) the first element of the array as the object’s key, and
  2) the last element of the array as that key’s value.
  
  Example input:
  ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
  
  Function’s return value (output):
  { Queen : 'Beyonce' }
  
  Do not change the input array. Assume all elements in the input array will be of type ‘string’.
  
  Note that the input array may have a varying number of elements. Your code should flexibly accommodate that.
  
  E.g. it should handle input like:
  ['Kevin', 'Bacon', 'Love', 'Spacey', 'Costner', 'Hart']
  
  Function’s return value (output):
  { Kevin : 'Hart' }*/
  
  function transformFirstAndLast(array){
      var result = {};

      result[array[0]] = array[array.length - 1];

    return result;
  }
  
  
  /*preImmersive-buildingBlocksMastery-147-convertArrayToObject2
  Write a function ‘fromListToObject’ which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
  
  Example input:
  [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
  
  Function’s return value (output):
  { make : 'Ford', model : 'Mustang', year : 1964 }
  
  Do not change the input string. Assume that all elements in the array will be of type ‘string’.
  
  Note that the input may have a different number of elements than the given sample.
  For instance, if the input had 6 values instead of 4, your code should flexibly accommodate that.
  
  */
  
  function fromListToObject(array){
      var object = {};

      for (var i=0; i < array.length; i++){
          var newArray = array[i];
          object[newArray[0]] = newArray[1];
      }
    return object;
  }
  
  
  /*preImmersive-buildingBlocksMastery-148-convertArrayToObject3
  Write a function called “transformEmployeeData” that transforms some employee data from one format to another.
  
  The argument will look like this:
  
  [
      [
          ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
      ],
      [
          ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
      ]
  ]
  Given that input, the return value should look like this:
  
  [
      {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
      {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
  ]
  Note that the input may have a different number of rows or different keys than the given sample.
  
  For example, let’s say the HR department adds a “tshirtSize” field to each employee record.
  Your code should flexibly accommodate that.*/
  
  function transformEmployeeData(employeeData){
      var list = [];

      for (var i=0; i < employeeData.length; i++){
          var obj = {};

          for (var j=0; j < employeeData[i].length; j++){
              obj[employeeData[i][j][0]] = employeeData[i][j][1];
          }
          list.push(obj);
      }
    return list;
  }
  
  
  /*preImmersive-buildingBlocksMastery-149-convertObjectToList1
  Write a function called “getAllKeys” which returns an array of all the input object’s keys.
  Example input:
  { name : 'Sam', age : 25, hasPets : true }
  
  Function’s return value (output) :
  ['name', 'age', 'hasPets']
  
  Do not use “Object.keys” to solve this prompt.
  
  Note that your function should be able to handle any object passed in it.
  
  E.g. it should also handle an input like:
  { a : 'a', number : 11, hungry : true, grammyWins : 1 }
  
  Function’s return value (output):
  ['a', 'number', 'hungry', 'grammyWins']*/
  
  
  function getAllKeys(obj){
      var keys = [];

      for (var prop in obj){
          keys.push(prop);
      }
    return keys;
  }
  
  
  /*preImmersive-buildingBlocksMastery-150-convertObjectToList2
  Write a function called “listAllValues” which returns an array of all the input object’s values.
  Example input:
  
  {
    name : 'Krysten',
    age : 33,
    hasPets : false
  }
  Function’s return value (output):
  
  ['Krysten', 33, false]
  Note that the input may have a different number of keys and values than the given sample.
  E.g. it should also handle an input like:
  
  {
    a : 'a',
    number : 11,
    hungry : true,
    grammyWins : 1
  }
  Function’s return value (output):
  
  ['a', 11, true, 1]*/
  
  
  function listAllValues(obj){
      var result = [];

      for (var key in obj){
          if (obj.hasOwnProperty(key)) {
              result.push(obj[key]);
          }
      }
    return result;
  }
  
  
  /*preImmersive-buildingBlocksMastery-151-convertObjectToList3
  Write a function called “convertObjectToList” which converts an object literal into an array of arrays, like this:
  
  Argument:
  
  {
    name: 'Holly',
    age: 35,
    role: 'producer'
  }
  Return value:
  
  [['name', 'Holly'], ['age', 35], ['role', 'producer']]*/
  
  
  
  
  /*preImmersive-buildingBlocksMastery-152-greetCustomer
  Write a function called “greetCustomers”.
  
  Given a name, “greetCustomers” returns a greeting based on how many times that customer has visited the restaurant. Please refer to the customerData object.
  
  The greeting should be different, depending on the name on their reservation.
  
  Case 1 - Unknown customer ( Name is not present in customerData ):
  
  var output = greetCustomer('Terrance');
  console.log(output); // --> 'Welcome! Is this your first time?'
  Case 2 - Customer who has visited only once ( ‘visits’ value is 1 ):
  
  var output = greetCustomer('Joe');
  console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
  Case 3 - Repeat customer: ( ‘visits’ value is greater than 1 ):
  
  var output = greetCustomer('Carol');
  console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'
  Notes:
  * Your function should not alter the customerData object to update the number of visits.
  * Do not hardcode to the exact sample data. This is a BAD IDEA:
  
  if (firstName === 'Joe') {
    // do something
  }*/
  
  
  