export type ArticleImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type NursingCare = {
  pre: string[];
  post: string[];
};

export type KnowledgeArticle = {
  slug: string;
  title: string;
  englishName?: string;
  koreanName?: string;
  summary: string;
  summaryEn: string;
  definition: string[];
  images?: ArticleImage[];
  imagesTitle?: string;
  imagesSubtitle?: string;
  measurementSteps?: string[];
  stepsTitle?: string;
  stepsSubtitle?: string;
  clinicalUse: string;
  nursingCare?: NursingCare;
  keyPoints: string[];
  relatedItems?: string[];
  tags: string[];
};
