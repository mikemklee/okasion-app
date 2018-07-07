import React from "react";

const NotFoundPage = ({ history }) => {
  return (
    <div className="notFound">
      <img className="notFound__image" src="/assets/404.png" alt="notfound" />
      <h1 className="notFound__title">Page Not Found</h1>
      <p className="notFound__subtitle">Sorry, this page does not exist.</p>
      <button onClick={() => history.goBack()} className="notFound__goback">
        Go Back
      </button>
    </div>
  );
};

export default NotFoundPage;
