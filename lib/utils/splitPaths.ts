import {OpenAPIObject} from "@nestjs/swagger";

export function splitPaths(input:OpenAPIObject, options: { splitTag: string }):{withoutTagInput: OpenAPIObject, withTagSplit: OpenAPIObject} {
  let withoutTagInput = structuredClone(input);
  let withTagSplit = structuredClone(input);

  const {paths} = withoutTagInput;
  for (const [path, pathValue] of Object.entries(paths)) {
    for (const value of Object.values(pathValue)) {
      if (value?.tags?.includes(options.splitTag)) {
        delete withoutTagInput.paths[path];
      } else {
        delete withTagSplit.paths[path];
      }
    }
  }

  return {withoutTagInput, withTagSplit};
}
