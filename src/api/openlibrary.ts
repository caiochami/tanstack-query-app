import axios from "axios";

export function search(query: string, pageNumber: number) {
  return axios.get("https://openlibrary.org/search.json", {
    params: {
      q: query,
      pageNumber: pageNumber,
    },
  });
}
