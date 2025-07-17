import { ClipboardCheck, AlertCircle, XCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getCurrentUser } from "@/actions/onboarding";
import { redirect } from "next/navigation";

export default async function VerificationPage() {
  const user = await getCurrentUser();

  if (user?.verificationStatus === "VERIFIED") {
    redirect("/doctor");
  }

  const isRejected = user?.verificationStatus === "REJECTED";

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <Card className="border-emerald-900/20">
          <CardHeader className="text-center">
            <div
              className={`mx-auto p-4 ${
                isRejected ? "bg-red-900/20" : "bg-amber-900/20"
              } rounded-full mb-4 w-fit`}
            >
              {isRejected ? (
                <XCircle className="h-8 w-8 text-red-400" />
              ) : (
                <ClipboardCheck className="h-8 w-8 text-amber-400" />
              )}
            </div>
            <CardTitle className="text-2xl font-bold text-white">
              {isRejected ? "Application Rejected" : "Verification Pending"}
            </CardTitle>
            <CardDescription className="text-lg">
              {isRejected
                ? "We couldn't approve your submission"
                : "Thanks for sending your details"}
            </CardDescription>
          </CardHeader>

          <CardContent className="text-center">
            {isRejected ? (
              <div className="bg-red-900/10 border border-red-900/20 rounded-lg p-4 mb-6 flex items-start">
                <AlertCircle className="h-5 w-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground text-left">
                  <p className="mb-2">
                    After reviewing your submission, our team determined it does not meet our criteria. Common reasons include:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mb-3">
                    <li>Missing or unclear credential documents</li>
                    <li>Not enough professional experience</li>
                    <li>Lack of detail in the service description</li>
                  </ul>
                  <p>
                    Please revise your profile and send it again for review.
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-amber-900/10 border border-amber-900/20 rounded-lg p-4 mb-6 flex items-start">
                <AlertCircle className="h-5 w-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground text-left">
                  Your details are under verification by our admin team. This step usually takes 1–2 business days. You'll get an email once verification is complete.
                </p>
              </div>
            )}

            <p className="text-muted-foreground mb-6">
              {isRejected
                ? "You can edit your profile and send it for re-evaluation."
                : "Meanwhile, feel free to browse the platform or reach out to support if you have any queries."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                variant="outline"
                className="border-emerald-900/30"
              >
                <Link href="/">Back to Home</Link>
              </Button>
              
              {/* THIS FEATURE WILL BE AVAILABLE SOON , WORKING ON IT  */}
              {/* {isRejected ? (
                <Button
                  asChild
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  <Link href="/doctor/update-profile">Edit & Resubmit</Link>
                </Button>
              ) : (
                <Button
                  asChild
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  <Link href="/contact-support">Contact Support</Link>
                </Button>
              )} */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
