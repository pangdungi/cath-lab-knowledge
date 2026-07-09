export type SearchItem = {
  slug: string;
  title: string;
  subtitle?: string;
  summary: string;
  category: string;
  categoryLabel: string;
  href: string;
  tags: string[];
};

export type SearchResult = SearchItem & {
  score: number;
};
