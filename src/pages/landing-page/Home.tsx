import styles from "./landingPage.module.css";
import Button from "../../components/button/Button.tsx";
import rightArrow from "../../assets/arrow-right.svg";

const Home = ({ callbackFunction }: HomeProps) => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.container}>
          <div>
            <h1>Complete your task</h1>
            <p>Follow this quick guide to maximize your Evernote experience.</p>
          </div>
          <div>
            <div className={styles.listItem}>
              <img src={rightArrow} alt={"arrow"} width={25} />
              <div>
                <h3>Boost your Productivity</h3>
                <p>Streamline your day with Tasks</p>
              </div>
            </div>
            <div className={styles.listItem}>
              <img src={rightArrow} alt={"arrow"} width={25} />
              <div>
                <h3>Stay organized</h3>
                <p>Keep all your notes, to-dos, and ideas in one place.</p>
              </div>
            </div>
          </div>
          <Button
            text={"Get Started"}
            onClick={() => callbackFunction("tasks")}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
