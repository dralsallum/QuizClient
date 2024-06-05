import React, { useState } from "react";
import {
  NavContainerThi,
  NavContanier,
  NavContanierLogoMain,
  NavContanierLogoMainSpan,
  NavContanierLogoMainSvg,
  NavContanierLogoMainimg,
  NavContanierSec,
  NavHeader,
  NavHeaderSub,
  NavWrapper,
  NavrightEighth,
  NavrightFifth,
  NavrightFir,
  NavrightFour,
  NavrightFourContainer,
  NavrightFourSubContainer,
  NavrightNinth,
  NavrightSec,
  NavrightSecSub,
  NavrightSecsSpan,
  NavrightSecsSpanIcon,
  NavrightSecsSpanText,
  NavrightSeventh,
  NavrightSubContainer,
  NavrightSubSpan,
  NavrightSubSpanDiv,
  NavrightTenth,
  NavrightThi,
  NotBot,
  NotBotAt,
  NotCon,
  NotUl,
  NotWrap,
  Button,
} from "./NavTech.elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus, faUserMinus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import notifications from "../../utils/Notification.json";
import { persistor } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/userRedux";

const NavTech = () => {
  const dispatch = useDispatch();
  const basketCount = useSelector((state) => state.basket.basketCount);
  const animate = useSelector((state) => state.basket.animate);
  const [showNotification, setShowNotification] = useState(false);

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
            <NotBot>
              <NotBotAt to={"/upload"}>توظيف</NotBotAt>
            </NotBot>
            <NotBot>
              <NotBotAt to={"/upload"}>البحث عن وظيفة</NotBotAt>
            </NotBot>
            <hr />
            <NotBot>
              <NotBotAt to={"/product/nurse"}>التمريض</NotBotAt>
            </NotBot>
            <NotBot>
              <NotBotAt to={"/product/physician"}>الاطباء</NotBotAt>
            </NotBot>
            <NotBot>
              <NotBotAt to={"/product/dentist"}>اسنان</NotBotAt>
            </NotBot>
            <NotBot>
              <NotBotAt to={"/product/technician"}>فني</NotBotAt>
            </NotBot>
            <NotBot>
              <NotBotAt to={"/product/reception"}>استقبال</NotBotAt>
            </NotBot>
            <NotBot>
              <NotBotAt to={"/product/management"}>ادارة</NotBotAt>
            </NotBot>
            <hr style={{ marginBottom: "6px" }} />
            <NotBot>
              <NotBotAt to={"/login"}>
                <Button>تسجيل الدخول</Button>
              </NotBotAt>
            </NotBot>
            <Button primary onClick={handleSignOut}>
              تسجيل الخروج
            </Button>
          </NotUl>
        </NotCon>
      </NotWrap>
    );
  };

  return (
    <>
      {showNotification && <Notification />}
      <NavHeader>
        <NavHeaderSub>
          <NavWrapper>
            <NavContanier>
              <NavContanierLogoMain>
                <NavContanierLogoMainSpan>
                  <NavContanierLogoMainSvg>
                    <Link to="/">
                      <NavContanierLogoMainimg
                        src={
                          "https://alsallum.s3.eu-north-1.amazonaws.com/foxlogo.png"
                        }
                        alt=""
                      />
                    </Link>
                  </NavContanierLogoMainSvg>
                </NavContanierLogoMainSpan>
              </NavContanierLogoMain>
            </NavContanier>
            <NavContanierSec></NavContanierSec>
            <NavContainerThi>
              <NavrightFir></NavrightFir>
              <Link
                to="/checkout"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              ></Link>
              <NavrightThi></NavrightThi>
              <NavrightFour>
                <NavrightFourContainer>
                  <NavrightFourSubContainer>
                    <NavrightSubContainer>
                      <NavrightSubSpan>
                        <NavrightSubSpanDiv>
                          <FontAwesomeIcon
                            icon={faShield}
                            style={{
                              color: "#1F5bc1",
                              fill: "currentcolor",
                              display: "block",
                              width: "100%",
                              height: "100%",
                              overflow: "hidden",
                            }}
                          />
                        </NavrightSubSpanDiv>
                      </NavrightSubSpan>
                      <NavrightSecsSpanText></NavrightSecsSpanText>
                    </NavrightSubContainer>
                  </NavrightFourSubContainer>
                </NavrightFourContainer>
              </NavrightFour>
              <NavrightFifth></NavrightFifth>
              <NavrightTenth>
                <NavrightSecSub>
                  <NavrightSecsSpan>
                    <NavrightSecsSpanIcon onClick={toggleNotification}>
                      <FontAwesomeIcon
                        icon={faBell}
                        style={{
                          color: "#808080",
                          fill: "currentcolor",
                          display: "block",
                          width: "100%",
                          height: "100%",
                          overflow: "hidden",
                        }}
                      />
                    </NavrightSecsSpanIcon>
                  </NavrightSecsSpan>
                  <NavrightSecsSpanText>
                    {notifications.length}
                  </NavrightSecsSpanText>
                </NavrightSecSub>
              </NavrightTenth>
              <NavrightSeventh></NavrightSeventh>
              <NavrightEighth></NavrightEighth>
              <NavrightNinth></NavrightNinth>
              <Link to={"/signup"} onClick={handleSignOut}>
                <NavrightSec>
                  <NavrightSecSub>
                    <NavrightSecsSpan>
                      <NavrightSecsSpanIcon>
                        <FontAwesomeIcon
                          icon={faUserMinus}
                          style={{
                            color: "#000000",
                            fill: "currentcolor",
                            display: "block",
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                            marginTop: "5px",
                          }}
                        />
                      </NavrightSecsSpanIcon>
                    </NavrightSecsSpan>
                  </NavrightSecSub>
                </NavrightSec>
              </Link>
            </NavContainerThi>
          </NavWrapper>
        </NavHeaderSub>
      </NavHeader>
    </>
  );
};

export default NavTech;
