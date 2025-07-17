import { PrismaClient } from "@prisma/client";
// import { PrismaClient } from "./genrated/prisma"; //if got error use this line instead

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

// globalThis.prisma: This global variable ensures that the Prisma client instance is
// reused across hot reloads during development. Without this, each time your application
// reloads, a new instance of the Prisma client would be created, potentially leading
// to connection issues.



/* ✅ Why this check?
In Next.js (especially in development), the server may reload multiple times,
 which can create multiple PrismaClient instances — this leads to memory leaks or connection errors. */


 