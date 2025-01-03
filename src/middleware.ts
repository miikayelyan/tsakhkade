import { clerkMiddleware } from "@clerk/nextjs/server";

console.log("Middleware file is loaded!");

if (!process.env.CLERK_SECRET_KEY) {
  console.error(
    "Error: CLERK_SECRET_KEY is missing in the environment variables!"
  );
  throw new Error(
    "Missing CLERK_SECRET_KEY. Please ensure it's set in your .env.local or deployment environment."
  );
}

export default clerkMiddleware(() => {
  console.log("Middleware is being executed!");
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
