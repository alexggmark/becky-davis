<template>
  <div>
    <welcome-tiles/>
    <content-section/>
    <content-section reversed="true"/>
    <content-section/>
    <content-section reversed="true"/>
  </div>
</template>

<script>
import WelcomeTiles from '@/components/WelcomeTiles'
import ContentSection from '@/components/ContentSection'

export default {
  components: {
    WelcomeTiles,
    ContentSection,
  }
}
</script>

<style>

</style>