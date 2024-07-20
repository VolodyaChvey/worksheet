import { json } from "react-router-dom";

export default async function Request(request) {
  try {
    const response = await request;
    if (!response.ok) {
      let data = await response.json();
      throw json(data, { status: response.status });
    }
    return await response.json();
  } catch (e) {
    if (!e.status) {
      throw json(
        { message: "Failed to fetch", statusText: "Service Unavailable" },
        { status: 503 }
      );
    }
    let data = await e.json();
    throw json(data, { status: e.status });
  }
}
