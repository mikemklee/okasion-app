import React from "react";

const UnderConstructionPage = ({ history }) => {
  return (
    <div className="underConstruction">
      <img
        className="underConstruction__image"
        src="/assets/construction.png"
        alt="underConstruction"
      />
      <h1 className="underConstruction__title">Under Construction</h1>
      <p className="underConstruction__subtitle">
        Sorry, this feature is currently unavailable.
      </p>
      <p className="underConstruction__subtitle">We will be back shortly!</p>
      <button
        onClick={() => history.goBack()}
        className="underConstruction__goback"
      >
        Go Back
      </button>
    </div>
  );
};

export default UnderConstructionPage;
