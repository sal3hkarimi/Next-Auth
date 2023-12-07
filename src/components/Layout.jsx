import React from "react";

export default function Layout({ children, title }) {
  return (
    <div className="container">
      <div className="header bg-gray-200 py-2 px-4 ">
        <h3 className="text-2xl font-bold text-gray-700">{title}</h3>
      </div>
      <div className="body pt-4">{children}</div>
    </div>
  );
}
