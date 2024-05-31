"use client";

import React from "react";
import Button from "../block-button/Button";

const SkipToMain = () => {
  return (
    <div className="skip">
      <Button buttonHref="#main" buttonLabel="Skip to main content" />
    </div>
  );
};

export default SkipToMain;
