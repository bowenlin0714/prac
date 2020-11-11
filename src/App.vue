<template lang="pug">
  #app
    #nav
      b-container
        b-row
          b-col(cols='12').text-center
            router-link(to='/') Home | &emsp;
            router-link(to='/about') About | &emsp;
            router-link(to='/cart') Cart
    router-view
  </div>
</template>
