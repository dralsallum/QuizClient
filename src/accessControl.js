// src/utils/accessControl.js
export const hasAccess = (user, route, param) => {
  const freeAccessMap = {
    "/vocabulary/": ["set1"],
    "/audio/listen/": ["story4"],
    "/test/": ["chapter1"], // Added "/test/" as per your initial code
  };

  if (!user) {
    return { access: false, redirect: "/signup" };
  }

  const freeAccessParams = freeAccessMap[route];
  if (!user.isPaid && freeAccessParams && !freeAccessParams.includes(param)) {
    return { access: false, redirect: "/checkout" };
  }

  return { access: true };
};
