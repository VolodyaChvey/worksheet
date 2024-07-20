import { url } from "../data";
import Request from "./Request";

export default async function Post({ path, body }) {
  return await Request(
    fetch(url + path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
  );
}
