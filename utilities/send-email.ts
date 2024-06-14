import { FormData } from "@/components/block-contact-form/ContactForm";

export function sendEmail(data: FormData) {
    const apiEndPoint = "/api/email";

    fetch(apiEndPoint, {
        method: "POST",
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((response) => {
            console.log(response.message);
        })
        .catch((err) => {
            console.log(`Email not delivered: ${err}`);
        });
}
