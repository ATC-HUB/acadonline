<template>
    <ul class="swiper-wrapper nav">
        <li v-for="coursecategory in categories" :key="coursecategory" class="swiper-slide">
            <button class="" data-bs-toggle="tab" :data-bs-target="`#${coursecategory.category}`">
                {{coursecategory.category}}
            </button>
        </li>
    </ul>
</template>

<script>

import CourseData from "../data/CourseData.json";

export default {
    name: "CourseCategoryTabs",
  data() {
    return {
      categories: CourseData,
    }
    },
    props: {
        CourseData
    }
   
};

</script>