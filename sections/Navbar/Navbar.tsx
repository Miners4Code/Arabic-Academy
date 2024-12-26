"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <img src="Arab academy.png" alt="Logo" className={styles.navbarLogo} />
      </div>

      <div
        className={`${styles.navbarCenter} ${
          isMobileMenuOpen ? styles.showMenu : ""
        }`}
      >
        {!isLoggedIn ? (
          <div className={styles.dropdown}>
            <a href="#" className={styles.navbarLink_mobile}>
              <img
                src="mobilelogin.png"
                alt="Login Icon"
                className={styles.loginIcon_mobile}
              />
              <span>تسجيل الدخول</span>
            </a>
            <a href="#" className={styles.navbarLink_mobile}>
              <img
                src="mobilesign.png"
                alt="Sign Up Icon"
                className={styles.loginIcon_mobile}
              />
              <span>انشاء حساب</span>
            </a>

            <a href="#" className={styles.navbarLink}>
              <img src="drop.png" alt="مصادر Icon" className={styles.icon} />
              المصادر
            </a>
            <div className={styles.dropdownContent}>
              <a href="/resource1">المدونة</a>
              <a href="/resource2">المنتدى</a>
              <a href="/resource3">قاموس الكلمات</a>
              <a href="/resource1">دروس فيديو قصيرة</a>
              <a href="/resource1">دليل أدوات الذكاء الاصطناعي</a>
              <a href="/resource1">بنك الأسئلة التقنية</a>
              <a href="/resource1">دروس وأنماط الميدجورني</a>
              <a href="/resource1">لغة ضاد</a>
            </div>
          </div>
        ) : (
          <div className={styles.dropdown}>
            <a href="#" className={styles.navbarLink}>
              <img src="drop.png" alt="مصادر Icon" className={styles.icon} />
              المصادر
            </a>
            <div className={styles.dropdownContent}>
              <a href="/resource1">المدونة</a>
              <a href="/resource2">المنتدى</a>
              <a href="/resource3">قاموس الكلمات</a>
              <a href="/resource1">دروس فيديو قصيرة</a>
              <a href="/resource1">دليل أدوات الذكاء الاصطناعي</a>
              <a href="/resource1">بنك الأسئلة التقنية</a>
              <a href="/resource1">دروس وأنماط الميدجورني</a>
              <a href="/resource1">لغة ضاد</a>
            </div>
          </div>
        )}

        <a href="/courses" className={styles.navbarLink}>
          المسارات التعليمية
        </a>
        <a href="/contact" className={styles.navbarLink}>
          التواصل
        </a>
      </div>

      <div className={styles.navbarRight}>
        {isLoggedIn ? (
          <div className={styles.iconsContainer}>
            <img src="user.png" alt="Profile Icon" className={styles.icons1} />
            <img src="logout.png" alt="Logout Icon" className={styles.icons2} />
          </div>
        ) : (
          <>
            <a href="/signup">
              <button className={styles.signupButton}>
                <img
                  src="sign.png"
                  alt="Sign Up Icon"
                  className={styles.signupIcon}
                />
                انشاء حساب
              </button>
            </a>
            <a href="/login">
              <button className={styles.loginButton} onClick={() => setIsLoggedIn(true)}>
                <img
                  src="login.png"
                  alt="Login Icon"
                  className={styles.loginIcon}
                />
                تسجيل دخول
              </button>
            </a>
          </>
        )}
      </div>

      <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>
        <span className={styles.hamburger}></span>
        <span className={styles.hamburger}></span>
        <span className={styles.hamburger}></span>
      </div>
    </nav>
  );
};

export default Navbar;
