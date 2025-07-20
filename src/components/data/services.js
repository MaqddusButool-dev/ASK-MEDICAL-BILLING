import { FileText, BarChart3, Calculator, Shield, UserCheck, Briefcase as BriefcaseMedical } from 'lucide-react';
import image1 from "../../assets/RMC.jpg"
import image2 from "../../assets/medicalBelling.jpg"
import image3 from "../../assets/medicalCoding.jpg"
import image4 from "../../assets/Credentialing.jpg";
import image5 from "../../assets/Security.jpg";
import image6 from "../../assets/PracticeManagement.jpg";
export const servicesData = [
  {
    slug: "medical-billing-services",
    icon: FileText,
    title: "Medical Billing Services",
    shortDescription: "Our core service ensures accurate and timely claim submissions. We handle the entire billing process from start to finish, maximizing your reimbursement and reducing errors.",
    longDescription: "Medical billing is the backbone of your practice's revenue. Our dedicated team of certified billers uses state-of-the-art technology to manage the entire lifecycle of your claims. From charge entry and submission to payment posting and denial management, we ensure every claim is processed efficiently and accurately. We aggressively follow up on unpaid claims and work tirelessly to minimize denials, ensuring you receive the maximum possible reimbursement for the services you provide.",
    features: [
      "Electronic & Paper Claim Submission",
      "Aggressive Follow-up on Unpaid Claims",
      "Denial Management and Appeals",
      "Payment Posting and Reconciliation",
      "Patient Invoicing and Support"
    ],
    benefits: [
        "Increased cash flow and collections",
        "Reduced billing errors and claim denials",
        "Faster reimbursement turnaround times",
        "More time to focus on patient care"
    ],
    imageUrl: image2
  },
  {
    slug: "revenue-cycle-management",
    icon: BarChart3,
    title: "Revenue Cycle Management (RCM)",
    shortDescription: "A holistic approach to managing your practice's financial health. We optimize your entire revenue cycle to improve cash flow and long-term profitability.",
    longDescription: "Effective Revenue Cycle Management (RCM) goes beyond just billing. It's a holistic approach to managing all administrative and clinical functions that contribute to patient revenue. We analyze and optimize every touchpoint, from patient registration and eligibility verification to final payment. Our proactive strategies identify and address potential issues before they impact your bottom line, creating a seamless and profitable financial workflow for your practice.",
    features: [
      "Comprehensive Financial Analysis",
      "Workflow Optimization",
      "Fee Schedule Analysis",
      "Performance Reporting and KPIs",
      "Proactive RCM Strategy"
    ],
    benefits: [
        "Improved overall financial performance",
        "Enhanced operational efficiency",
        "Greater visibility into your revenue cycle",
        "Data-driven insights for better decision-making"
    ],
    imageUrl:  image1
  },
  {
    slug: "medical-coding-auditing",
    icon: Calculator,
    title: "Medical Coding & Auditing",
    shortDescription: "Certified coders ensure your services are coded correctly for maximum compliant reimbursement. We provide regular audits to maintain accuracy and compliance.",
    longDescription: "Accurate medical coding is critical for compliance and optimal reimbursement. Our AAPC-certified coders are experts in CPT, ICD-10, and HCPCS coding across a wide range of specialties. We ensure that your claims are coded to the highest level of specificity, reducing the risk of audits and denials. Regular internal audits help us maintain exceptional accuracy and identify opportunities for coding improvement and provider education.",
    features: [
      "CPT, ICD-10, and HCPCS Coding",
      "Specialty-Specific Coding Expertise",
      "Regular Coding Audits",
      "Payer-Specific Coding Requirements",
      "Compliance with Coding Regulations"
    ],
    benefits: [
        "Maximized compliant reimbursement",
        "Reduced risk of audits and penalties",
        "Improved claim acceptance rates",
        "Confidence in your coding and compliance"
    ],
    imageUrl: image3
  },
  {
    slug: "credentialing-services",
    icon: UserCheck,
    title: "Credentialing Services",
    shortDescription: "We manage the complex process of provider credentialing with insurance payers, ensuring you can accept a wide range of insurance plans without delay.",
    longDescription: "Provider credentialing is a tedious but essential process for any practice. Our experienced credentialing specialists handle everything from initial enrollment and re-credentialing to CAQH management and contract negotiations. We work diligently to ensure your providers are enrolled with payers as quickly as possible, preventing delays in reimbursement and allowing you to serve a broader patient population.",
    features: [
      "New Provider Enrollment",
      "Re-credentialing and Maintenance",
      "CAQH Management",
      "Contract Negotiations",
      "Network Participation Management"
    ],
    benefits: [
        "Faster enrollment with insurance payers",
        "Elimination of administrative headaches",
        "Uninterrupted revenue stream",
        "Ability to accept more insurance plans"
    ],
    imageUrl: image4
  },
  {
    slug: "compliance-security",
    icon: Shield,
    title: "Compliance & Security",
    shortDescription: "Stay ahead of regulatory changes with our robust compliance programs. We ensure your practice is fully HIPAA compliant and your data is secure.",
    longDescription: "In the ever-changing landscape of healthcare regulations, maintaining compliance is paramount. We provide comprehensive HIPAA compliance programs, including regular risk assessments, policy development, and staff training. Our secure, state-of-the-art infrastructure ensures that your patient data is protected at all times, giving you and your patients peace of mind.",
    features: [
      "Full HIPAA Compliance",
      "Secure Data Management",
      "Regular Risk Assessments",
      "Staff Compliance Training",
      "Audit Support"
    ],
    benefits: [
        "Protection against data breaches and fines",
        "Increased patient trust and confidence",
        "A culture of compliance within your practice",
        "Expert guidance during audits"
    ],
    imageUrl: image5
  },
  {
    slug: "practice-management-consulting",
    icon: BriefcaseMedical,
    title: "Practice Management Consulting",
    shortDescription: "Leverage our industry expertise to improve your practice's operational efficiency, patient satisfaction, and overall financial performance.",
    longDescription: "Our consulting services provide you with the strategic insights needed to thrive in a competitive healthcare market. We work with you to analyze your current operations, identify areas for improvement, and implement best practices. From optimizing patient scheduling to integrating new technologies, our goal is to help you build a more efficient, profitable, and patient-centric practice.",
    features: [
      "Operational Workflow Analysis",
      "Technology Integration Advice",
      "Patient Engagement Strategies",
      "Financial Benchmarking",
      "Growth and Expansion Planning"
    ],
    benefits: [
        "Streamlined practice operations",
        "Improved patient satisfaction and retention",
        "Enhanced profitability and growth potential",
        "A competitive edge in your market"
    ],
    imageUrl: image6
  }
];