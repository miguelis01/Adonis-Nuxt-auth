<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav
        @logout="logoutTracker"
        class="container mx-auto p-4 flex justify-between"
      >
        <ul class="flex gap-4">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink v-if="!token" to="/login">Login</NuxtLink>
          <NuxtLink to="/register">Register</NuxtLink>
          <NuxtLink v-if="token" @click="invertLogoutTracker" to="/login"
            >Sair</NuxtLink
          >
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { checkForUser } from "~/utility/checkForUser";
import { logout } from "../utility/logout";

const updateTracker = ref(0);
const logoutTracker = ref(false);

const invertLogoutTracker = () => {
  logoutTracker.value = !logoutTracker.value;
};

useloggedIn();
const token = ref(false);
onMounted(async () => {
  console.log(await checkForUser());
  token.value = await checkForUser();
});

watch(updateTracker, async () => {
  token.value = await checkForUser();
});

watch(logoutTracker, async () => {
  logout();
  token.value = await checkForUser();
});

const increaseUpdateTracker = () => {
  updateTracker.value++;
};

provide("increaseUpdateTracker", increaseUpdateTracker);
</script>

<style scoped></style>
