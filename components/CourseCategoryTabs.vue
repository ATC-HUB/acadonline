<template>
    <ul class="swiper-wrapper nav">
        <li v-for="coursecategory in categories" :key="coursecategory.id" class="swiper-slide">
            <button class="" data-bs-toggle="tab" :data-bs-target="`#${coursecategory.name}`">
                {{coursecategory.name}}
            </button>
        </li>
    </ul>
</template>

<script>

import CourseCategoryData from "../data/CourseCategoryData.json";
export default {
    name: "CourseCategoryTabs",
  data() {
    return {
      categories: CourseCategoryData,
    }
    },
    props: {
        CourseData: String
    }
   
};

</script>