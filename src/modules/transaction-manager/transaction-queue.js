import _ from "lodash";

class taskUnit {
  constructor() {
    this.type;
    this.data = new Object();
    this.rowidx;
  }
}

class TransactionQueue {
  constructor() {
    this.queue = new Array();
    this.state = new Array();
  }

  queueClear() {
    while (this.queue.length <= 0) this.queue.pop();
  }

  pushTask(task = { type: "", rowidx: "", data: {} }) {
    try {
      if (task.type == "insert") this.insertRow(task.rowidx);
      this.queue.push([task]);
    } catch (e) {
      throw e;
    }
  }

  pushTaskList(taskList = [{ type: "", rowidx: "", data: {} }]) {
    try {
      let dummy = new Array();

      for (let idx in taskList) {
        let task = taskList[idx];
        if (task.type == "insert") this.insertRow(task.rowidx);
        this.dummy.push([task]);
      }
    } catch (e) {
      throw e;
    }
  }

  pushTaskUnitList(taskUnitList = Array) {
    if (!Array.isArray(taskUnitList)) throw new Error(`"taskUnitList"가 배열이 아닙니다. `);
    if (taskUnitList.length == 0) throw new Error(`"taskUnitList"의 길이가 "0" 입니다. 데이터를 추가하세요 `);
  }

  insertRow() {
    // 입력 되는 대상 rowidx 이상의 모든 rowidx에 대해 rowidx += 1
  }

  removeRow() {
    // 입력 되는 대상 rowidx 이상의 모든 rowidx에 대해 rowidx -= 1
  }

  commit() {}

  undo() {}

  redo() {}

  refresh() {
    // 전체 queue 삭제, insert 된 rows에 대해 삭제
  }

  performanceTestFunction(data) {
    return data;
  }
}

export default {
  taskUnit,
  TransactionQueue,
};
