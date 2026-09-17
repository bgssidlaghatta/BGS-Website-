import fs from "fs/promises";
import path from "path";

export interface Vacancy {
  id: string;
  title: string;
  department: "PU College" | "High School" | "Primary School" | "Languages" | "Other";
  subject: string;
  qualifications: string;
  experience: string;
  type: "Full-Time" | "Part-Time" | "Visiting Lecturer";
  deadline: string;
  description: string;
  status: "open" | "closed";
  postedAt: string;
}

export interface CandidateApplication {
  id: string;
  vacancyId?: string;
  vacancyTitle?: string;
  name: string;
  phone: string;
  email: string;
  qualification: string;
  experience: string;
  message?: string;
  submittedAt: string;
}

const VACANCIES_FILE_PATH = path.join(process.cwd(), "src", "data", "vacancies.json");
const APPLICATIONS_FILE_PATH = path.join(process.cwd(), "src", "data", "applications.json");

export async function getVacancies(): Promise<Vacancy[]> {
  try {
    const data = await fs.readFile(VACANCIES_FILE_PATH, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading vacancies:", error);
    return [];
  }
}

export async function addVacancy(vacancy: Vacancy): Promise<Vacancy[]> {
  const vacancies = await getVacancies();
  const updated = [vacancy, ...vacancies];
  await fs.writeFile(VACANCIES_FILE_PATH, JSON.stringify(updated, null, 2), "utf-8");
  return updated;
}

export async function updateVacancyStatus(id: string, status: "open" | "closed"): Promise<Vacancy | null> {
  const vacancies = await getVacancies();
  let updatedVacancy: Vacancy | null = null;

  const updated = vacancies.map((v) => {
    if (v.id === id) {
      updatedVacancy = { ...v, status };
      return updatedVacancy;
    }
    return v;
  });

  if (updatedVacancy) {
    await fs.writeFile(VACANCIES_FILE_PATH, JSON.stringify(updated, null, 2), "utf-8");
  }

  return updatedVacancy;
}

export async function deleteVacancy(id: string): Promise<boolean> {
  const vacancies = await getVacancies();
  const filtered = vacancies.filter((v) => v.id !== id);
  if (filtered.length === vacancies.length) {
    return false;
  }
  await fs.writeFile(VACANCIES_FILE_PATH, JSON.stringify(filtered, null, 2), "utf-8");
  return true;
}

export async function getApplications(): Promise<CandidateApplication[]> {
  try {
    const data = await fs.readFile(APPLICATIONS_FILE_PATH, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

export async function addApplication(application: CandidateApplication): Promise<CandidateApplication[]> {
  const apps = await getApplications();
  const updated = [application, ...apps];
  await fs.writeFile(APPLICATIONS_FILE_PATH, JSON.stringify(updated, null, 2), "utf-8");
  return updated;
}
