// Bad
doSomething()
  .then(function (result) {
    // Forgot to return promise from inner chain + unnecessary nesting
    doSomethingElse(result).then((newResult) => doThirdThing(newResult));
  })
  .then(() => doFourthThing());

// Good
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then(() => doFourthThing())
  .catch(() => console.log("Err!"));
