import FLColor from '../Color';
import FLDisplayObject from '../display/DisplayObject';

export default class FLButton extends FLDisplayObject {
  constructor() {
    super();
    this.width = 100;
    this.height = 32;

    this._setStyles();
    this.label = 'Label';
    this.buttonMode = true;
    this.active = false;
  }
  private _active: boolean = false;

  public set active(value: boolean) {
    this._active = value;
    if (this._active) {
      this._htmlElement.classList.add('__Fl-Button-active__');
    } else {
      this._htmlElement.classList.remove('__Fl-Button-active__');
    }
  }

  public get active() {
    return this._active;
  }

  private _setStyles() {
    //this.backgroundColor = FLColor.WHITE;
    this._htmlElement.classList.add('__Fl-Button__');
    this._htmlElement.classList.add('__Fl-Button-border__');
    this.setCSS('font-weight', 'bold');

    // TO DO
    // Button states: UP, OVER, HITTEST?, DOWN
  }

  public set label(value: string) {
    this._htmlElement.innerText = value;
  }

  public get label(): string {
    return this._htmlElement.innerText;
  }

  protected htmlElement() {
    return 'button';
  }
}
