import { Module } from "@nestjs/common";

import { IndexDoc } from "../../../application/usecases/index-doc";
import { SearchSimilar } from "../../../application/usecases/search-similar";
import { InMemoryVectorSearch } from "../../../infrastructure/vector/in-memory-vector-search";
import { SearchController } from "./search.controller";

@Module({
  controllers: [SearchController],
  providers: [
    InMemoryVectorSearch,
    {
      provide: IndexDoc,
      useFactory: (vector: InMemoryVectorSearch) => new IndexDoc(vector),
      inject: [InMemoryVectorSearch]
    },
    {
      provide: SearchSimilar,
      useFactory: (vector: InMemoryVectorSearch) => new SearchSimilar(vector),
      inject: [InMemoryVectorSearch]
    }
  ]
})
export class SearchModule {}
