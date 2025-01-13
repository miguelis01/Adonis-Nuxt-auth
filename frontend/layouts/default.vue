<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <ul class="flex gap-4">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink v-if="!token" to="/login">Login</NuxtLink>
          <NuxtLink to="/register">Register</NuxtLink>
          <NuxtLink v-if="token" @click="logout" to="/">Sair</NuxtLink>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup>
const token = ref(null);
onMounted(() => {
  token.value = localStorage.getItem("authToken");
});

const logout = () => {
  localStorage.removeItem("authToken");
  return navigateTo("/login");
};
</script>

<style scoped></style>
