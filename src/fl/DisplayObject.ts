import FLEventDispatcher from './events/EventDispatcher';
import FLAlign from './Align';
import FLEvent from './events/Event';
import FLMouseEvent from './events/MouseEvent';
import FLColor from './Color';

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
  private _visible: boolean = true;
  private _buttonMode: boolean = false;

  constructor() {
    super();
    this._htmlElement = document.createElement(this.htmlElement());
    this._htmlElement.classList.add('__FlashAPI-default-styles__');
    this._addEventListeners();
  }

  public set buttonMode(value: boolean) {
    this._buttonMode = value;
    this.setCSS('cursor', this._buttonMode ? 'pointer' : 'default');
  }

  public get buttonMode(): boolean {
    return this._buttonMode;
  }

  public get visible(): boolean {
    return this._visible;
  }
  public set visible(value: boolean) {
    this._visible = value;
    this.setCSS('visibility', this._visible ? 'visible' : 'hidden');
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

  protected htmlElement(): string {
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

  public set backgroundColor(value: FLColor) {
    this.setCSS('background-color', value);
  }

  public get backgroundColor(): FLColor {
    return this.getCSS('background-color');
  }

  public get x(): number {
    return this._x;
  }

  public get y(): number {
    return this._y;
  }

  public get width(): number {
    return this._width;
  }

  public get height(): number {
    return this._height;
  }

  public set x(value) {
    this._x = value;
    this.setCSS('transform', `translate(${this._x}px, ${this._y}px)`);
  }

  public set y(value) {
    this._y = value;
    this.setCSS('transform', `translate(${this._x}px, ${this._y}px)`);
  }

  public set width(value) {
    this._width = value;
    this.setCSS('width', `${this._width}px`);
  }

  public set height(value) {
    this._height = value;
    this.setCSS('height', `${this._height}px`);
  }

  public setCSS(prop: any, value: any): void {
    this._htmlElement.style.setProperty(
      prop,
      value instanceof FLColor ? value.toHex() : value
    );
  }

  public getCSS(prop: string): any {
    return this._htmlElement.style.getPropertyValue(prop);
  }
}
