import faker from "faker";
import zips from "./data/zipDataSmall";
// import zips from "./data/zipData";
// import zips from "./data/zipDataMA";

import { lists } from "./data/lists";

const fakeUserCount = 6000;
const randomZips = true;

const productionLevels = [
  "Up to $199,000",
  "$200,000 – $499,999",
  "$500,000 – $749,999",
  "$750,000 – $999,999",
  "$1,000,000 – $1,499,999",
  "$1,500,000 - $1,999,999",
  "$2,000,000 - $2,499,999",
  "$2,500,000 - $2,999,999",
  "$3,000,000+"
];

const businessMixes = [
  "Balanced fee and commission mix (50/50)",
  "Commission-only (100% of revenue from commission)",
  "Primarily commission-based (80%+ from commission)",
  "Fee-only (100% of revenue from fees)",
  "Primarily fee-based (80%+ of revenue from fees)"
];

const affiliationModels = [
  "Dual Registration",
  "Hybrid",
  "Corporate RIA",
  "RIA-Only"
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateAddress(index) {
  const newAddress = randomZips ? faker.random.arrayElement(zips) : zips[index];
  const addressObject = {
    street: faker.address.streetAddress(),
    city: newAddress.city,
    state: newAddress.state,
    zip: newAddress.zip,
    geocode: newAddress.latLong,
    distance: newAddress.distance
  };
  return addressObject;
}

function getRandomInterests(list) {
  const interestCount = getRandomInt(1, 10);
  const interests = [];
  while (interests.length < interestCount) {
    const newInterest = faker.random.arrayElement(lists[list]);
    if (!interests.includes(newInterest)) {
      interests.push(newInterest);
    }
  }
  return interests;
}

export function generateFakeUser(hidden, practiceName, index, address) {
  const name = faker.name.firstName();
  const website = `${faker.internet.domainWord()}.com`;
  const fakeUser = {
    id: faker.random.uuid(),
    hidden: false,
    firstLogon: false,
    type: faker.random.arrayElement(["Advisors", "Staff"]),
    "Contact Information": {
      "Last Name": {
        canEdit: false,
        show: true,
        inFlyout: false,
        value: hidden !== undefined ? "Smith" : faker.name.lastName()
      },
      "First Name": {
        canEdit: false,
        show: true,
        inFlyout: false,
        canHide: false,
        value: hidden !== undefined ? "Andy" : name
      },
      "Preferred Name": {
        canEdit: false,
        show: true,
        inFlyout: false,
        value:
          hidden !== undefined
            ? undefined
            : faker.random.arrayElement([faker.name.firstName(), undefined])
      },
      "Practice Name": {
        canEdit: false,
        show: true,
        inFlyout: true,
        canHide: false,
        value: hidden !== undefined ? "Andy Smith's Practice" : practiceName
      },
      "Primary Address": {
        canEdit: false,
        show: true,
        inFlyout: true,
        canHide: false,
        value: address || generateAddress(index)
      },
      Email: {
        canEdit: false,
        show: true,
        inFlyout: true,
        value: `${name}@${website}`
      },
      "Business Phone Number": {
        canEdit: false,
        show: true,
        inFlyout: true,
        canHide: false,
        value: faker.phone.phoneNumberFormat(1)
      },
      "Mobile Phone Number": {
        canEdit: false,
        show: faker.random.boolean(),
        inFlyout: true,
        canHide: true,
        value: faker.phone.phoneNumberFormat(1)
      },
      "Website Address": {
        canEdit: false,
        show: true,
        inFlyout: true,
        canHide: false,
        value: `www.${website}`
      }
    },
    "Practice Information": {
      "No. Advisors in Practice": {
        canEdit: false,
        show: faker.random.boolean(),
        inFlyout: true,
        canHide: true,
        value: getRandomInt(1, 10)
      },
      "Licensed Staff Members": {
        canEdit: false,
        show: faker.random.boolean(),
        inFlyout: true,
        canHide: true,
        value: getRandomInt(1, 15)
      },
      "Unlicensed Staff Members": {
        canEdit: false,
        show: faker.random.boolean(),
        inFlyout: true,
        canHide: true,
        value: getRandomInt(1, 15)
      },
      "OSJ Designation": {
        canEdit: false,
        show: faker.random.boolean(),
        inFlyout: true,
        canHide: true,
        value: faker.random.arrayElement(["Yes", "No"])
      }
    },
    "Business Information": {
      "Tenure with Commonwealth": {
        canEdit: false,
        show: faker.random.boolean(),
        inFlyout: true,
        canHide: true,
        value: `${getRandomInt(1, 31)} years`
      },
      "Job Title": {
        canEdit: true,
        show: faker.random.boolean(),
        inFlyout: true,
        canHide: true,
        value: faker.name.jobTitle()
      },
      "Job Responsibilities": {
        canEdit: true,
        show: faker.random.boolean(),
        inFlyout: true,
        canHide: true,
        value: getRandomInterests("Job Responsibilities")
      },
      Designations: {
        canEdit: false,
        show: faker.random.boolean(),
        inFlyout: true,
        canHide: true,
        value: faker.random.arrayElement(["CFP", []])
      },
      Production: {
        canEdit: false,
        show: faker.random.boolean(),
        inFlyout: true,
        canHide: true,
        value: faker.random.arrayElement(productionLevels)
      },
      "Affiliation Model": {
        canEdit: false,
        show: faker.random.boolean(),
        inFlyout: true,
        canHide: true,
        value: faker.random.arrayElement(affiliationModels)
      },
      "Business Interests": {
        canEdit: true,
        show: faker.random.boolean(),
        inFlyout: true,
        canHide: true,
        value: getRandomInterests("Business Interests")
      },
      "Business Niche": {
        canEdit: true,
        show: faker.random.boolean(),
        inFlyout: true,
        canHide: true,
        value: getRandomInterests("Business Niche")
      },
      "Business Mix": {
        canEdit: false,
        show: faker.random.boolean(),
        inFlyout: true,
        canHide: true,
        value: faker.random.arrayElement(businessMixes)
      },
      "Link to Professional Bio": {
        canEdit: true,
        show: faker.random.boolean(),
        inFlyout: true,
        canHide: true,
        value: "www.linkedin.com"
      }
    },
    "Personal Information": {
      "Personal Interests": {
        canEdit: true,
        show: faker.random.boolean(),
        inFlyout: true,
        canHide: true,
        value: getRandomInterests("Personal Interests")
      },
      "Other Interests": {
        canEdit: true,
        show: faker.random.boolean(),
        inFlyout: true,
        canHide: true,
        value: ""
      }
    }
  };
  return fakeUser;
}

function generateDemoData() {
  let practiceName = "Andy Smith's Practice";
  let address = generateAddress(1);
  const demoData = {
    user: generateFakeUser(false, practiceName, 10, address),
    directory: Array(fakeUserCount)
      .fill(undefined)
      .map((e, i) => {
        if (i > 0 && i % 5 === 0) {
          practiceName = faker.company.companyName();
          address = generateAddress(1);
        }
        // if (!randomZips) {
        //   practiceName = faker.company.companyName();
        //   address = generateAddress(1);
        // }
        const fakeUser = generateFakeUser(undefined, practiceName, i, address);
        return fakeUser;
      })
  };
  return demoData;
}

export default generateDemoData;
