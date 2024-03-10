import {ApiTags} from "@nestjs/swagger";
import {INTERNAL} from "../constants";

export const ApiInternal = () => {
    return ApiTags(INTERNAL);
}