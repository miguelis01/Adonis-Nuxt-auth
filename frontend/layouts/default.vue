<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <ul class="flex gap-4">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/login">Login</NuxtLink>
          <NuxtLink to="/register">Register</NuxtLink>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
