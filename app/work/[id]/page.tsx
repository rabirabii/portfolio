import { WorkDetail } from "@/features/work/components/WorkDetail";
import { CASES, getCaseById } from "@/lib/cases";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return CASES.map((c) => ({ id: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const c = getCaseById(id);

  if (!c) {
    return {
      title: "Case File Not Found",
    };
  }

  const description = `${c.codename}: ${c.mission}. ${c.vector}. Status: ${c.status}.`;

  return {
    title: c.codename,
    description,
    alternates: {
      canonical: `/work/${c.id}`,
    },
    openGraph: {
      title: `${c.codename} — Wahyu Budiman`,
      description,
      url: `/work/${c.id}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${c.codename} — Wahyu Budiman`,
      description,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const c = getCaseById(id);

  if (!c) notFound();

  return <WorkDetail caseStudy={c} />;
}
