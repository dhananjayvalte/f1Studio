import React, { useState } from "react";

export default function TableTab() {
  const [selectedtab, setSelectedtab] = useState("Carts");

  return (
    <div className='tableTabMenu'>
      <button
        onClick={() => setSelectedtab("Carts")}
        className='tabButton'
        variant='light'
        style={
          selectedtab == "Carts" ? { borderBottom: "2px solid #34495E" } : {}
        }
      >
        Active Carts
      </button>
      <button
        onClick={() => setSelectedtab("Favorites")}
        className='tabButton'
        variant='light'
        style={
          selectedtab == "Favorites"
            ? { borderBottom: "2px solid #34495E" }
            : {}
        }
      >
        Archived Carts
      </button>
    </div>
  );
}
