const boxPrototype = {
  getValue() {
    return this.value;
  },
};

const boxes = [
  { value: 1, __proto__: boxPrototype },
  { value: 2, __proto__: boxPrototype },
  { value: 3, __proto__: boxPrototype },
];

class A {}

class B extends A {}

class C extends B {}

function getPrototypeChain(obj) {
  if (obj == null) return [];

  let prototype = Object.getPrototypeOf(obj);
  let rslt = [prototype];

  return rslt.concat(getPrototypeChain(prototype));
}
