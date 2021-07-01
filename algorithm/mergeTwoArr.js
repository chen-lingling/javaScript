// var mergeTwoLists = function(l1, l2) {
//   if(!l1) return l2;
//   if(!l2) return l1;
//   if (l1.val < l2.val) {
//       l1.next = mergeTwoLists(l1.next, l2);
//       return l1;
//   } else {
//       l2.next = mergeTwoLists(l1, l2.next);
//       return l2;
//   }
// };

var mergeTwoLists = function (l1, l2) {
  let result = []
  if (l1.length === 0) return l2;
  if (l2.length === 0) return l1;
  if (l1[0] < l2[0]) {
    let temp = l1.splice(0, 1)
    result = temp.concat(mergeTwoLists(l1, l2)) 
  } else {
    let temp = l2.splice(0, 1)
    result = temp.concat(mergeTwoLists(l1, l2)) 
  }
  return result
};
let s = mergeTwoLists([1, 2, 4, 9,], [1, 3, 4, 5, 6])
console.log(s)