import { url } from "../data";
import Request from "./Request";

export default async function Delete({ path }) {
  return await Request(
    fetch(url + path, {
      method: "DELETE",
    })
  );
}
