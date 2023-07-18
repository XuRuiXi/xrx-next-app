import { Suspense } from "react";

const asyncDate = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('async data');
    }, 1000);
  });
};

const Home = async () => {
  const data = await asyncDate();
  return (
    <div>
      {data}
    </div>
  );
};


const Project = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  );
};

export default Project;