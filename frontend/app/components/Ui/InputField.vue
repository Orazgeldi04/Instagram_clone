<template>
  <div class="input-container">
    <slot/>
    <input
    class=" w-full"
      :value="props.modelValue"
      :placeholder="label"
      @input="emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script setup>
  const props = defineProps({
    modelValue:{
      type:String,
      default : ''
    },
    label: {
      type: String,
      default: ''
    }
  });

  const emit = defineEmits(['update:modelValue']);
</script>


<style scoped>
  .input-container {
  display: flex;
  border: 1px solid #797b7e; 
  padding: 8px 15px;
  transition: all 0.2s ease;
  outline: none;
  color: white;
  border-radius: 20px
}


.input-container:hover {
  border-color: rgb(183, 176, 176);       
}

input{
  outline: none;
  margin-left: 10px;
}
</style>