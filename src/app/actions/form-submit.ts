"use server";

import connectMongo from "@/lib/mongodb";
import Form from "@/model/Form";

export interface FormData {
    name: string;
    companyName: string;
    email: string;
    phone: string;
    employeeHeadCount: string;
    services: string;
    message: string;
}

export async function SubmitForm(formData: FormData): Promise<{ success: boolean; message: string }> {
    try {
        if (!/^\d{10}$/.test(formData.phone)) {
            return { success: false, message: "Phone number must be exactly 10 digits." };
        }
        await connectMongo();
        
        const form = new Form(formData);
        await form.save();

        return { success: true, message: "Form submitted successfully" };
    } catch (error: any) {
        console.error("Error submitting form:", error);
        if (error.name === "ValidationError") {
            return { success: false, message: "Please enter a valid company email" };
        }
        return { success: false, message: "Something went wrong. Please try again." };
    }
}