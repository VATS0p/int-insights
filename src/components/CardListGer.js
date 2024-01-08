import React from "react";
import CardGer from "./CardGer";
import "./CardList.css";

const cardData = [
  {
    title: "Technical University of Munich",
    subtitle: "Munich",
    paragraph:
      "Winged by its entrepreneurial spirit, and encouraged by its proven potential for progressive change, the Technical University of Munich (TUM) has become Germany’s flagship university of technology, awarded the title “University of Excellence” three times in row since the birth of Germany’s Excellence Initiative.",
    imageUrl:
      "http://jamiesarner.com/images/2013/05/University-of-Toronto-Entrance-Gate.jpg",
    section1: "=30th",
    section2: "1st"
  },
  {
    title: "LMU Munich",
    subtitle: "Munich",
    paragraph:
      "LMU is recognized as one of Europe's premier academic and research institutions. Since its founding in 1472, LMU has attracted inspired scholars and talented students from all over the world, keeping the University at the nexus of ideas that challenge and change our complex world.",
    imageUrl: "https://smapse.com/storage/2018/11/ubc-tower-800x607.jpg",
    section1: "=38th",
    section2: "2nd"
  },
  {
    title: "Heidelberg University",
    subtitle: "Heidelberg",
    paragraph:
      "Heidelberg University in the city of Tiffin in the US state of Ohio, was founded in 1850 as a school for the state’s German population by two Reverends of the German Reformed Church.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/29/McGill_University_Arts_Building2.JPG",
    section1: "47th",
    section2: "3rd"
  },
  {
    title: "Humboldt University of Berlin",
    subtitle: "Berlin ",
    paragraph:
      "Established more than 200 years ago, in 1810, the Humboldt University of Berlin is one of the most prestigious universities not only in Germany, but in Europe. It has a world class reputation in arts and humanities fields.",
    imageUrl:
      "https://brighterworld.mcmaster.ca/wp-content/uploads/sites/2/2018/07/20180706-152629-McMaster-University-Campus-0004-1.jpg",
    section1: "=87th",
    section2: "4th"
  },
  {
    title: "RWTH Aachen University    ",
    subtitle: "Aachen    ",
    paragraph:
      "The RWTH Aachen University was founded in 1870 after Prince William of Prussia decided to use a donation to set up an institute of technology somewhere in the Rhine Province. Funding local banks and an insurance company meant that it was eventually located in Aaachen, so building work began in 1865 and doors opened to 223 students during the Franco-Prussian War. ",
    imageUrl:
      "https://www.timeshighereducation.com/sites/default/files/university_of_montreal.jpg",
    section1: "90th",
    section2: "5th"
  },
  {
    title: "University of Bonn   ",
    subtitle: "Bonn    ",
    paragraph:
      "The University of Bonn, officially named The Rhenish Friedrich Wilhelm University of Bonn after the Prussian King Friedrich Wilhelm, was founded in 1818.Established at the time of the Age of Enlightenment, the university, built on critical thinking and liberal values, expanded rapidly with many eminent scholars attending from across the whole of Germany.",
    imageUrl:
      "https://study.ua/wp-content/uploads/2020/04/university-of-alberta-3.jpg",
    section1: "91th",
    section2: "6th"
  },
  {
    title: "University of Adelaide",
    subtitle: "Berlin    ",
    paragraph:
      "Charité - Universitätsmedizin Berlin is one of the largest university hospitals in Europe.Its motto is: ‘Forschen, Lehren, Heilen, Helfen’, which translates as ‘Research, Teaching, Healing, Helping.’",
    imageUrl:
      "https://cdn.britannica.com/72/153872-050-927D410F/Mathematics-Computer-Building-University-of-Waterloo-Canada.jpg",
    section1: "94th",
    section2: "7th"
  },
  {
    title: "University of Tübingen",
    subtitle: "Tübingen",
    paragraph:
      "The University of Tübingen Eberhard Karls is a respected academic authority in humanities, natural sciences and theology. The institute is situated in one of the traditional German university towns of Tübingen, Baden-Württemberg, which famous for its boat trips and the marvelous architecture of its old town Hölderlin. ",
    imageUrl:
      "https://www.goodfreephotos.com/albums/canada/ontario/ottawa/tabaret-hall-university-of-ottawa-ontario-canada.jpg",
    section1: "=95th",
    section2: "8th"
  },
  {
    title: "Free University of Berlin    ",
    subtitle: "Berlin ",
    paragraph:
      "The Free University of Berlin was founded in 1948, in the turmoil of post-war Germany, when students of the former Universität Unter den Linden, then located in the Soviet sector of the city, were facing persecution because of their views. With international support, the Free University was established, allowing scholars to pursue their teaching and learning without political interference. ",
    imageUrl:
      "https://archello.s3.eu-central-1.amazonaws.com/images/2019/04/02/IMG-7304.1554182419.9907.jpg",
    section1: "102th",
    section2: "9th"
  },
  {
    title: "University of Göttingen",
    subtitle: "	Göttingen",
    paragraph:
      "Regarded as one of the most prestigious universities in Germany, the University of Göttingen is located in the historic Saxon town of the same name, in the centre of Germany.Established in 1737, the university – informally known as Georgia Augusta – is home to about 26,000 students, 11% of who are international. ",
    imageUrl:
      "https://www.theglobeandmail.com/resizer/HMDFSM3OPXjtGCLYsB9ihVm5PX4=/1200x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/5ODYPH32TFFJ3HIR64NKQM5V6U.JPG",
    section1: "111th",
    section2: "10th"
  }
];

function CardListGer() {
  return (
    <div className="crd-list">
      {cardData.map((data, index) => (
        <CardGer
          key={index}
          title={data.title}
          subtitle={data.subtitle}
          paragraph={data.paragraph}
          imageUrl={data.imageUrl}
          section1={data.section1}
          section2={data.section2}
        />
      ))}
    </div>
  );
}

export default CardListGer;
