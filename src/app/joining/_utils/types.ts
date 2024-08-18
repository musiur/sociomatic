import { z } from "zod";

export const GoogleAdsFunnelForm = z.object({
    name: z.string().min(1),
    country: z.string().min(1),
    phone: z.string().min(1),
    website: z.string().optional(),
    businessType: z.array(z.string().min(1)),
    industryType: z.array(z.string().min(1)),
    goals: z.array(z.string().min(1)),
    customGoals: z.string().optional(),
    challengesFaced: z.string().min(1),
    budget: z.number().min(1),
    workExperience: z.string().min(1).default("No"),
    workExperienceDetails: z.string().optional(),
    painpoints: z.string(),
    commitment: z.array(z.string().min(1))
});

export type TGoogleAdsFunnelForm = z.infer<typeof GoogleAdsFunnelForm>


export const GoogleAnalyticsFunnelForm = z.object({
    name: z.string().min(1),
    country: z.string().min(1),
    phone: z.string().min(1),
    website: z.string().optional(),
    industryType: z.array(z.string().min(1)),
    challengesFaced: z.string().min(1),
    tools: z.string().min(1).default("No"),
    toolsUsed: z.string().optional(),
    xpGA4GTM: z.string().min(1).default("No"),
    goals: z.string().min(1),
    customGoals: z.string().optional(),
    platformToSetup: z.array(z.string().min(1)),
});

export type TGoogleAnalyticsFunnelForm = z.infer<typeof GoogleAnalyticsFunnelForm>


export const WebDevelopmentFunnelForm = z.object({
    name: z.string().min(1),
    country: z.string().min(1),
    phone: z.string().min(1),
    website: z.string().optional(),
    businessType: z.array(z.string().min(1)),
    industryType: z.array(z.string().min(1)),
    customIndustry: z.string().optional(),
    goals: z.string().min(1),
    customGoals: z.array(z.string().min(1)),
    challengesFaced: z.string().min(1),
    budget: z.number().min(1),
    workExperience: z.string().min(1).default("No"),
    workExperienceDetails: z.string().optional(),
    customerAsPersona: z.string().min(1),
    painpoints: z.string(),
    commitment: z.array(z.string().min(1))
});

export type TWebDevelopmentFunnelForm = z.infer<typeof WebDevelopmentFunnelForm>

export const SocialMediaAdsServicePageDataForm = z.object({
    name: z.string().min(1),
    country: z.string().min(1),
    phone: z.string().min(1),
    website: z.string().optional(),
    platformType: z.array(z.string().min(1)),
    customPlatform: z.string().optional(),
    goals: z.array(z.string().min(1)),
    customGoals: z.string().optional(),
    challengesFaced: z.string().min(1),
    budget: z.number().min(1),
    workExperience: z.string().min(1).default("No"),
    workExperienceDetails: z.string().optional(),
    partnerYouWant: z.string().min(1),
    painpoints: z.string(),
});

export type TSocialMediaAdsServicePageDataForm = z.infer<typeof SocialMediaAdsServicePageDataForm>