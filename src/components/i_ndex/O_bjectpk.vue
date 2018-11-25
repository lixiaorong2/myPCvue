<template>
    <div class="box">
        <div class="left_box"></div>
        <div class="center_box"></div>
        <div class="right_box"></div>
         </div>
</template>

<script>
export default {
  name: 'O_bjectpk',
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
    display: flex;
    height: 160px;
    flex-wrap: wrap;
    flex-grow: 1;
    align-items:center;
    margin: 10px 0px;
}
.left_box{
    width: 30%;
    height: 140px;
    border: 1px solid #ddd;
}
.center_box{
    width: 40%;
    height: 160px;
    border: 1px solid #ddd;
}
.right_box{
    width: 30%;
    height: 140px;
    border: 1px solid #ddd;
}

.mui-table-view-cell>a:not(.mui-btn) {
    position: relative;
    display: block;
    overflow: hidden;
    margin: -11px -15px;
    padding: inherit;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: inherit;
    color: #ffaa00;
}
.mui-grid-view.mui-grid-9 {
    background-color:white;
}
.mui-content {
    background-color: #efeff4;
    -webkit-overflow-scrolling: touch;
    margin: auto;
    width: 100%;
}
</style>
