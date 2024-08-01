import "./Page.css";

export default function Page({ id, size, orientation }) {
  const styles = size + orientation;

  return (
    <>
      <h4>{size}</h4>
      <h4>{orientation}</h4>
      <div className={"paper " + styles}></div>
    </>
  );
}
