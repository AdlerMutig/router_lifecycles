import React from "react";

const userHoc = (WrappedComponent, arg1) => {
  return props => (
    <div>
      {arg1}
      <WrappedComponent {...props} />
    </div>
  );
};

export default userHoc;
