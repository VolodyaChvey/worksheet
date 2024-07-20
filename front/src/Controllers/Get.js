import { url } from "../data";
import Request from "./Request";

export default async function Get({ path }) {
  return await Request(fetch(url + path));
}
