import React from "react";

import Popup from "../block-popup/Popup";

const Acknowledgement = () => {
    return (
        <Popup
            className="acknowledgement"
            triggerLabel="Acknowledgement of Country"
            content="Blake Zajac is located on land and waters belonging to the Awabakal and Worimi peoples."
            highlightedContent="Always was, always will be Aboriginal land."
        />
    );
};

export default Acknowledgement;
