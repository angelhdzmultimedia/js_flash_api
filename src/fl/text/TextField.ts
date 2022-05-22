//import FLColor from '../Color';
import FLDisplayObject from '../display/DisplayObject';

export default class FLTextField extends FLDisplayObject {
  private _type: 'dynamic' | 'input' = 'dynamic';

  constructor() {
    super();
    (this._htmlElement as HTMLInputElement).setAttribute('type', 'text');
    this.type = this._type;
    this._setStyles();
  }

  public set type(value: 'dynamic' | 'input') {
    this._type = value;
    if (this._type === 'dynamic') {
      this._htmlElement.setAttribute('readonly', 'true');
      // this.setCSS('cursor', 'not-allowed');
      this._htmlElement.classList.remove('__Fl-TextField-border__');
      //this.backgroundColor = FLColor.TRANSPARENT;
    } else {
      this._htmlElement.removeAttribute('readonly');
      // this.setCSS('cursor', 'text');
      this._htmlElement.classList.add('__Fl-TextField-border__');
      // this.backgroundColor = FLColor.WHITE;
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
    this._htmlElement.classList.add('__Fl-TextField__');
    this.setCSS('padding', '4px');
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
