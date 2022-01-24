<template>
  <form>
    <label>Email:</label>
    <input type="email" required v-model="email" />

    <label>Password:</label>
    <input type="password" required v-model="password" />

    <label>Role:</label>
    <select v-model="role">
      <option value="frontendDev">Frontend Developer</option>
      <option value="uiDesigner">UI Designer</option>
      <option value="backendDev">Backend Developer</option>
      <option value="dataAnalyst">Data Analyst</option>
    </select>

    <div class="terms">
      <input type="checkbox" reuired v-model="terms" />
      <label>Accept Terms & Conditions</label>
    </div>
  </form>
  <p v-if="terms">Terms & Conditions Accepted</p>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "frontendDev",
      terms: false,
      skills: [],
    };
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
</style>
