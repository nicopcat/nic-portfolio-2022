<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  padding: 0.5em;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 3px 3px 0 #271300;
  font-weight: 600;
}

div:hover {
  background-color: #fee37b;
  cursor: initial;
  /* color: white; */
}
</style>
