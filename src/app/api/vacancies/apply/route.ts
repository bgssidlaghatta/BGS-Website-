import { NextRequest, NextResponse } from "next/server";
import { addApplication, CandidateApplication } from "@/lib/vacancies-store";

const DEFAULT_WHATSAPP_NUMBER = "919901923097";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      vacancyId,
      vacancyTitle,
      name,
      phone,
      email,
      qualification,
      experience,
      message,
    } = body;

    if (!name || !phone || !qualification) {
      return NextResponse.json(
        { error: "Name, phone number, and qualification are required." },
        { status: 400 }
      );
    }

    const application: CandidateApplication = {
      id: "app_" + Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
      vacancyId: vacancyId || "general",
      vacancyTitle: vacancyTitle || "General Teaching Inquiry",
      name: name.trim(),
      phone: phone.trim(),
      email: email?.trim() || "",
      qualification: qualification.trim(),
      experience: experience?.trim() || "Fresher",
      message: message?.trim() || "",
      submittedAt: new Date().toISOString(),
    };

    // Save record to applications.json
    await addApplication(application);

    // Format WhatsApp message
    const lines = [
      `*🏛️ TEACHER JOB APPLICATION — BGS Public School & PU College*`,
      ``,
      `*Position:* ${application.vacancyTitle}`,
      `*Candidate Name:* ${application.name}`,
      `*Phone Number:* ${application.phone}`,
      `*Email:* ${application.email || "Not provided"}`,
      `*Highest Qualification:* ${application.qualification}`,
      `*Teaching Experience:* ${application.experience}`,
    ];

    if (application.message) {
      lines.push(`*Notes / Subject:* ${application.message}`);
    }

    lines.push(``);
    lines.push(`_Submitted via BGS Official Recruitment Portal_`);

    const whatsappText = encodeURIComponent(lines.join("\n"));
    const recipientNumber =
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || DEFAULT_WHATSAPP_NUMBER;
    const whatsappUrl = `https://wa.me/${recipientNumber}?text=${whatsappText}`;

    return NextResponse.json({
      success: true,
      message: "Application recorded! Opening WhatsApp to send details...",
      whatsappUrl,
    });
  } catch (error: any) {
    console.error("Application submission error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to submit application." },
      { status: 500 }
    );
  }
}
