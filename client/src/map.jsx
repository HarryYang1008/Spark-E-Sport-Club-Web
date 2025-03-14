import React, { Component } from "react";
import "./App.css"; // 引入全局样式
import HeroSection from "./main_elements/HeroSection.js";
import CommunitySection from "./main_elements/CommunitySection"; // 引入新组件
import CommunityEngagement from "./main_elements/CommunityEngagement"; // 引入新组件
import logo from "./logo.png";

class AAAB extends Component {
  render() {
    return (
      <div className="app-container">
        {/* 头部导航栏 */}
        <header className="navbar">
          <div className="logo">
            <img className="titlelogo" src={logo} alt="Photo Uploads" />
          </div>
          <nav className="nav-links">
            <a href="#">首页</a>
            <a href="#">关于我们</a>
            <a href="#">服务</a>
            <a href="#">博客</a>
            <b href="#" className="contact-btn">CONTACT</b>
          </nav>
        </header>

        
        <body>
          <main className="main-content">
            <HeroSection /> {/* 加入 Hero 组件 */}
            <CommunitySection /> {/* 社区信息组件 */}
            <CommunityEngagement />

            <footer className="footer">
              <p>© 2025 AAAB. All rights reserved.</p>
            </footer>
          </main>
        </body>
        

        {/* 页脚 */}
       
      </div>
    );
  }
}

export default AAAB;
