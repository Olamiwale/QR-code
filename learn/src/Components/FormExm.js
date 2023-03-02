import react, { useState } from "react";

function Form() {
  const [data, setData] = useState({
    firstName: "",
    secondName: "",
    email: "",
    comments: "",
    love: true,
    gender: "",
    team: "",
    password: "",
    passwordConfirm: "",
  });

  console.log(data.team);

  const handleChange = (event) => {
    const { value, name, type, checked } = event.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
        //[e.target.name]: e.target.value
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (data.firstName == "") {
      const inputText = document.getElementById("text");
      inputText.innerHTML = "Please Enter Your Name";
      setTimeout(() => inputText.remove(), 3000);
    } else if (data.password !== data.passwordConfirm) {
      alert("Password do not match");
    } else if (data.team == "") {
      alert("Select a team");
    }
  };

  const themes = () => {
    return "theme" ? "dark" : "light";
  };

  const [theme, setTheme] = useState(themes);

  const toggleMode = () => {
    const newThemes = theme === "ligth" ? "dark" : "light";
    setTheme(newThemes);
  };

  return (
    <form data-theme={theme} onSubmit={handleSubmit}>
      <div onClick={toggleMode}>Change my colour</div>

      <div id="text"></div>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        onChange={handleChange}
        value={data.firstName}
      />

      <input
        type="text"
        placeholder="Last Name"
        name="secondName"
        onChange={handleChange}
        value={data.secondName}
      />

      <input
        type="text"
        placeholder="E-mail"
        name="email"
        onChange={handleChange}
        value={data.email}
      />

      <input
        type="text"
        placeholder="Password"
        name="password"
        onChange={handleChange}
        value={data.password}
      />

      <input
        type="text"
        placeholder="Confirm Password"
        name="passwordConfirm"
        onChange={handleChange}
        value={data.passwordConfirm}
      />

      <textarea
        value={data.comments}
        placeholder="What should we know about you...."
        name="comments"
        onChange={handleChange}
      />

      <label htmlFor="terms-and-condition"> I'm Learning React</label>
      <input
        type="checkbox"
        id="terms-and-condition"
        checked={data.love}
        onChange={handleChange}
        name="terms-and-condition"
      />

      <label htmlFor="male">Male</label>
      <input
        type="radio"
        id="male"
        name="gender"
        onChange={handleChange}
        value="male"
      />

      <label htmlFor="female">Female</label>

      <input
        type="radio"
        id="female"
        name="gender"
        onChange={handleChange}
        value="female"
      />

      <label htmlFor="undisclose">Undisclose</label>

      <input
        type="radio"
        id="undisclose"
        name="gender"
        onChange={handleChange}
        value="undisclosed"
      />

      <label htmlFor="team">Favourite Team</label>
      <br />
      <select id="team" name="team" onChange={handleChange} value={data.team}>
        <option>....Choose Team... </option>
        <option value="chelsea">chelsea</option>
        <option value="arsenal">arsenal </option>
        <option value="man-city">man city</option>
        <option value="liverpool">liverpool </option>
      </select>

      <button>Send it Here</button>
    </form>
  );
}

export default Form;
