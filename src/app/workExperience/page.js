import { Suspense } from "react";

const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();
  return data;
}

const WorkExperience = async () => {
  const data = await getData();
  return (
    <div>
      <h1>{data?.body}</h1>
    </div>
  );
};

export default WorkExperience;