import FLColor from '../Color';
import FLDisplayObject from '../DisplayObject';

export default class FLButton extends FLDisplayObject {
  constructor() {
    super();
    this.width = 100;
    this.height = 32;

    this._setStyles();
    this.label = 'Label';
    this.buttonMode = true;
  }

  private _setStyles() {
    this._htmlElement.classList.add('__FlashAPI-border-style__');
    this.setCSS('font-weight', 'bold');
    this.backgroundColor = FLColor.WHITE;
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
