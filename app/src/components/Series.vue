<template lang="html">
  <div class="d-flex vh-100">
      <div class="container vh-100 w-100 vertical-container">
          <div class="vertical-align">
              <span style="font-size: 12em; color: #FEBA2A;" class="section">
                  <i class="fas fa-exclamation-triangle"></i>
              </span>
              <div class="section header">
                  <p class="m rm-t">This page is under construction</p>
                  <p class="m rm-t">Please wait as the engineers work on improving your experience</p>
                  <p class="m rm-t">They don't pay us enough for this</p>
              </div>
          </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Series"
}
</script>

<style lang="css" scoped="css">

.section {
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-start: center;
}

.vertical-container{
    display: table;
}

.vertical-align{
  display: table-cell;
	vertical-align: middle;
}

</style>
