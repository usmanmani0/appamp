import React from "react";
import "./appcard.css";
import WhatsApp from "../../assets/images/image 69.png";

const Appcard = () => {
  const data = [
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Whats App",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Discord",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Facebook",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Whats App",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Discord",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Facebook",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Whats App",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Discord",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Facebook",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Whats App",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Discord",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Facebook",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Whats App",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Discord",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Facebook",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Whats App",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Discord",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Facebook",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Whats App",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Discord",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Facebook",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Whats App",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Discord",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Facebook",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Whats App",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Discord",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Facebook",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Whats App",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Discord",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Facebook",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Whats App",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Discord",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Facebook",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Whats App",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Discord",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Facebook",
    },
  ];
  return (
    <>
      <div className="appCard_wrap">
        {data.map((data, index) => {
          return (
            <>
              <div>
                <div className="card_div">
                  <div className="img_div">
                    <img className="card_img" src={data.img} alt="logo"></img>
                  </div>
                </div>

                <div className="category_div">{data.title}</div>
                <div className="name_div">{data.sub}</div>
              </div>{" "}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Appcard;
