<template>
  <div class="container mx-auto">
    <div class="flex flex-col h-screen text-center">
      <h1 class="flex-grow-0 text-5xl font-semibold text-green-700 mt-4">
        results
      </h1>
      <div class="flex-grow m-4">
        <ResultsBox />
      </div>
      <div class="flex-grow-0 m-4">
        <NewButton />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'page'
}
</script>
