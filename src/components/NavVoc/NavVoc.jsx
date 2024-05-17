import React, { useState } from "react";
import {
  AllWr,
  AllCon,
  NavTop,
  NavTopAt,
  NavTopLogo,
  NavSubTop,
  NavTopBut,
  NavTopSp,
  NavSubAt,
  NavSubAa,
  NavBotUl,
  NavBot,
  NavBotLi,
  NavBotAt,
  NavBotSp,
  NotWrap,
  NotCon,
  NotUl,
  NotBot,
  NotBotAt,
} from "./NavVoc.elements.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faBookOpen,
  faBook,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import notificationItems from "../../utils/NavNotification.json";
import navItems from "../../utils/navVo.json";
import { persistor } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/userRedux";

const iconMap = {
  faClipboardList,
  faBookOpen,
  faBook,
};

const NavVoc = () => {
  const [showNotification, setShowNotification] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);

  const toggleNotification = () => {
    setShowNotification((prevState) => !prevState);
  };

  const handleSignOut = () => {
    dispatch(signOut());
    persistor.purge();
  };

  const Notification = () => {
    return (
      <NotWrap>
        <NotCon>
          <NotUl>
            {notificationItems.map((item, index) => {
              if (item.type === "separator") {
                return <hr key={index} style={{ marginBottom: "6px" }} />;
              }
              return (
                <NotBot key={index}>
                  <NotBotAt to={item.link}>{item.label}</NotBotAt>
                </NotBot>
              );
            })}
            <NotBot>
              <NotBotAt>
                {user ? (
                  <NavSubAt onClick={handleSignOut}>تسجيل الخروج</NavSubAt>
                ) : (
                  <NavSubAt to="/login">تسجيل الدخول</NavSubAt>
                )}
              </NotBotAt>
            </NotBot>
          </NotUl>
        </NotCon>
      </NotWrap>
    );
  };

  return (
    <>
      {showNotification && <Notification />}
      <AllWr>
        <AllCon>
          <NavTop>
            <NavTopAt href="">
              <NavTopLogo
                src="https://alsallum.s3.eu-north-1.amazonaws.com/fox-white.png"
                alt=""
              />
            </NavTopAt>
            <NavSubTop>
              {user ? (
                <NavSubAt onClick={handleSignOut}>تسجيل الخروج</NavSubAt>
              ) : (
                <NavSubAt to="/login">تسجيل الدخول</NavSubAt>
              )}
              <NavSubAa to="/signup">اشتراك</NavSubAa>
            </NavSubTop>
            <NavTopBut onClick={toggleNotification}>
              <FontAwesomeIcon icon={faBars} style={{ fontSize: "24px" }} />
            </NavTopBut>
          </NavTop>
          <NavBot>
            <NavBotUl>
              {navItems.map((item, index) => (
                <NavBotLi key={index}>
                  <NavBotAt to={item.link}>
                    <FontAwesomeIcon icon={iconMap[item.icon]} />
                    <NavBotSp icon={item.icon}>{item.text}</NavBotSp>
                  </NavBotAt>
                </NavBotLi>
              ))}
            </NavBotUl>
          </NavBot>
          <div></div>
          <div></div>
        </AllCon>
      </AllWr>
    </>
  );
};

export default NavVoc;
