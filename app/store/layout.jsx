import Link from "next/link";
import React from "react";

function StoreLayout({ children }) {
  return (
    <>
      <nav>
        <ul>
          <li><Link href="/store/categories">Categories</Link></li>
          <li><Link href="/store/categories/notebooks">Notebooks</Link></li>
        </ul>
      </nav>

      {children}
    </>
  );
}

export default StoreLayout;
