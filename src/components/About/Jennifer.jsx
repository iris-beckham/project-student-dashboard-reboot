import "./Jennifer.css";

const Jennifer = () => {
  return (
    <div className="jennifer">
      <h2>Jennifer Peterson</h2>

      <div>
        <img src="https://xsgames.co/randomusers/avatar.php?g=male&minimum_age=38&maximum_age=48" />
        <p>
          Fun fact: I ❤️ to TRAVEL ✈️, trying new FOODS 🍣 and I am currently
          teaching myself to COOK 👩🏿‍🍳 (concentrating on plant-based meals 🥗)
        </p>
        <p>How to reach me 👩🏿‍💻</p>
        <ul style={{ listStyle: "none" }}>
          <a href="mailto:jenniferbushpeterson@gmail.com">
            <li>Email</li>
          </a>
          <a
            href="https://github.com/JenniferPeterson1203"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <li>GitHub</li>
          </a>
          <a
            href="https://www.linkedin.com/in/jennifer--peterson/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>LinkedIn</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Jennifer;
