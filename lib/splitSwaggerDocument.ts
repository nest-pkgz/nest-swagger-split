import {INTERNAL} from "./constants";
import {OpenAPIObject} from "@nestjs/swagger";
import {clearComponents, splitPaths} from "./utils";

export const splitSwaggerDocument = (input: OpenAPIObject, options?: { splitTag: string }): {
  withoutTagInput: OpenAPIObject,
  withTagSplit: OpenAPIObject
} => {
  const splitTag = options?.splitTag || INTERNAL;
  const {withoutTagInput, withTagSplit} = splitPaths(input, {splitTag});
  if (withoutTagInput?.components) {
    clearComponents(withoutTagInput);
  }
  if (withTagSplit?.components) {
    clearComponents(withTagSplit);
  }

  return {withoutTagInput, withTagSplit};
}
