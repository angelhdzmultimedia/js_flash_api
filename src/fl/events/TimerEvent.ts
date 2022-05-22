import FLEvent from './Event';

export default class FLTimerEvent extends FLEvent {
  public static TIMER_COMPLETE: string = 'timerComplete';
  public static TIMER: string = 'timer';

  constructor(type: string) {
    super(type);
  }
}
