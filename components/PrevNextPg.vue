<template>
  <div>
    <!-- Pagination for Blog Pages -->
    <hr class="mb0" />
    <div class="row between-xs m20">
      <div class="col-xs-6 start-xs">
        <span v-if="prevPg">
          <NuxtLink v-if="prevPg == 1" :to="'/post'"> 이전 페이지 </NuxtLink>
          <NuxtLink v-else :to="'/post/page/' + prevPg"> 이전 페이지 </NuxtLink>
        </span>
        <span v-else>&nbsp;</span>
      </div>
      <div class="col-xs-6 end-xs">
        <span v-if="nextPg">
          <NuxtLink v-if="nextPg" :to="'/post/page/' + nextPg">
            다음 페이지
          </NuxtLink>
        </span>
        <span v-else>&nbsp;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prevPg: {
      type: Number,
      default: () => null,
    },
    nextPg: {
      type: Number,
      default: () => null,
    },
  },
};
</script>
