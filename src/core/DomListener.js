import { capitalize } from "@core/utils";

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`no roo`);
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      if (!this[method]) {
        const name = this.name || "";
        throw new Error(`method ${method} is not implemented in ${name}`);
      }
      //тоже самое что и addEventListener
      this[method] = this[method].bind(this);
      this.$root.on(listener, this[method]);
    });
  }

  removeDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      this[method] = this[method].bind(this);
      this.$root.off(listener, this[method]);
    });
  }
}

//input
function getMethodName(eventName) {
  return "on" + capitalize(eventName);
}
