export function getDisplayName(user) {
  return user["Contact Information"]["Preferred Name"].value !== undefined &&
    user["Contact Information"]["Preferred Name"].show
    ? `${user["Contact Information"]["Preferred Name"].value} ${user["Contact Information"]["Last Name"].value}`
    : `${user["Contact Information"]["First Name"].value} ${user["Contact Information"]["Last Name"].value}`;
}
