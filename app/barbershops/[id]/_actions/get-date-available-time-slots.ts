"use server";

import { actionClient } from "@/lib/safe-action";
import { z } from "zod";

export const getDateAvailableTimeSlots = actionClient
  .schema(
    z.object({
      barbershopId: z.string(),
      date: z.date(),
    }),
  )
  .action(async ({ parsedInput: { barbershopId, date } }) => {
    // Stub implementation
    console.log("Getting available time slots", { barbershopId, date });
    return [
      "09:00",
      "09:30",
      "10:00",
      "10:30",
      "11:00",
      "11:30",
      "12:00",
      "12:30",
      "13:00",
      "13:30",
      "14:00",
      "14:30",
      "15:00",
      "15:30",
      "16:00",
      "16:30",
      "17:00",
      "17:30",
      "18:00",
    ];
  });
