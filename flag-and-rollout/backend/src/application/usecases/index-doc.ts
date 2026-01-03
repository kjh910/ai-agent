import { VectorSearchPort, VectorDocument } from "../ports/vector-search.port";

export class IndexDoc {
  constructor(private readonly vectorSearch: VectorSearchPort) {}

  async execute(document: VectorDocument): Promise<void> {
    await this.vectorSearch.index(document);
  }
}
