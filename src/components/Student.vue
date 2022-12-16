<template>
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Thêm
  </button>
  

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <!-- input hoten-->
        <div class="form-floating mb-3">
          <input
            input
            v-model="student.hoten"
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Họ và tên</label>
        </div>
        <div class="form-floating mb-3">
          <input
            input
            v-model="student.namsinh"
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Năm sinh</label>
        </div>
        <div class="form-floating mb-3">
          <input
            input
            v-model="student.gioitinh"
            type="string"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Giới tính</label>
        </div>
        <div class="form-floating mb-3">
          <input
            input
            v-model="student.noisinh"
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Nơi sinh</label>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button @click="clickAdd" class="btn btn-primary">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userEdit: {
      tipe: Object,
      default: null,
    },
  },
  watch: {
    userEdit() {
      if (this.userEdit) {
        this.student = Object.assign({}, this.userEdit);
      } else {
        this.student = {};
      }
    },
  },
  name: "student-3",
  methods: {
    clickAdd() {
      this.$emit("save", this.student);
      this.student = {
        id: Math.floor(Math.random() * 1000),
        hoten: "",
        namsinh: "",
        gioitinh: "",
        noisinh: "",
      };
    },
  },

  data() {
    return {
      student: {
        id: Math.floor(Math.random() * 1000),
        hoten: "",
        namsinh: "",
        gioitinh: "",
        noisinh: "",
      },
    };
  },
};
</script>

<style>
</style>