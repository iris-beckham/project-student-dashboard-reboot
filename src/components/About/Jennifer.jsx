import "./Jennifer.css";

const Jennifer = () => {
  return (
    <div className="jennifer">
      <h2>Jennifer Peterson</h2>

      <div>
        <img src="https://xsgames.co/randomusers/avatar.php?g=male&minimum_age=38&maximum_age=48" />
        <p>
          Fun fact: I ❤️ to <span>TRAVEL</span>✈️, trying new <span>FOODS</span>{" "}
          🍣 and I am currently teaching myself to <span>COOK 👩🏿‍🍳</span>{" "}
          <span>(concentrating on plant-based meals 🥗)</span>
        </p>
        <p>
          <span>How to reach me 👩🏿‍💻</span>
        </p>
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
