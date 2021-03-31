/////////////////////////////////////////// 3.30 .2021\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\/* 
// Given an array of objects that contain a category key,
// return an object to group the objects by their category.
// Make the grouping
// case -insensitive.
// Bonus:
//     allow the key that is grouped by to be provided.

//     EXAMPLE:
//         const objects = [{
//                 name: "Baby Yoda",
//                 category: "cute",
//             },
//             {
//                 name: "Cricket Protein",
//                 category: "food",
//             },
//             {
//                 name: "Shibe",
//                 category: "Cute",
//             },
//             {
//                 name: "Ancient India",
//                 category: "Cradle of Civilization",
//             },
//             {
//                 name: "Wasp Crackers",
//                 category: "Food",
//             },
//             {
//                 name: "The Fertile Crescent",
//                 category: "Cradle of Civilization",
//             },
//         ];

//     groupObjects(objects) should
//     return :{
//             cute: [{
//                     name: "Baby Yoda",
//                     category: "cute",
//                 },
//                 {
//                     name: "Shibe",
//                     category: "Cute",
//                 },
//             ],
//             food: [{
//                     name: "Cricket Protein",
//                     category: "food",
//                 },
//                 {
//                     name: "Wasp Crackers",
//                     category: "Food",
//                 },
//             ],
//             "cradle of civilization": [{
//                     name: "Ancient India",
//                     category: "Cradle of Civilization",
//                 },
//                 {
//                     name: "The Fertile Crescent",
//                     category: "Cradle of Civilization",
//                 },
//             ],
//         } *
//         /

function groupObjects(items) {
    // const groupByKey = [];
    // var key = {}
    // return groupByKey.push = (list, key) => list.reduce((hash, obj) => ({...hash, [obj[key]]: (hash[obj[key]] || []).concat(obj) }), {})
    var result = {};
    for (var i = 0; i < items.length; i++) {
        if (result.hasOwnProperty(items[i].category.toLowerCase())) {
            result[items[i].category.toLowerCase()].push(items[i]);
        } else {
            result[items[i].category.toLowerCase()] = [items[i]]
        }
    }
    return result
}
const object = [{
        name: "Baby Yoda",
        category: "cute",
    },
    {
        name: "Cricket Protein",
        category: "food",
    },
    {
        name: "Shibe",
        category: "Cute",
    },
    {
        name: "Ancient India",
        category: "Cradle of Civilization",
    },
    {
        name: "Wasp Crackers",
        category: "Food",
    },
    {
        name: "The Fertile Crescent",
        category: "Cradle of Civilization",
    },
];
console.log(groupObjects(object, "name"))
    //     [9: 11 AM]
    //     /*
    //         Given two strings, return if they are equal when both are typed 
    //         into empty text editors. The '#' character means a backspace character.

//         Assume that both strings only contain lowercase letters and # characters.

//         Note that after backspacing an empty text, the text will continue to be
//         empty.

//         BONUS: Can you do it with O(1) space complexity (i.e., constant. no matter how
//         long the strings are, the amount of extra memory for variables never changes), 
//         and O(n) time complexity?

//         EXAMPLE:
//         let s1 = "a#c" 
//         let t1 = "b" 

//         let s2 = "a##c" 
//         let t2 = "#a#c" 

//         backSpaceStringCompare(s1, t1) should return false, because the output to
//         a text editor for s1 would be "c", while the output for t1 would be "b"

//         backSpaceStringCompare(s2, t2) should return true, because the output to
//         a text editor for both would just be "c"
//     */
function backSpaceStringCompare(str1, str2) {
    var new1 = str1.replace("#", "\b");
    var new2 = str2.replace("#", "\b");
    console.log(str1);
    console.log(str2);
    return new1 == new2;
}
let s1 = "a#c"
let t1 = "b"

let s2 = "a##c"
let t2 = "#a#c"
console.log(backSpaceStringCompare(s2, t2));
///////////////option 2\\\\\\\
function backSpaceCompare(S, T) {
    let sArr = [];
    let tArr = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] === "#") {
            sArr.pop();
        } else {
            sArr.push(S[i]);
        }
        for (let i = 0; i < T.length; i++) {
            if (T[i] === "#") {
                tArr.pop();
            } else {
                tArr.push(T[i]);
            }
        }
        sArr = sArr.join("");
        tArr = tArr.join("");
    }
    return sArr === tArr;
}
let s1 = "a#c"
let t1 = "b"

let s2 = "a##c"
let t2 = "#a#c"
console.log(backSpaceStringCompare(s2, t2));
//////////option3\\\\\\\\\\\

function backSpaceStringCompare(str1, str2) {
    let i = str1.length - 1;
    let j = str2.length - 1;
    let str1SkipCount = 0;
    let str2SkipCount = 0;
    while (i >= 0 || j >= 0) {
        if (str1[i] === "#") {
            str1SkipCount++;
            i--;
        } else if (str1SkipCount > 0 && i >= 0) {
            str1SkipCount--;
            i--;
        } else if (str2[j] === "#") {
            str2SkipCount++;
            j--;
        } else if (str2SkipCount > 0 && j >= 0) {
            str2SkipCount--;
            j--;
        } else if (str1[i] !== str2[j]) {
            return false;
        } else {
            i--;
            j--;
        }
    }
    return true;
}
let s1 = "a#c"
let t1 = "b"

let s2 = "a##c"
let t2 = "#a#c"
console.log(backSpaceStringCompare(s2, t2));