import { z } from "zod";

export const GoogleAdsFormSchema = z.object({
    businessType: z.enum(["small", "medium"]),
    industryType: z.string().min(1),
    advertisingGoals: z.string().min(1),
    advertisingGoalCustom: z.string(),
    challengesFaced: z.string().min(1),
    budget: z.number().min(1),
    workExperience: z.string().min(1),
    workExperienceDetails: z.string(),
    painpoints: z.string(),
    commitment: z.string()
});

export type TGoogleAdsFormSchema = z.infer<typeof GoogleAdsFormSchema> 