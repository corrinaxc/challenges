import "./components/EntriesSection/EntriesSection.css";

import Entry from "./components/Entry/index.jsx"
import Tabs from "./components/Tabs/index.jsx";
import Tab from "../Tab";
import Badge from "../Badge";

export default function EntriesSection() {
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

  return (
    <section className="entries-section">
      <Tabs>
        <Tab active>
          All Entries <Badge isActive>3</Badge>
        </Tab>
        <Tab>
          Favorites <Badge>1</Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {entries.map(({ id, date, motto, notes }, index) => (
          <Entry
            key={id}
            date={date}
            motto={motto}
            notes={notes}
            isLastEntry={index === entries.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
