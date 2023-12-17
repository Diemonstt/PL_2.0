<script setup>
// import { RouterLink } from "vue-router";
</script>
<template>
  <div class="h-screen">
    <div class="bg-cover bg-home-page h-full">
      <p
        class="pt-3 bg-transparent opacity-30 font-bold font-mono uppercase flex justify-center items-center text-10xl"
      >
        Welcome
      </p>
      <div class="flex flex-col justify-center items-center">
        <a href="/about" class="linksOnHomePage bg-purple hover:">About us</a>
        <a href="/order" class="linksOnHomePage bg-pink hover:bg-pinkHover"
          >Make an order</a
        >

        <a
          href="/account"
          class="linksOnHomePage bg-yellow hover:bg-yellowHover"
          >Account</a
        >
      </div>
    </div>
  </div>
</template>
