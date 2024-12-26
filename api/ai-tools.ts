export const fetchAITools = async (query: string, page: number) => {
  const apiURL =
    `https://sitev2.arabcodeacademy.com/wp-json/aca/v1/aitools?page=${page}&page_size=12&search=${query}`;

  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    return { status: "success", data };
  } catch (error) {
    return { status: "error", error };
  }
};
