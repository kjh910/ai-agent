export type VectorDocument = {
  id: string;
  content: string;
  metadata?: Record<string, string>;
};

export type SimilarityResult = {
  id: string;
  content: string;
  score: number;
};

export interface VectorSearchPort {
  index(document: VectorDocument): Promise<void>;
  searchSimilar(query: string, limit: number): Promise<SimilarityResult[]>;
}
