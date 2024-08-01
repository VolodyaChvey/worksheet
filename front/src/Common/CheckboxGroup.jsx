import { useEffect, useState } from "react";
import { Col, FormCheck, FormGroup, Row } from "react-bootstrap";

export default function CheckboxGroup({
  title,
  name,
  value1,
  value2,
  change,
  reset,
}) {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  useEffect(() => {
    setChecked1(false);
    setChecked2(false);
  }, [reset]);

  function onChange(e) {
    let id = e.target.id;
    if (id === "1") {
      setChecked1(true);
      setChecked2(false);
      change({ name, value: value1 });
    }
    if (id === "2") {
      setChecked1(false);
      setChecked2(true);
      change({ name, value: value2 });
    }
  }
  return (
    <Row
      style={{ borderStyle: "solid", borderRadius: 5, borderWidth: 1 }}
      className="my-3"
    >
      <Col sm={8}>{title}</Col>
      <Col>
        <FormGroup onChange={onChange}>
          <FormCheck type="checkbox">
            <FormCheck.Label>{value1}</FormCheck.Label>
            <FormCheck.Input
              type="checkbox"
              name={name}
              value={value1}
              isValid
              checked={checked1}
              id="1"
            />
          </FormCheck>
          <FormCheck type="checkbox">
            <FormCheck.Label>{value2}</FormCheck.Label>
            <FormCheck.Input
              type="checkbox"
              name={name}
              value={value2}
              isValid
              checked={checked2}
              id="2"
            />
          </FormCheck>
        </FormGroup>
      </Col>
    </Row>
  );
}
