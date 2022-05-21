import FLAlign from './Align';
import FLDisplayObject from './DisplayObject';
import FLEvent from './Event';
import FLEventDispatcher from './EventDispatcher';
import FLMouseEvent from './MouseEvent';
import FLSprite from './Sprite';
import FLStage from './Stage';

const stage: FLStage = FLStage.init();

export const fl = {
  Sprite: FLSprite,
  DisplayObject: FLDisplayObject,
  trace(...args: any[]) {
    console.log.apply(this, [...args]);
  },
  MouseEvent: FLMouseEvent,
  Align: FLAlign,
  Event: FLEvent,
  Stage: FLStage,
  EventDispatcher: FLEventDispatcher,
  stage,
};
