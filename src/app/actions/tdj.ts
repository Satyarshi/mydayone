"use server";
import connectMongo from "@/lib/mongodb";
import TdjForm from "@/model/TdjForm";

export interface FormData {
    firstName: string;
    lastName: string;
    phone: string;
    companyName?: string;
    companyEmail?: string;
    designation?: string;
}

export async function SubmitForm(formData: FormData): Promise<{ success: boolean; message: string }> {
    try {
        await connectMongo();
        
        const form = new TdjForm(formData);
        await form.save();

        return { success: true, message: "Form submitted successfully" };
    } catch (error: any) {
        console.log(error);
        if (error.name === "ValidationError") {
            return { success: false, message: "Please enter a valid company email" };
        }
        return { success: false, message: "Something went wrong" };
    }
}