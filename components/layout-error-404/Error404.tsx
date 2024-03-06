"use client";

import Button from "../block-button/Button";
import Container from "../layout-container/Container";

const Error404 = () => {
  return (
    <div className="error error--404 u-bg-black u-color-white">
      <Container className="error__container">
        <div className="error__unit error__unit--content">
          <div className="error-title">404</div>
          <div className="error-content">Sorry, there&apos;s</div>
          <div className="error-content error-content--alt u-color-yellow">
            nothing here
          </div>
        </div>
        <div className="error__unit error__unit--actions">
          <Button
            buttonClassname="error__btn"
            buttonHref="/"
            buttonLabel="Back to home"
          />
        </div>
      </Container>
    </div>
  );
};

export default Error404;
