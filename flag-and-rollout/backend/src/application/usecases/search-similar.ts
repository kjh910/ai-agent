import { VectorSearchPort, SimilarityResult } from "../ports/vector-search.port";

export class SearchSimilar {
  constructor(private readonly vectorSearch: VectorSearchPort) {}

  async execute(query: string, limit: number): Promise<SimilarityResult[]> {
    return this.vectorSearch.searchSimilar(query, limit);
  }
}
