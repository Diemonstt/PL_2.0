<template>
  <main class="h-screen">
    <div class="bg-orderPage h-full">
      <p
        class="break-normal bg-transparent opacity-30 font-bold font-mono uppercase flex justify-center items-center text-9xl"
      >
        Make an order
      </p>
      <!-- max-w-xs -->
      <form
        @submit.prevent="handleSubmit"
        class="border-solid border-2 my-7 max-w-xl mx-auto p-10 rounded-xl"
      >
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="label">Name</label>
            <input
              placeholder="Name"
              class="input"
              type="email"
              required
              v-model="email"
            />
          </div>
          <div>
            <label class="label">Surname</label>
            <input
              placeholder="Surname"
              class="input"
              type="password"
              required
              v-model="password"
            />
          </div>
          <div>
            <label class="label">Email</label>
            <input
              placeholder="Email"
              class="input"
              type="email"
              required
              v-model="email"
            />
          </div>
          <div>
            <label class="label">Phone Number</label>
            <input
              placeholder="Phone Number"
              class="input"
              type="password"
              required
              v-model="password"
            />
          </div>
          <div>
            <label class="label">From</label>
            <input
              placeholder="Select"
              class="input"
              type="email"
              required
              v-model="email"
            />
          </div>
          <div>
            <label class="label">To</label>
            <input
              placeholder="Select"
              class="input"
              type="password"
              required
              v-model="password"
            />
          </div>
        </div>
      </form>
      <div class="text-center flex place-content-between">
        <button
          class="bg-signUpBtn border-none py-3 px-5 mt-5 text-white rounded-md"
        >
          Registration
        </button>
        <button
          class="bg-loginBtn border-none py-3 px-5 mt-5 text-white rounded-md hover:bg-loginBtnHover"
        >
          Login
        </button>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      passwordErr: "",
    };
  },
  handleSubmit() {
    this.passwordErr =
      this.password.length > 5
        ? ""
        : "Small password! Need more than 9 symbols!";
  },
};
</script>
