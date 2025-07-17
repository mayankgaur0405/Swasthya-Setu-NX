import z from "zod";

export const doctorFormSchema = z.object({
  // Must be a string,Must have at least 1 character ,Error message shown if empty: "Specialty is required"
  specialty: z.string().min(1, "Specialty is required"),
  experience: z
  .number({ invalid_type_error: "Experience must be a number" })//invalid_type_error is used for type mismatch like number vs. string 
  // If the input is not a number (e.g., string), it shows: "Experience must be a number
 /*  The invalid_type_error customizes the error message that appears when the type 
  is wrong — for example, if a string or undefined is passed instead of a number */
/*   If the user enters a string like "5" instead of a number, Zod will throw a default error like:
Expected number, received string
That’s technically correct, but it’s not user-friendly. */
    .int()  //Must be a whole number (integer)
    .min(1, "Experience must be at least 1 year")
    .max(70, "Experience must be less than 70 years"),
  credentialUrl: z
    .string()
    .url("Please enter a valid URL")
    .min(1, "Credential URL is required"),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters")
    .max(1000, "Description cannot exceed 1000 characters"),
});
