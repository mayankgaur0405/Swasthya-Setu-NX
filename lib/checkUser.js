"use server";
import { currentUser } from "@clerk/nextjs/server"; //this give us the current user from Clerk
import { db } from "./prisma";

/* this file check the clerk current user and then return the existing user from db if any ,else we create the user
accodingly if patient or doctor we just create user without setting the role  */
export const checkUser = async () => {
  const user = await currentUser(); // Get the current user from Clerk actually it get's from authentication of clerk

  if (!user) {
    return null;
  }

  try {
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
      include: {
        transactions: {
          where: {
            type: "CREDIT_PURCHASE",
            // Only get transactions from current month
            createdAt: {
              gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
            },
          },
          orderBy: {
            createdAt: "desc",
          },
          take: 1,
        },
      },
    });

    // if we found the user in the database, return it
    if (loggedInUser) {
      return loggedInUser;
    }
    // if we didn't find the user, create a new user in the database
    const name = `${user.firstName} ${user.lastName}`;

    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id, // Clerk user ID is given by Clerk
        name,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress, // Get the first email address of the user
        // Create a transaction for the user with type CREDIT_PURCHASE and amount 0
        // This is used to track the free user package

        transactions: { // in schema we define transaction as an array in user so we create a transaction for the user
          create: {
            type: "CREDIT_PURCHASE",
            packageId: "free_user",
            amount: 0,
          },
        },
      },
    });

    return newUser;
  } catch (error) {
    console.log(error.message);
  }
};
