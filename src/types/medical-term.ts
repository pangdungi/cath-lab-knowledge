export type MedicalTerm = {
  slug: string;
  acronym: string;
  fullName: string;
  koreanName: string;
  summary: string;
  summaryEn: string;
  definition: string[];
  measurementSteps?: string[];
  clinicalUse: string;
  keyPoints: string[];
  relatedTerms?: string[];
  tags: string[];
};
