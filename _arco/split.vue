<template>
  <Split :style="{
        height: '200px',
        width: '100%',
        minWidth: '500px',
        border: '1px solid var(--color-border)'
      }"
      v-model:size="size"
      min="80px"
    >
      <template #first>
        <TypographyParagraph>Right</TypographyParagraph>
      </template>

      <template #second>
        <TypographyParagraph>Left</TypographyParagraph>
      </template>
    </Split>
</template>

<script setup>
const {ref} from "vue"
const size = ref(0.5)
</script>

<script>
export default {
  name: 'App',
}
</script>
