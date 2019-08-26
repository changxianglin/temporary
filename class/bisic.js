function Point (x, y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function() {
  return '(' + this.x + ', ' this.y + ')'
}


// class

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  toString() {
    return '(' +　this.x +　', ' +　this.y + ')'
  }
}

class Foo() {
  constructor() {
    return Object.create(null)
  }
}

new Foo()

// 错误
var point = Point()

// 正确
var point = new Point()
