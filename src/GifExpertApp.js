import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  let [categories, setCategories] = useState(["One punch"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid
          key={category}
          category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
