export const useloggedIn = () => {
  return useState("loggedIn", () => {
    onMounted(() => {
      const sessionId = localStorage.getItem("authToken");

      const router = useRouter();

      if (
        sessionId === null &&
        router.currentRoute.value.fullPath !== "/register"
      ) {
        router.push("/login");
        return;
      } else if (
        sessionId === null &&
        router.currentRoute.value.fullPath === "/register"
      ) {
        return;
      } else if (sessionId !== null) {
        router.push("/");
        return;
      }
    });
  });
};
