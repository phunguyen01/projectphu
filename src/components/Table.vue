<template>
<!-- navbar search -->
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search..." aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

  <Student :userEdit="hocsinh" @save="clickSave" Title="This is Modal" />
  <!-- Button trigger modal -->

  <div class="container">
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Họ và tên</th>
          <th>Năm sinh</th>
          <th>Giới tính</th>
          <th>Nơi sinh</th>
          <th>Chức năng</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.hoten }}</td>
          <td>{{ user.namsinh }}</td>
          <td>{{ user.gioitinh }}</td>
          <td>{{ user.noisinh }}</td>
          <td>
            <button
              type="button"
              @click="clickEdit(user)"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              class="btn btn-outline-warning"
            >
              Edit
            </button>
            <button
              type="button"
              @click="clickDelete(user)"
              class="btn btn-outline-secondary"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script >
import Student from "./Student.vue";

export default {
  methods: {
    clickSave(userSave) {
      let index = this.users.findIndex((c) => c.id == userSave.id);
      if (index >= 0) {
        this.users.splice(index, 1, userSave);
      } else {
        let max = 0;
        let newId = 0;
        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].id > max) {
            max = this.users[i].id;
          }
        }
        newId = max + 1;
        userSave.id = newId;

        this.users.push(userSave);
      }
      return;
    },
    clickDelete(userDelete) {
      for (let i = 0; i < this.users.length; i++) {
        if (userDelete.id === this.users[i].id) {
          this.users.splice(i, 1);
        }
      }
    },
    clickEdit(userEdit) {
      console.log(userEdit);
      this.hocsinh = userEdit;
    },
  },
  components: {
    Student,
  },
  name: "Table-1",
  component: {
    Student,
  },
  data() {
    return {
      hocsinh: {},
      users: [
        {
          id: 1,
          hoten: "Đặng Tuấn Anh",
          namsinh: "08/05/2008",
          gioitinh: "Nam",
          noisinh: "Hà nội",
        },
        {
          id: 2,
          hoten: "Tăng Phương Chi",
          namsinh: "14/06/2008",
          gioitinh: "Nữ",
          noisinh: "Hải Phòng",
        },
        {
          id: 3,
          hoten: "Phạm Tiến Dũng",
          namsinh: "04/11/2008",
          gioitinh: "Nam",
          noisinh: "Thái Bình",
        },
        {
          id: 4,
          hoten: "Nguyễn Thái Dương",
          namsinh: "02/10/2008",
          gioitinh: "Nam",
          noisinh: "Hải Dương",
        },
        {
          id: 5,
          hoten: "Trần Trung Dương",
          namsinh: "08/12/2008",
          gioitinh: "Nam",
          noisinh: "Hà nội",
        },
        {
          id: 6,
          hoten: "Mạc Trung Đức",
          namsinh: "01/11/2008",
          gioitinh: "Nam",
          noisinh: "Thanh Hóa",
        },
        {
          id: 7,
          hoten: "Vũ Hương Giang",
          namsinh: "08/12/2008",
          gioitinh: "Nữ",
          noisinh: "Bắc Ninh",
        },
        {
          id: 8,
          hoten: "Hoàng Thị Ngân Hà",
          namsinh: "09/06/2008",
          gioitinh: "Nữ",
          noisinh: "Ninh Bình",
        },
      ],
    };
  },
};
</script>
<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

tr:hover {
  background-color: coral;
}
</style>