// TO DO

//import { FLtrace as trace } from './common';

export default class FLColor {
  public static RED: FLColor = new FLColor('#ff0000');
  public static GREEN: FLColor = new FLColor('#00ff00');
  public static BLUE: FLColor = new FLColor('#0000ff');
  public static BLACK: FLColor = new FLColor('#000000');
  public static WHITE: FLColor = new FLColor('#ffffff');
  public static AQUA: FLColor = new FLColor('#00FFFF');
  public static YELLOW: FLColor = new FLColor('#ffff00');
  public static CYAN: FLColor = new FLColor('#00FFFF');
  public static BROWN: FLColor = new FLColor('#a52a2a');
  public static TRANSPARENT: FLColor = new FLColor('#00000000');

  public red: number = 0;
  public green: number = 0;
  public blue: number = 0;
  public alpha: number = 255;

  constructor(color: string | number = 'black') {
    if (typeof color === 'string') {
      color = color.replace('#', '');
      if (color.length === 3) {
        const [r, g, b] = color.split('');
        this.red = this._colorToRGB(r);
        this.green = this._colorToRGB(g);
        this.blue = this._colorToRGB(b);
      } else if (color.length === 4) {
        alert('Is 3 + Alpha');
      } else if (color.length === 6) {
        const [r1, r2, g1, g2, b1, b2] = color.split('');
        this.red = this._colorToRGB(`${r1}${r2}`);
        this.green = this._colorToRGB(`${g1}${g2}`);
        this.blue = this._colorToRGB(`${b1}${b2}`);
      } else if (color.length === 8) {
        const [r1, r2, g1, g2, b1, b2, a1, a2] = color.split('');
        this.red = this._colorToRGB(`${r1}${r2}`);
        this.green = this._colorToRGB(`${g1}${g2}`);
        this.blue = this._colorToRGB(`${b1}${b2}`);
        this.alpha = this._colorToRGB(`${a1}${a2}`);
      }
    } else {
      // TO DO
      //alert('is number');
      this._value = color;
    }
  }

  private _colorToRGB(color: string): number {
    return parseInt(color, 16);
  }

  private _colorToHex(color: number): string {
    const result = color.toString(16);
    return result.length === 1 ? `${result}${result}` : result;
  }

  public toHEX() {
    const [red, green, blue, alpha] = [
      this._colorToHex(this.red),
      this._colorToHex(this.green),
      this._colorToHex(this.blue),
      this._colorToHex(this.alpha),
    ];

    return `#${red}${green}${blue}${alpha}`;
  }

  public toRGB() {}

  public toRGBA() {}

  public toHSL() {}

  public toHSLA() {}
}
