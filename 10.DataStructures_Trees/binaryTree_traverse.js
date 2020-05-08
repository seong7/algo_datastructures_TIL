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
	/* inorder 순회  left -> root -> right */
	inorder(node = this.root) {
        if (!this.root) return "Tree 가 비어있습니다.";
		if (node !== null) {
			this.inorder(node.left);
			console.log(node.data);
			this.inorder(node.right);
		}
	}
	/* preorder 순회  root -> left -> right */
	preorder(node = this.root) {
		if (!this.root) return "Tree 가 비어있습니다.";
		if (node !== null) {
            console.log(node.data);
			this.preorder(node.left);
			this.preorder(node.right);
		}
	}
	/* postorder 순회  left -> right -> root */
	postorder(node = this.root) {
        if (!this.root) return "Tree 가 비어있습니다.";
		if (node !== null) {
			this.postorder(node.left);
			this.postorder(node.right);
			console.log(node.data);
		}
    }
    /* look up (특정 값 찾기) */
    lookup(data) {
        if(!this.root) return false;
        let currentNode = this.root;
        while(currentNode) {
            if(data < currentNode.data){
                currentNode = currentNode.left;
            } else if(data > currentNode.data) {
                currentNode = currentNode.right;
            } else if( currentNode.data === data) {
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
        while(currentNode){
          if(data < currentNode.data){
            parentNode = currentNode;
            currentNode = currentNode.left;
          } else if(data > currentNode.data){
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
                if(currentNode.data < parentNode.data) {
                  parentNode.left = currentNode.left;
                
                //if parent < current data, make left child a right child of parent
                } else if(currentNode.data > parentNode.data) {
                  parentNode.right = currentNode.left;
                }
              }
            
            //Option 2: Right child which doesnt have a left child
            } else if (currentNode.right.left === null) {
              currentNode.right.left = currentNode.left;
              if(parentNode === null) {
                this.root = currentNode.right;
              } else {
                
                //if parent > current, make right child of the left the parent
                if(currentNode.data < parentNode.data) {
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
              while(leftmost.left !== null) {
                leftmostParent = leftmost;
                leftmost = leftmost.left;
              }
              
              //Parent's left subtree is now leftmost's right subtree
              leftmostParent.left = leftmost.right;
              leftmost.left = currentNode.left;
              leftmost.right = currentNode.right;
    
              if(parentNode === null) {
                this.root = leftmost;
              } else {
                if(currentNode.data < parentNode.data) {
                  parentNode.left = leftmost;
                } else if(currentNode.data > parentNode.data) {
                  parentNode.right = leftmost;
                }
              }
            }
          return true;
          }
        }
      }
}

const myTree = new BinarySearchTree();
console.log(myTree.setRoot(10));
console.log(myTree.getRoot());
console.log(myTree.insert(5));
console.log(myTree.insert(15));
console.log(myTree.insert(8));
console.log(myTree.insert(3));
console.log(myTree.insert(12));
console.log(myTree.insert(17));
// console.log(JSON.stringify(myTree.insert(17)));
console.log(myTree.lookup(5));
// console.log(myTree.inorder());
// console.log(myTree.preorder());
// console.log(myTree.postorder());
