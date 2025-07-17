import { redirect } from "next/navigation";
import { getDoctorsBySpecialty } from "@/actions/doctors-listing";
import { DoctorCard } from "../_components/doctor-card";
import PageHeader from "@/components/page-header";


/* show the docotrs listing page for a specific specialty */
// The page is accessed via a URL like /doctors/General%20Physician
export default async function DoctorSpecialtyPage({ params }) {
  let { specialty } =await params; //If the input is URL-encoded (e.g., "General%20Physician"),
  // this converts it into a readable string ("General Physician").

  //to solve this either use 
  // specialty.split("%20").join(" "),

  // decode using this JS inbuit function
   specialty = decodeURIComponent(specialty);
  console.log("Specialty:", specialty);
  // Redirect to main doctors page if no specialty is provided
  if (!specialty) {
    console.warn("No specialty provided, redirecting to main doctors page.");
    redirect("/doctors");
  }

  // Fetch doctors by specialty
  const { doctors, error } = await getDoctorsBySpecialty(specialty);

  if (error) {
    console.error("Error fetching doctors:", error);
  }

  return (
    <div className="space-y-5">
      <PageHeader
        title={specialty}
        backLink="/doctors"
        backLabel="All Specialties"
      />

      {doctors && doctors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-white mb-2">
            No doctors available
          </h3>
          <p className="text-muted-foreground">
            There are currently no verified doctors in this specialty. Please
            check back later or choose another specialty.
          </p>
        </div>
      )}
    </div>
  );
}
