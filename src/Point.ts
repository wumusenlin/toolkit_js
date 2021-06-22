import { pointAdd, pointSub } from "./internal/coordHelper";

export class Point {
  x: number = 0;
  y: number = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  sub(p: Point) {
    const { x, y } = pointSub(this, p);
    this.x = x;
    this.y = y;
    return this;
  }

  add(p: Point) {
    const { x, y } = pointAdd(this, p);
    this.x = x;
    this.y = y;
    return this;
  }
}
