<template>
  <form @submit.prevent="handleSubmit" onkeydown="return event.key !='Enter';">
    <label>Email:</label>
    <input type="email" required v-model="email" />

    <label>Password:</label>
    <input type="password" required v-model="password" />
    <div v-if="passwordError" class="error">{{ passwordError }}</div>

    <label>Role:</label>
    <select v-model="role" required>
      <option value="frontendDev">Frontend Developer</option>
      <option value="uiDesigner">UI Designer</option>
      <option value="backendDev">Backend Developer</option>
      <option value="dataAnalyst">Data Analyst</option>
    </select>

    <label>Skills: (Hit <b>spacebar</b> to add skill)</label>
    <input type="text" v-model="tempSkill" @keyup="addSkill" />
    <div class="pill" v-for="skill in skills" :key="skill">
      <span @click="deleteSkill(skill)">{{ skill }}</span>
    </div>

    <div class="terms">
      <input type="checkbox" reuired v-model="terms" />
      <label>Accept Terms & Conditions</label>
    </div>

    <div class="submit">
      <button>Create Account</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "frontendDev",
      terms: false,
      tempSkill: "",
      skills: [],
      passwordError: "",
    };
  },
  methods: {
    addSkill: function (e) {
      if (e.key === " " && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill);
        }
        this.tempSkill = "";
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => {
        return skill !== item;
      });
    },
    handleSubmit: function () {
      // validate password
      this.passwordError =
        this.password.length > 5
          ? ""
          : "Password must be at least 6 characters long";

      if (!this.passwordError) {
        console.log(`email: ${this.email}`);
        console.log(`password: ${this.password}`);
        console.log(`role: ${this.role}`);
        console.log(`skills: ${this.skills}`);
        console.log(`terms accepted: ${this.terms}`);
      }
    },
  },
};
</script>

<style>
form {
  max-width: 400px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 20px 0 15px 0;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
select {
  background: none;
}
input:focus {
  outline: 2px solid #555;
  border-radius: 2px;
}
input[type="checkbox"] {
  display: inline-block;
  width: 20px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
input[type="checkbox"]:focus {
  outline: none;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button {
  background: #0b6dff;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  cursor: pointer;
}

button:hover {
  background: rgba(0, 0, 0, 0.1);
  color: #0b6dff;
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
