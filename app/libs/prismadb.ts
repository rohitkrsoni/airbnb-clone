import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined; // Tyes for this prisma
}

const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;

// Time Stamp 1:50:00
