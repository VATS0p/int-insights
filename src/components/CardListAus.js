import React from "react";
import CardAus from "./CardAus";
import "./CardList.css";

const cardData= [
  {
    title: "University of Melbourne",
    subtitle: "Melbourne",
    paragraph:
      " The University of Melbourne is a public research university in Melbourne, Australia.  Having been established in 1853, it is the second oldest university in Australia and the oldest in the state of Victoria.",
    imageUrl:
      "http://jamiesarner.com/images/2013/05/University-of-Toronto-Entrance-Gate.jpg",
    section1: "37th",
    section2: "1st"
  },
  {
    title: "Monash University",
    subtitle: "Melbourne",
    paragraph:
      "Monash University was founded in 1958 and is the second oldest university in the state of Victoria in Australia. It is also the largest university in Australia. It was named after the engineer, military leader and public administrator Sir John Monash.",
    imageUrl: "https://smapse.com/storage/2018/11/ubc-tower-800x607.jpg",
    section1: "54th",
    section2: "2nd"
  },
  {
    title: "University of Sydney",
    subtitle: "New South Wales",
    paragraph:
      "The University of Sydney is one of the world’s leading, comprehensive research and teaching universities. We offer an exceptional range of disciplines – more than 400 areas of study – and our community includes more than 70,000 students, 8000 permanent and fixed-term staff and 350,000 alumni in more than 170 countries.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/29/McGill_University_Arts_Building2.JPG",
    section1: "60th",
    section2: "3rd"
  },
  {
    title: "Australian National University",
    subtitle: "Canberra",
    paragraph:
      "The Australian National University (ANU) was founded in 1946 and is located in Canberra, the capital city of Australia. It’s the only university in the country which was created by the Parliament of Australia.",
    imageUrl:
      "https://brighterworld.mcmaster.ca/wp-content/uploads/sites/2/2018/07/20180706-152629-McMaster-University-Campus-0004-1.jpg",
    section1: "67th",
    section2: "4th"
  },
  {
    title: "The University of Queensland",
    subtitle: "Queensland    ",
    paragraph:
      "Since it was founded in Brisbane in 1909, The University of Queensland (UQ) has provided exceptional study experiences, research excellence and collaborative partnerships, coupled with an unforgettable lifestyle and stunning climate, to deliver knowledge leadership for a better world.",
    imageUrl:
      "https://www.timeshighereducation.com/sites/default/files/university_of_montreal.jpg",
    section1: "70th",
    section2: "5th"
  },
  {
    title: "UNSW Sydney",
    subtitle: "New South Wales",
    paragraph:
      "UNSW Sydney is a world-leading teaching and research powerhouse recognised by employers and organisations around the globe. Ranked in the top 70 universities worldwide, UNSW is dedicated to shaping forward-thinking graduates who make a positive impact in the world. UNSW ensures students receive a truly hands-on and career-focused education to uncover their full potential. ",
    imageUrl:
      "https://study.ua/wp-content/uploads/2020/04/university-of-alberta-3.jpg",
    section1: "84th",
    section2: "6th"
  },
  {
    title: "University of Adelaide",
    subtitle: "South Australia    ",
    paragraph:
      "By every measure, the University of Adelaide—a member of Australia’s prestigious Group of Eight research-intensive universities—stands tall among the world’s leading institutions of learning and innovation.",
    imageUrl:
      "https://cdn.britannica.com/72/153872-050-927D410F/Mathematics-Computer-Building-University-of-Waterloo-Canada.jpg",
    section1: "=111th",
    section2: "7th"
  },
  {
    title: "The University of Western Australia",
    subtitle: "Western Australia",
    paragraph:
      "The University of Western Australia (UWA) is one of Australia’s “sandstone universities”: universities dating back a century or more. UWA is the youngest of the sandstones, having been founded in 1911. It was the first university in the state of Western Australia. ",
    imageUrl:
      "https://www.goodfreephotos.com/albums/canada/ontario/ottawa/tabaret-hall-university-of-ottawa-ontario-canada.jpg",
    section1: "=143th",
    section2: "8th"
  },
  {
    title: "University of Technology Sydney",
    subtitle: "New South Wale    ",
    paragraph:
      "A place where creativity meets technology.The University of Technology Sydney (UTS) is the leading technology university in Australia. Through its future-focused approach to learning and research, UTS prepares students for the challenges of tomorrow. Located in Sydney’s technology precinct, UTS is minutes away from the city’s business district and some of Australia’s most innovative companies and startups. ",
    imageUrl:
      "https://archello.s3.eu-central-1.amazonaws.com/images/2019/04/02/IMG-7304.1554182419.9907.jpg",
    section1: "148th",
    section2: "9th"
  },
  {
    title: "Macquarie University",
    subtitle: "	New South Wales",
    paragraph:
      "Macquarie University was established in 1964 as a bold experiment in higher education. Built to break from traditions and work in tandem with industry, we strive for the extraordinary by challenging convention and embracing different views. ",
    imageUrl:
      "https://www.theglobeandmail.com/resizer/HMDFSM3OPXjtGCLYsB9ihVm5PX4=/1200x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/5ODYPH32TFFJ3HIR64NKQM5V6U.JPG",
    section1: "180th",
    section2: "10th"
  }
];

function CardListAus() {
  return (
    <div className="crd-list">
      {cardData.map((data, index) => (
        <CardAus
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

export default CardListAus;
