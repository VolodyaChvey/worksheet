import { url } from "../data";
import Request from "./Request";

export default async function Put({ path, body }) {
  return await Request(
    fetch(url + path, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
  );
}
