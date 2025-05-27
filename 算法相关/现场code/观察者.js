class EventEmitter {
  map = new Map();
  constructor() {}

  on(event, listener) {
    if (this.map.has(event)) {
      const val = this.map.get(event);
      val.push(listener);
      this.map.set(event, val);
    } else {
      this.map.set(event, [listener]);
    }
  }

  off(event, listener) {
    if (this.map.has(event)) {
      if (!listener) {
        this.map.delete(event);
        return;
      }
      const arr = this.map.get(event);
      const findIndex = arr.findIndex((item) => item === listener);
      if (findIndex >= 0) {
        this.map.get(event).splice(findIndex, 1);
      }
    }
  }

  emit(event, ...args) {
    if (this.map.has(event)) {
      const arr = this.map.get(event);
      if (Array.isArray(arr) && arr.length) {
        for (const fn of arr) {
          if (typeof fn === "function") {
            fn(args);
          }
        }
      }
    }
  }
}

const emit = new EventEmitter();
emit.on("buy", () => {});
