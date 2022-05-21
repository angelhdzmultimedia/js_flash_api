import FLEvent from './Event';

export default class FLMouseEvent extends FLEvent {
  static CLICK = 'click';
  static DOUBLE_CLICK = 'dblclick ';
  static MOUSE_DOWN = 'mousedown';
  static MOUSE_UP = 'mouseup';
  static MOUSE_HOLD = 'mousehold';
  static DRAG_START = 'dragStart';
  static DRAG_END = 'dragEnd';
  static MOUSE_MOVE = 'mousemove';
  static DRAG = 'drag';
  public mouseX?: number;
  public mouseY?: number;

  constructor(type: string) {
    super(type);
  }
}
