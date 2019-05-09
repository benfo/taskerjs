import Router from "../src/router";

const mockLogger = {
  info(fn) {}
};
const router = new Router(mockLogger);

router.enter("battery:low", (context, next) => {
  next();
});
router.exit("battery:low", (context, next) => {
  next();
});

test("locates a route", () => {
  let mw = router.find({
    caller: { type: "profile", name: "enter", subCallerName: "battery:low" }
  });

  expect(mw).toBeDefined();
});

test("only handles profiles", () => {
  let mw = router.find({
    caller: { type: "task", name: "task name" }
  });

  expect(mw).toBeUndefined();
});

test("invokes a route when found", () => {
  let mw = router.routes();
  let next = jest.fn(() => {});

  let context = {
    caller: { type: "profile", name: "enter", subCallerName: "battery:low" }
  };

  mw(context, next);
  expect(next.mock.calls.length).toBe(1);
});
