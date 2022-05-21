import FLEventDispatcher from "../EventDispatcher"

export default class FLEvent {
  static RESIZE = 'resize'
  static COMPLETE = 'complete'
  static ADDED_TO_STAGE = "addedToStage"

  public type?: string
  public target?: FLEventDispatcher
  public htmlEvent?: Event
  
  constructor(type: string) {
    this.type = type

  }
}
