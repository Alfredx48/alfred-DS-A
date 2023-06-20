// // 10-- > 5-- > 16


// // let myLinkedList = {
// //   head: {
// //     value: 10,
// //     next: {
// //       value: 5,
// //       next: {
// //         value: 16,
// //         next: null
// //       }
// //     }
// //   }
// // }

// class Node {
// 	constructor(value) {
// 		this.value = value;
// 		this.next = null;
// 	}
// }
// class LinkedList {
// 	constructor(value) {
// 		this.head = {
// 			value: value,
// 			next: null,
// 		};
// 		this.tail = this.head;
// 		this.length = 1;
// 	}
// 	append(value) {
// 		const newNode = new Node(value);
// 		this.tail.next = newNode;
// 		this.tail = newNode;
// 		this.length++;
// 		return this;
// 	}
// 	prepend(value) {
// 		const newNode = new Node(value);
// 		newNode.next = this.head;
// 		this.head = newNode;
// 		this.length++;
// 		return this;
//   }
//   printList() {
//     const array = []
//     let currentNode = this.head
//     while (currentNode !== null) {
//       array.push(currentNode.value);
// 			currentNode = currentNode.next;
//     }
// 		return array;
//   }
//   insert(index, value) {
//     //check params
//     if (index >= this.length) {
//       return this.append(value)
// 		}
// 		if (index === 0) {
// 			this.prepend(value);
// 			return this.printList();
// 		}
//     const newNode = new Node(value)
// 		const leader = this.traverseToIndex(index - 1)
// 		const holdingPointer = leader.next
// 		leader.next = newNode
// 		newNode.next = holdingPointer
// 		this.length++
// 		return this.printList()
// 	}
// 	traverseToIndex(index) {
// 		let counter = 0;
// 		let currentNode = this.head;
// 		while (counter !== index) {
// 			currentNode = currentNode.next;
// 			counter++;
// 		}
// 		return currentNode;
// 	}
// 	remove(index) {
// 		if (index < this.length && index >= this.length) {
// 			return null
// 		}
// 		if (index === 0) {
// 			let prev = this.head.next
// 			this.head = null
// 			this.head = prev
// 			return this.printList();
// 		}
// 		const leader = this.traverseToIndex(index - 1)
// 		const holder = leader.next.next
// 		leader.next = null
// 		leader.next = holder
// 		this.length--;
// 		return this.printList()
// 	}
// // 	remove2(index) {
// // 		const leader = this.traverseToIndex(index - 1)
// // 		const unwantedNode = leader.next
// // 		leader.next = unwantedNode.next;
// // 		this.length--
// // 	}
// }

// const myLinkedList = new LinkedList(8);

// console.log(myLinkedList);
// console.log(myLinkedList.append(16));
// console.log(myLinkedList.prepend(1));
// console.log(myLinkedList.insert(0, 9999));
// console.log(myLinkedList.remove(0));
// // console.log(myLinkedList.remove2(0));
// // console.log(myLinkedList.printList());


