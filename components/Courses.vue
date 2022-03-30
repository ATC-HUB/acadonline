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

import CourseData from "../data/CourseData.json";
export default {
  name: "Course",
  data() {
    return {
      coursedata: CourseData,
    }
    },
};
</script>
