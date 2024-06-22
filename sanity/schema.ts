import { type SchemaTypeDefinition } from "sanity";

import { pageType } from "./schemas/page-schema";
import { workType } from "./schemas/work-schema";

import { backgroundCardCollection } from "./schemas/blocks/background-card-collection";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [pageType, workType, backgroundCardCollection],
};
