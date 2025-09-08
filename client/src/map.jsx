import React, { Component } from "react";
import "./App.css"; // 引入全局样式
import HeroSection from "./main_elements/HeroSection.js";
import CommunitySection from "./main_elements/CommunitySection";
import CommunityEngagement from "./main_elements/CommunityEngagement";
import ContactSection from "./main_elements/ContactSection";


import AboutPage from "./main_elements/AboutPage"; // 引入 About 页面
import ServicesPage from "./main_elements/ServicesPage.js"; // 引入 Servvices 页面


import logo from "./logo.png";

import {HashRouter,Routes,Route} from "react-router-dom"; // ✅ 引入 HashRouter
import { Link } from 'react-router-dom';


// ✅ 主页组件
class AAAB extends Component {
  render() {
    return (
      <div className="app-container">
        {/* 顶部导航栏 */}
        <header className="navbar">
          <div className="logo">
            <img className="titlelogo" src={logo} alt="Photo Uploads" />
            <span className="logo-text">SPARK 电竞社区</span>
          </div>

          <nav className="nav-links">
            <Link to="/">首页</Link>
            <Link to="/about">关于我们</Link>
            <Link to="/services">服务</Link>
            <a href="#">博客</a>
            <b className="contact-btn">CONTACT</b>
          </nav>
        </header>

        {/* 主体内容 */}
        <main className="main-content">
          <HeroSection />
          <CommunitySection />
          <CommunityEngagement />
          <ContactSection />

          {/* 页脚 */}
          <footer className="footer">
            <p>© {new Date().getFullYear()} AAAB. All rights reserved.</p>
            <p>Designed by Weikang_Yang.studio</p>
          </footer>
        </main>
      </div>
    );
  }
}

// ✅ App 包含 Router 和所有页面路由


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AAAB />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </HashRouter>
  );
}


export default App;
