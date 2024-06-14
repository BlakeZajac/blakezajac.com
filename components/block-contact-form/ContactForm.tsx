"use client";

import React, { FC, useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { sendEmail } from "@/utilities/send-email";

import { MdArrowForward } from "react-icons/md";
import { FaRegSmile, FaSpinner } from "react-icons/fa";

export type FormData = {
    name: string;
    company: string;
    phone: string;
    email: string;
    message?: string;
    leadLocation?: string;
};

const ContactForm: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        setIsSubmitting(true);
        setSubmitError(null);
        setSubmitSuccess(null);

        try {
            await sendEmail(data);
            setSubmitSuccess("Thanks for your submission! I'll be in touch.");
            reset();
        } catch (err) {
            setSubmitError((err as Error).message || "Failed to deliver email. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const formFields = [
        {
            label: "Name",
            name: "name",
            type: "text",
            placeholder: "Enter your name",
            required: true,
        },
        {
            label: "Company",
            name: "company",
            type: "text",
            placeholder: "Enter your company name",
            required: true,
        },
        {
            label: "Phone",
            name: "phone",
            type: "tel",
            placeholder: "Enter your phone number",
            required: true,
        },
        {
            label: "Email",
            name: "email",
            type: "email",
            placeholder: "you@company.com",
            required: true,
        },
        {
            label: "Tell me about your project",
            name: "message",
            type: "textarea",
            required: false,
        },
        {
            label: "How did you hear about me?",
            name: "leadLocation",
            type: "text",
            required: false,
        },
    ];

    const firstFourFields = formFields.slice(0, 4);
    const remainingFields = formFields.slice(4);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form__grid">
                {firstFourFields.map((field) => (
                    <div className="form__field" key={field.name}>
                        <label htmlFor={field.name} className="form__label">
                            {field.label} {field.required && <span className="required">*</span>}
                        </label>
                        <input
                            type={field.type}
                            placeholder={field.placeholder}
                            className={`form__input ${
                                errors[field.name as keyof FormData] ? "form__input--error" : ""
                            }`}
                            {...register(field.name as keyof FormData, {
                                required: field.required ? `${field.label} is required` : false,
                            })}
                        />
                        {errors[field.name as keyof FormData] && (
                            <div className="form__error">
                                {errors[field.name as keyof FormData]?.message}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {remainingFields.map((field) => (
                <div className="form__field" key={field.name}>
                    <label htmlFor={field.name} className="form__label">
                        {field.label} {field.required && <span className="required">*</span>}
                    </label>
                    {field.type === "textarea" ? (
                        <textarea
                            placeholder={field.placeholder}
                            className={`form__input ${
                                errors[field.name as keyof FormData] ? "form__input--error" : ""
                            }`}
                            {...register(field.name as keyof FormData, {
                                required: field.required ? `${field.label} is required` : false,
                            })}
                        />
                    ) : (
                        <input
                            type={field.type}
                            placeholder={field.placeholder}
                            className={`form__input ${
                                errors[field.name as keyof FormData] ? "form__input--error" : ""
                            }`}
                            {...register(field.name as keyof FormData, {
                                required: field.required ? `${field.label} is required` : false,
                            })}
                        />
                    )}
                    {errors[field.name as keyof FormData] && (
                        <div className="form__error">
                            {errors[field.name as keyof FormData]?.message}
                        </div>
                    )}
                </div>
            ))}
            <div className="form__actions">
                <button type="submit" className="form__submit btn" disabled={isSubmitting}>
                    <span className="btn__label">Submit</span>
                    <div className="btn__accessory">
                        <MdArrowForward className="btn__icon btn__icon--arrow" />
                        <FaRegSmile className="btn__icon btn__icon--smile" />
                    </div>
                </button>
                {isSubmitting && (
                    <FaSpinner className="form__spinner" role="presentation" focusable="false" />
                )}
            </div>
            {submitSuccess && (
                <div className="form__message form__message--success">{submitSuccess}</div>
            )}
        </form>
    );
};

export default ContactForm;
