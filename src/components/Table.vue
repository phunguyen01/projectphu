<template>
  <Student :userEdit="hocsinh" @save="clickSave" />
 

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

<script>
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