// import "./Jennifer.css";

const Jennifer = () => {
  return (
    <div className="jennifer">
      <h2 className="rainbow-text">Jennifer Peterson</h2>

      <div className="container">
        <div className="image-container">
          <img
            src="images/Jennifer.jpg"
            alt="Girl in a jacket"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
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
