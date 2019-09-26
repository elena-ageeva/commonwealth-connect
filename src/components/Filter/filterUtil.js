import { getDisplayName, getDistance } from "../../util/util";
export function filterUser(user, filter, values, currentUser) {
  let include = false;
  switch (filter) {
    case "Audience":
      for (let i = 0; i < values.length; i++) {
        if (user.type === values[i]) {
          include = true;
        }
      }
      break;
    case "Practice Size":
      for (let i = 0; i < values.length; i++) {
        const advisors = user["Practice Information"][
          "No. Advisors in Practice"
        ].show
          ? user["Practice Information"]["No. Advisors in Practice"].value
          : 1;
        const licensedStaff = user["Practice Information"][
          "Licensed Staff Members"
        ].show
          ? user["Practice Information"]["Licensed Staff Members"].value
          : 0;
        const unlicensed = user["Practice Information"][
          "Unlicensed Staff Members"
        ].show
          ? user["Practice Information"]["Unlicensed Staff Members"].value
          : 0;
        const total = advisors + licensedStaff + unlicensed;
        const totals = values[i].split("-").map(value => parseInt(value, 10));
        if (total >= totals[0] && total <= totals[1]) {
          include = true;
        }
        if (totals[0] === 20 && total > 20) {
          include = true;
        }
      }
      break;
    case "searchTerm":
      if (
        getDisplayName(user)
          .toLowerCase()
          .indexOf(values.toLowerCase()) > -1
      ) {
        include = true;
      }
      if (
        user["Contact Information"]["Practice Name"].value
          .toLowerCase()
          .indexOf(values.toLowerCase()) > -1
      ) {
        include = true;
      }
      break;
    case "Distance":
      const distance = getDistance(currentUser, user);
      if (distance <= values.miles) {
        include = true;
      }
      break;
    case "OSJ Designation":
      if (user["Practice Information"]["OSJ Designation"].show) {
        values.forEach(value => {
          if (user["Practice Information"]["OSJ Designation"].value === value) {
            include = true;
          }
        });
      }
      break;
    case "Production":
      if (user["Business Information"]["Production"].show) {
        values.forEach(value => {
          if (user["Business Information"]["Production"].value === value) {
            include = true;
          }
        });
      }
      break;
    case "Business Mix":
      if (user["Business Information"]["Business Mix"].show) {
        values.forEach(value => {
          if (user["Business Information"]["Business Mix"].value === value) {
            include = true;
          }
        });
      }
      break;
    case "Affiliation Model":
      if (user["Business Information"]["Affiliation Model"].show) {
        values.forEach(value => {
          if (
            user["Business Information"]["Affiliation Model"].value === value
          ) {
            include = true;
          }
        });
      }
      break;
    case "Job Responsibilities":
    case "Business Interests":
    case "Business Niche":
    case "Personal Interests":
      if (
        user[
          filter === "Personal Interests"
            ? "Personal Information"
            : "Business Information"
        ][filter].show
      ) {
        values.forEach(value => {
          if (
            user[
              filter === "Personal Interests"
                ? "Personal Information"
                : "Business Information"
            ][filter].value.includes(value)
          ) {
            include = true;
          }
        });
      }
      break;
    case "Tenure":
      for (let i = 0; i < values.length; i++) {
        if (user["Business Information"]["Tenure with Commonwealth"].show) {
          const tenure = parseInt(
            user["Business Information"][
              "Tenure with Commonwealth"
            ].value.split(" ")[0],
            10
          );
          const totals = values[i].split("-").map(value => parseInt(value, 10));
          if (tenure >= totals[0] && tenure <= totals[1]) {
            include = true;
          }
          if (totals[0] === 20 && tenure > 20) {
            include = true;
          }
        }
      }
      break;
    default:
      break;
  }
  return include;
}
