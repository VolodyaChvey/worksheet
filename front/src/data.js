import { json } from "react-router-dom";

export const url = "http://localhost:8080";

export const errorValid = async (e) => {
  let result = {};
  if (e.status === 400) {
    let resp = await e.json();
    for (let i = 0; i < resp.violations.length; i++) {
      result[resp.violations[i].fieldName] = resp.violations[i].message;
    }
  }
  return result;
};

export const checkParam = ({ fieldName, value, message }) => {
  if (!value) {
    let violations = [{ fieldName, message }];
    throw json({ violations }, { status: 400 });
  }
};

//comparison of objects
export const isEqual = ({ first, second }) => {
  return Object.keys({ ...first, ...second })
  .every(
    (key) => first[key] === second[key]
  );
};

export const indexOf = ({array,obj})=>{
  let index = -1;
  for (let i = 0; i< array.length; i++) {
    if (array[i].id===obj.id){
      index = i
    }
  }
  return index;
}
