import "./styles.css";

//  Max Sum in Array
// var a = [-2, -3, 4, -1, -2, 1, 5, -3];
// var max_sum = a[0];
// var max_range = a[0];
// for (var i = 0; i < a.length; i++) {
//   max_range = a[i] > max_range + a[i] ? a[i] : max_range + a[i];
//   max_sum = max_sum > max_range ? max_sum : max_range;
// }
// console.log(max_sum);

// Max Product in an array
// var a = [-2, -3, 4, 1, -2, 5, 1, 7, -3];
// var max_product = a[0];
// var max_range = a[0];
// for (var i = 0; i < a.length; i++) {
//   max_range = a[i] > max_range * a[i] ? a[i] : max_range * a[i];
//   max_product = max_product > max_range ? max_product : max_range;
// }
// console.log(max_product);

// Max substring with unique characters
// var str = "gksforeegkd";
// var substrLn = 1;
// var substr = "";
// for (var i = 0; i < str.length; i++) {
//   var obj = {};
//   for (var j = i; j < str.length; j++) {
//     if (obj[str[j]]) {
//       break;
//     } else {
//       obj[str[j]] = true;
//       substrLn = Math.max(substrLn, j - i + 1);
//       substr = substrLn > j - i + 1 ? substr : str.slice(i, i + substrLn);
//     }
//   }
// }
// console.log(substrLn, substr);

// Max pallindrome substring
// var str = "geviniveraard";
// var substrLn = 1;
// var start = 0;
// var substr = "";
// for (var i = 0; i < str.length; i++) {
//   for (var j = i; j < str.length; j++) {
//     var flag = 1;
//     for (var k = 0; k < (j - i + 1) / 2; k++) {
//       if (str[k + i] !== str[j - k]) {
//         flag = 0;
//       }
//     }
//     if (flag && j - i + 1 > substrLn) {
//       substrLn = j - i + 1;
//       start = i;
//     }
//   }
// }
// substr = str.slice(start, start + substrLn);
// console.log(substrLn, substr);

// check pallindrome
// var str = "geviniveg";
// var flag = true;
// for (var i = 0; i < str.length / 2; i++) {
//   if (str[i] !== str[str.length - 1 - i]) {
//     flag = false;
//   }
// }
// console.log(flag);

// revere a string
// var str = "hello";
// var rev = [];
// for (var k = 0; k < str.length / 2; k++) {
//   rev[k] = str[str.length - k];
//   rev[str.length - k] = str[k];
// }
// console.log(rev.join(""));

// reverse a words in a string
// var str = "hello how are you";
// var strArray = str.split(" ");
// var revArray = [];
// for (var i = 0; i < strArray.length; i++) {
//   var subStr = strArray[i];
//   var rev = [];
//   for (var k = 0; k < subStr.length / 2; k++) {
//     rev[k] = subStr[subStr.length - k];
//     rev[subStr.length - k] = subStr[k];
//   }
//   revArray.push(rev.join(""));
// }
// console.log(revArray.join(" "));

// Check anagram
// var str1 = "listenn";
// var str2 = "silennt";
// var objCount = {};
// for (var i = 0; i < str1.length; i++) {
//   if (objCount[str1[i]]) {
//     objCount[str1[i]]++;
//   } else {
//     objCount[str1[i]] = 1;
//   }
// }
// var flag = true;
// for (var j = 0; j < str2.length; j++) {
//   var count = objCount[str2[j]] || 0;
//   objCount[str2[j]] = count - 1;
//   if (objCount[str2[j]] < 0) {
//     flag = false;
//   }
// }

// console.log(flag);

// sort an array
// var ar1 = [1, 5, 7, 9, 2, 6, 5, 3];
// console.log(ar1.sort());
// ar1.sort((a, b) => {
//   return a > b ? 1 : -1;
// });
// console.log(ar1);

// for (var i = 0; i < ar1.length; i++) {
//   for (var k = i + 1; k < ar1.length; k++) {
//     if (ar1[i] > ar1[k]) {
//       var swap = ar1[i];
//       ar1[i] = ar1[k];
//       ar1[k] = swap;
//     }
//   }
// }
// console.log(ar1);

// Sort an array with negative index not changed

// var ar1 = [1, -5, 7, 9, -2, 6, 5, -3];
// for (var i = 0; i < ar1.length; i++) {
//   for (var k = i + 1; k < ar1.length; k++) {
//     if (ar1[i] > 0 && ar1[k] > 0 && ar1[i] > ar1[k]) {
//       var swap = ar1[i];
//       ar1[i] = ar1[k];
//       ar1[k] = swap;
//     }
//   }
// }
// console.log(ar1);

// Merge 2 sorted array
// var ar1 = [1, 4, 7, 8];
// var ar2 = [1, 2, 3, 5, 6];
// var ar = [];
// var maxLen = ar1.length + ar2.length;
// var k = 0;
// var j = 0;
// for (var i = 0; i < maxLen; i++) {
//   if (ar1[j] && ar2[k]) {
//     if (ar1[j] < ar2[k]) {
//       ar[i] = ar1[j];
//       j++;
//     } else {
//       ar[i] = ar2[k];
//       k++;
//     }
//   } else if (ar1[j]) {
//     ar[i] = ar1[j];
//     j++;
//   } else if (ar2[k]) {
//     ar[i] = ar2[k];
//     k++;
//   }
// }
// console.log(ar);

// Merge 2 sorted array with unique value
// var ar1 = [2, 4, 5, 7, 9, 9];
// var ar2 = [1, 2, 3, 5, 6];
// var ar = [];
// var j = 0; //ar1
// var k = 0; //ar2
// var i = 0; //ar
// let loop = true;
// var objExist = {};
// while (loop) {
//   if (ar1[j] && ar2[k]) {
//     if (objExist[ar1[j]]) {
//       j++;
//     } else if (objExist[ar2[k]]) {
//       k++;
//     } else if (ar1[j] < ar2[k]) {
//       ar[i] = ar1[j];
//       objExist[ar1[j]] = true;
//       j++;
//       i++;
//     } else {
//       ar[i] = ar2[k];
//       objExist[ar2[k]] = true;
//       k++;
//       i++;
//     }
//   } else if (ar1[j]) {
//     if (objExist[ar1[j]]) {
//       j++;
//     } else {
//       ar[i] = ar1[j];
//       objExist[ar1[j]] = true;
//       j++;
//       i++;
//     }
//   } else if (ar2[k]) {
//     if (objExist[ar2[k]]) {
//       k++;
//     } else {
//       ar[i] = ar2[k];
//       objExist[ar2[k]] = true;
//       k++;
//       i++;
//     }
//   }
//   if (!ar1[j] && !ar2[k]) {
//     loop = false;
//   }
// }
// console.log(ar);

//sort a string
// var str = "sajhaseiowi";
// console.log(
//   str
//     .split("")
//     .sort((a, b) => {
//       return a.charCodeAt(0) > b.charCodeAt(0) ? 1 : -1;
//     })
//     .join("")
// );

// Traverse a 2d array
// var arr = [
//   [1, 2, 3, 4, 5, 21],
//   [6, 7, 8, 9, 10, 22],
//   [11, 12, 13, 14, 15, 23],
//   [16, 17, 18, 19, 20, 24]
// ];
// var result = [];
// var count = 0;
// var loop = true;
// var i = 0;
// var j = 0;
// var iMax = arr.length - 1;
// var iMin = 0;
// var jMax = arr[0].length - 1;
// var jMin = 0;
// var direction = 1;
// while (loop && count < 30) {
//   result.push(arr[i][j]);
//   console.log(arr[i][j], iMin, iMax, jMin, jMax, direction);
//   if (direction === 1 && i === iMax && j === jMin && jMax > jMin) {
//     jMin = jMin + 1;
//     direction = 2;
//   } else if (direction === 2 && i === iMax && j === jMax) {
//     if (iMax > iMin) {
//       iMax = iMax - 1;
//     } else if (jMax > jMin) {
//       jMin = jMin + 1;
//     }
//     direction = 3;
//   } else if (direction === 3 && i === iMin && j === jMax && jMax > jMin) {
//     direction = 4;
//     jMax = jMax - 1;
//   } else if (direction === 4 && j === jMin && i === iMin) {
//     if (iMax > iMin) {
//       iMin = iMin + 1;
//     } else if (jMax > jMin) {
//       jMax = jMax - 1;
//     }
//     direction = 1;
//   }
//   if (direction === 1) {
//     if (i < iMax) i = i + 1;
//   } else if (direction === 2) {
//     if (j < jMax) j = j + 1;
//   } else if (direction === 3) {
//     if (i > iMin) i = i - 1;
//   } else if (direction === 4) {
//     if (j > jMin) j = j - 1;
//   }
//   if (iMin === iMax && jMin === jMax) {
//     loop = false;
//   }
//   count++;
// }
// console.log(result.join(" "));

// Traverse a 2d array
// var arr = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20]
// ];

// var count = 0;
// var loop = true;
// var i = 0;
// var j = 0;
// var iMax = arr.length - 1;
// var iMin = 0;
// var jMax = arr[0].length - 1;
// var jMin = 0;
// var direction = 1;
// while (loop && count < 30) {
//   console.log(arr[i][j], iMin, iMax, jMin, jMax, direction);
//   if (direction === 1 && i === iMin && j === jMax) {
//     if (iMax > iMin) {
//       iMin = iMin + 1;
//     } else if (jMin > jMax) {
//       jMax = jMax - 1;
//     }
//     direction = 2;
//   } else if (direction === 2 && i === iMax && j === jMax) {
//     if (jMax > jMin) {
//       jMax = jMax - 1;
//     } else if (iMax > iMin) {
//       iMax = iMax - 1;
//     }
//     direction = 3;
//   } else if (direction === 3 && i === iMax && j === jMin) {
//     if (iMax > iMin) {
//       iMax = iMax - 1;
//     } else if (jMin < jMax) {
//       jMin = jMin + 1;
//     }
//     direction = 4;
//   } else if (direction === 4 && j === jMin && i === iMin) {
//     if (jMax > jMin) {
//       jMin = jMin + 1;
//     } else if (iMax > iMin) {
//       iMin = iMin + 1;
//     }
//     direction = 1;
//   }
//   if (direction === 1) {
//     if (j < jMax) j = j + 1;
//   } else if (direction === 2) {
//     if (i < iMax) i = i + 1;
//   } else if (direction === 3) {
//     if (j > jMin) j = j - 1;
//   } else if (direction === 4) {
//     if (i > iMin) i = i - 1;
//   }
//   if (iMin === iMax && jMin === jMax) {
//     loop = false;
//   }
//   count++;
// }

var arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
];

/* SAMPLE OUTPUT
[1, 6, 11, 16, 17, 18, 19, 20, 15, 10, 5, 4, 3, 2, 7, 12, 13, 14, 9, 8]
*/
var minr = 0,
  minc = 0,
  maxr = arr.length,
  maxc = arr[0].length,
  n = maxr * maxc,
  counter = 0,
  result = [];

while (counter < n) {
  //left wall
  for (let i = minr, j = minc; i < maxr && counter < n; i++) {
    result.push(arr[i][j]);
    counter++;
  }
  minc = minc + 1;
  //bottom wall
  for (let i = maxr - 1, j = minc; j < maxc && counter < n; j++) {
    result.push(arr[i][j]);
    counter++;
  }
  maxr = maxr - 1;
  //right wall
  for (let i = maxr - 1, j = maxc - 1; i >= minr && counter < n; i--) {
    result.push(arr[i][j]);
    counter++;
  }
  maxc = maxc - 1;
  //top wall
  for (let i = minr, j = maxc - 1; j >= minc && counter < n; j--) {
    result.push(arr[i][j]);
    counter++;
  }
  minr = minr + 1;
}

console.log(result);

// Find 2nd smallest number

// var arr = [5, 5, 76, 3, 4, 2198];
// var smallest = Math.min(arr[0], arr[1]);
// var smallest2 = Math.max(arr[0], arr[1]);
// for (var i = 2; i < arr.length; i++) {
//   if (arr[i] < smallest && arr[i] < smallest2) {
//     smallest2 = smallest;
//     smallest = arr[i];
//   } else if (arr[i] < smallest2) {
//     smallest2 = arr[i];
//   }
// }
// console.log(smallest2);
