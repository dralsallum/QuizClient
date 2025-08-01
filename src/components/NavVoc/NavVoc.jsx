// NavVoc.jsx
import React, { useState, useEffect } from "react";
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
} from "./NavVoc.elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBookOpen,
  faBook,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import notificationItems from "../../utils/NavNotification.json";
import navItems from "../../utils/navVo.json";
import { persistor } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/userRedux";

// ... (rest of your imports)

const iconMap = {
  faClipboardList,
  faBookOpen,
  faBook,
};

const NavVoc = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);

  const toggleNotification = () => {
    setShowNotification((prevState) => !prevState);
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSignOut = () => {
    dispatch(signOut());
    persistor.purge();
  };

  // Function to detect user's device and return the appropriate app store link
  const getAppStoreLink = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check for iOS devices
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "https://apps.apple.com/sa/app/fluentfox-language-lessons/id6673901781"; // Replace with your App Store link
    }

    // Check for Android devices
    if (/android/i.test(userAgent)) {
      return "https://apps.apple.com/sa/app/fluentfox-language-lessons/id6673901781"; // Replace with your Google Play link
    }

    // Default link for other devices
    return "https://apps.apple.com/sa/app/fluentfox-language-lessons/id6673901781"; // Replace with your website or fallback link
  };

  const appStoreLink = getAppStoreLink();

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
                  <NavSubAt as="button" onClick={handleSignOut}>
                    تسجيل الخروج
                  </NavSubAt>
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
      <AllWr scrollY={scrollY}>
        <AllCon>
          <NavTop>
            <NavTopAt href="">
              <NavTopLogo
                src="https://alsallum.s3.eu-north-1.amazonaws.com/glivooWhite.png"
                alt=""
              />
            </NavTopAt>
            <NavSubTop>
              {user ? (
                <NavSubAt as="button" onClick={handleSignOut}>
                  تسجيل الخروج
                </NavSubAt>
              ) : (
                <NavSubAt to="/login">تسجيل الدخول</NavSubAt>
              )}
              {/* Modify the signup button */}
              <NavSubAa
                as="a"
                href={appStoreLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                حمل التطبيق
              </NavSubAa>
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
                    <NavBotSp>{item.text}</NavBotSp>
                  </NavBotAt>
                </NavBotLi>
              ))}
            </NavBotUl>
          </NavBot>
        </AllCon>
      </AllWr>
    </>
  );
};

export default NavVoc;
