import { type SchemaTypeDefinition } from "sanity";

import { workType } from "./schemas/work-schema";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [workType],
};
