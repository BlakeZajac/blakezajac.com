import React from "react";

import Popup from "../block-popup/Popup";

const Acknowledgement = () => {
    return (
        <Popup
            className="acknowledgement"
            triggerClass="acknowledgement__trigger"
            triggerLabel="Acknowledgement of Country"
            content="Test content."
            highlightedContent="Test highlighted content."
        />
    );
};

export default Acknowledgement;
