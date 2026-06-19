export const CV_FILES = [
  {
    id: "po-ba",
    label: "PRODUCT / BUSINESS ANALYST / SYSTEM ANALYST",
    file: "Wahyu_Budiman_CV_Business_Systems_Architect.pdf",
    href: "/cvs/Wahyu_Budiman_CV_Business_Systems_Architect.pdf",
    downloadName: "Wahyu_Budiman_CV_Business_Systems_Architect.pdf",
  },
  {
    id: "management-kpi",
    label: "MANAGEMENT KPI GOVERNANCE",
    file: "Wahyu_Budiman_CV_Management_KPI_EN.pdf",
    href: "/cvs/Wahyu_Budiman_CV_Management_KPI_EN.pdf",
    downloadName: "Wahyu_Budiman_CV_Management_KPI_EN.pdf",
  },
] as const;

export type CvFile = (typeof CV_FILES)[number];
