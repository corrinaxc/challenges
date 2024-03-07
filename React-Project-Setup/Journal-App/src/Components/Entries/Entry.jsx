import starFilled from "./../../assets/star-filled.svg";
import star from "./../../assets/star.svg";
import "./entries.css";

const entries = [
    {
      id: 1000,
      date: "Feb 5, 2025",
      motto: "We are in a state of chaos",
      notes:
        "Today I learned about React State. It was fun! I can't wait to learn more.",
    },
    {
      id: 999,
      date: "Feb 4, 2025",
      motto: "Props, Props, Props",
      notes:
        "Today I learned about React Props. Mad props to everyone who understands this!",
    },
    {
      id: 998,
      date: "Feb 3, 2025",
      motto: "How to nest components online fast",
      notes:
        "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
    },
    {
      id: 997,
      date: "Feb 2, 2025",
      motto: "I'm a React Developer",
      notes: "My React-ion when I learned about React: 😍",
    },
  ];

export default function Entry() {
    return(
    <>
    {entries.map(({id, date, motto, notes}) => (
    <div className="entry" key={id}>
        <h3>{date}</h3>
        <h4>{motto}</h4>
        <p className="notes">{notes}</p>
        <button className="favourite-button"><img src={star} alt="non-filled star"/></button>
    </div>
    ))}
    </>
    );
}