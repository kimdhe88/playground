class Area {
  constructor() {
    this.initialize();
  }

  initialize() {
    this.point = { begin: { rowidx: 0, colidx: 0 }, end: { rowidx: 0, colidx: 0 } };
    this.controlPoint = { rowidx: 0, colidx: 0 };
    this.isActivated = false;
  }

  setControlPoint(rowidx, colidx) {
    this.isActivated = true;
    this.controlPoint = { rowidx, colidx };
  }

  min(arg1, arg2) {
    return arg1 < arg2 ? arg1 : arg2;
  }

  max(arg1, arg2) {
    return arg1 < arg2 ? arg2 : arg1;
  }

  setNowPoint(rowidx, colidx) {
    // let newPoint = { begin: { rowidx: 0, colidx: 0 }, end: { rowidx: 0, colidx: 0 } };

    this.point.begin.rowidx = this.min(this.controlPoint.rowidx, rowidx);
    this.point.begin.colidx = this.min(this.controlPoint.colidx, colidx);
    this.point.end.rowidx = this.max(this.controlPoint.rowidx, rowidx);
    this.point.end.colidx = this.max(this.controlPoint.colidx, colidx);

    // this.point = newPoint;
  }

  isIncluded(rowidx, colidx) {
    let isRowIncluded = this.point.begin.rowidx > rowidx ? false : this.point.end.rowidx < rowidx ? false : true;
    let isColumnIncluded = this.point.begin.colidx > colidx ? false : this.point.end.colidx < colidx ? false : true;
    if (isRowIncluded && isColumnIncluded) return true;
    else return false;
  }

  getArea() {
    if (this.isActivated) return this.point;
    return 0;
  }

  getControlPoint() {
    return this.controlPoint;
  }

  isActive() {
    return this.isActivated;
  }
}

export default class SelectionAreaManager {
  constructor() {
    this.area = new Area();
    this.areaList = new Array();
  }

  clear() {
    this.area.initialize();
    while (this.areaList) this.areaList.pop();
  }

  isSelected(rowidx, colidx) {
    if (this.area.isIncluded(rowidx, colidx)) return true;
    for (let idx in this.areaList) if (this.areaList[idx].isIncluded(rowidx, colidx)) return true;
    return false;
  }

  start(rowidx, colidx) {
    this.area.setControlPoint(rowidx, colidx);
  }

  tracking(rowidx, colidx) {
    this.area.setNowPoint(rowidx, colidx);
  }

  end() {
    this.areaList.push(this.area);
    this.area = new Area();
  }

  getEditPoint() {
    this.area.getControlPoint();
  }

  //   test function
  drawAreas() {
    console.log(this.area.getArea());

    for (let idx in this.areaList) {
      console.log(`${idx} index array`);
      console.log(this.areaList[idx].getArea());
    }
  }
}
