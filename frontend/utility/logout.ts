export const logout = () => {
  const router = useRouter();
  localStorage.removeItem("sessionId");
  router.push("/login");
};
