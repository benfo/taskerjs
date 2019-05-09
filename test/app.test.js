import Application from "../src/application";
import Router from "../src/router";

const mockTasker = {
  locals: {
    caller1: "profile=enter:battery:low"
  },
  local(varName) {
    return mockTasker.locals[varName];
  },
  flash(msg) {},
  exit: jest.fn(() => {})
};
const mockLogger = {
  info(fn) {}
};

var app;
var router;
beforeEach(() => {
  app = new Application(mockTasker, mockLogger);
  router = new Router(mockLogger);
});

describe("use", () => {
  test("should store a middleware function", () => {
    const fn = (context, next) => {};
    app.use(fn);

    expect(app.middleware).toContain(fn);
  });
});

describe("run", () => {
  test("should call tasker exit", () => {
    app.run();
    expect(mockTasker.exit.mock.calls.length).toBe(1);
  });
  test("should invoke the middleware callback functions", () => {
    const fn1 = jest.fn((context, next) => next());
    const fn2 = jest.fn((context, next) => next());
    const fn3 = jest.fn(context => {});
    router.enter("battery:low", fn3);

    app.use(fn1);
    app.use(fn2);
    app.use(router.routes());
    app.run();

    expect(fn1.mock.calls.length).toBe(1);
    expect(fn2.mock.calls.length).toBe(1);
    expect(fn3.mock.calls.length).toBe(1);
  });

  test("should stop invocation chain when not calling next", () => {
    const fn1 = jest.fn((context, next) => {});
    const fn2 = jest.fn((context, next) => {});

    app.use(fn1);
    app.use(fn2);
    app.run();

    expect(fn1.mock.calls.length).toBe(1);
    expect(fn2.mock.calls.length).toBe(0);
  });
});
