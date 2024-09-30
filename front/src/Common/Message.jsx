import { useEffect } from "react";

export default function Message({ message, setMessage }) {
  useEffect(() => {
    const timeooutId = setTimeout(() => {
      setMessage("");
    }, 2000);
    return () => clearTimeout(timeooutId);
  }, [message, setMessage]);
  return <div>{message}</div>;
}
