import React, { useEffect, useState } from "react";
// import "../index.css";
// id,size,x,y,opacity,animationDuration
// id,size,x,y,delay,animationDuration
const StarBackground = () => {
  let [star, setStar] = useState([]);
  let [meteor, setMeteor] = useState([]);
  useEffect(() => {
    generateStar();
    generateMeteor();

    const handleResize = () => {
      generateStar();
    };

    window.addEventListener("resize", handleResize);

    return window.removeEventListener("resize", handleResize);
  }, []);
  const generateStar = () => {
    const numberOfStars = Math.floor(
      (window.innerHeight * window.innerWidth) / 10000
    );

    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStar(newStars);
  };

  const generateMeteor = () => {
    const numberOfMeteor = 10;

    const newMeteor = [];
    for (let i = 0; i < numberOfMeteor; i++) {
      newMeteor.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 50,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteor(newMeteor);
  };
  console.log(star);
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {star.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteor.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
