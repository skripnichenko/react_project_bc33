import styles from "./Sidebar.module.css";
import university from "../../assets/university.svg";
import faculty from "../../assets/faculty.svg";
import avatar from "../../assets/avatar.svg";
const Sidebar = (props) => (
  <aside>
    <div className={styles.box}></div>
    <div className={styles.wrap}>
      <div>
        <a className={styles.link} href="">
          <img src={university} alt="" /> <span>Університет</span>
        </a>
        <a className={styles.link} href="">
          <img src={faculty} alt="" /> <span>Факультети</span>
        </a>
      </div>
      <div>
        <img src={avatar} alt="" /> <span>Біл Гейтс</span>
      </div>
    </div>
  </aside>
);
export default Sidebar;
