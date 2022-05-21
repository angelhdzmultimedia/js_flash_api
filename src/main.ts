import { fl } from './fl';

/* class FLTextField extends FLDisplayObject {
  constructor() {
    super();
    this._htmlElement.type = 'text';
    this.css('border', 'none');
  }

  set text(value) {
    this._htmlElement.value = value;
  }

  get text() {
    return this._htmlElement.value;
  }

  htmlElement() {
    return 'input';
  }
}
 */

/*
*************
    USAGE
*************
*/

fl.stage.backgroundColor = '#eee';

const container = new fl.Sprite();
const red = new fl.Sprite();
red.backgroundColor = 'red';
red.width = red.height = 50;
red.align = fl.Align.CENTER;
container.addChild(red);
container.width = 600;
container.height = 300;
container.backgroundColor = 'aqua';

fl.stage.addChild(container);

container.addEventListener(fl.MouseEvent.CLICK, (event: fl.MouseEvent) => {
  fl.trace(event.mouseX);
});
