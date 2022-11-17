import { nanoid } from 'nanoid'
import styles from "./Sidebar.module.css";
import avatar from "../../assets/avatar.svg";
import { menuConfig } from '../../utils/menu';

const Sidebar = (props) => {
  return <aside>
    <div className={styles.box}></div>
    <div className={styles.wrap}>
      <div>
        {menuConfig.map(el => {
          return <a key={nanoid()} className={styles.link} href="">
            <img src={el.img} alt="" /> <span>{el.name}</span>
          </a>
        })}
      </div>
      <div className={styles.avatar}>
        <img src={avatar} alt="" /> <span>Біл Гейтс</span>
      </div>
    </div>
  </aside>
};
export default Sidebar;
