import type { KnowledgeArticle } from "@/types/knowledge-article";

export const medications: KnowledgeArticle[] = [];

export function getMedicationBySlug(slug: string): KnowledgeArticle | undefined {
  return medications.find((item) => item.slug === slug);
}
