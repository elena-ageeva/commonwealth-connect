import faker from "faker";
import zips from "./data/zipDataSmall";
// import zips from "./data/zipDataMA";

const fakeUserCount = 25;
const randomZips = true;

const productionLevels = [
  "Up to $200,000",
  "$200,000 – $499,999",
  "$500,000 – $749,999",
  "$750,000 – $999,999",
  "$1,000,000 – 1,499,999",
  "$1,500,000+"
];

const businessMixes = [
  "Fee-only",
  "Primarily fee-based",
  "Balanced fee and commission mix",
  "Primarily commission-based",
  "Commission-only"
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

export function generateFakeUser(hidden, practiceName, index) {
  const name = faker.name.firstName();
  const website = `${faker.internet.domainWord()}.com`;
  const fakeUser = {
    id: faker.random.uuid(),
    hidden: hidden !== undefined ? hidden : faker.random.boolean(),
    firstLogon: false,
    "Contact Information": {
      "Last Name": {
        canEdit: false,
        show: true,
        inFlyout: false,
        value: faker.name.lastName()
      },
      "First Name": {
        canEdit: false,
        show: true,
        inFlyout: false,
        canHide: false,
        value: name
      },
      "Preferred Name": {
        canEdit: false,
        show: true,
        inFlyout: false,
        value: faker.random.arrayElement([faker.name.firstName(), undefined])
      },
      "Practice Name": {
        canEdit: false,
        show: true,
        inFlyout: true,
        canHide: false,
        value: practiceName
      },
      "Primary Address": {
        canEdit: false,
        show: true,
        inFlyout: true,
        canHide: false,
        value: generateAddress(index)
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
        value: getRandomInt(1, 3)
      },
      "Licensed Staff Members": {
        canEdit: false,
        show: faker.random.boolean(),
        inFlyout: true,
        canHide: true,
        value: getRandomInt(1, 5)
      },
      "Unlicensed Staff Members": {
        canEdit: false,
        show: faker.random.boolean(),
        inFlyout: true,
        canHide: true,
        value: getRandomInt(1, 5)
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
        value: ["test"]
      },
      Designations: {
        canEdit: false,
        show: faker.random.boolean(),
        inFlyout: true,
        canHide: true,
        value: ["Test"]
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
        value: []
      },
      "Business Niche": {
        canEdit: true,
        show: faker.random.boolean(),
        inFlyout: true,
        canHide: true,
        value: ["niche"]
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
        value: []
      },
      "Mobile Phone Number": {
        canEdit: false,
        show: faker.random.boolean(),
        inFlyout: true,
        canHide: true,
        value: faker.phone.phoneNumberFormat(1)
      }
    }
  };
  return fakeUser;
}

function generateDemoData() {
  let practiceName = faker.company.companyName();
  const demoData = {
    user: generateFakeUser(false, practiceName, 10),
    directory: Array(fakeUserCount)
      .fill(undefined)
      .map((e, i) => {
        if (i > 0 && i % 5 === 0) {
          practiceName = faker.company.companyName();
        }
        if (!randomZips) {
          practiceName = faker.company.companyName();
        }
        const fakeUser = generateFakeUser(undefined, practiceName, i);
        return fakeUser;
      })
  };
  return demoData;
}

export default generateDemoData;
