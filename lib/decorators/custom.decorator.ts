import {ApiTags} from "@nestjs/swagger";
export const ApiSplitCustom = (customTag:string) => {
    return ApiTags(customTag);
}
