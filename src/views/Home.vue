<template>
  <div>
    <Box parallax 
      box-class="text-center" 
      box-style="padding-top: 200px !important; padding-bottom: 150px !important;" 
      header="VAST" header-style='
            font-weight: 200;
            letter-spacing: 10px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
                        "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", 
                        "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";'
      />

    <b-row>
      <b-col cols="4">
        <Box hover color="#6fc3df"  />
      </b-col>
      <b-col>
        <Box hover color="#8d82c4" />
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="8">
        <Box hover color="#ec8d81" />
      </b-col>
      <b-col>
        <Box hover color="#e7b788" />
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="4">
        <Box hover color="#8ea9e8" />
      </b-col>
      <b-col>
        <Box hover color="#87c5a4" />
      </b-col>
    </b-row>
    <Box box-style="padding-top: 150px !important; padding-bottom: 150px !important;" />
  </div>
</template>

<style scoped>

</style>

<script>
// @ is an alias to /src

import Box from '@/components/Box.vue'

export default {
  name: 'home',
  components: {
    Box
  }
}
</script>
