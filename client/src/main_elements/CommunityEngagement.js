import React from "react";
import "../App.css";

// 引入图片
import blogImage from "../card1.jpg";
import photoUploadImage from "../card2.jpg";
import eventHighlightImage from "../card3.jpg";

const CommunityEngagement = () => {
  return (
    <section className="engagement-section">
      <h4 className="engagement-subtitle">COMMUNITY ENGAGEMENT</h4>
      <h2 className="engagement-title">Share your stories and connect with others.</h2>
      
      <div className="engagement-cards">
        {/* 卡片 1 */}
        <div className="engagement-card">
          <img src={blogImage} alt="Community Blog" />
          <div className="card-content">
            <h3>Community blog <span>›</span></h3>
            <p>Share your thoughts and experiences with the community.</p>
          </div>
        </div>

        {/* 卡片 2 */}
        <div className="engagement-card">
          <img src={photoUploadImage} alt="Photo Uploads" />
          <div className="card-content">
            <h3>Photo uploads <span>›</span></h3>
            <p>Capture and showcase your memorable moments.</p>
          </div>
        </div>

        {/* 卡片 3 */}
        <div className="engagement-card">
          <img src={eventHighlightImage} alt="Event Highlights" />
          <div className="card-content">
            <h3>Event highlights <span>›</span></h3>
            <p>Document and share highlights from community events.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityEngagement;
