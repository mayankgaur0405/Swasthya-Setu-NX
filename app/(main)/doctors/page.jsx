import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { SPECIALTIES } from "@/lib/specialities";
/*  This page lists all available medical specialties
 Users can click on a specialty to view doctors in that field */
export default async function DoctorsPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-8 text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Browse Specialists</h1>
        <p className="text-muted-foreground text-lg">
          Choose a medical specialty or explore all available doctors
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {SPECIALTIES.map((field) => (
          <Link key={field.name} href={`/doctors/${field.name}`}>
            <Card className="hover:border-emerald-700/40 transition-all cursor-pointer border-emerald-900/20 h-full">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                <div className="w-12 h-12 rounded-full bg-emerald-900/20 flex items-center justify-center mb-4">
                  <div className="text-emerald-400">{field.icon}</div>
                </div>
                <h3 className="font-medium text-white">{field.name}</h3>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
