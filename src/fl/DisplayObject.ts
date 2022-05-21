import FLEventDispatcher from './EventDispatcher';
import FLAlign from './Align';
import FLEvent from './Event';
import FLMouseEvent from './MouseEvent';

export default class FLDisplayObject extends FLEventDispatcher {
  private _x: number = 0;
  private _y: number = 0;
  private _width: number = 0;
  private _height: number = 0;
  private _children: FLDisplayObject[] = [];
  private _parent?: FLDisplayObject;
  private _verticalAlign: string = FLAlign.NONE;
  private _horizontalAlign: string = FLAlign.NONE;
  private _deferredAlign: boolean = false;
  private _align: string = FLAlign.NONE;
  protected _htmlElement: HTMLElement;

  constructor() {
    super();
    this._htmlElement = document.createElement(this.htmlElement());
    this._htmlElement.classList.add('__FLashAPI-reset-styles__');
    this._addEventListeners();
  }

  _handleAlign() {
    if (
      this._verticalAlign === FLAlign.CENTER ||
      this._align === FLAlign.CENTER
    ) {
      this.y = (this.parent!.height - this.height) / 2;
    } else if (this._verticalAlign === FLAlign.TOP) {
      this.y = 0;
    } else if (this._verticalAlign === FLAlign.BOTTOM) {
      this.y = this.parent!.height - this.height;
    }

    if (
      this._horizontalAlign === FLAlign.CENTER ||
      this._align === FLAlign.CENTER
    ) {
      this.x = (this.parent!.width - this.width) / 2;
    } else if (this._horizontalAlign === FLAlign.LEFT) {
      this.x = 0;
    } else if (this._horizontalAlign === FLAlign.RIGHT) {
      this.x = this.parent!.width - this.width;
    }
  }

  public set verticalAlign(value: string) {
    this._verticalAlign = value;
    if (!this.parent) {
      this._deferredAlign = true;
      return;
    }
    this._handleAlign();
  }

  public set horizontalAlign(value: string) {
    this._horizontalAlign = value;
    if (!this.parent) {
      this._deferredAlign = true;
      return;
    }
    this._handleAlign();
  }

  public set align(value: string) {
    this._align = value;
    if (!this.parent) {
      this._deferredAlign = true;
      return;
    }
    this._handleAlign();
  }

  private htmlElement(): string {
    return 'div';
  }

  public addChild(child: FLDisplayObject): void {
    child.parent = this;
    if (child._deferredAlign) {
      child._handleAlign();
      child._deferredAlign = false;
    }
    this._children.push(child);
    this._htmlElement.appendChild(child._htmlElement);
    const event = new FLEvent(FLEvent.ADDED_TO_STAGE);
    child.dispatchEvent(event);
  }

  public set parent(value) {
    this._parent = value;
  }

  public get numChildren() {
    return this._children.length;
  }

  public get parent() {
    return this._parent;
  }

  private _addEventListeners() {
    this._htmlElement.addEventListener('click', (event) => {
      const mouseEvent = new FLMouseEvent(FLMouseEvent.CLICK);
      mouseEvent.htmlEvent = event;
      mouseEvent.mouseX = event.clientX;
      mouseEvent.mouseY = event.clientY;
      this.dispatchEvent(mouseEvent);
    });

    this._htmlElement.addEventListener('resize', (event) => {
      const flEvent = new FLEvent(FLEvent.RESIZE);
      flEvent.htmlEvent = event;
      this.dispatchEvent(flEvent);
    });
  }

  public set backgroundColor(value: string) {
    this.setCSS('background-color', value);
  }

  public get backgroundColor(): string {
    return this.getCSS('background-color');
  }

  public get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }

  set x(value) {
    this._x = value;
    this._htmlElement.style.left = `${this._x}px`;
  }

  set y(value) {
    this._y = value;
    this._htmlElement.style.top = `${this._y}px`;
  }

  set width(value) {
    this._width = value;
    this._htmlElement.style.width = `${this._width}px`;
  }

  set height(value) {
    this._height = value;
    this._htmlElement.style.height = `${this._height}px`;
  }

  public setCSS(prop: string, value: any): void {
    this._htmlElement.style.setProperty(prop, value);
  }

  public getCSS(prop: string): any {
    return this._htmlElement.style.getPropertyValue(prop);
  }
}
