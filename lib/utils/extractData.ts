export function extractData(data: any, nestedKeys: string[]): any {
  const lastKey = nestedKeys.at(-1);
  let inputClone = structuredClone(data);
  let result: any = {};
  let currentObj = result;

  for (const key of nestedKeys) {
    if (key === lastKey) {
      currentObj[key] = inputClone[key];
    } else {
      currentObj[key] = {};
      currentObj = currentObj[key];
      inputClone = inputClone[key];
    }
  }
  return result;
}
