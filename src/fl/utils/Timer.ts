import FLEventDispatcher from '../events/EventDispatcher';
import FLTimerEvent from '../events/TimerEvent';

export default class FLTimer extends FLEventDispatcher {
  private _timer?: number;
  private _currentCount: number = 0;

  constructor(public delay: number, public repeatCount: number = 0) {
    super();
  }

  public start() {
    this._timer = setInterval(() => this._onTimer(), this.delay);
  }

  public get currentCount(): number {
    return this._currentCount;
  }

  private _onTimer() {
    this._currentCount += 1;
    const timerEvent = new FLTimerEvent(FLTimerEvent.TIMER);
    this.dispatchEvent(timerEvent);
    if (this.repeatCount > 0 && this._currentCount === this.repeatCount) {
      const timerEvent = new FLTimerEvent(FLTimerEvent.TIMER_COMPLETE);
      this.dispatchEvent(timerEvent);
      this.stop();
      return;
    }
  }

  public stop() {
    clearInterval(this._timer);
    this._currentCount = 0;
  }
}
