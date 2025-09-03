import React from "react";
import "../App.css"; // 确保样式生效
import communityImage from "../community.jpg"; // 直接导入图片
const CommunitySection = () => {
  return (
    <section className="community-section">
      <div className="community-text">
        <h4 className="community-subtitle">JOIN OUR COMMUNITY</h4>
        <h2 className="community-title">竞技共荣，交流互鉴，社群自治，团队共进</h2>
        <p className="community-description">
  以电竞为核心，以陪玩和代练为服务，以玩家聚合为方式，为个人玩家、战队、平台、赞助商以及整个电竞生态提供一个互动和合作的平台。<br /><br />

  玩家之间娱乐交流<br />
  陪玩服务专业贴心<br />
  代练服务高效安全<br />
  战队之间切磋互动<br />
  社区之间凝聚共进<br /><br />

  

  <strong>玩家要求：</strong> 尊重公平，诚实守信，积极进取，合作共赢。<br />
<strong>核心工作：</strong> 竞技交流，为玩家、战队、平台、赞助商之间搭建互动的桥梁。（通过陪玩服务、代练服务、赛事活动等电竞交流）

</p>
        <a href="#" className="community-link">Get in touch</a>
      </div>
      <div className="community-image">
        <img src={communityImage} alt="Community Gathering" />
      </div>
    </section>
  );
};

export default CommunitySection;
