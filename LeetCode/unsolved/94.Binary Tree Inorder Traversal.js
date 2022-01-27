// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Ex
// Input: root = [1,null,2,3]
// Output: [1,3,2]

// 이진트리 순회 공부하기

let res;
const inorderTraversal = (root) => {
  res = [];
  dfs(root);
  return res;
};

const dfs = (node) => {
  if (!node) return;
  dfs(node.left);
  res.push(node.val);
  dfs(node.right);
};
