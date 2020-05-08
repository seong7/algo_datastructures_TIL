# Searching BFS / DFS

우선 Tree 또한 Graph 의 일부라는 점을 인지해야함   
(Tree 는 방향을 가진 Graph 임)   

BFS, DFS 는 시작 node 가 중요하지 않다.   
(tree 와 달리 어느 node 에서 시작하든 전체 graph 순회 가능)

## DFS (Depth First Search)
  깊이 우선 검색
  - Binary Tree 의 inorder, preorder, postorder Search 가 DFS 에 포함된다.
  - 자식 node 의 자식 node 까지 깊이를 우선으로 Search 함 
  - **Stack 으로 구현**
  - stack 대신 **Recursion** 으로 간결하게 구현할 수도 있다.

  [>> binary tree 에서 구현]()

## BFS (Breadth First Search)
  너비 우선 검색
  - 한 node 의 자식 node 전체를 순회한 후 다음 level 로 넘어가는 Search 방식
  - **Queue 로 구현**

  [>> binary tree 에서 구현](./BFS_binaryTree.js)

## Quiz DFS / BFS
상황에 따라 어떤 search 방식이 적합한지 알아두기   
둘 다 괜찮은 상황이라면 이유와 함께 선호하는 방식을 알아두는 것이 중요

1. **찾는 값이 tree 의 root 로부터 그리 멀지 않을 때 :**      
   If you know a solution is not far from the root of the tree:   
   
   **- BFS** 

2. **tree 가 매우 깊고 찾는 값이 희귀할 때 :**   
   If the tree is very deep and solutions are rare:   

   **- BFS (선호)** : 시간 good, 메모리 bad   
   **- DFS** : 시간 bad, 메모리 not bad

3. **tree 가 매우 넓을 때 :**   
   If the tree is very wide:   

   **- DFS (선호)**   
   BFS 는 너무 많은 메모리 소비됨

4. **찾는 값이 흔하지만 tree 의 매우 깊은 곳에 있을 때 :**   
   If solutions are frequent but located deep in the tree:   

   **- DFS** : 더 빨리 찾을 수 있음

5. **두 노드 사이에 연결관계가 있는지 결정할 때 :**   
   Determining whether a path exists between two nodes:

   **- DFS** : DFS 의 주 목적임

6. **가장 단거리 경로를 찾을 때 :**   
   Finding the shortest path:

   **- BFS**