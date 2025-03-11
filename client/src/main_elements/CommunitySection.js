import React from "react";
import "../App.css"; // 确保样式生效
import communityImage from "../community.jpg"; // 直接导入图片
const CommunitySection = () => {
  return (
    <section className="community-section">
      <div className="community-text">
        <h4 className="community-subtitle">JOIN OUR COMMUNITY</h4>
        <h2 className="community-title">求同存異，溝通包容，運作獨立，合作互動</h2>
        <p className="community-description">
  以聯誼為中心, 以網絡和平面媒體為工具, 以文化藝術交流為方式, 為會員, 社團, 商務機構, 亞美族裔以及中美之間提供一個溝通和交流合作的平台。<br /><br />

  個別會員認識交流<br />
  商業會員資訊互通<br />
  社團之間溝通互動<br />
  族群之間交流了解<br />
  中美之間友誼互信<br /><br />

  <strong>會員要求：</strong> 謙卑坦誠 仁愛和平 上進守法 服務奉獻。<br />
  <strong>中心工作：</strong> 聯誼織網，為合作夥伴、會員、社團、族裔、中美之間建溝通的橋樑。（通過各種文化藝術教育訊息等交流活動）
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
