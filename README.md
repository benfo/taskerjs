# taskerjs

A small framework for writing JavaScript tasks for Tasker.

```javascript
import { application, router } from "taskerjs";

router.enter("Power:Changed", context => {
  let batteryLevel = context.tasker.global("BATT");
  context.tasker.flash(`Battery level is ${batteryLevel}`);
});
application.use(router.routes());

application.run();
```

## Installation

Installation is done using the `npm install` command.

Before installing, download and install [Node.js.](https://nodejs.org/en/download/).

Create a directory that will hold your tasker application.

```
$ mkdir mytasks
$ cd mytasks
```

Create a `package.json` file for your application using the `npm init` command.

```
$ npm init -y
```

Install taserjs in the `mytasks` directory and save it to the dependency list.

```
$ npm install benfo/taskerjs#master
```

## Quick Start

The quickest way to get started is to clone the [starter project](https://github.com/benfo/taskerjs-starter).
