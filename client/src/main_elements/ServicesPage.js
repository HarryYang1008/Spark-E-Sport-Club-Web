import React from "react";
import "../App.css";
import logo from "../logo.png";
import { Link } from "react-router-dom";

const services = [
  {
    title: "陪玩服务",
    description: "无论你是想轻松娱乐，还是排位上分，我们的陪玩成员将为你提供最专业的陪伴体验。",
    features: ["语音互动", "情绪管理", "配合默契", "多游戏支持"],
    icon: "🎮"
  },
  {
    title: "代练服务",
    description: "快速上分，高胜率保障，全流程透明，放心将账号交给我们认证过的技术大牛。",
    features: ["全段位覆盖", "胜率保证", "技术认证", "进度追踪"],
    icon: "⚔️"
  },
  {
    title: "战术培训",
    description: "职业教练带你拆解战术打法，提升意识与团队协作，助你向更高水平迈进。",
    features: ["战术复盘", "阵容讲解", "定制课程", "实战演练"],
    icon: "📚"
  }
];

function ServicesPage() {
  return (
    <div className="about-page">
      <header className="navbar">
        <div className="logo">
          <img className="titlelogo" src={logo} alt="Logo" />
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

      <main className="staff-section">
        <h2>我们的服务</h2>
        <div className="service-cards">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ServicesPage;
