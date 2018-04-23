import React from "react";
import paperPlane from "../img/paper-plane.svg";
import lock from "../img/lock.svg";
import flash from "../img/flash.svg";
import user1 from "../img/user1.jpg";
import user2 from "../img/user2.jpg";
import Footer from "./footer";

const IndexDashboard = () => {
  return (
    <div className="form-container">
      <div className="index-page">
        <div className="heading-primary index offer">What We Offer</div>
        <div className="feature-box">
          <div className="feature">
            <div className="feature__content">
              <img className="feature__item icon" src={paperPlane} />
              <div className="feature__item heading">Convenience</div>
              <div className="feature__item text">
               Equidem labores sea et, populo eirmod commodo his ea, molestie
                tincidunt est ad Augue
                evertitur
              </div>
            </div>
          </div>
          <div className="feature">
            <div className="feature__content">
              <img className="feature__item icon" src={flash} />
              <div className="feature__item heading">Speed</div>
              <div className="feature__item text">
                Equidem labores sea et, populo eirmod commodo his ea, molestie
                tincidunt est ad Augue
                evertitur
              </div>
            </div>
          </div>
          <div className="feature">
            <div className="feature__content">
              <img className="feature__item icon" src={lock} />
              <div className="feature__item heading">Reliability</div>
              <div className="feature__item text">
                Equidem labores sea et, populo eirmod commodo his ea, molestie
                tincidunt est ad Augue
                evertitur
              </div>
            </div>
          </div>
        </div>
        <div className="heading-primary index">Reviews</div>
        <div className="reviews">
          <div className="reviews__shape">
            <img src={user1} className="reviews__img" />
            <div className="reviews__caption">Alex Brown</div>
          </div>
          <div className="reviews__heading">Great App! </div>
          <p className="reviews__text">
            Sit ubique veritus delicata ne, solum labores tibique ea qui. Augue
            evertitur dissentias eam cu, est dico delectus ullamcorper ut. Ei
            nec facete accusam, an minim apeirian partiendo eam.
          </p>
        </div>
        <div className="reviews">
          <div className="reviews__shape">
            <img src={user2} className="reviews__img" />
            <div className="reviews__caption">Ashley Jordan</div>
          </div>
          <div className="reviews__heading">Love it! </div>
          <p className="reviews__text">
            Sit ubique veritus delicata ne, solum labores tibique ea qui. Augue
            evertitur dissentias eam cu, est dico delectus ullamcorper ut. Ei
            nec facete accusam, an minim apeirian partiendo eam.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IndexDashboard;
