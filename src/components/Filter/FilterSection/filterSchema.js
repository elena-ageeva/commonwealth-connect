import { lists } from "../../../util/data/lists";
export const filterSchema = {
  Audience: {
    type: "checkbox list",
    options: ["Advisors", "Staff", "People in my practice"]
  },
  "Practice Size": {
    type: "checkbox list",
    options: ["1-5", "6-10", "11-15", "16-20", "20+"]
  },
  "OSJ Designation": {
    type: "checkbox list",
    options: ["Yes", "No"]
  },
  Tenure: {
    type: "checkbox list",
    options: [
      "1-5 years",
      "6-10 years",
      "11-15 years",
      "16-20 years",
      "20+ years"
    ]
  },
  Production: {
    type: "checkbox list",
    options: [
      "Up to $199,000",
      "$200,000 – $499,999",
      "$500,000 – $749,999",
      "$750,000 – $999,999",
      "$1,000,000 – $1,499,999",
      "$1,500,000 - $1,999,999",
      "$2,000,000 - $2,499,999",
      "$2,500,000 - $2,999,999",
      "$3,000,000+"
    ]
  },
  "Affiliation Model": {
    type: "checkbox list",
    options: ["Dual Registration", "Hybrid", "Corporate RIA", "RIA-Only"]
  },
  "Job Responsibilities": {
    placeHolder: "Find a Job Responsibility",
    items: lists["Job Responsibilities"]
  },
  "Business Interests": {
    placeholder: "Find a business interest",
    items: lists["Business Interests"]
  },
  "Business Niche": {
    placeholder: "Find a business niche",
    items: lists["Business Niche"]
  },
  "Personal Interests": {
    placeholder: "Find a personal interest",
    items: lists["Personal Interests"]
  }
};
