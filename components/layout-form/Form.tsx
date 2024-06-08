"use client";

import React from "react";

import Section from "../layout-section/Section";
import Container from "../layout-container/Container";

interface FormProps {
    phoneNumber?: string;
    email?: string;
    title: string;
    description?: string;
    descriptionTwo?: string;
}

const sanitisePhoneNumber = (number: string) => {
    return number.replace(/[^+0-9]/g, "");
};

const Form: React.FC<FormProps> = ({ phoneNumber, email, title, description, descriptionTwo }) => {
    const sanitisedPhoneNumber = phoneNumber ? sanitisePhoneNumber(phoneNumber) : null;

    return (
        <Section>
            <Container className="l-container--max-width_1440">
                <div className="form">
                    {(sanitisedPhoneNumber || email) && (
                        <div className="form-links">
                            {sanitisedPhoneNumber && (
                                <a
                                    href={`tel:${sanitisedPhoneNumber}`}
                                    className="form-links__item"
                                >
                                    {phoneNumber}
                                </a>
                            )}
                            {email && (
                                <a href={`mailto:${email}`} className="form-links__item">
                                    {email}
                                </a>
                            )}
                        </div>
                    )}
                    <h1 className="form__title">{title}</h1>
                    {(description || descriptionTwo) && (
                        <div className="form-description">
                            {description && (
                                <div className="form-description__item">{description}</div>
                            )}
                            {descriptionTwo && (
                                <div className="form-description__item form-description__item--alt">
                                    {descriptionTwo}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </Container>
        </Section>
    );
};

export default Form;
