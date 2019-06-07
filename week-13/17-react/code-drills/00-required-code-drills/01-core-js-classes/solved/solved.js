// 1. Binary Search Tree Constructor
var BST = function (root) {
  this.root = root
  this.insert = function (node) {
    var insert = node
    node = this.root
    while (node) {
      if (node.left && insert.data < node.data) {
        node = node.left
      } else if (node.right && insert.data > node.data) {
        node = node.right
      } else if (!node.left && insert.data < node.data) {
        node.left = insert
        node = null
      } else if (!node.right && insert.data > node.data) {
        node.right = insert
        node = null
      }
    }
  }

  this.search = function (node) {
    var find = node
    node = this.root
    while (node) {
      if (find === node.data) {
        return node
      } else if (find < node.data) {
        node = node.left
      } else if (find > node.data) {
        node = node.right
      }
    }
    if (!node) {
      return null
    }
  }
}

// =============== YOUR WORK HERE =============

class BST {
  constructor(root) {
    this.root = root
  }

  insert(node) {
    let insert = node
    node = this.root
    while (node) {
      if (node.left && insert.data < node.data) {
        node = node.left
      } else if (node.right && insert.data > node.data) {
        node = node.right
      } else if (!node.left && insert.data < node.data) {
        node.left = insert
        node = null
      } else if (!node.right && insert.data > node.data) {
        node.right = insert
        node = null
      }
    }
  }
}

// ============= END WORK =============



// 2. Queue Constructor
var Queue = function (data = []) {
  this.data = data
  this.add = function (record) {
    this.data.push(record)
  }
  this.remove = function () {
    return this.data.shift()
  }
  this.peek = function () {
    return this.data[0]
  }
}

// =============== YOUR WORK HERE =============


class Queue {
  constructor(data = []) {
    this.data = data
  }
  add(record) {
    this.data.push(record)
  }
  remove() {
    return this.data.shift()
  }
  peek() {
    return this.data[0]
  }
}

// ============= END WORK =============



// 3. Stack Constructor
var Stack = function (data = []) {
  this.data = data
  this.add = function (record) {
    this.data.push(record)
  }
  this.remove = function () {
    return this.data.pop()
  }
  this.peek = function () {
    return this.data[data.length - 1]
  }
}


// =============== YOUR WORK HERE =============

class Stack {
  constructor(data = []) {
    this.data = data
  }
  add(record) {
    this.data.push(record)
  }
  remove() {
    return this.data.pop()
  }
  peek() {
    return this.data[data.length - 1]
  }
}

// ============= END WORK =============


// 4. Node Constructor
var Node = function (data) {
  this.data = data
  this.children = []
}

// =============== YOUR WORK HERE =============

class Node {
  constructor(data) {
    this.data = data
    this.children = []
  }
}

// ============= END WORK =============