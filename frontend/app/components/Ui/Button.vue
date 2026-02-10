<template>
    <button :class="classList" class=" flex justify-center text-nowrap active:opacity-80 text-white gap-2  px-5 py-1  max-lg:text-sm rounded-md  transition">
      <slot/>
      {{props.name}} 
    </button>
</template>


<script setup>
  const props = defineProps({
    classList:{
      type:String,
      default:'dark'
    },
    name:{
      type:String,
      default : ''
    }
  })


</script>


<style scoped>
  .primary{
    background-color: #4A5DF9;
  }
  .primary:hover{
    background-color: #4150F7;
  }

  .secondary{
    background-color: #25292E;
  }
  .secondary:hover{
    background-color: #363C44;
  }

  .dark{
    background-color: black;
  }
  .dark:hover{
    background-color: #25282C;
  }
</style>