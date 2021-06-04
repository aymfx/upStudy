function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

class NodeList {
  constructor(val) {
    this.node = new ListNode(val);
  }
  push(val) {
    let node = this.node;
    while (node.next != null) {
      node = node.next;
    }
    node.next = new ListNode(val);
  }
}

let node = new NodeList(1);

let arr = [2, 3, 4, 5];

for (const iterator of arr) {
  node.push(iterator);
}

console.log(node.node);

var reverseList = function (head) {
  let pre = null;
  let cur = head;
  while (cur != null) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
};

reverseList(node.node);
