import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "src/content/articles");

export interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  featured?: boolean;
  tags?: string[];
  readTime?: string;
}

export interface Article extends ArticleMeta {
  content: string;
}

function getArticleSlugs(): string[] {
  if (!fs.existsSync(articlesDirectory)) return [];
  return fs
    .readdirSync(articlesDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllArticles(): ArticleMeta[] {
  const slugs = getArticleSlugs();
  const articles = slugs
    .map((slug) => {
      const fullPath = path.join(articlesDirectory, `${slug}.md`);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        excerpt: data.excerpt as string,
        featured: data.featured as boolean | undefined,
        tags: data.tags as string[] | undefined,
        readTime: data.readTime as string | undefined,
      };
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  return articles;
}

export function getFeaturedArticles(): ArticleMeta[] {
  return getAllArticles().filter((article) => article.featured);
}

export function getArticleBySlug(slug: string): Article | null {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      excerpt: data.excerpt as string,
      featured: data.featured as boolean | undefined,
      tags: data.tags as string[] | undefined,
      readTime: data.readTime as string | undefined,
      content,
    };
  } catch {
    return null;
  }
}

export function getArticleSlugsForStaticParams(): { slug: string }[] {
  return getArticleSlugs().map((slug) => ({ slug }));
}
