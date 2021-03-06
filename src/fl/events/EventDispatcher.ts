import IFLEventDispatcher from './IEventDispatcher';
import FLEvent from './Event';

type Listener = (event: FLEvent) => void;

export default class FLEventDispatcher implements IFLEventDispatcher {
  public listeners: { [key: string]: Listener[] } = {};
  constructor() {}

  public addEventListener(type: string, callback: Listener) {
    if (!this.listeners[type]) this.listeners[type] = [];
    this.listeners[type].push(callback);
  }

  public removeEventListener(type: string, callback: Listener) {
    for (let i in this.listeners[type]) {
      var item = this.listeners[type][i];
      if (item === callback) {
        this.listeners[type].splice(+i, 1);
      }
    }
  }

  public dispatchEvent(event: FLEvent) {
    for (let i in this.listeners[event.type!]) {
      event.target = this;
      this.listeners[event.type!][+i].apply(this, [event]);
    }
  }
}
