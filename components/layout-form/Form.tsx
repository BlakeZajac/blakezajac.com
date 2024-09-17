"use client";

import React from "react";

import Section from "../layout-section/Section";
import Container from "../layout-container/Container";
import ContactForm from "../block-contact-form/ContactForm";
import RevealText from "../block-reveal-text/RevealText";

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
                    <div className="form__unit form__unit--content">
                        {(sanitisedPhoneNumber || email) && (
                            <div className="form-links">
                                {sanitisedPhoneNumber && (
                                    <a href={`tel:${sanitisedPhoneNumber}`} className="form-links__item underlink">
                                        {phoneNumber}
                                    </a>
                                )}
                                {email && (
                                    <a href={`mailto:${email}`} className="form-links__item underlink">
                                        {email}
                                    </a>
                                )}
                            </div>
                        )}

                        <RevealText className="form__title" as="h1" content={title} />

                        {(description || descriptionTwo) && (
                            <div className="form-description">
                                {description && (
                                    <RevealText
                                        className="reveal-text--spacing_xs form-description__item"
                                        content={description}
                                        animateBy="line"
                                        delay={0.125}
                                    />
                                )}
                                {descriptionTwo && (
                                    <RevealText
                                        className="reveal-text--spacing_xs form-description__item--alt"
                                        content={descriptionTwo}
                                        animateBy="line"
                                        delay={0.25}
                                    />
                                )}
                            </div>
                        )}
                    </div>
                    <div className="form__unit form__unit--form">
                        <ContactForm />
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Form;
