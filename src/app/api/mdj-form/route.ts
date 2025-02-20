import { NextResponse } from "next/server";
import connectMongo from "@/lib/mongodb";
import MdjForm from "@/model/MdjForm";

export async function POST(req: Request) {
  try {
    await connectMongo();
    const { firstName, lastName, email, phone, companyName, companyEmail, designation } = await req.json();

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const existingUser = await MdjForm.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "Email already exists. Please use a different email." }, { status: 400 });
    }

    const newEntry = await MdjForm.create({
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
