import { FormData } from "@/components/block-contact-form/ContactForm";

export async function sendEmail(data: FormData) {
    const apiEndPoint = "/api/email";

    try {
        const response = await fetch(apiEndPoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error || "Failed to deliver email");
        }

        return result;
    } catch (error) {
        console.error("sendEmail error:", error);
        throw error;
    }
}
