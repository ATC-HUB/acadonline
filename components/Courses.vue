<template>
    <div>
        <div class="courses-tabs-menu courses-active">
        <div class="swiper-container">
          <CourseCategoryTabs />
        </div>
        <CourseTabsPaginator />
      </div>

      <Tabs />
    </div>
</template>

<script>
export default{
    name: "Course"
}
</script>