import {
  VectorSearchPort,
  VectorDocument,
  SimilarityResult
} from "../../application/ports/vector-search.port";

export class InMemoryVectorSearch implements VectorSearchPort {
  private documents: VectorDocument[] = [];

  async index(document: VectorDocument): Promise<void> {
    this.documents.push(document);
  }

  async searchSimilar(query: string, limit: number): Promise<SimilarityResult[]> {
    const results = this.documents.map((doc) => ({
      id: doc.id,
      content: doc.content,
      score: doc.content.includes(query) ? 0.9 : 0.6
    }));

    return results.slice(0, limit);
  }
}
