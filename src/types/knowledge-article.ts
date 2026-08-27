export type ArticleImage = {
  src: string;
  alt: string;
  caption?: string;
};

/** YouTube 참고 영상 */
export type ArticleVideo = {
  youtubeId: string;
  title: string;
  caption?: string;
  sourceUrl?: string;
};

/** 단계별 설명 + 선택 이미지 (시술 절차 등) */
export type ArticleStep = {
  text: string;
  image?: ArticleImage;
};

export type NursingCare = {
  pre: string[];
  post: string[];
};

/** 표 형식 콘텐츠 (간호 참고표 등) */
export type ArticleTable = {
  title?: string;
  subtitle?: string;
  columns: string[];
  rows: string[][];
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
  videos?: ArticleVideo[];
  videosTitle?: string;
  videosSubtitle?: string;
  measurementSteps?: (string | ArticleStep)[];
  stepsTitle?: string;
  stepsSubtitle?: string;
  clinicalUse: string;
  nursingCare?: NursingCare;
  tables?: ArticleTable[];
  keyPoints: string[];
  relatedItems?: string[];
  tags: string[];
};
