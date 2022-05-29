import React, { useState } from "react";

export default function NavTab() {
  const [selectedtab, setSelectedtab] = useState("Carts");

  return (
    <div className='tabMenu alignJustifyCenter'>
      <button
        onClick={() => setSelectedtab("Carts")}
        className='tabButton'
        variant='light'
        style={
          selectedtab == "Carts" ? { borderBottom: "2px solid #FACA30" } : {}
        }
      >
        Carts
      </button>
      <button
        onClick={() => setSelectedtab("Favorites")}
        className='tabButton'
        variant='light'
        style={
          selectedtab == "Favorites"
            ? { borderBottom: "2px solid #FACA30" }
            : {}
        }
      >
        Favorites
      </button>
    </div>
  );
}
