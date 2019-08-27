class ColorPoint extends Point {}
// 上面的继承相当于复制一份

class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y)
    this.color = color
  }

  toString() {
    this.color +　' ' +　super.toString()
  }
}

class ColorPoint extends Point() {
  constructor() {

  }
}

let cp = new ColorPoint()

// 子类必须调用 super 才有 this

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    this.color = color // 无法从父类中继承 ReferenceError
    super(x, y)
    this.color = color //正确，因为调用 super 方法
  }
}
