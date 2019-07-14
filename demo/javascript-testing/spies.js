class Session {
  constructor() {
    this.lastUpdate = Date.now();
  }
  touch() {
    this.lastUpdate = Date.now();
  }
}
// Look for some other way to verify that the function
// was called without altering the outcome

function spyOn(Object, method) {}

const dateSpy = spyOn(Date, 'now');

Date.now();

console.log(dateSpy.called.length > 0);

dateSpy.mockReturnValue(123);
