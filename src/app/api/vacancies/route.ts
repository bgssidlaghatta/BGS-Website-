import { NextRequest, NextResponse } from "next/server";
import { checkAdminSession } from "@/lib/auth";
import {
  getVacancies,
  addVacancy,
  updateVacancyStatus,
  deleteVacancy,
  getApplications,
  Vacancy,
} from "@/lib/vacancies-store";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const includeAll = searchParams.get("all") === "true";

    const vacancies = await getVacancies();

    // If 'all' is requested (for admin), verify session
    if (includeAll) {
      const session = await checkAdminSession();
      if (session.authenticated) {
        const applications = await getApplications();
        return NextResponse.json({
          success: true,
          vacancies,
          applications,
        });
      }
    }

    // Otherwise return open vacancies for public visitors
    const publicVacancies = vacancies.filter((v) => v.status === "open");
    return NextResponse.json({
      success: true,
      vacancies: publicVacancies,
    });
  } catch (error) {
    console.error("GET vacancies error:", error);
    return NextResponse.json(
      { error: "Failed to load vacancies", vacancies: [] },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await checkAdminSession();
    if (!session.authenticated) {
      return NextResponse.json(
        { error: "Unauthorized. Please log in first." },
        { status: 401 }
      );
    }

    const body = await req.json();
    const {
      title,
      department,
      subject,
      qualifications,
      experience,
      type,
      deadline,
      description,
    } = body;

    if (!title || !subject || !qualifications) {
      return NextResponse.json(
        { error: "Position title, subject, and required qualifications are required." },
        { status: 400 }
      );
    }

    const newVacancy: Vacancy = {
      id: "vac_" + Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
      title: title.trim(),
      department: department || "PU College",
      subject: subject.trim(),
      qualifications: qualifications.trim(),
      experience: experience?.trim() || "1+ years",
      type: type || "Full-Time",
      deadline: deadline?.trim() || "Open until filled",
      description: description?.trim() || "Passionate educator required to mentor students and handle curriculum delivery.",
      status: "open",
      postedAt: new Date().toISOString(),
    };

    const updated = await addVacancy(newVacancy);

    return NextResponse.json({
      success: true,
      message: "Vacancy published successfully!",
      vacancy: newVacancy,
      total: updated.length,
    });
  } catch (error: any) {
    console.error("POST vacancy error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to create vacancy." },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const session = await checkAdminSession();
    if (!session.authenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { id, status } = body;

    if (!id || (status !== "open" && status !== "closed")) {
      return NextResponse.json({ error: "Invalid vacancy id or status." }, { status: 400 });
    }

    const updated = await updateVacancyStatus(id, status);
    if (!updated) {
      return NextResponse.json({ error: "Vacancy not found." }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: `Vacancy marked as ${status}.`,
      vacancy: updated,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || "Failed to update." }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const session = await checkAdminSession();
    if (!session.authenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Missing vacancy id." }, { status: 400 });
    }

    const success = await deleteVacancy(id);
    if (!success) {
      return NextResponse.json({ error: "Vacancy not found." }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: "Vacancy deleted successfully.",
    });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || "Failed to delete." }, { status: 500 });
  }
}
