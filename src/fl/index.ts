import FLAlign from './Align';
import FLDisplayObject from './display/DisplayObject';
import FLSprite from './display/Sprite';
import FLStage from './display/Stage';
import FLTextField from './text/TextField';
import FLColor from './Color';
import FLButton from './controls/Button';
import {
  FLEvent,
  FLTimerEvent,
  FLEventDispatcher,
  FLMouseEvent,
} from './events';

import { FLalert, FLtrace } from './common';

import { FLTimer } from './utils';

export { FLButton as Button };
export { FLTimerEvent as TimerEvent };
export { FLTimer as Timer };
export { FLColor as Color };
export { FLSprite as Sprite };
export { FLEventDispatcher as EventDispatcher };
export { FLEvent as Event };
export { FLAlign as Align };
export { FLMouseEvent as MouseEvent };
export { FLDisplayObject as DisplayObject };
export { FLStage as Stage };
export { FLTextField as TextField };

export { FLalert as alert };
export { FLtrace as trace };

const FLstage: FLStage = FLStage.init();

export { FLstage as stage };
