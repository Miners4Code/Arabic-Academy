import React from "react";
import { AIToolsFetchResponse } from "@/types/ai-tools";
import { ServerPagination } from "@/components/ServerAITools/serverPagination";
import AIToolsList from "@/components/ServerAITools/AIToolsList";

export default async function AIToolsServerPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const query = searchParams["q"] ?? "";
  const page = searchParams["page"] ?? "1";

  const result = await fetch(
    `https://sitev2.arabcodeacademy.com/wp-json/aca/v1/aitools?page=${page}&page_size=12&search=${query}`,
    {
      cache: "no-store",
    },
  );
  const response: AIToolsFetchResponse = await result.json();

  return (
    <>
      <AIToolsList response={response} page={page} />
    </>
  );
}
