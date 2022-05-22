import IFLEvent from './IEvent';

export default class FLEvent implements IFLEvent {
  static RESIZE = 'resize';
  static COMPLETE = 'complete';
  static ADDED_TO_STAGE = 'addedToStage';

  private _target?: any;
  public htmlEvent?: Event;

  constructor(public type?: string) {}

  public get target(): any {
    return this._target;
  }

  public set target(value: any) {
    this._target = value;
  }
}
