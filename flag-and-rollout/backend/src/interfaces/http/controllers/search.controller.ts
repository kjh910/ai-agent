import { Body, Controller, Post, UsePipes } from "@nestjs/common";

import {
  indexDocRequestSchema,
  searchSimilarRequestSchema,
  searchSimilarResponseSchema
} from "../../../application/dto/search.dto";
import { IndexDoc } from "../../../application/usecases/index-doc";
import { SearchSimilar } from "../../../application/usecases/search-similar";
import { ZodValidationPipe } from "../presenters/zod-validation.pipe";
import { presentWithSchema } from "../presenters/zod-presenter";

@Controller("search")
export class SearchController {
  constructor(
    private readonly indexDoc: IndexDoc,
    private readonly searchSimilar: SearchSimilar
  ) {}

  @Post("index")
  @UsePipes(new ZodValidationPipe(indexDocRequestSchema))
  async index(@Body() body: any) {
    await this.indexDoc.execute(body);
    return { status: "ok" };
  }

  @Post("similar")
  @UsePipes(new ZodValidationPipe(searchSimilarRequestSchema))
  async similar(@Body() body: any) {
    const items = await this.searchSimilar.execute(body.query, body.limit ?? 5);
    return presentWithSchema(searchSimilarResponseSchema, { items });
  }
}
