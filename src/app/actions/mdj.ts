"use server";
import connectMongo from "@/lib/mongodb";
import MdjForm from "@/model/MdjForm";

export interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    companyName?: string;
    companyEmail?: string;
    designation?: string;
}

export async function SubmitForm(formData: FormData): Promise<{ success: boolean; message: string }> {
    try {
        await connectMongo();
        
        const form = new MdjForm(formData);
        await form.save();

        return { success: true, message: "Form submitted successfully" };
    } catch (error: any) {
        console.error("Error submitting form:", error);

        return { success: false, message: "Something went wrong. Please try again." };
    }
}
