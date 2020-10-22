import { DomListener } from "@core/DomListener";

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || "";
    this.emmiter = options.emmiter;
    this.subscribe = options.subscribe || [];
    this.store = options.store;
    this.unsubscribers = [];

    this.prepare();
  }

  // set our component till init
  prepare() {}

  //возвращает шаблон
  toHTML() {
    return "";
  }

  //tell listeners abourt evevnt
  $emit(event, ...args) {
    this.emmiter.emit(event, ...args);
  }

  //subs event
  $on(event, fn) {
    const unsub = this.emmiter.subscribe(event, fn);
    this.unsubscribers.push(unsub);
  }

  $dispatch(action) {
    this.store.dispatch(action);
  }

  //сюда приходят только изменения по тем полям по которым мы подписались
  storeChanged() {}

  isWatching(key) {
    return this.subscribe.includes(key)
  }

  //init component
  //add dom listeners
  init() {
    this.initDOMListeners();
  }

  //destroy comp
  //clean list
  destroy() {
    this.removeDOMListeners();
    this.unsubscribers.forEach((unsub) => unsub());
    // this.storeSub.unsubscribe()
  }
}
