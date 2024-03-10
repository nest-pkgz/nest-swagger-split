import {OpenAPIObject} from "@nestjs/swagger";
import {extractData} from "./extractData";
import merge from "lodash.merge";
import {extractRefs} from "./extractRefs";

export function clearComponents(input: OpenAPIObject): void {
  const refsInput = extractRefs(input.paths)
  let newComponents = {};
  refsInput.forEach((ref) => {
    const refArray = ref.split('/');
    refArray.shift();
    const data = extractData(input, refArray);
    newComponents = merge(data, newComponents);
  });
  input = {...input, ...newComponents};
}
