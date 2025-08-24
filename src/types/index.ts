export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export type TRole = "USER" | "ADMIN" | "AGENT";