"use server";
import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

/**
 * Get all appointments for the authenticated patient
 */
export async function getPatientAppointments() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  try {
    const user = await db.user.findFirst({
      where: {
        clerkUserId: userId,
        role: "PATIENT",
      },
      select: {
        id: true, // it ensures that we only fetch the id of the user no other information is needed
      },
    });

    if (!user) {
      throw new Error("Patient not found");
    }

/* 
     telling Prisma to include related doctor data from the doctor relation.
This uses Prisma's relational querying:
Each appointment has a related doctor (via foreign key doctorId)
Instead of loading the whole doctor object, you select only specific fields:
 */

    const appointments = await db.appointment.findMany({
      where: {
        patientId: user.id,
      },
      include: { // Fetched doctor info due to `include`
        doctor: {
          select: {
            id: true,
            name: true,
            specialty: true,
            imageUrl: true,
          },
        },
      },
      orderBy: {
        startTime: "asc",
      },
    });

    /* 
    The fetced result is like this an arrray as we require many appointments:
    {
  id: "uuid-string",
  patientId: "user-id-of-patient",
  doctorId: "user-id-of-doctor",
  startTime: Date,            // appointment start datetime
  endTime: Date,              // appointment end datetime
  status: "SCHEDULED" | "COMPLETED" | "CANCELLED",
  notes: "text if added by doctor",
  patientDescription: "text if added by patient",
  videoSessionId: "optional string",
  videoSessionToken: "optional string",
  createdAt: Date,
  updatedAt: Date,

  // Fetched doctor info due to `include`
  doctor: {
    id: "doctor-id",
    name: "Doctor Name",
    specialty: "e.g. Dermatology",
    imageUrl: "doctor-profile-image-url"
  }
}

 */

/*  Note:
It does not include patient info because we didn't include it.
If we want patient info too: write it like this:
include: {
  doctor: { select: { ... } },
  patient: { select: { id: true, name: true } }
} 
  */

    return { appointments };
  } catch (error) {
    console.error("Failed to get patient appointments:", error);
    return { error: "Failed to fetch appointments" };
  }
}
