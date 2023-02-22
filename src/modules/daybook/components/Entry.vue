<template>
  <div class="entry-container mb-3 pointer pt-2"
    @click="$router.push({name: 'entry', params: {id:10}})">
    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">22</span>
        <span class="mx-1 fs-5">feb</span>
        <span class="mx-2 fw-light">23</span>
    </div>

    <div class="entry-description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse aliquid consequuntur optio nihil labore? Eligendi quaerat id commodi error nulla quod dolorum culpa officiis eveniet mollitia, tenetur perferendis placeat aspernatur.
    </div>
  </div>
</template>

<script>
export default {
    name: "EntryLi"
}
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;
    &:hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }

    .entry-description{
        font-size: 12px;
    }
}


</style>