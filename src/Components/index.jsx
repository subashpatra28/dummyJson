import axios from "axios";
import React, { useEffect, useState } from "react";

function Components() {
  const option = "https://dummyjson.com/products/categories";
  const optionData = "https://dummyjson.com/products/category";
  
  const [category, setCategory] = useState([]);
  const [select, setSelect] = useState([]);
  const [chosen, setChosen] = useState();

const openCard = (event) => {
  setChosen(event);
  console.log(event)
}

  useEffect(() => {
    fetch(option )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCategory(data);
      });
  }, []);
   useEffect(() => {
     axios
       .get(optionData + `/${chosen}`)
       .then((result) => {
         console.log(result.data.products);
         setSelect(result.data.products);
       });
   });
  return (
    <>
      {category &&
        category.map((categoryResult) => {
          return (
            <>
              <button
                key={categoryResult.id}
                onClick={() => {
                  openCard(categoryResult);
                }}
              >
                {categoryResult}
              </button>
            </>
          );
        })}
      {select && select.map((out) => {
        return <div>{out.brand}</div>;
      })}
    </>
  );
}

export default Components;
