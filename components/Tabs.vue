<template>
    <div class="tab-content courses-tab-content">
        <div v-for="coursetab in TabsCategories" :key="coursetab.id" class="tab-pane fade active" :id="`${coursetab.name}`">
          <!-- All Courses Wrapper Start -->
          <div class="courses-wrapper">
            
              <CourseCard />
               
          </div>
          <!-- All Courses Wrapper End -->
        </div>
      </div>
</template>

<script>
import CourseCategoryData from "../data/CourseCategoryData.json";
export default {
  name: "Tabs",
  data() {
    return {
      TabsCategories: CourseCategoryData,
    };
  },
};
</script>