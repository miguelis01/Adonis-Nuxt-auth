<template>
  <div class="flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 class="text-2xl font-bold mb-6 text-gray-700 text-center">
        Registrar
      </h1>
      <form @submit.prevent="handleFormSumbmit">
        <div class="mb-4">
          <label for="name" class="block text-gray-600 mb-2">Name</label>
          <input
            type="text"
            id="name"
            v-model="form.full_name"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-600 mb-2">Email</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-600 mb-2"
            >Password</label
          >
          <input
            type="password"
            id="password"
            v-model="form.password"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          :disabled="isLoading"
          type="submit"
          class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Register
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const form = ref({
  email: "",
  full_name: "",
  password: "",
});
const isLoading = ref(false);

async function handleFormSumbmit() {
  console.log(form.value);
  try {
    isLoading.value = false;
    useFetch("http://localhost:3333/register", {
      method: "POST",
      body: form.value,
    });
  } catch (e) {
    console.log(e);
  } finally {
    isLoading.value = false;
    const router = useRouter();
    router.push("/");
  }
}
</script>

<style scoped>
body {
  font-family: "Inter", sans-serif;
}
</style>
