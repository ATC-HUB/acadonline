<template>
  <div class="section section-padding-02">
    <div class="container">
      <div class="row desk">
        <h3 class="big-texts">
          Start learning from anywhere, get empowered with job on demand skills
        </h3>
        <h6 class="sm-texts">
          You are very close to becoming the person of your dream. Kindly check
          from the available course below and register for any of our
          online/offline tech track courses.
        </h6>
      </div>
      <Courses />
    </div>

    <!-- All Courses BUtton Start -->
    <div class="courses-btn text-center container">
      <!-- <a href="courses.html" class="btn btn-secondary btn-hover-primary">Pagination</a> -->
      <nav aria-label="Page navigation example">
        <ul
          class="pagination btn-hover-primary"
          style="display: inline-flex !important"
        >
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThirdSection",
};
</script>

<style scoped>
.add-margin {
  margin-bottom: 0px;
  padding-top: 0px !important;
}
.sm-texts {
  text-align: center;
  padding: 0 170px;
  color: #888888;
  font-size: 20px;
  font-family: "Poppins";
  font-weight: 300;
  line-height: 35px;
  margin-top: 20px;
}

.big-texts {
  margin-top: 80px;
  text-align: center;
  padding: 0 180px;
  color: #150c21;
  font-family: "Poppins";
  font-weight: 500;
  font-size: 40px;
}

@media only screen and (max-width: 575px) {
  .brands {
    display: none;
  }

  .mob .texts {
    padding: inherit;
    text-align: left;
    margin-top: 50px;
    line-height: 40px;
  }

  .mob {
    margin: 0px 0px;
  }

  .big-texts,
  .sm-texts {
    text-align: left;
  }

  .sm-texts {
    padding: 0px 15px;
    font-size: 16px;
    line-height: 1.7;
    font-weight: 400;
  }

  .big-texts {
    margin-top: 0px;
    padding: 0px 15px;
    font-size: 30px;
    font-weight: 600;
  }
}

@media only screen and (min-width: 576px) and (max-width: 992px) {
  .texts,
  .big-texts,
  .sm-texts {
    padding: 0px 55px;
  }

  .big-texts {
    margin-top: 20px;
  }
}
</style>
