
/** TODO IMPROVE OBJ TYPE */
export function extractRefs(obj: any, refs: string[] = []): string[] {
  if (typeof obj?.$ref === 'string') {
    refs.push(obj.$ref);
  } else if (typeof obj === 'object') {
    for (const key in obj) {
      extractRefs(obj[key], refs);
    }
  }
  return refs;
}
