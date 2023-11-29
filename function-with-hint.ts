function add<T extends boolean>(a: number, b: number, chk: T): T extends true ? { help: { a: "number", b: "number" } } : number {
  if (chk) {
    if (a === undefined || b === undefined) {
      return {
        help: {
          a: "number",
          b: "number"
        }
      } as any;
    }
  }
  
  if (typeof a !== "number" || typeof b !== "number") {
    return {
      help: {
        a: "number",
        b: "number"
      }
    } as any;
  }

  return a + b as any;
}

const rq = add(undefined, undefined, true); // { help: { a: "number", b: "number" } }
console.log(rq);

type Data = ReturnType<typeof add>;


console.log('Data:', rq);
