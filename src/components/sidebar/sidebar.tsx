import styles from "./sidebar.module.css";
import profile from "../../assets/profile.svg";
import bell from "../../assets/bell.svg";
import search from "../../assets/search.svg";
import plus from "../../assets/plus.svg";
import ellipsis from "../../assets/ellipsis.svg";
import home from "../../assets/home.svg";
import note from "../../assets/note.svg";
import files from "../../assets/files.svg";
import tasks from "../../assets/tasks.svg";

const Sidebar = ({
  selectedItem,
  callbackFunction,
  onAddClick,
}: SidebarProps) => {
  const navItems = [
    { key: "home", label: "Home", icon: home },
    { key: "notes", label: "Notes", icon: note },
    { key: "files", label: "Files", icon: files },
    { key: "tasks", label: "Tasks", icon: tasks },
  ];

  return (
    <div className={styles.sidebar}>
      {/* User Information Section */}
      <div className={styles.userSection}>
        <div className={styles.userLeft}>
          <div className={styles.profilePicture}>
            <img src={profile} alt={"profile"} />
          </div>
          <div className={styles.userInfo}>
            <p className={styles.userName}>Shahabuddin Akhon</p>
            <p className={styles.userEmail}>Shahabuddin54@gmail.com</p>
          </div>
        </div>
        <img
          src={bell}
          alt="notification"
          className={styles.notificationBell}
        />
      </div>

      {/* Search Section */}
      <div className={styles.searchSection}>
        <input
          type="text"
          placeholder="Search"
          className={styles.searchInput}
        />
        <img src={search} alt="search" className={styles.searchIcon} />
      </div>

      {/* Action Button Section */}
      <div className={styles.noteButton}>
        <div className={styles.buttonLeft} onClick={onAddClick}>
          <img src={plus} alt="plus" className={styles.buttonIcon} />
          <span>Note</span>
        </div>
        <div className={styles.buttonRight}>
          <img src={ellipsis} alt="ellipsis" className={styles.ellipsis} />
        </div>
      </div>

      {/* Navigation Menu */}
      <div className={styles.navigationMenu}>
        <div className={styles.navigationMenu}>
          {navItems.map((item) => (
            <div
              key={item.key}
              className={`${styles.navItem} ${
                selectedItem === item.key ? styles.selected : ""
              }`}
              onClick={() => callbackFunction(item.key)}
            >
              <img
                src={item.icon}
                alt={item.label}
                className={styles.navIcon}
              />
              <span className={styles.navText}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
