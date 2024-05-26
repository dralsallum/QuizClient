export const hasAccess = (user, route, param) => {
  const freeAccessMap = {
    "/vocabulary/": ["set1", "story4"],
    "/meditation/listen/": ["story4"],
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
