/* =====================================================================
   PORTFOLIO DATA — the one file that holds all site content.
   Edit text, links, skills and projects here; js/script.js renders them.

   Conventions
   - Paths are written from the site root (e.g. "assets/pdf/resume.pdf").
     script.js adds "../" automatically on pages inside /projects/.
   - **double asterisks** inside a string show that text in the gold accent.
   - Never leave "#" or placeholder URLs. Remove a link instead.

   Quick index:  1 PERSONAL  ·  2 HERO  ·  3 ABOUT  ·  4 SKILLS
                 5 CERTIFICATIONS  ·  6 PROJECTS (add / edit / hide here)
   ===================================================================== */

const portfolioData = {

  /* ===== 1 · PERSONAL ===== */
  personal: {
    name: "Sneha Gupta",
    location: "Mumbai, India",
    email: "snehagupta.contact@gmail.com",
    phone: "+91 9359488119",
    whatsapp: "https://wa.me/919359488119",
    linkedin: "https://www.linkedin.com/in/snehagupta-analyst/",
    github: "https://github.com/snehagupta-data",
    resume: "assets/pdf/resume.pdf",
    resumeDownloadName: "Sneha_Gupta_Resume.pdf",
    availability: "Available for new opportunities"   // set to "" to hide the status pill
  },

  /* ===== 2 · HERO ===== */
  hero: {
    pill: "DATA · ANALYTICS · PROJECTS",
    nameLines: ["SNEHA", "GUPTA"],
    intro: "I dig into business questions with **SQL, Python and Power BI** — then build the dashboards and write-ups that show what I found.",
    photo: "assets/images/profile/sneha.webp"
  },

  /* ===== 3 · ABOUT ===== */
  about: {
    greeting: "Hello, I'm **Sneha**!",
    paragraphs: [
      "I'm a final-year **Data Science student** targeting Data Analyst / BI Analyst roles. Most of what I know comes from building and shipping full projects, not just courses: a lending-risk dashboard, an e-commerce profitability study, a discount-framing A/B test, a 100,000-order SQL database.",
      "I like problems where the numbers argue with the story — **revenue up but profit flat**, or a loan book that looks healthy until you split it by product. My usual route is PostgreSQL for the digging, Python for deeper checks, and Power BI to turn it into something a non-analyst can use.",
      "I care about the write-up as much as the query. Each project here says what the question was, what the data is, and what I'd recommend — and says plainly when a dataset is **synthetic**."
    ],
    education: {
      degree: "B.Sc. Data Science",
      school: "Annasaheb Vartak College",
      status: "Final year · CGPA 8.8"
    }
  },

  /* ===== 4 · SKILLS =====
     Original vertical-line grouped layout — four columns, each a category.
     icon = file name in assets/images/ui/ (omit for a text-only item). */
  skills: [
    { group: "**Programming** Languages", items: [
      { name: "SQL", icon: "sql.webp" },
      { name: "Python", icon: "python.webp" }
    ]},
    { group: "**Data Analytic** Tools", items: [
      { name: "Microsoft Excel", icon: "excel.webp" },
      { name: "Google Sheets", icon: "google_sheet.webp" },
      { name: "PostgreSQL", icon: "postgresql.webp" },
      { name: "MySQL", icon: "mysql.webp" },
      { name: "MongoDB", icon: "mongodb.webp" },
      { name: "Jupyter Notebook", icon: "jupyter.webp" },
      { name: "Google Colab", icon: "colab.webp" },
      { name: "Pandas", icon: "pandas.webp" },
      { name: "NumPy", icon: "numpy.webp" },
      { name: "SciPy", icon: "scipy.webp" }
    ]},
    { group: "**Data Visualization** & BI", items: [
      { name: "Power BI (DAX, Power Query)", icon: "power_bi.webp" },
      { name: "Tableau", icon: "tableau.webp" },
      { name: "Looker Studio", icon: "looker.webp" },
      { name: "Matplotlib", icon: "matplotlib.webp" },
      { name: "Seaborn", icon: "seaborn.webp" }
    ]},
    { group: "**Data Analytic** Methods", list: [
      "Data Cleaning", "Exploratory Data Analysis (EDA)", "KPI Analysis", "Time Series Analysis",
      "Dashboard Design", "Statistics", "Hypothesis Testing", "A/B Testing",
      "RFM & Cohort Analysis", "Data Modeling (Star Schema)"
    ]}
  ],

  /* ===== 5 · CERTIFICATIONS & SIMULATIONS =====
     Order: simulations first, Simplilearn certs after. Wording follows the resume.
     file = PDF in assets/pdf/. */
  certifications: [
    { title: "Data Visualisation Simulation", issuer: "Tata Group · Forage", date: "Aug 2025",
      note: "Framing a business scenario, choosing the right visuals, communicating insights.", file: "assets/pdf/data_visualisation.pdf" },
    { title: "Data Analytics Job Simulation", issuer: "Deloitte · Forage", date: "Aug 2025",
      note: "Data analysis and forensic technology tasks.", file: "assets/pdf/data_analytics.pdf" },
    { title: "Power BI for Beginners", issuer: "Simplilearn", date: "Jan 2026",
      note: "Data modeling, DAX basics and interactive dashboard creation.", file: "assets/pdf/power_bi.pdf" },
    { title: "Introduction to SQL", issuer: "Simplilearn", date: "Feb 2026",
      note: "Querying, joins, filtering, aggregation and database concepts.", file: "assets/pdf/sql.pdf" }
  ],

  /* ===== 6 · PROJECTS =====
     Order in this list = project number (01, 02, …) everywhere on the site,
     and also the Previous/Next order on case-study pages.
     Fields
       id          unique slug
       title / subtitle / category / type   card text
       tags        filter chips on projects.html (keep spelling consistent)
       tools       chips on cards and case-study pages
       description 1–2 sentences
       stats       up to 3 verified numbers  [{ value, label }]
       cardImage / cardImageAlt   original cover art shown on project CARDS
                   (homepage + All Projects grid) — now the real dashboard screenshot where one exists
       image / imageAlt   the real dashboard/cover shown on the CASE-STUDY page
                   hero — contained in a frame, never cropped
       domain      "finance" | "ecommerce" | "healthcare" | "sql" — frame icon
       flagship    true → small "Flagship Project" ribbon on the card
       github      repository URL
       page        case-study page, or omit — the card then links to GitHub only
       featured    true → also shown in "Featured Projects" on the home page
       visible     false → hidden everywhere (keeps the entry for later)          */
  projects: [

    // =====================================================
    // FUTURE PROJECTS — ADD / EDIT / REMOVE PROJECTS HERE
    // Copy the template at the bottom of this list, paste it where you want
    // the project to appear, and fill it in. Reorder by moving entries.
    // =====================================================

    {
      id: "shopkart",
      domain: "ecommerce",
      flagship: true,
      title: "ShopKart India",
      subtitle: "E-commerce Profitability & Growth Analytics",
      category: "E-commerce Analytics",
      type: "SQL + Python + Power BI",
      tags: ["SQL", "Python", "Power BI", "E-commerce"],
      tools: ["PostgreSQL", "Python", "Pandas", "SciPy", "Power BI", "DAX"],
      description: "Why isn't profit growing as fast as sales? A synthetic 12-table Indian marketplace analysed through discounting, returns, customer retention and delivery — from PostgreSQL to a Python notebook to an 8-page Power BI report.",
      stats: [
        { value: "₹1.75bn", label: "revenue" },
        { value: "12.33%", label: "profit margin" },
        { value: "12.8% → 12.1%", label: "margin, 2022 → 2025" }
      ],
      cardImage: "assets/images/projects/shopkart/shopkart-profitability.webp",
      cardImageAlt: "ShopKart India Power BI profitability intelligence dashboard",
      image: "assets/images/projects/shopkart/shopkart-profitability.webp",
      imageAlt: "ShopKart India profitability intelligence dashboard",
      github: "https://github.com/snehagupta-data/shopkart-india-ecommerce-analytics",
      page: "projects/shopkart.html",
      featured: true,
      visible: true
    },
    {
      id: "lendx",
      domain: "finance",
      title: "LendX Finance",
      subtitle: "Loan Portfolio Performance & Risk Analytics",
      category: "Finance Analytics",
      type: "SQL + Power BI dashboard",
      tags: ["SQL", "Power BI", "Finance"],
      tools: ["PostgreSQL", "Power BI", "DAX", "Power Query"],
      description: "Risk analysis of a fictional multi-segment lender: a PostgreSQL star schema, seven SQL analysis sections and a multi-page Power BI dashboard on defaults, customer quality and branch performance.",
      stats: [
        { value: "4,000", label: "loans analysed" },
        { value: "₹7.11bn", label: "loan book" },
        { value: "9.2%", label: "installment default rate" }
      ],
      cardImage: "assets/images/projects/lendx/lendx-executive-overview.webp",
      cardImageAlt: "LendX Finance Power BI executive overview dashboard",
      image: "assets/images/projects/lendx/lendx-executive-overview.webp",
      imageAlt: "LendX Finance Power BI executive overview dashboard",
      github: "https://github.com/snehagupta-data/LendX-Finance-Loan-Portfolio-Performance-Risk-Analytics",
      page: "projects/lendx.html",
      featured: true,
      visible: true
    },
    {
      id: "ab-test",
      domain: "ecommerce",
      title: "Discount Framing A/B Test",
      subtitle: "₹200 OFF vs 20% OFF on a ₹1,000 cart",
      category: "Experimentation & A/B Testing",
      type: "SQL + Python + Power BI",
      tags: ["SQL", "Python", "Power BI", "E-commerce", "A/B Testing"],
      tools: ["PostgreSQL", "SQLite", "Python", "statsmodels", "Power BI"],
      description: "Does the same ₹200 saving convert better as “₹200 OFF” or “20% OFF”? A full experiment workflow on 20,000 synthetic users: validation, SQL metrics, a two-proportion z-test, guardrail checks and a decision dashboard.",
      stats: [
        { value: "20,000", label: "users tested" },
        { value: "+1.61 pp", label: "conversion lift" },
        { value: "p < 0.001", label: "significance" }
      ],
      cardImage: "assets/images/projects/ab-test/ab-test-experiment-overview.webp",
      cardImageAlt: "A/B test dashboard comparing conversion for ₹200 OFF versus 20% OFF",
      image: "assets/images/projects/ab-test/ab-test-experiment-overview.webp",
      imageAlt: "A/B test experiment overview dashboard",
      github: "https://github.com/snehagupta-data/ecommerce-discount-ab-test",
      page: "projects/ab-test.html",
      featured: true,
      visible: true
    },
    {
      id: "customer-transaction",
      domain: "sql",
      title: "Customer Transaction & Revenue Analytics",
      subtitle: "A staged SQL analytics workflow on a 5-table database",
      category: "SQL Analytics",
      type: "SQL project",
      tags: ["SQL", "E-commerce"],
      tools: ["PostgreSQL", "pgAdmin", "SQL"],
      description: "An end-to-end SQL workflow on a simulated e-commerce database — schema design, validation, EDA, then revenue, customer, product and payment analysis with window functions, cohorts and RFM scoring.",
      stats: [
        { value: "100,000", label: "orders" },
        { value: "275,000", label: "order items" },
        { value: "3 yrs", label: "2022–2024" }
      ],
      cardImage: "assets/images/projects/customer-transaction/customer-transaction-cover.svg",
      cardImageAlt: "Customer Transaction & Revenue Analytics project cover",
      image: "assets/images/projects/customer-transaction/customer-transaction-cover.svg",
      imageAlt: "Customer Transaction & Revenue Analytics project cover",
      github: "https://github.com/snehagupta-data/Customer-Transaction-Revenue-Analytics-System-using-SQL",
      page: "projects/customer-transaction.html",
      featured: true,
      visible: true
    },
    {
      id: "hospital-analysis",
      domain: "healthcare",
      title: "Hospital Analysis Dashboard",
      subtitle: "Patient flow, revenue and inventory in one report",
      category: "Healthcare Analytics",
      type: "Power BI dashboard · tutorial-based",
      tags: ["Power BI", "Healthcare"],
      tools: ["Power BI", "DAX", "Power Query", "Data Model"],
      description: "Tutorial-based practice project. A five-page Power BI report that brings patients, billing, doctors, rooms and pharmacy stock into one model — built while following a guided tutorial to practise data modelling and report design.",
      stats: [
        { value: "30", label: "patients" },
        { value: "15", label: "doctors" },
        { value: "₹714K", label: "total revenue" }
      ],
      cardImage: "assets/images/projects/hospital-analysis/hospital-overview.webp",
      cardImageAlt: "Hospital analytics Power BI overview page",
      image: "assets/images/projects/hospital-analysis/hospital-overview.webp",
      imageAlt: "Hospital analytics Power BI overview page",
      github: "https://github.com/snehagupta-data/hospital-analysis-dashboard",
      page: "projects/hospital-analysis.html",
      featured: false,
      visible: true
    }

    /* ---------- TEMPLATE — copy, paste above (add a comma after the previous entry), edit ----------
    ,{
      id: "my-new-project",
      title: "Project Title",
      subtitle: "One-line subtitle",
      category: "Category",
      type: "SQL project",
      tags: ["SQL"],
      tools: ["PostgreSQL"],
      description: "One or two sentences: the question, the data, what you did.",
      stats: [ { value: "0", label: "label" } ],
      cardImage: "assets/images/projects/my-new-project/cover.svg",
      cardImageAlt: "Describe the cover artwork",
      image: "assets/images/projects/my-new-project/dashboard.webp",
      imageAlt: "Describe the dashboard screenshot",
      github: "https://github.com/snehagupta-data/your-repo",
      page: "projects/my-new-project.html",   // delete this line if there is no case study
      featured: false,
      visible: true
    }
    ------------------------------------------------------------------------------------------------ */
  ],

  /* Filter chips on projects.html. A chip only shows if at least one visible project has that tag. */
  projectFilters: ["SQL", "Python", "Power BI", "Excel", "A/B Testing", "Finance", "E-commerce", "Healthcare"]
};
