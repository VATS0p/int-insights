import React from "react";
import CardUK from "./CardUK";
import "./CardList.css";

const cardData = [
  {
    title: "University of Oxford",
    subtitle: "Oxford",
    paragraph:
      " The University of Oxford is the oldest university in the English-speaking world and the world’s second oldest surviving university. While its exact founding date is unknown, there is evidence that teaching took place as far back as 1096.",
    imageUrl:
      "http://jamiesarner.com/images/2013/05/University-of-Toronto-Entrance-Gate.jpg",
    section1: "1st",
    section2: "1st"
  },
  {
    title: "University of Cambridge",
    subtitle: "Cambridge",
    paragraph:
      "Founded in 1209, the University of Cambridge is a collegiate public research institution. Its 800-year history makes it the fourth-oldest surviving university in the world and the second-oldest university in the English-speaking world.",
    imageUrl: "https://smapse.com/storage/2018/11/ubc-tower-800x607.jpg",
    section1: "5th",
    section2: "2nd"
  },
  {
    title: "Imperial College London",
    subtitle: "London",
    paragraph:
      "Imperial College London, a science-based institution based in the centre of the capital, is regarded as one of the UK’s leading institutions.The college has around 15,000 students and 8,000 staff, with a focus on four main areas: science, engineering, medicine and business.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/29/McGill_University_Arts_Building2.JPG",
    section1: "8th",
    section2: "3rd"
  },
  {
    title: "UCL",
    subtitle: "London",
    paragraph:
      "UCL was founded in 1826 to bring higher education to those who were typically excluded from it. In 1878, it became the first university in England to admit women on equal terms as men.",
    imageUrl:
      "https://brighterworld.mcmaster.ca/wp-content/uploads/sites/2/2018/07/20180706-152629-McMaster-University-Campus-0004-1.jpg",
    section1: "22th",
    section2: "4th"
  },
  {
    title: "University of Edinburgh",
    subtitle: "Edinburgh",
    paragraph:
      "Founded in 1583, the University of Edinburgh (UoE) is the sixth oldest university in the English-speaking world and one of Britain and Ireland’s seven ancient universities.It is made up of three colleges: arts, humanities and social sciences; science and engineering and medicine and veterinary medicine. Within these three colleges, there are 20 academic schools.",
    imageUrl:
      "https://www.timeshighereducation.com/sites/default/files/university_of_montreal.jpg",
    section1: "=30th",
    section2: "5th"
  },
  {
    title: "King’s College London",
    subtitle: "London",
    paragraph:
      "King’s College London (KCL) is one of the two founding colleges of the University of London, the sister college of University College London. Established in 1829 by King George IV and the Duke of Wellington, the then Prime Minister, it is the fourth oldest university in England.",
    imageUrl:
      "https://study.ua/wp-content/uploads/2020/04/university-of-alberta-3.jpg",
    section1: "=38th",
    section2: "6th"
  },
  {
    title: "London School of Economics and Political Science",
    subtitle: "London",
    paragraph:
      "The London School of Economics and Political Science (LSE) is one of the foremost social science universities in the world, specialising in a wide range of social science disciplines, including economics, politics, sociology, law and anthropology.",
    imageUrl:
      "https://cdn.britannica.com/72/153872-050-927D410F/Mathematics-Computer-Building-University-of-Waterloo-Canada.jpg",
    section1: "46th",
    section2: "7th"
  },
  {
    title: "University of Manchester",
    subtitle: "Manchester",
    paragraph:
      "The University of Manchester is a place where research has international impact, where students experience outstanding teaching and learning, and where all activity is enriched by a commitment to social responsibility and the benefits we bring to society and the environment. ",
    imageUrl:
      "https://www.goodfreephotos.com/albums/canada/ontario/ottawa/tabaret-hall-university-of-ottawa-ontario-canada.jpg",
    section1: "51st",
    section2: "8th"
  },
  {
    title: "University of Bristol",
    subtitle: "Bristol",
    paragraph:
      "Founded in 1876, the University of Bristol has a global reputation for world-leading research and academic excellence with a pioneering, independent spirit. The University is situated at the heart of Bristol, one of Europe’s most beautiful, exciting and creative cities. ",
    imageUrl:
      "https://archello.s3.eu-central-1.amazonaws.com/images/2019/04/02/IMG-7304.1554182419.9907.jpg",
    section1: "81st",
    section2: "9th"
  },
  {
    title: "University of Glasgow",
    subtitle: "	Glasgow",
    paragraph:
      "Founded in 1451, The University of Glasgow is a world-class university, committed to working with global partners to create high-quality research with real-life impact. We were named Times Higher Education University of the Year in 2020 and have been home to world-changing research and teaching for more than 570 years. ",
    imageUrl:
      "https://www.theglobeandmail.com/resizer/HMDFSM3OPXjtGCLYsB9ihVm5PX4=/1200x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/5ODYPH32TFFJ3HIR64NKQM5V6U.JPG",
    section1: "=87th",
    section2: "10th"
  }
];

function CardListUK() {
  return (
    <div className="crd-list">
      {cardData.map((data, index) => (
        <CardUK
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

export default CardListUK;
