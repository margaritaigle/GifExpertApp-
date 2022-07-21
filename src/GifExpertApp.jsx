import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);


  const onAddCategory = ( newCategory ) => {
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
      <ol>
        {categories.map((category) => {
          return <li key={ category } >{ category }</li>
        })}

      </ol>
      {/* {Gif Item} */}
    </>
  );
}

