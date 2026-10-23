import type { Metadata } from "next";
import "./cv.css";

export const metadata: Metadata = {
  title: "CV",
  description: "Professional experience and qualifications of Frederika Onofrejová.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  alternates: { canonical: "/cv" },
  openGraph: {
    title: "CV | Frederika Onofrejová",
    description: "Professional experience and qualifications of Frederika Onofrejová.",
    url: "/cv",
  },
};

const cv = {
  "name": "FREDERIKA ONOFREJOVÁ",
  "headline": [
    "FINANCE DIRECTOR",
    "HEAD OF FINANCE",
    "CONTROLLERSHIP & FP&A"
  ],
  "contact": [
    "Seattle, WA",
    "206-291-7793",
    "frederika@frederikaonofrejova.com",
    "linkedin.com/in/frederikaonofrejova"
  ],
  "profile": "Finance leader with eight years at Xevo, a software business within publicly traded Lear Corporation, including approximately four years of broad finance ownership across US and Japan entities. Partners directly with VP-level leadership on financial planning, forecasting and business decisions, while independently managing controllership, financial reporting and SOX compliance. Combines strategic judgment with hands-on execution, cross-border coordination and process improvement.",
  "expertise": [
    "Finance Function Leadership",
    "Budgeting & Forecasting",
    "Controllership",
    "Financial Reporting",
    "Executive Business Partnership",
    "SOX & Internal Controls",
    "International Finance (US/Japan)",
    "Cost Management"
  ],
  "xevo": {
    "company": "XEVO",
    "roles": [
      {
        "title": "Financial Controller",
        "dates": "April 2022 – Present",
        "bullets": [
          "Own broad finance responsibilities for Xevo US and Japan, integrating financial planning, budgeting, forecasting, accounting oversight, reporting and controls.",
          "Independently develop FP&A judgments and recommendations, partnering directly with VP-level leadership on financial performance and business decisions.",
          "Lead preparation and analysis of financial forecasts, budgets and operating results; explain key business drivers and financial variances.",
          "Oversee controllership activities and SOX-related compliance within the governance framework of publicly traded parent Lear Corporation.",
          "Coordinate cross-border finance processes and reporting with Japan counterparts, including intercompany and transfer-pricing-related financial work.",
          "Lead finance knowledge transfer and business continuity planning during the 2026 wind-down of Xevo operations."
        ]
      },
      {
        "title": "Senior Accountant",
        "dates": "August 2021 – March 2022",
        "bullets": [
          "Managed general ledger accounting, month-end close, revenue recognition and reconciliations; mentored junior accountants and supported SOX controls."
        ]
      },
      {
        "title": "Accountant II",
        "dates": "October 2018 – August 2021",
        "bullets": [
          "Managed accounts payable and expense reviews, improved AP processes, prepared cash-flow reports and supported audit requests."
        ]
      }
    ]
  },
  "impact": [
    "Contributed to approximately $73K in favorable Q3 2026 operating expenses versus budget through spending controls, including $39K in software subscription savings.",
    "Oversaw financial reporting for Q3 2026 consolidated US/Japan results of $3.1M in revenue and $1.8M in operating income, approximately $1.41M above budget (company results, not solely attributable to finance)."
  ],
  "earlier": [
    {
      "company": "TOMMY BAHAMA",
      "location": "Seattle, WA",
      "roles": [
        {
          "title": "Sales Auditor",
          "dates": "June 2015 – October 2018",
          "bullets": [
            "Audited retail and e-commerce sales, investigated transaction discrepancies, and supported reconciliations and month-end close."
          ]
        }
      ]
    },
    {
      "company": "INDITEX",
      "location": "London & Oxford, UK",
      "roles": [
        {
          "title": "Sales Accountant",
          "dates": "November 2011 – December 2014",
          "bullets": [
            "Audited and reconciled sales transactions across UK and Ireland operations, investigated discrepancies and chargebacks, and supported month-end close."
          ]
        },
        {
          "title": "Head Cashier, Massimo Dutti",
          "dates": "October 2009 – November 2011",
          "bullets": []
        },
        {
          "title": "Head Cashier, Zara",
          "dates": "October 2008 – September 2009",
          "bullets": []
        }
      ]
    }
  ],
  "education": [
    {
      "qualification": "Ing. in Mechanical Engineering",
      "institution": "Technical University of Košice",
      "year": "2008"
    },
    {
      "qualification": "Accounting & Economics",
      "institution": "Business Academy, Košice",
      "year": "2002"
    },
    {
      "qualification": "AAT Level 3 in Accounting",
      "institution": "Association of Accounting Technicians",
      "year": "2015"
    }
  ],
  "systems": "[Confirm ERP, financial reporting, planning, Excel and BI tools used professionally]"
} as const;

function Dot() {
  return <span className="cv-dot" aria-hidden="true">·</span>;
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="cv-bullets">
      {items.map((item) => (
        <li key={item}>{highlightNumbers(item)}</li>
      ))}
    </ul>
  );
}

function highlightNumbers(value: string) {
  return value.split(/(\$73K|\$39K|\$3\.1M|\$1\.8M|\$1\.41M)/g).map((part, index) =>
    /^\$/.test(part) ? <strong key={index}>{part}</strong> : part,
  );
}

function Role({ role }: { role: { title: string; dates: string; bullets: readonly string[] } }) {
  return (
    <div className="cv-role">
      <p className="cv-role__heading">
        <span className="cv-role__title">{role.title}</span>
        <Dot />
        <span className="cv-role__dates">{role.dates}</span>
      </p>
      {role.bullets.length > 0 && <BulletList items={role.bullets} />}
    </div>
  );
}

function SectionTitle({ children, id }: { children: React.ReactNode; id: string }) {
  return <h2 className="cv-section__title" id={id}>{children}</h2>;
}

export default function CvPage() {
  return (
    <article className="cv-page">
      <header className="cv-intro">
        <div className="shell cv-intro__inner">
          <h1>{cv.name}</h1>
          <p className="cv-intro__headline">
            {cv.headline.map((part, i) => (
              <span className="cv-intro__unit" key={part}>
                {i > 0 && <Dot />}
                {part}
              </span>
            ))}
          </p>
          <address className="cv-intro__contact">
            <span>{cv.contact[0]}</span>
            <Dot />
            <a href="tel:+12062917793">{cv.contact[1]}</a>
            <Dot />
            <a href={`mailto:${cv.contact[2]}`}>{cv.contact[2]}</a>
            <Dot />
            <a href="https://www.linkedin.com/in/frederikaonofrejova/" target="_blank" rel="noopener noreferrer">{cv.contact[3]}</a>
          </address>
        </div>
      </header>

      <div className="cv-body shell">
        <section className="cv-section" aria-labelledby="cv-profile">
          <SectionTitle id="cv-profile">Executive Profile</SectionTitle>
          <p className="cv-profile">{cv.profile}</p>
        </section>

        <section className="cv-section" aria-labelledby="cv-expertise">
          <SectionTitle id="cv-expertise">Core Expertise</SectionTitle>
          <p className="cv-expertise">
            {cv.expertise.map((item, i) => (
              <span className="cv-expertise__item" key={item}>
                {i > 0 && <Dot />}
                {item}
              </span>
            ))}
          </p>
        </section>

        <section className="cv-section" aria-labelledby="cv-experience">
          <SectionTitle id="cv-experience">Professional Experience</SectionTitle>
          <div className="cv-employer">
            <h3 className="cv-employer__name">{cv.xevo.company}</h3>
            {cv.xevo.roles.map((role) => <Role role={role} key={role.title} />)}
          </div>
        </section>

        <section className="cv-section" aria-labelledby="cv-impact">
          <SectionTitle id="cv-impact">Selected Business Impact</SectionTitle>
          <BulletList items={cv.impact} />
        </section>

        <section className="cv-section cv-section--earlier" aria-labelledby="cv-earlier">
          <SectionTitle id="cv-earlier">Earlier Experience</SectionTitle>
          {cv.earlier.map((employer) => (
            <div className="cv-employer" key={employer.company}>
              <h3 className="cv-employer__name">{employer.company}</h3>
              <p className="cv-employer__location">{employer.location}</p>
              {employer.roles.map((role) => <Role role={role} key={role.title} />)}
            </div>
          ))}
        </section>

        <section className="cv-section" aria-labelledby="cv-education">
          <SectionTitle id="cv-education">Education &amp; Professional Development</SectionTitle>
          <div className="cv-education">
            {cv.education.map((item) => (
              <p className="cv-education__entry" key={item.qualification}>
                <strong>{item.qualification}</strong><Dot />
                <span>{item.institution}</span><Dot />
                <span>{item.year}</span>
              </p>
            ))}
          </div>
        </section>

        <section className="cv-section" aria-labelledby="cv-tools">
          <SectionTitle id="cv-tools">Systems &amp; Tools</SectionTitle>
          <p className="cv-placeholder">{cv.systems}</p>
        </section>
      </div>
    </article>
  );
}
