import { FormData } from "@/components/block-contact-form/ContactForm";

export function sendEmail(data: FormData): Promise<void> {
    const apiEndPoint = "/api/email";

    return fetch(apiEndPoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((res) => {
            if (!res.ok) {
                return res.json().then((response) => {
                    throw new Error(response.error || "Email not delivered");
                });
            }
            return res.json();
        })
        .then((response) => {
            console.log(response.message);
        });
}
