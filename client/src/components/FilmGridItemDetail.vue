<template lang="html">

<div v-if="selectedFilm">
<div>
{{selectedFilm.crew.director}}
{{selectedFilm.crew.producers}}
</div>
</div>

</template>

<script>

import{eventBus} from '@/main.js'
import FilmService from '@/services/FilmServices.js'

export default {
  name: 'film-detail',
  props: ['film'],
  data() {
    return {
      selectedFilm: null
    }
  },
mounted(){
  eventBus.$on('selected-film', (film) => {this.selectedFilm = film})
}}
</script>

<style lang="css" scoped>
</style>
