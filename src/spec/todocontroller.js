/* mock local storage */
function storageMock() {
    var storage = {};

    return {
      setItem: function(key, value) {
        storage[key] = value || '';
      },
      getItem: function(key) {
        return storage[key] || null;
      },
      removeItem: function(key) {
        delete storage[key];
      },
      get length() {
        return Object.keys(storage).length;
      },
      key: function(i) {
        var keys = Object.keys(storage);
        return keys[i] || null;
      }
    };
}
// mock the localStorage
localStorage = storageMock();

// include todoController
var todoController = require('../tests/todocontroller');

describe("todoController - defined", function() {
  it("to be Defined", function() {
    expect(todoController).toBeDefined();
  });
});

