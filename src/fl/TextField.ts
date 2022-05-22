import FLColor from './Color';
import FLDisplayObject from './DisplayObject';

export default class FLTextField extends FLDisplayObject {
  private _type: 'dynamic' | 'input' = 'dynamic';

  constructor() {
    super();
    (this._htmlElement as HTMLInputElement).setAttribute('type', 'text');
    this.type = this._type;
    this._setStyles();
    this.height = 20;
  }

  public set type(value: 'dynamic' | 'input') {
    this._type = value;
    if (this._type === 'dynamic') {
      this._htmlElement.setAttribute('readonly', 'true');
      this.setCSS('cursor', 'not-allowed');
    } else {
      this._htmlElement.removeAttribute('readonly');
      this.setCSS('cursor', 'text');
    }
  }

  public set placeholder(value: string | null) {
    this._htmlElement.setAttribute('placeholder', <string>value);
  }

  public get placeholder(): string | null {
    return this._htmlElement.getAttribute('placeholder');
  }

  public get type(): 'dynamic' | 'input' {
    return this._type;
  }

  private _setStyles() {
    this._htmlElement.classList.add('__FlashAPI-border-style__');
    this.backgroundColor = FLColor.WHITE;
  }

  set text(value) {
    (this._htmlElement as HTMLInputElement).value = value;
  }

  get text() {
    return (this._htmlElement as HTMLInputElement).value;
  }

  protected htmlElement(): string {
    return 'input';
  }
}
