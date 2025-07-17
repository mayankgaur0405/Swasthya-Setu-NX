import { getDoctorById, getAvailableTimeSlots } from "@/actions/appointments";
import { DoctorProfile } from "./_components/doctor-profile";
import { redirect } from "next/navigation";

export default async function DoctorProfilePage({ params }) {
  const { id } = await params;

  const [doctorResult, slotResult] = await Promise.all([
    getDoctorById(id).catch((error) => {
      console.error("Failed to fetch doctor:", error);
      return null; // Return null if doctor fetch fails
    }),
    getAvailableTimeSlots(id).catch((error) => {
      console.warn("Failed to fetch time slots:", error.message);
      return { days: [] }; // Return empty array if slots fetch fails and stored in slotResult
    }),
  ]);

  // If no doctor found, redirect
  if (!doctorResult?.doctor) {
    return redirect("/doctors");
  }

  // Use empty array if no slots
  const slots = slotResult?.days || [];

  return (
    <DoctorProfile
      doctor={doctorResult.doctor}
      availableDays={slots}
    />
  );
}
