import FLColor from '../Color';
import FLDisplayObject from './DisplayObject';
//import FLMouseEvent from './MouseEvent';

export default class FLStage extends FLDisplayObject {
  [x: string]: any;
  public static _instance?: FLStage;

  constructor() {
    super();
    if (FLStage._instance) throw new Error('Singleton. Use "Stage.init()".');
  }

  public static init(
    width: number = 800,
    height: number = 600,
    backgroundColor: FLColor = FLColor.BLACK
  ): FLStage {
    let instance: FLStage = this._instance!;
    if (instance === null || instance === undefined) {
      instance = new FLStage();
    }
    instance.width = width;
    instance.height = height;
    instance.backgroundColor = backgroundColor;
    document.body.appendChild(instance!._htmlElement);
    /* document.addEventListener(FLMouseEvent.MOUSE_MOVE, (event: MouseEvent) => {
      const mouseEvent = new FLMouseEvent(FLMouseEvent.MOUSE_MOVE);
      mouseEvent.htmlEvent = event;
      mouseEvent.mouseX = event.clientX;
      mouseEvent.mouseY = event.clientY;
      instance.dispatchEvent(mouseEvent);
    }); */
    return instance;
  }

  get mouseX() {
    return this._mouseX;
  }
  get mouseY() {
    return this._mouseY;
  }
}
