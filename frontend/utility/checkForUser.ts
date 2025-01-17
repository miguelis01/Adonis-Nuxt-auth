export const checkForUser = async () => {
  const sessionId: string | null = localStorage.getItem("sessionId");
  if (!sessionId) {
    return false;
  }
  return true;
};
