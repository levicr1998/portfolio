<template>
  <div class="header">
      <header>
    <ul class="header-items float-right">
      <li class="header-item p-3">Home</li>
      <li class="header-item p-3">About</li>
      <li class="header-item p-3">Projects</li>
      <li class="header-item p-3">Contact</li>
    </ul>
    </header>
  </div>
</template>


<style lang="scss">
header{
  height: 3rem;
  margin:1rem;
  z-index:1;
  position: relative;
}
.header-items{
  width: auto;
}
li {
    list-style-type: none;
    display: inline-flex;
    color:$primary-color;
    font-weight: 700;
    font-size:1.4rem;
    text-transform: uppercase;

}
</style>

<script>
export default {

}
</script>