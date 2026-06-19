export type Diagram = {
  src: string;
  alt: string;
  caption: string;
};
export type CaseStudy = {
  id: string;
  caseId: string; // e.g. "MS-DIGI"
  archiveDate: string; // e.g. "2025-09"
  index: string; // e.g. "01"
  codename: string; // e.g. "OPERATION: MS-DIGI"
  mission: string; // one-line mission statement
  vector: string; // FROM → TO transformation
  operative: string; // e.g. "SOLE_OPERATIVE // PROD_ENG / SYS_ANALYST"
  status: string; // e.g. "DEPLOYED"
  orbit: string; // high-level impact
  clearance: string; // e.g. "SOLE_OPERATIVE"
  classification?: "PUBLIC" | "RESTRICTED" | "CLASSIFIED";
  stack: string[];
  problem: {
    context: string;
    painPoints: string[];
  };
  process: {
    summary: string;
    diagram?: Diagram;
    sequenceDiagrams?: Diagram[];
  };
  solution: {
    summary: string;
    keyDecisions: string[];
    diagram?: Diagram;
    sequenceDiagrams?: Diagram[];
  };
  impact: {
    metrics: { value: string; label: string }[];
    qualitative: string;
  };
  next?: string;
};

export const CASES: CaseStudy[] = [
  {
    id: "msdigit",
    caseId: "MS-DIGI",
    archiveDate: "2025-Q3",
    index: "01",
    codename: "OPERATION: MS-DIGI",
    mission: "KPI GOVERNANCE PLATFORM",
    vector: "EXCEL / SHAREPOINT → GOVERNED KPI WORKFLOW",
    operative: "SOLE_OPERATIVE // PRODUCT ENGINEER / SYSTEM ANALYST",
    status: "DEPLOYED",
    orbit: "MANAGEMENT & EXECUTIVE-LEVEL KPI VISIBILITY",
    clearance: "SOLE_OPERATIVE",
    classification: "PUBLIC",
    stack: [
      "C#",
      ".NET 6 → .NET 8",
      "ASP.NET CORE MVC",
      "N-LAYER ARCHITECTURE",
      "RAZOR SSR SHELL",
      "NATIVE JAVASCRIPT",
      "JQUERY AJAX",
      "JWT / TOKEN CONTEXT",
      "TENANT CONTEXT",
      "MULTI-TENANT DESIGN",
      "EF CORE",
      "SQL SERVER",
      "REDIS",
      "HANGFIRE",
      "BOOTSTRAP",
      "ECHARTS",
      "SSO / WSO",
      "RBAC",
      "PDF EXPORT",
    ],
    problem: {
      context:
        "MsDigi was built to transform fragmented KPI tracking from Excel, SharePoint, manual follow-ups, and static reporting into a governed KPI workflow platform. Operating without a product manager or formal specifications, the business needed a reliable source of truth for KPI setup, monthly achievement, scoring, under-target detection, PDCA follow-up, approval control, executive summary visibility, and yearly KPI cycle preparation across three manufacturing entities (PT Sanghiang Perkasa, Kalbe Morinaga Indonesia, Kalbe Milko Indonesia) and 10 departments (FA, HCD, EXT, PROC, WH RMPM, QFS, PPIC, WHL, SHE and MS).",

      painPoints: [
        "KPI tracking depended on scattered Excel files, SharePoint folders, and manual reporting routines, making it difficult to maintain a reliable source of truth.",
        "PIC users needed a simple and familiar way to manage KPI structure, formula, number formatting, stream, KPI level, ownership, scoring matrix, and monthly achievement without dealing with unnecessary system complexity.",
        "Management needed faster visibility into monthly KPI achievement, under-target indicators, YTD performance, Best Estimate, and PDCA follow-up without waiting for repetitive manual consolidation.",
        "Under-target KPI performance needed to be detected consistently so PIC users could provide corrective and preventive context only when required.",
        "KPI setup, scoring matrix, and actual-month changes needed governance control through reason metadata, approval flow, and traceable change history.",
        "Executive users needed a curated KPI summary view that showed running KPI highlights without requiring them to navigate detailed operational reports.",
        "Preparing the next KPI cycle required repetitive setup work when KPI structures could have been reused with cycle-specific scoring and achievement records.",
        "Manual follow-up created operational overhead when PIC users had not submitted monthly achievement data on time.",
      ],
    },
    process: {
      summary:
        "I approached MsDigi as a product transformation initiative rather than a simple KPI dashboard, acting as the sole bridge between raw business needs and technical execution. I studied the existing Excel and SharePoint-based workflows, translated informal stakeholder language into structured system behavior, and mapped KPI ownership across PIC users and governance roles. I iterated closely with Management System stakeholders as domain experts to translate manual KPI governance, PDCA expectations, approval behavior, and reporting needs into system rules that were simple for PIC users but controlled enough for governance owners. The goal was to make KPI operations feel frictionless for users while absorbing the complexity of validation, multi-entity isolation, tenant context, and change governance entirely into the system.",
      diagram: {
        src: "/diagrams/msdigit-process.svg",
        alt: "MsDigi process flow",
        caption: "FIGURE 01 — PROCESS FLOW",
      },
      sequenceDiagrams: [
        {
          src: "/diagrams/sequenceChangeRequest-msdigit-process.svg",
          alt: "MsDigi sequence diagram",
          caption: "FIGURE 01-B — PROCESS SEQUENCE Change Request DETAIL",
        },
        {
          src: "/diagrams/sequenceInputAchievement-msdigit-process.svg",
          alt: "MsDigi KPI Input Achievement sequence",
          caption: "FIGURE 01-C — KPI INPUT ACHIEVEMENT SEQUENCE",
        },
      ],
    },
    solution: {
      summary:
        "I designed and built Ms Digi end-to-end as a web-based KPI governance workflow platform. The system centralizes KPI setup, formula definition, number formatting, scoring matrix configuration, monthly achievement input, real-time under-target detection, conditional PDCA handling, approval workflow, email notification, automatic YTD calculation, change-request control, visual report detection, executive KPI summary templates, PDF reporting, reminders, and yearly KPI cycle preparation. The platform was built using an N-Layer ASP.NET Core MVC architecture, with Razor used as an SSR shell, controllers acting as routing and API boundaries, modular native JavaScript handling client-side rendering, token-based frontend context supporting role-aware behavior, and EF Core managing domain-oriented data access.",
      keyDecisions: [
        "Designed a low-friction KPI workflow so PIC users could manage KPI setup, formula, formatting, stream, KPI level, ownership, scoring matrix, and monthly achievement through a guided process.",
        "Designed the UI/UX to resemble familiar Excel-based workflows so PIC users could transition with lower friction while still benefiting from a governed web-based system.",
        "Allowed regular PIC users to be directly associated with KPI ownership when creating or managing relevant KPI data, reducing unnecessary ownership setup steps.",
        "Implemented scoring matrix governance using score levels from 1 to 5 so KPI evaluation rules could be maintained structurally instead of being interpreted manually outside the system.",
        "Implemented real-time under-target detection in the monthly achievement flow so the system could determine whether PDCA context was required before submission.",
        "Designed conditional PDCA handling so corrective and preventive context was required only when KPI achievement was detected as under target.",
        "Built an approval workflow where submitted achievement data entered a pending state and required governance review before becoming part of official KPI reporting.",
        "Separated pending and approved data so dashboard, YTD, and reporting calculations were based on governed records rather than unvalidated submissions.",
        "Implemented email notifications for submission, approval, rejection, reminder, and change-request workflows so PIC users and governance roles had traceable communication.",
        "Implemented automatic YTD and score calculation based on configured KPI formulas and approved monthly achievement values.",
        "Designed change-request governance for KPI setup, scoring matrix, and actual-month updates, including old/new metadata, reason, approval status, and controlled mutation after approval.",
        "Built visual under-target detection in the report grid so users and management could identify KPI exceptions through visual status indicators without manually reading every value.",
        "Built a Template KPI Summary module so authorized governance users could curate selected KPIs into an executive-facing summary page.",
        "Stored summary template metadata, including selected KPI references and rendering duration, so KPI summaries could be reused without manually selecting KPIs every time.",
        "Designed the summary page to automatically refresh displayed KPI values when related achievement data changed or new monthly data became available.",
        "Added current-month summary indicators such as average, highest, and lowest achievement to help executives understand KPI performance without opening the detailed report grid.",
        "Implemented PDF export for dashboard and KPI summary views so selected KPI information could be distributed or archived as management-facing snapshots.",
        "Implemented yearly KPI rollover as KPI cycle preparation, allowing KPI structures to be carried forward while keeping scoring matrix and monthly achievement records cycle-specific.",
        "Implemented automated reminders using Hangfire background jobs to reduce manual follow-up work for missing monthly achievement submissions.",
        "Used an N-Layer architecture to separate presentation, application logic, data access, and persistence concerns for better maintainability.",
        "Used Razor as an SSR shell while treating controllers as routing and API boundaries, allowing the UI to combine server-rendered structure with modular client-side behavior.",
        "Used modular native JavaScript for client-side rendering to reduce dependency on jQuery/Ajax patterns and improve maintainability as the product grew.",
        "Kept jQuery/Ajax where it aligned with existing company patterns or compatibility needs, while shifting core client behavior toward native JavaScript modules.",
        "Used token-based frontend context to support role-aware client-side behavior while keeping authorization boundaries governed by server-side RBAC and application checks.",
        "Used EF Core as the primary data access layer to keep domain logic visible in the application layer, avoiding premature reliance on database-heavy logic.",
        "Used Redis to support session and caching needs within the application environment.",
        "Integrated company SSO / WSO authentication so users could access the platform through the existing enterprise identity flow.",
        "Migrated the platform from .NET 6 to .NET 8 to modernize the codebase and align more closely with evolving enterprise .NET standards.",
        "Prepared the platform for multi-site expansion through a schema-based multi-tenant design, allowing tenant-specific KPI data to be separated without duplicating the entire application infrastructure.",
        "Designed tenant and role context handling for an enterprise SSO environment without tenant-specific subdomains: users authenticated through the centralized SSO/WSO flow, then selected the valid tenant or role context available to them.",
        "Used token-based frontend context, Redis, and cookie/session handling to preserve selected tenant and role context while keeping authorization boundaries enforced by server-side RBAC and application checks.",
        "Developed PDF reporting support to render KPI dashboard and summary views into management-ready documents for review, distribution, or archival purposes.",
        "Protected the platform's architectural value by defending its native operational efficiency against IT proposals to replace it with generic external tools like Tableau.",
        "Designed the system to function as a self-sustaining Decision Support System, reducing operational dependency on the IT department for day-to-day permission management and report generation.",
      ],

      diagram: {
        src: "/diagrams/msdigit-solution.svg",
        alt: "MsDigi system architecture",
        caption: "FIGURE 02 — SYSTEM ARCHITECTURE",
      },
    },
    impact: {
      metrics: [
        {
          value: "MULTI-KPI",
          label: "GOVERNED KPI STRUCTURES ACROSS FUNCTIONS",
        },
        { value: "IMMEDIATE", label: "BUSINESS USER ADOPTION AFTER LAUNCH" },
        { value: "EXEC", label: "USED FOR EXECUTIVE-LEVEL KPI VISIBILITY" },
        {
          value: "10+",
          label: "DEPARTMENTS / FUNCTIONS INVOLVED IN KPI STREAMS",
        },
        { value: "APPROVAL-GATED", label: "MONTHLY KPI REPORTING WORKFLOW" },
        {
          value: "AUTOMATION",
          label: "YTD CALCULATION, REMINDER, AND SUMMARY REFRESH",
        },
        {
          value: "MULTI-SITE READY",
          label: "PREPARED FOR TENANT-BASED KPI EXPANSION",
        },
      ],
      qualitative:
        "MsDigi became more than a technical delivery project; it evolved into a governed KPI workflow platform and the definitive source of truth for monthly Management Review and Board-level evaluation. By designing the UI/UX around familiar Excel-like patterns, I reduced adoption friction for PIC users while automating calculation, multi-entity validation, visual under-target detection, and executive summary rendering. The platform proved its native value over external BI tools, demonstrating end-to-end ownership across product discovery, system analysis, workflow design, fullstack implementation, and maintainable enterprise architecture within a highly constrained environment.",
    },
    next: "ecalmas",
  },
  {
    id: "ecalmas",
    caseId: "EC-ALMAS",
    archiveDate: "2026-Q2",
    index: "02",
    codename: "OPERATION: ECALMAS",
    mission: "LEGACY SYSTEM RECONSTRUCTION & GOVERNANCE",
    vector: "UNDOCUMENTED 37-TABLE DB → MODERNIZED CALIBRATION WORKFLOW",
    operative: "SOLE_OPERATIVE // PRODUCT ENGINEER / SYSTEM ANALYST",
    status: "UAT DELIVERED (30 DAYS)",
    orbit: "QUALITY & CALIBRATION MANAGEMENT",
    clearance: "SOLE_OPERATIVE",
    classification: "PUBLIC",
    stack: [
      "C#",
      ".NET 10",
      "ASP.NET CORE MVC",
      "ENTITY FRAMEWORK CORE",
      "DAPPER",
      "SQL SERVER",
      "REDIS",
      "HANGFIRE",
      "NATIVE JAVASCRIPT",
      "BOOTSTRAP",
      "APACHE ECHARTS",
      "ROTATIVA (PDF)",
      "CLOSEDXML",
      "WSO / API GATEWAY",
    ],
    problem: {
      context:
        "Ecalmas (eQuality) was a legacy calibration management system requiring a complete structural overhaul. Operating without formal specifications or BRDs, the mission required extracting business rules hidden inside 37 undocumented database tables to modernize workflows for tool registration, multi-tier approvals, and dashboard analytics across PICs, Dept Heads, and Technicians.",

      painPoints: [
        "Zero functional documentation existed, leaving critical business rules locked inside an opaque legacy database schema.",
        "Calibration requests relied heavily on manual follow-ups, causing bottlenecks across a 4-tier approval chain (Dept Head → SPV → Staff → Technician).",
        "Analytical needs were forcefully routed through an external BI tool (Tableau), creating unnecessary licensing and integration overhead for basic aggregations.",
        "Missed calibration schedules were frequent due to the lack of automated tracking for Next Calibration dates and tool intervals.",
        "Calculation file uploads lacked structural validation, making document archival and audit compliance difficult to track.",
      ],
    },
    process: {
      summary:
        "I approached the reconstruction as an investigative reverse-engineering operation. Without formal documentation, I mapped 37 undocumented tables (including mAlatUkur, TrAlatUkur, and mCalReport) to extract the core business logic. I aligned directly with domain stakeholders to reconstruct the multi-tier approval matrix. Recognizing the simplicity of their analytical needs, I advocated for and executed the removal of Tableau, replacing it with a native embedded dashboard to drastically reduce system complexity and protect operational value.",
    },
    solution: {
      summary:
        "Deployed Ecalmas as a modernized ASP.NET Core MVC application targeting .NET 10. The rebuilt platform governs the full calibration lifecycle: multi-tier approvals, template-based file uploads, native analytics, and legacy integration. The Tableau dependency was fully eliminated. Automated Hangfire jobs now drive email reminders, and Dapper powers background syncs with legacy HPLC/LISA databases.",
      keyDecisions: [
        "Reverse-engineered 37 undocumented legacy tables into clean Entity Framework Core configurations to reconstruct business logic and entity relationships.",
        "Designed a dynamic request and approval workflow supporting Tool Registration, Inactivation, Reactivation, and Calibration pipelines.",
        "Replaced external Tableau dependencies with an embedded Apache ECharts dashboard, proving the application layer could natively handle operational analytics.",
        "Enforced calculation upload governance by requiring technicians to generate a validated Download Number before submitting calibration results.",
        "Implemented automated Hangfire background jobs to handle pending approval notifications and recurring calibration schedule reminders.",
        "Integrated legacy HPLC/LISA ecosystems via background Dapper queries to autonomously sync parameter, sample, and result data into the application context.",
        "Engineered an embedded document pipeline using Rotativa for PDF rendering and ClosedXML for Excel reports.",
        "Designed a granular Role-Based Access Control (RBAC) system managing view, edit, delete, and print permissions at the module and menu levels.",
        "Decoupled authentication, supporting both internal database logic and WSO/Global API gateway integration via Redis session caching and JWTs.",
      ],
      // diagram: {
      //   src: "/diagrams/ecalmas-solution.svg",
      //   alt: "Ecalmas system architecture and legacy integration flow",
      //   caption: "FIGURE 01 — RECONSTRUCTED SYSTEM ARCHITECTURE & INTEGRATION",
      // },
    },
    impact: {
      metrics: [
        {
          value: "30 DAYS",
          label: "DELIVERED TO UAT FROM ZERO DOCUMENTATION",
        },
        {
          value: "37",
          label: "UNDOCUMENTED LEGACY TABLES REVERSE-ENGINEERED",
        },
        {
          value: "NATIVE",
          label: "EMBEDDED ANALYTICS (TABLEAU ELIMINATED)",
        },
        {
          value: "AUTOMATED",
          label: "CALIBRATION REMINDERS & BACKGROUND HPLC SYNC",
        },
      ],
      qualitative:
        "OPERATION: ECALMAS successfully transitioned an opaque legacy application into a governed, automated calibration workflow platform. By reverse-engineering the database schema, I preserved essential workflow fidelity while completely modernizing the technical foundation. The strategic implementation of an embedded ECharts dashboard eliminated the operational dependency on external BI tools. Reaching UAT within one month demonstrated the ability to navigate extreme ambiguity, extract rules from legacy code, and deliver enterprise-grade operational infrastructure.",
    },
    next: "exit-clearance",
  },
  {
    id: "exit-clearance",
    caseId: "EXIT-CLR",
    archiveDate: "2026-Q2",
    index: "03",
    codename: "OPERATION: EXIT CLEARANCE",
    mission: "GOVERNANCE & TRANSITION CONTROL",
    vector: "INFORMAL EXPECTATIONS → DOCUMENTED ACCOUNTABILITY",
    operative: "SOLE_OPERATIVE // PROD_ENG / SYS_ANALYST",
    status: "CLOSED",
    orbit: "CONTRACT TRANSITION & BUSINESS CONTINUITY",
    clearance: "PROFESSIONAL EXIT",
    classification: "CLASSIFIED",
    stack: [
      "DOCUMENTATION",
      "PROJECT GOVERNANCE",
      "STAKEHOLDER COMMUNICATION",
      "RISK MANAGEMENT",
      "HANDOVER CONTROL",
      "CONTRACT REVIEW",
    ],
    problem: {
      context:
        "During the final stage of my contract period at a multinational subsidiary, I went through an exit clearance and contract transition process while still being involved in internal system initiatives. The situation exposed a gap between formal project documentation, informal delivery expectations, and contract timing clarity. Instead of treating the process as a purely administrative exit, I approached it as a governance and accountability problem.",
      painPoints: [
        "The new contract draft was provided after the previous contract period had already ended, creating ambiguity around employment continuity and responsibility boundaries.",
        "Some delivery expectations were accelerated informally, while approved project documents still indicated a different baseline timeline.",
        "Verbal instructions, chat discussions, and informal expectations created potential accountability risk if they were not supported by written evidence.",
        "Critical system knowledge had to be transferred properly to reduce dependency and maintain business continuity after my exit.",
      ],
    },
    process: {
      summary:
        "I reviewed the situation through a governance lens: separating formal project baselines from informal acceleration requests, preserving written evidence, clarifying responsibility boundaries, and preparing handover context for the systems I had worked on. The process required factual communication, restraint, and careful documentation rather than emotional escalation.",
      diagram: {
        src: "/diagrams/exit-clearance-process.png",
        alt: "Exit clearance governance process",
        caption: "FIGURE 03 — EXIT GOVERNANCE FLOW",
      },
    },
    solution: {
      summary:
        "I handled the transition by focusing on documentation, accountability, and continuity. Instead of relying on verbal interpretation, I used formal references such as contract dates, approved project timelines, meeting notes, chat records, and handover context to create a clearer boundary between what was officially documented, what was informally expected, and what had actually been delivered.",
      keyDecisions: [
        "Separated approved project baselines from informal acceleration targets to avoid judging delivery against undocumented expectations.",
        "Maintained evidence-based communication using dates, documents, meeting notes, and written records.",
        "Focused the exit process on business continuity, including knowledge transfer, pending items, known constraints, and system ownership clarity.",
        "[REDACTED — CLEARANCE LEVEL INSUFFICIENT]",
      ],
    },
    impact: {
      metrics: [
        {
          value: "1",
          label: "CONTRACT TRANSITION REVIEWED THROUGH GOVERNANCE LENS",
        },
        { value: "█████", label: "KEY RISK AREAS IDENTIFIED" },
        { value: "0", label: "ESCALATION HANDLED WITHOUT PUBLIC CONFLICT" },
        {
          value: "100%",
          label: "FOCUS ON FACTUAL AND DOCUMENTED COMMUNICATION",
        },
      ],
      qualitative:
        "This experience strengthened my understanding that professional software work is not only about building and deploying systems, but also about protecting accountability, preserving decision records, and ensuring continuity when ownership changes. It shaped my view that governance, documentation, and handover readiness are part of product engineering maturity.",
    },
  },
];

export function getCaseById(id: string): CaseStudy | undefined {
  return CASES.find((c) => c.id === id);
}
