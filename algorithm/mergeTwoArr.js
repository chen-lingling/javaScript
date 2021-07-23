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


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组
var merge = function(nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m, ...nums2);
  nums1.sort((a, b) => a - b);
  return nums1
};
let nums1 = [1, 2, 3, 0, 0, 0]
let m = 3
let nums2 = [2, 5, 6]
let n = 3
console.log(merge(nums1, m, nums2, n))
