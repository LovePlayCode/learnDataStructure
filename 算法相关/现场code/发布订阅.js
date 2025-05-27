// please complete the implementation
class EventEmitter {
  map = new Map();
  static id = 0;
  subscribe(eventName, callback) {
    let curId = EventEmitter.id;
    if (this.map.has(eventName)) {
      const val = this.map.get(eventName);
      val.push({
        id: curId,
        callback,
      });
      this.map.set(eventName, val);
    } else {
      this.map.set(eventName, [{ id: curId, callback }]);
    }
    EventEmitter.id++;

    return {
      release: () => {
        const arr = this.map.get(eventName);
        const cur = arr.findIndex((item) => item.id === curId);
        if (cur >= 0) {
          arr.splice(cur, 1);
        }
      },
    };
  }

  emit(eventName, ...args) {
    if (this.map.has(eventName)) {
      const val = this.map.get(eventName);
      val.forEach((item) => {
        if (typeof item === "object" && item !== null) {
          const { callback } = item ?? {};
          if (typeof callback === "function") {
            callback(args);
          }
        }
      });
    }
  }
}
const emitter = new EventEmitter();
const sub1 = emitter.subscribe("event1", () => {
  console.log("sub1");
});
const sub2 = emitter.subscribe("event2", () => {
  console.log("sub2");
});
// same callback could subscribe
// on same event multiple times
const sub3 = emitter.subscribe("event1", () => {
  console.log("sub3");
});
sub1.release();
emitter.emit("event1");
