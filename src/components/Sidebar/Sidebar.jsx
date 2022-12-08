import { nanoid } from 'nanoid'
import styles from "./Sidebar.module.css";
import avatar from "../../assets/avatar.svg";
import { menuConfig } from '../../utils/menu';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
  return <aside>
    <div className={styles.box}></div>
    <div className={styles.wrap}>
      <div>
        {menuConfig.map(el => {
          return <Link key={nanoid()} className={styles.link} to={el.path}>
            <img src={el.img} alt="" /> <span>{el.name}</span>
          </Link>
        })}
      </div>
      <div className={styles.avatar}>
        <img src={avatar} alt="" /> <span>Біл Гейтс</span>
      </div>
    </div>
  </aside>
};
export default Sidebar;
