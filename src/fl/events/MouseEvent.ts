import FLEvent from './Event';

export default class FLMouseEvent extends FLEvent {
  public static CLICK: string = 'click';
  public static DOUBLE_CLICK: string = 'dblclick ';
  public static MOUSE_DOWN: string = 'mousedown';
  public static MOUSE_UP: string = 'mouseup';
  public static MOUSE_HOLD: string = 'mousehold';
  public static DRAG_START: string = 'dragStart';
  public static DRAG_END: string = 'dragEnd';
  public static MOUSE_MOVE: string = 'mousemove';
  public static DRAG: string = 'drag';
  public mouseX?: number;
  public mouseY?: number;

  constructor(type: string) {
    super(type);
  }
}
