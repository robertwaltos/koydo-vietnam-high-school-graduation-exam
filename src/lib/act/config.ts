// Auto-generated shim — re-exports from @/lib/vietnam-high-school-graduation-exam/config
// This lets shared ecosystem components import from "@/lib/act/config"
import { EXAM_CONFIG as _raw } from "@/lib/vietnam-high-school-graduation-exam/config";

type RawConfig = typeof _raw & {
  examId?: string;
  id?: string;
  slug?: string;
  locale?: string;
  primaryLanguage?: string;
  isRTL?: boolean;
  themeColor?: string;
  themeColorDark?: string;
  theme?: {
    accent?: string;
    light?: string;
    dark?: string;
  };
  freemiumGate?: {
    dailyQuestions: number;
  };
  freeTier?: {
    dailyQuestions?: number;
  };
};

const raw = _raw as RawConfig;

export const EXAM_CONFIG = {
  ...raw,
  examId: raw.examId ?? raw.id ?? raw.slug ?? "vietnam-high-school-graduation-exam",
  locale: raw.locale ?? raw.primaryLanguage ?? "en",
  isRTL: raw.isRTL ?? false,
  themeColor: raw.themeColor ?? raw.theme?.accent ?? raw.theme?.light ?? "#2563EB",
  themeColorDark: raw.themeColorDark ?? raw.theme?.dark ?? raw.themeColor ?? raw.theme?.accent ?? "#1E3A8A",
  freemiumGate: raw.freemiumGate ?? { dailyQuestions: raw.freeTier?.dailyQuestions ?? 10 },
} as const;

export type ExamConfig = typeof EXAM_CONFIG;