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

// 示例客户反馈
const feedbackList = [
  {
    name: "小明",
    comment: "体验太棒了，陪玩小姐姐技术好人也好，还会再来！",
    rating: 5,
    labels: ["#技术好", "#服务周到", "#氛围轻松"]
  },
  {
    name: "Akira",
    comment: "打排位带飞上分，配合默契，强烈推荐！",
    rating: 4.8,
    labels: ["#高胜率", "#语音好听", "#懂节奏"]
  },
  {
    name: "Yuna",
    comment: "第一次找陪玩就遇到这么优秀的主播，五星好评！",
    rating: 5,
    labels: ["#声音甜", "#回复快", "#细节到位"]
  }
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


        {/* 业务与展望模块 */}
        <section className="vision-section">
          <h2>我们的业务与未来展望</h2>
          <div className="vision-content">
            <div className="vision-block">
              <h3>业务范围</h3>
              <p>
                Spark 电竞社区专注于打造一个集结陪玩、代练、电竞解说、战术培训于一体的电竞综合服务平台。
                我们服务于英雄联盟、Valorant、Overwatch 等多个主流电竞游戏，并不断扩展更多合作项目。
              </p>
            </div>
            <div className="vision-block">
              <h3>组织经历</h3>
              <p>
                我们曾成功组织多场校际电竞赛事、社区训练营以及技术分享会。Spark 亦与数十位职业选手、技术教练达成长期合作，逐步构建高质量人才库。
              </p>
            </div>
            <div className="vision-block">
              <h3>未来展望</h3>
              <p>
                我们希望通过技术与服务双轮驱动，成为泛亚太电竞用户首选的陪练与社区平台，打造“游戏不仅好玩，还能成就自我”的新电竞文化生态。
              </p>
            </div>
          </div>
        </section>


        <div className="feedback-section">
          <h2>客户反馈</h2>
          <div className="feedback-list">
            {feedbackList.map((feedback, index) => (
              <div className="feedback-card" key={index}>
                <div className="feedback-header">
                  <strong>{feedback.name}</strong>
                  <span className="feedback-rating">⭐ {feedback.rating}</span>
                </div>
                <p className="feedback-comment">“{feedback.comment}”</p>
                <div className="feedback-labels">
                  {feedback.labels.map((label, i) => (
                    <span className="staff-label" key={i}>{label}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

     

    </div>
  );
}

export default AboutPage;
