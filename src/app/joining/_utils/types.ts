import { z } from "zod";

export const FunnelFormSchema = z.object({
    country: z.string().min(1),
    phone: z.string().min(1),
    businessType: z.string().min(1),
    industryType: z.string().min(1),
    goals: z.string().min(1),
    customGoals: z.string().optional(),
    challengesFaced: z.string().min(1),
    budget: z.number().min(1),
    workExperience: z.string().min(1).default("No"),
    workExperienceDetails: z.string().optional(),
    painpoints: z.string(),
    commitment: z.string()
});

export type TFunnelFormSchema = z.infer<typeof FunnelFormSchema> 