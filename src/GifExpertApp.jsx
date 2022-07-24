import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);


  const onAddCategory = ( newCategory ) => {
    const categoriesToLowerCase = categories.map( (cat) => cat.toLowerCase());
    if( categoriesToLowerCase.includes(newCategory.toLowerCase()) ) return;
    // if( categories.includes(newCategory)) return; 
    // setCategories( cat => [ ...cat, "Valorant" ] );
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      {/* {titulo} */}
      <h1>GifExpertApp</h1>

      {/* { Input } */}
      <AddCategory
        // addNewCategory={setCategories}
        onNewCategory={ (value) => onAddCategory(value) }
      />

      {/* {Listado de gif} */}
      {
        categories.map((category) => (
          <GifGrid
            key={category}
            category={category}>
          </GifGrid> 
        ))
      }
      {/* {Gif Item} */}
    </>
  );
}

