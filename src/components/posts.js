import React from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  // const ids = [
  //   { id: "1", name: "post 1" },
  //   { id: "2", name: "post 2" },
  //   { id: "3", name: "post 3" }
  // ];

  // const list = ids.map(item => {
  //   return (
  //     <span key={item.id}>
  //       <Link to={item.id}>{item.name}</Link>
  //       <br />
  //     </span>
  //   );
  // });

  return [
    <div key="1">hello</div>,
    <div key="2">i am</div>,
    <div key="3"> a react app</div>
  ];
};

export default Posts;
