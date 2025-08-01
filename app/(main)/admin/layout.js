import { verifyAdmin } from "@/actions/admin";
import { redirect } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShieldCheck, AlertCircle, Users, CreditCard } from "lucide-react";
import PageHeader from "@/components/page-header";

export const metadata = {
  title: "Admin Settings - MediVerse",
  description: "Manage doctors, patients, and platform settings",
};

export default async function AdminLayout({ children }) { 
  // Verify the user has admin access
  const isAdmin = await verifyAdmin();

  // Redirect if not an admin
  if (!isAdmin) {
    redirect("/onboarding");
  }

  return (
    <div className="container mx-auto px-4 pt-30 pb-20">
      <PageHeader icon={<ShieldCheck />} title="Admin Settings" />

      {/* Vertical tabs on larger screens / Horizontal tabs on mobile */}
      <Tabs
        defaultValue="pending"
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <TabsList className="md:col-span-1 bg-muted/30 border h-14 md:h-40 flex sm:flex-row md:flex-col w-full p-2 md:p-1 rounded-md md:space-y-2 sm:space-x-2 md:space-x-0">
          <TabsTrigger
            value="pending"
            className="flex-1 md:flex md:items-center md:justify-start md:px-4 md:py-3 w-full"
          >
            <AlertCircle className="h-4 w-4 mr-2 hidden md:inline" />
            <span>Pending Verification</span> 
          </TabsTrigger>
          <TabsTrigger
            value="doctors"
            className="flex-1 md:flex md:items-center md:justify-start md:px-4 md:py-3 w-full"
          >
            <Users className="h-4 w-4 mr-2 hidden md:inline" />
             {/* This hides the element completely (i.e., display: none) on all screen sizes by default.
             md:inline , tells On medium screens and larger (≥768px), it sets the element to display: inline, making it visible again. 
             The <Users /> icon is hidden.
            On medium+ screens (tablet & desktop):
            The icon becomes visible as an inline element. 
             */}
            <span>Doctors</span> 
          </TabsTrigger>
          <TabsTrigger
            value="payouts"
            className="flex-1 md:flex md:items-center md:justify-start md:px-4 md:py-3 w-full"
          >
            <CreditCard className="h-4 w-4 mr-2 hidden md:inline" />
            <span>Payouts</span>
          </TabsTrigger>
        </TabsList>
         {/* here we make it as col-span 3 with grid layout and for above it's 1 cols span */}
        <div className="md:col-span-3">
          {children}</div> 
      </Tabs>
    </div>
  );
}
