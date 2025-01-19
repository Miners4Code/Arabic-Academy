import React from "react";
import { AIToolsFetchResponse } from "@/types/ai-tools";
import AIToolsList from "@/components/ServerAITools/AIToolsList";

// NOTE: In this page we are handling pagination and searching on the server.
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
      <AIToolsList response={response} page={page as string} />
    </>
  );
}
