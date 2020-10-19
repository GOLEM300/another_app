export class Emmiter {
  constructor() {
    this.listeners = {};
  }

  //dispatch, fire, trigger
  //alert listeners if they exist
  //'focus'
  // table.emit('table:select', {a:1})
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false;
    }
    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
    return true;
  }

  //on , listens add new listeners
  //formula.suvscribe('table:select', () => {})
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(fn);
    return () => {
      this.listeners[event] = this.listeners[event].filter(listener => listener !== fn);
    };
  }
}

//Example
// const emitter = new Emmiter()

// emitter.subscribe('vladilen', data => console.log('sub', data))

// emitter.emit('vladilen', 42)

// //async 
// setTimeout(() => {
//     emitter.emit('vl', 'after 2 sec')
// }, 2000)