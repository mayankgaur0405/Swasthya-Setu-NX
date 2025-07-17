"use client";

import { useEffect } from "react";
import useFetch from "@/hooks/use-fetch";
import { getPatientAppointments } from "@/actions/patient";
import { AppointmentCard } from "@/components/appointment-card";
import PageHeader from "@/components/page-header";
import { Calendar, LoaderCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PatientAppointmentsPage() {
 const {
  data,
  loading,
  error,
  fn: fetchAppointments,
} = useFetch(getPatientAppointments);

const appointments = data?.appointments || []; // ✅ safely extract the array


  useEffect(() => {
    fetchAppointments();
  }, []);
    console.log("Appointments:", appointments);
  return (
    <div className="container mx-auto py-20">
      <PageHeader
        icon={<Calendar />}
        title="My Appointments"
        backLink="/doctors"
        backLabel="Find Doctors"
      />

      <Card className="border-emerald-900/20">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-white flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-emerald-400" />
            Your Scheduled Appointments
          </CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center py-10">
              <LoaderCircle className="h-10 w-10 text-emerald-400 animate-spin" />
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-red-400">Error: {error.message}</p>
            </div>
          ) : appointments?.length > 0 ? (
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                  userRole="PATIENT"
                  refetchAppointments={fetchAppointments}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
              <h3 className="text-xl font-medium text-white mb-2">
                No appointments scheduled
              </h3>
              <p className="text-muted-foreground">
                You don&apos;t have any appointments scheduled yet. Browse our
                doctors and book your consultation.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
