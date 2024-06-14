"use client";

import React, { FC } from "react";

import { useForm } from "react-hook-form";
import { sendEmail } from "@/utilities/send-email";

import { MdArrowForward } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";

export type FormData = {
    name: string;
    company: string;
    phone: string;
    email: string;
    message?: string;
    leadLocation?: string;
};

// @todo
// https://medium.com/@abilsavio/email-contact-form-using-nextjs-app-router-60c29fe70644

const ContactForm: FC = () => {
    const { register, handleSubmit } = useForm<FormData>();

    function onSubmit(data: FormData) {
        sendEmail(data);
    }

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

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {formFields.map((field) => (
                <div className="form__field" key={field.name}>
                    <label htmlFor={field.name} className="form__label">
                        {field.label} {field.required && <span className="required">*</span>}
                    </label>
                    {field.type === "textarea" ? (
                        <textarea
                            placeholder={field.placeholder}
                            className="form__input"
                            {...register(field.name as keyof FormData, {
                                required: field.required,
                            })}
                        />
                    ) : (
                        <input
                            type={field.type}
                            placeholder={field.placeholder}
                            className="form__input"
                            {...register(field.name as keyof FormData, {
                                required: field.required,
                            })}
                        />
                    )}
                </div>
            ))}
            <button type="submit" className="form__submit btn">
                <span className="btn__label">Submit</span>
                <div className="btn__accessory">
                    <MdArrowForward className="btn__icon btn__icon--arrow" />
                    <FaRegSmile className="btn__icon btn__icon--smile" />
                </div>
            </button>
        </form>
    );
};

export default ContactForm;