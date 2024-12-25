export const getAITools = async () => {
  const apiURL =
    "https://sitev2.arabcodeacademy.com/wp-json/aca/v1/aitools?page=1&page_size=8";

  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    return { status: "success", data };
  } catch (error) {
    return { status: "error", error };
  }
};


export const searchAITools = async (query: string) => {
  const apiURL =
    `https://sitev2.arabcodeacademy.com/wp-json/aca/v1/aitools?page=1&page_size=8&search=${query}`;

  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    return { status: "success", data };
  } catch (error) {
    return { status: "error", error };
  }
};