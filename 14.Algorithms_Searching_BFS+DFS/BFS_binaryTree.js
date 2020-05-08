class Node {
	constructor(data, left, right) {
		this.data = data;
		this.left = left;
		this.right = right;
		return this;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	setRoot(data) {
		this.root = new Node(data, null, null);
		return this.root;
	}
	getRoot() {
		return this.root;
	}
	insert(data) {
		const newNode = new Node(data, null, null);
		if (this.root === null) {
			this.root = newNode;
		} else {
			let currentNode = this.root;
			while (true) {
				if (data < currentNode.data) {
					// Left
					if (!currentNode.left) {
						// leaf 까지 내려감
						currentNode.left = newNode;
						return this;
					}
					currentNode = currentNode.left;
				}
				if (data > currentNode.data) {
					// Right
					if (!currentNode.right) {
						// leaf 까지 내려감
						currentNode.right = newNode;
						return this;
					}
					currentNode = currentNode.right;
				}
			}
		}
	}
	// /* inorder 순회  left -> root -> right */
	// inorder(node = this.root, list = []) {
	// 	if (!this.root) return "Tree 가 비어있습니다.";
	// 	if (node !== null) {
	// 		this.inorder(node.left, list);
	// 		list.push(node.data);
	// 		this.inorder(node.right, list);
	// 	}
	// 	return list;
	// }
	// /* preorder 순회  root -> left -> right */
	// preorder(node = this.root, list = []) {
	// 	if (!this.root) return "Tree 가 비어있습니다.";
	// 	if (node !== null) {
	// 		list.push(node.data);
	// 		this.preorder(node.left, list);
	// 		this.preorder(node.right, list);
	// 	}
	// 	return list;
	// }
	// /* postorder 순회  left -> right -> root */
	// postorder(node = this.root, list = []) {
	// 	if (!this.root) return "Tree 가 비어있습니다.";
	// 	if (node !== null) {
	// 		this.postorder(node.left, list);
	// 		this.postorder(node.right, list);
	// 		list.push(node.data);
	// 	}
	// 	return list;
	// }
	/* look up (특정 값 찾기) */
	lookup(data) {
		if (!this.root) return false;
		let currentNode = this.root;
		while (currentNode) {
			if (data < currentNode.data) {
				currentNode = currentNode.left;
			} else if (data > currentNode.data) {
				currentNode = currentNode.right;
			} else if (currentNode.data === data) {
				return currentNode;
			}
		}
		return null;
	}
	remove(data) {
		if (!this.root) {
			return false;
		}
		let currentNode = this.root;
		let parentNode = null;
		while (currentNode) {
			if (data < currentNode.data) {
				parentNode = currentNode;
				currentNode = currentNode.left;
			} else if (data > currentNode.data) {
				parentNode = currentNode;
				currentNode = currentNode.right;
			} else if (currentNode.data === data) {
				//We have a match, get to work!

				//Option 1: No right child:
				if (currentNode.right === null) {
					if (parentNode === null) {
						this.root = currentNode.left;
					} else {
						//if parent > current data, make current left child a child of parent
						if (currentNode.data < parentNode.data) {
							parentNode.left = currentNode.left;

							//if parent < current data, make left child a right child of parent
						} else if (currentNode.data > parentNode.data) {
							parentNode.right = currentNode.left;
						}
					}

					//Option 2: Right child which doesnt have a left child
				} else if (currentNode.right.left === null) {
					currentNode.right.left = currentNode.left;
					if (parentNode === null) {
						this.root = currentNode.right;
					} else {
						//if parent > current, make right child of the left the parent
						if (currentNode.data < parentNode.data) {
							parentNode.left = currentNode.right;

							//if parent < current, make right child a right child of the parent
						} else if (currentNode.data > parentNode.data) {
							parentNode.right = currentNode.right;
						}
					}

					//Option 3: Right child that has a left child
				} else {
					//find the Right child's left most child
					let leftmost = currentNode.right.left;
					let leftmostParent = currentNode.right;
					while (leftmost.left !== null) {
						leftmostParent = leftmost;
						leftmost = leftmost.left;
					}

					//Parent's left subtree is now leftmost's right subtree
					leftmostParent.left = leftmost.right;
					leftmost.left = currentNode.left;
					leftmost.right = currentNode.right;

					if (parentNode === null) {
						this.root = leftmost;
					} else {
						if (currentNode.data < parentNode.data) {
							parentNode.left = leftmost;
						} else if (currentNode.data > parentNode.data) {
							parentNode.right = leftmost;
						}
					}
				}
				return true;
			}
		}
	}

	// BFS 구현 (queue 이용)
	breadthFirstSearch(node = this.root) {
		const list = [];
        const queue = [];
		let currentNode = node; // 그래프에서는 꼭 root 일 필요는 없음 (하지만 BST 에서는 전체를 다 순회하려면 root 가 맞는 듯 ?)
		
		queue.push(currentNode);
		
		while(queue.length){
			currentNode = queue.shift();
			// console.log(currentNode);
			if(currentNode.left) queue.push(currentNode.left);
			if(currentNode.right) queue.push(currentNode.right);
			list.push(currentNode.data);
		}
		return list;
	}
	// BFS 구현 (recursion 이용)
	breadthFirstSearch_recursion(queue = [this.root], list = []) {
		if(!queue.length) return list;

		const currentNode = queue.shift();
		list.push(currentNode.data);

		if(currentNode.left) queue.push(currentNode.left);
		if(currentNode.right) queue.push(currentNode.right);
		
		return this.breadthFirstSearch_recursion(queue, list);
	}
	
	// binary tree 에서 DFS 는 inorder, preorder, postorder 순회임 (recursion 이용)

	/* inorder 순회  left -> root -> right */
	inorder(node = this.root, list = []) {
		if (!this.root) return "Tree 가 비어있습니다.";
		if (node !== null) {
			this.inorder(node.left, list);
			list.push(node.data);
			this.inorder(node.right, list);
		}
		return list;
	}
	/* preorder 순회  root -> left -> right */
	preorder(node = this.root, list = []) {
		if (!this.root) return "Tree 가 비어있습니다.";
		if (node !== null) {
			list.push(node.data);
			this.preorder(node.left, list);
			this.preorder(node.right, list);
		}
		return list;
	}
	/* postorder 순회  left -> right -> root */
	postorder(node = this.root, list = []) {
		if (!this.root) return "Tree 가 비어있습니다.";
		if (node !== null) {
			this.postorder(node.left, list);
			this.postorder(node.right, list);
			list.push(node.data);
		}
		return list;
	}
}

const myTree = new BinarySearchTree();
console.log(myTree.setRoot(10));
console.log(myTree.getRoot());
console.log(myTree.insert(5));
console.log(myTree.insert(15));
console.log(myTree.remove(15));
console.log(myTree.insert(8));
console.log(myTree.insert(3));
console.log(myTree.insert(12));
console.log(myTree.insert(17));
// console.log(JSON.stringify(myTree.insert(17)));
console.log(myTree.lookup(5));

console.log("BFS / DFS 부분 ")
/* BFS */
console.log(myTree.breadthFirstSearch());
console.log(myTree.breadthFirstSearch_recursion());
/* DFS */
console.log(myTree.inorder());
console.log(myTree.preorder());
console.log(myTree.postorder());