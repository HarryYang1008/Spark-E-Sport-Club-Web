import "../App.css";
import logo from "../logo.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// 示例员工数据
const staffList = [
    {
    name: "Rita",
    avatar: "/staffs/staff1.png", // 放到 public/staffs 目录下
    tag: "电竞解说",
    rating: 4.8,
    reviews: 128,
    price: "200元/小时",
    badge: "🔥人气",
    labels: ["#技术过硬", "#有耐心", "#经验丰富","#指挥力"],
  },
  {
    name: "Akira",
    avatar: "/staffs/staff2.png",
    tag: "技术总监",
    rating: 4.9,
    reviews: 94,
    price: "300元/小时",
    badge: "💼技术",
    labels: ["#五百强", "#血C无敌", "#有耐心","#极品枪男"],
  },
  {
    name: "Yuna",
    avatar: "/staffs/staff3.png",
    tag: "社区策划",
    rating: 4.7,
    reviews: 76,
    price: "180元/小时",
    badge: "💡创意",
    labels: ["#技术好", "#声音甜", "#反应快"],
  },
];

function AboutPage() {
  return (
    <div className="about-page">
      {/* 顶部导航栏 */}
      <header className="navbar">
        <div className="logo">
          <img className="titlelogo" src={logo} alt="Photo Uploads" />
          <span className="logo-text">SPARK 电竞社区</span>
        </div>

        <nav className="nav-links">
          <Link to="/">首页</Link>
          <Link to="/about">关于我们</Link>
          <a href="#">服务</a>
          <a href="#">博客</a>
          <b className="contact-btn">CONTACT</b>
        </nav>
      </header>

      {/* 主内容区 */}
      <main className="staff-section">
        <h2>核心团队</h2>
        <div className="staff-cards">
          {staffList.map((staff, index) => (
            <div className="staff-card" key={index}>
              <div className="staff-badge">{staff.badge}</div>
              <img src={staff.avatar} alt={staff.name} className="staff-avatar" />
              <div className="staff-info">
                      <h3>{staff.name}</h3>
                      <div className="staff-labels">
                        {staff.labels.map((label, index) => (
                            <span className="staff-label" key={index}>
                            {label}
                            </span>
                        ))}
                      </div>
                <p className="staff-tag">{staff.tag}</p>
                <p className="staff-rating">⭐ {staff.rating}（{staff.reviews}评论）</p>
                      <p className="staff-price">{staff.price}</p>
                      
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default AboutPage;
