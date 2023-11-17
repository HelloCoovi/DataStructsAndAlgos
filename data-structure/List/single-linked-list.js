class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  /**
   * List의 첫번째에 Node를 넣는 함수
   * - if 노드가 비어있다면(`isEmpty()`) 삽입하는 노드가 head이자 tail이 됨
   * - 비어있지 않다면
   *    - newNode의 next가 현재 head를 바라보게 설정
   *    - newNode를 head로 설정
   */
  insertFirst(data) {
    let newNode = new Node(data, null)

    if (this.isEmpty()) {
      this.head = newNode
      this.tail = newNode
      this.size++
      return
    }

    newNode.next = this.head
    this.head = newNode
    this.size++
  }
  /**
   * List의 마지막에 Node를 넣는 함수
   * - if 노드가 비어있다면(`isEmpty()`) 삽입하는 노드가 head이자 tail이 됨
   * - 비어있지 않다면
   *    - this.tail.next는 null에서 newNode로 연결
   *    - this.tail은 newNode로 설정
   */
  insertLast(data) {
    let newNode = new Node(data, null)

    if (this.isEmpty()) {
      this.head = newNode
      this.tail = newNode
      this.size++
      return
    }

    this.tail.next = newNode
    this.tail = newNode
    this.size++
  }
  /**
   * List의 중간에 Node를 삽입하는 함수
   * - if 노드가 비어있다면(`isEmpty()`) 삽입하는 노드가 head이자 tail이 됨
   * - index값이 1이라면 `insertFirst()` 실행
   * - 비어있지 않다면
   *    - head부터 시작해서 next를 타고 지정한 idx의 앞 까지 이동
   *    - newNode.next를 cur.next로 설정하고
   *    - cur.next는 newNode로 설정
   */
  insertAt(idx, data) {
    let newNode = new Node(data, null)

    if (this.isEmpty()) {
      this.head = newNode
      this.tail = newNode
      this.size++
      return
    } else if (idx === 1) {
      this.insertFirst(data)
      return
    }

    let cur = this.head
    let count = 1

    while (cur != null) {
      if (count + 1 === idx) {
        break
      }

      cur = cur.next
      count++
    }

    newNode.next = cur.next
    cur.next = newNode
    this.size++
  }

  removeFirst() { }
  removeLast() { }
  remove() { }

  search() { }
  print() {
    let cur = this.head

    console.log(`\n ==== List의 크기: ${this.getSize()} ====`)
    while (cur !== null) {
      console.log(cur.data)
      cur = cur.next
    }
  }
  getSize() {
    return this.size
  }

  isEmpty() {
    return !this.size
  }
}

const linkedList = new LinkedList()

linkedList.insertFirst("화")
linkedList.print()
linkedList.insertFirst("월")
linkedList.print()

linkedList.insertLast("금")
linkedList.print()

linkedList.insertAt(3, "목")
linkedList.print()
linkedList.insertAt(3, "수")
linkedList.print()

console.log(linkedList.head.next.next.next)