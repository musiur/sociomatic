import { z } from "zod";

const T__ArrayOfString = z.array(z.string()).optional();

export const GoogleAdsFunnelForm = z.object({
    name: z.string().min(1),
    country: z.string().min(1),
    phone: z.string().min(1),
    website: z.string().optional(),
    businessType: T__ArrayOfString,
    industryType: T__ArrayOfString,
    goals: T__ArrayOfString,
    customGoals: z.string().optional(),
    challengesFaced: z.string().min(1),
    budget: z.number().min(1),
    workExperience: z.string().min(1).default("No"),
    workExperienceDetails: z.string().optional(),
    painpoints: z.string(),
    commitment: T__ArrayOfString
});

export type TGoogleAdsFunnelForm = z.infer<typeof GoogleAdsFunnelForm>


export const GoogleAnalyticsFunnelForm = z.object({
    name: z.string().min(1),
    country: z.string().min(1),
    phone: z.string().min(1),
    website: z.string().optional(),
    industryType: T__ArrayOfString,
    challengesFaced: z.string().min(1),
    tools: z.string().min(1).default("No"),
    toolsUsed: z.string().optional(),
    xpGA4GTM: z.string().min(1).default("No"),
    goals: z.string().min(1),
    customGoals: z.string().optional(),
    platformToSetup: T__ArrayOfString,
});

export type TGoogleAnalyticsFunnelForm = z.infer<typeof GoogleAnalyticsFunnelForm>


export const WebDevelopmentFunnelForm = z.object({
    name: z.string().min(1),
    country: z.string().min(1),
    phone: z.string().min(1),
    website: z.string().optional(),
    businessType: T__ArrayOfString,
    industryType: T__ArrayOfString,
    customIndustry: z.string().optional(),
    goals: T__ArrayOfString,
    customGoals: T__ArrayOfString,
    challengesFaced: z.string().min(1),
    budget: z.number().min(1),
    workExperience: z.string().min(1).default("No"),
    workExperienceDetails: z.string().optional(),
    customerAsPersona: z.string().min(1),
    painpoints: z.string(),
    commitment: T__ArrayOfString
});

export type TWebDevelopmentFunnelForm = z.infer<typeof WebDevelopmentFunnelForm>

export const SocialMediaAdsServicePageDataForm = z.object({
    name: z.string().min(1),
    country: z.string().min(1),
    phone: z.string().min(1),
    website: z.string().optional(),
    platformType: T__ArrayOfString,
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

export type E_FormTypes =
    | "googleads"
    | "googleanalytics"
    | "customwebdev"
    | "uiux"
    | "wordpress"
    | "shopify"
    | "software"
    | "socialmediapaidads";