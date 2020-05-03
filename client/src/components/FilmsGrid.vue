<template lang="html">
  <div class="film-wrapper">
    <film-grid-item v-for="(film, index) in films" :key="index" :film="film" />
  </div>
</template>

<script>

import FilmGridItem from './FilmGridItem'
export default {
  data(){
    return {
      films: []
    }
  },
  methods: {
    fetchData(){
      fetch("http://localhost:3000/api/films")
      .then(res => res.json())
      .then(films => this.films = films);
    }
  },
  mounted() {
    this.fetchData();
  },
  components: {
    'film-grid-item': FilmGridItem
  }
}
</script>

<style lang="css" scoped>

.film-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
