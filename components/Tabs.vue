<template>
    <div class="tab-content courses-tab-content">
        <div v-for="coursetab in coursedata" :key="coursetab" class="tab-pane fade show active" :id="`#${coursetab}`">
          <!-- All Courses Wrapper Start -->
          <div class="courses-wrapper">
            
              <CourseCard />
          </div>
          <!-- All Courses Wrapper End -->
        </div>
      </div>
</template>

<script>
export default{
    name: "Tabs",
    props: {
        coursedata: String
    }
}
</script>