// src/types/index.ts
export interface ServiceLink {
  path: string;
  label: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;    
  company: string;
  message: string;
}