import { NextResponse } from "next/server";
import connectMongo from "@/lib/mongodb";
import TdjForm from "@/model/TdjForm";

export async function POST(req: Request) {
  try {
    await connectMongo();
    const { firstName, lastName, email, phone, companyName, companyEmail, designation } = await req.json();

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 🔹 Check if email already exists BEFORE attempting to save
    const existingUser = await TdjForm.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "Email already exists. Please use a different email." }, { status: 400 });
    }

    // 🔹 Create a new entry only if email is unique
    const newEntry = await TdjForm.create({
      firstName,
      lastName,
      email,
      phone,
      companyName,
      companyEmail,
      designation,
    });

    return NextResponse.json({ message: "Form submitted successfully", data: newEntry }, { status: 201 });
  } catch (error: any) {
    console.error("Form submission error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
