<template>
  <div>
    <header>
      <p>nuxt-learn</p>
      <nav>
        <NuxtLink to="/">strona glonwna</NuxtLink>
        <NuxtLink to="/druga-strona">druga-strona</NuxtLink>
      </nav>
      <p>lol</p>
    </header>
    <slot />
    <footer>
      &copy;
      <a href="https://github.com/xMikuzoo" target="_blank">xMikuzoo</a> 2026
    </footer>
  </div>
</template>
<style lang="css" scoped>
header {
  display: flex;
  justify-items: center;
  justify-content: space-between;
  gap: 2rem;
}
nav {
  display: flex;
  justify-items: center;
  justify-content: space-between;
  gap: 2rem;
}
</style>
