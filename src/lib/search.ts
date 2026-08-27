import { cardiovascularAnatomy } from "@/data/cardiovascular-anatomy";
import { cardiovascularDiseases } from "@/data/cardiovascular-diseases";
import { emergencyNursingTopics } from "@/data/emergency-nursing-topics";
import { epTopics } from "@/data/ep-topics";
import { medicalTerms } from "@/data/medical-terms";
import { medications } from "@/data/medications";
import { nursingTopics } from "@/data/nursing-topics";
import { procedures } from "@/data/procedures";
import { testInterpretations } from "@/data/test-interpretations";
import type { ArticleStep, KnowledgeArticle } from "@/types/knowledge-article";

function stepToSearchText(step: string | ArticleStep): string {
  if (typeof step === "string") return step;
  return joinParts([
    step.text,
    step.image?.alt,
    step.image?.caption,
  ]);
}
import type { MedicalTerm } from "@/types/medical-term";
import type { SearchItem, SearchResult } from "@/types/search-item";

type IndexedItem = SearchItem & {
  searchText: string;
};

function normalize(text: string): string {
  return text.toLowerCase().trim();
}

function joinParts(parts: Array<string | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

function articleToSearchItem(
  article: KnowledgeArticle,
  category: string,
  categoryLabel: string,
  basePath: string,
): IndexedItem {
  const searchText = normalize(
    joinParts([
      article.title,
      article.englishName,
      article.koreanName,
      article.summary,
      article.summaryEn,
      ...article.definition,
      ...(article.images ?? []).map((image) => joinParts([image.alt, image.caption])),
      ...(article.videos ?? []).flatMap((video) => [
        video.title,
        video.caption,
      ]),
      ...(article.measurementSteps ?? []).map(stepToSearchText),
      article.clinicalUse,
      ...(article.nursingCare?.pre ?? []),
      ...(article.nursingCare?.post ?? []),
      ...(article.tables ?? []).flatMap((table) => [
        table.title,
        table.subtitle,
        ...table.columns,
        ...table.rows.flat(),
      ]),
      ...article.keyPoints,
      ...(article.relatedItems ?? []),
      ...article.tags,
    ]),
  );

  return {
    slug: article.slug,
    title: article.title,
    subtitle: joinParts([article.englishName, article.koreanName]),
    summary: article.summary,
    category,
    categoryLabel,
    href: `${basePath}/${article.slug}`,
    tags: article.tags,
    searchText,
  };
}

function medicalTermToSearchItem(term: MedicalTerm): IndexedItem {
  const searchText = normalize(
    joinParts([
      term.acronym,
      term.fullName,
      term.koreanName,
      term.summary,
      term.summaryEn,
      ...term.definition,
      ...(term.measurementSteps ?? []),
      term.clinicalUse,
      ...term.keyPoints,
      ...(term.relatedTerms ?? []),
      ...term.tags,
    ]),
  );

  return {
    slug: term.slug,
    title: term.acronym,
    subtitle: joinParts([term.fullName, term.koreanName]),
    summary: term.summary,
    category: "medical-terms",
    categoryLabel: "의학용어",
    href: `/medical-terms/${term.slug}`,
    tags: term.tags,
    searchText,
  };
}

function buildSearchIndex(): IndexedItem[] {
  return [
    ...medicalTerms.map(medicalTermToSearchItem),
    ...cardiovascularDiseases.map((item) =>
      articleToSearchItem(
        item,
        "cardiovascular-diseases",
        "심혈관 질환",
        "/cardiovascular-diseases",
      ),
    ),
    ...testInterpretations.map((item) =>
      articleToSearchItem(
        item,
        "test-interpretations",
        "검사 결과 해석",
        "/test-interpretations",
      ),
    ),
    ...procedures.map((item) =>
      articleToSearchItem(item, "procedures", "시술 절차", "/procedures"),
    ),
    ...medications.map((item) =>
      articleToSearchItem(item, "medications", "약물", "/medications"),
    ),
    ...epTopics.map((item) =>
      articleToSearchItem(item, "ep", "EP", "/ep"),
    ),
    ...cardiovascularAnatomy.map((item) =>
      articleToSearchItem(
        item,
        "cardiovascular-anatomy",
        "심혈관 해부생리학",
        "/cardiovascular-anatomy",
      ),
    ),
    ...nursingTopics.map((item) =>
      articleToSearchItem(item, "nursing", "간호", "/nursing"),
    ),
    ...emergencyNursingTopics.map((item) =>
      articleToSearchItem(
        item,
        "emergency-nursing",
        "응급간호",
        "/emergency-nursing",
      ),
    ),
  ];
}

const searchIndex = buildSearchIndex();

function scoreItem(item: IndexedItem, tokens: string[]): number {
  let score = 0;

  const title = normalize(item.title);
  const subtitle = normalize(item.subtitle ?? "");
  const summary = normalize(item.summary);
  const tags = item.tags.map(normalize);

  for (const token of tokens) {
    if (title.includes(token)) score += 12;
    if (subtitle.includes(token)) score += 8;
    if (summary.includes(token)) score += 5;
    if (tags.some((tag) => tag.includes(token))) score += 4;
    if (item.searchText.includes(token)) score += 1;
  }

  return score;
}

export function searchItems(query: string): SearchResult[] {
  const trimmed = query.trim();
  if (!trimmed) return [];

  const tokens = normalize(trimmed)
    .split(/\s+/)
    .filter(Boolean);

  if (tokens.length === 0) return [];

  return searchIndex
    .map((item) => ({
      slug: item.slug,
      title: item.title,
      subtitle: item.subtitle,
      summary: item.summary,
      category: item.category,
      categoryLabel: item.categoryLabel,
      href: item.href,
      tags: item.tags,
      score: scoreItem(item, tokens),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);
}

export function getAllSearchItems(): SearchItem[] {
  return searchIndex.map(({ searchText: _searchText, ...item }) => item);
}
