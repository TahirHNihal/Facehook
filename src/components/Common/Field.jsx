import React from "react";

const Field = ({ label, children, htmlFor, error }) => {
  const id = htmlFor || getChildId(children);

  return (
    <>
      <div className="form-control">
        {label && (
          <label className="auth-label" htmlFor={id}>
            {label}
          </label>
        )}
        {children}
        {<p className="mt-1 text-sm text-red-500">{error?.message}</p>}
      </div>
    </>
  );
};
const getChildId = (children) => {
  const child = React.Children.only(children);

  // eslint-disable-next-line no-unsafe-optional-chaining
  if ("id" in child?.props) {
    return child.props.id;
  }
};

export default Field;
