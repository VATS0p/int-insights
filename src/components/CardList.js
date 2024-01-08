import React from "react";
import Card from "./Card";
import "./CardList.css";

const cardData = [
  {
    title: "Harvard University",
    subtitle: "Cambridge",
    paragraph:
      " Dating back to 1636, Harvard University is the oldest university in the US and is regarded as one of the most prestigious in the world.It was named after its first benefactor, John Harvard, who left his library and half his estate to the institution when he died in 1638.",
    imageUrl:
      "http://jamiesarner.com/images/2013/05/University-of-Toronto-Entrance-Gate.jpg",
    section1: "2nd",
    section2: "1st"
  },
  {
    title: "Stanford University",
    subtitle: "Stanford",
    paragraph:
      "Stanford University has one of the largest campuses in the US and is one of the most prestigious universities in the world.It was established in 1885 and opened six years later as a co-educational and non-denominational private institution.",
    imageUrl: "https://smapse.com/storage/2018/11/ubc-tower-800x607.jpg",
    section1: "=3rd",
    section2: "2nd"
  },
  {
    title: "Massachusetts Institute of Technology",
    subtitle: "Cambridge",
    paragraph:
      "The Massachusetts Institute of Technology (MIT) is an independent, coeducational, private research university based in the city of Cambridge, Massachusetts.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/29/McGill_University_Arts_Building2.JPG",
    section1: "5th",
    section2: "3rd"
  },
  {
    title: "California Institute of Technology",
    subtitle: "Toronto",
    paragraph:
      "The Caltech is a world-renowned science and engineering research and education institution, where extraordinary faculty and students seek answers to complex questions, discover new knowledge, lead innovation, and transform the future.",
    imageUrl:
      "https://brighterworld.mcmaster.ca/wp-content/uploads/sites/2/2018/07/20180706-152629-McMaster-University-Campus-0004-1.jpg",
    section1: "6th",
    section2: "4th"
  },
  {
    title: "Princeton University",
    subtitle: "Princeton",
    paragraph:
      "Princeton is one of the oldest universities in the US and is regarded as one of the world’s most illustrious higher education institutions.Founded in 1746 as the College of New Jersey, it was officially renamed Princeton University in 1896 in honour of the area where it is based, opening its famous graduate school in 1900.",
    imageUrl:
      "https://www.timeshighereducation.com/sites/default/files/university_of_montreal.jpg",
    section1: "7th",
    section2: "5th"
  },
  {
    title: "University of California, Berkeley",
    subtitle: "California",
    paragraph:
      "The University of California, Berkeley, a public research university, is regarded as one of the most prestigious state universities in the US. Part of the University of California System, it was founded in 1868.",
    imageUrl:
      "https://study.ua/wp-content/uploads/2020/04/university-of-alberta-3.jpg",
    section1: "8th",
    section2: "6th"
  },
  {
    title: "Yale University",
    subtitle: "Connecticut",
    paragraph:
      "Yale University is a private Ivy League research university which is the third-oldest higher education institution in the US.Yale traces its history back to 1701, when it was founded as the Collegiate School in Saybrook, Connecticut, which moved to New Haven 15 years later.",
    imageUrl:
      "https://cdn.britannica.com/72/153872-050-927D410F/Mathematics-Computer-Building-University-of-Waterloo-Canada.jpg",
    section1: "9th",
    section2: "7th"
  },
  {
    title: "The University of Chicago",
    subtitle: "Illinois",
    paragraph:
      "The University of Chicago came to life in the twilight of the 19th century, with the state of Illinois issuing its official certificate of incorporation in September 1890. A $600,000 pledge from oil magnate John D. Rockefeller helped to get the university off the ground, while local department store owner Marshall Field donated land.  ",
    imageUrl:
      "https://www.goodfreephotos.com/albums/canada/ontario/ottawa/tabaret-hall-university-of-ottawa-ontario-canada.jpg",
    section1: "13th",
    section2: "8th"
  },
  {
    title: "Johns Hopkins University",
    subtitle: "Maryland",
    paragraph:
      "Founded in 1876, Johns Hopkins University (JHU) is a private research university based in Baltimore, Maryland. It takes its name from its first benefactor, the American abolitionist, philanthropist and entrepreneur, Johns Hopkins.The university’s motto is ‘Knowledge for the world.’",
    imageUrl:
      "https://archello.s3.eu-central-1.amazonaws.com/images/2019/04/02/IMG-7304.1554182419.9907.jpg",
    section1: "15th",
    section2: "9th"
  },
  {
    title: "University of Pennsylvania",
    subtitle: "	Pennsylvania",
    paragraph:
      "Given its status as one of the nine original Colonial Colleges – institutions established before the US became a sovereign nation after the American Revolution – and a founding member of the Association of American Universities, it is no surprise the University of Pennsylvania (Penn) claims to be the first fully fledged (multi-faculty) “university” in the USA.",
    imageUrl:
      "https://www.theglobeandmail.com/resizer/HMDFSM3OPXjtGCLYsB9ihVm5PX4=/1200x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/5ODYPH32TFFJ3HIR64NKQM5V6U.JPG",
    section1: "16th",
    section2: "10th"
  }
];

function CardList() {
  return (
    <div className="crd-list">
      {cardData.map((data, index) => (
        <Card
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

export default CardList;
