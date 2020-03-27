import React from "react";
import { Link /*, Redirect*/ } from "react-router-dom";

import Card from "../hoc/card";
import Auth from "../hoc/auth";

const Profile = props => {
  //console.log(props);
  // const redir = () => {
  //   <Redirect to="/" />;
  // };

  const redir = () => {
    //this redirects to /
    //props.history.push("/");
  };
  return (
    <Auth>
      <Card>
        {" "}
        <Link to={{ pathname: `${props.match.url}/posts` }}>
          Take me to /profile/posts
        </Link>
        //{redir()}
      </Card>
    </Auth>
  );
};

export default Profile;
