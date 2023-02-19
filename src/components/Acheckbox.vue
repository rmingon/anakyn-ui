<template>
  <div class="flex items-center">
    <input type="checkbox" value="yes" class="opacity-0 absolute h-8 w-8 cursor-pointer" />
    <div class="bg-white border rounded-md border-gray-200 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-1 focus-within:border-gray-500">
      <svg class="fill-current hidden w-2.5 h-2.5 text-white pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <g transform="translate(-9 -11)" fill="#FFF" fill-rule="nonzero">
            <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script scoped>

</script>

<style scoped>
  input:checked + div {
    @apply border-gray-300 bg-amber-600;
  }
  input:checked + div svg {
    @apply block;
  }
</style>