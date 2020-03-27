import React from "react";
//import { Link } from "react-router-dom";

const PostItem = props => {
  console.log(props);
  return (
    <div>
      {props.match.params.id} - {props.match.params.username}
    </div>
  );
};

export default PostItem;
