<template>
<footer class="mui-bar mui-bar-tab">
			<router-link to="/I_ndex" class="mui-tab-item" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to="/Info_class" class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-extra mui-icon-extra-peoples"></span>
				<span class="mui-tab-label">学车班别</span>
			</router-link>
				<router-link to="/realit_y" class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-map"></span>
				<span class="mui-tab-label">场地实景</span>
			</router-link>
				<router-link to="/raider_s" class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-extra mui-icon-extra-dictionary"></span>
				<span class="mui-tab-label">驾考攻略</span>
			</router-link>
      	<router-link to="/Info_company" class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-extra mui-icon-extra-hotel"></span>
				<span class="mui-tab-label">公司简介</span>
			</router-link>
		</footer>
</template>

<script>

export default {
  name: "N_avbar",
  components: {
   
  }
};
</script>

<style scoped>
.mui-bar-tab .mui-tab-item.mui-active {
    color:#ffaa00;
}

</style>
