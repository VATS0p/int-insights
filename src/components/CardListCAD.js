import React from 'react';
import CardCAD from './CardCAD';
import './CardList.css'; 

const cardData = [
  {
    title: 'University of Toronto',
    subtitle: 'Toronto',
    paragraph: ' The University of Toronto (UofT) is among the world’s most prestigious universities. Founded in 1827, it offers over 700 undergraduate degree and 200 postgraduate degree programmes to a cohort of almost 60,000 students. dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'http://jamiesarner.com/images/2013/05/University-of-Toronto-Entrance-Gate.jpg',
    section1: '18th',
    section2: '1st',
  },
  {
    title: 'University of British Columbia',
    subtitle: 'Vancouver',
    paragraph: 'The University of British Columbia (UBC), formerly known as McGill University College of British Columbia, has well-established traditions in interdisciplinary research, dating back to its founding in 1908.',
    imageUrl: 'https://smapse.com/storage/2018/11/ubc-tower-800x607.jpg',
    section1: '40th',
    section2: '2nd',
  },
  {
    title: 'McGill University',
    subtitle: 'Montreal',
    paragraph: 'McGill is known for attracting the brightest students from around the world. We welcome international students from over 150 countries, representing about 30% of our student body – the highest proportion of any Canadian research university.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/29/McGill_University_Arts_Building2.JPG',
    section1: '46th',
    section2: '3rd',
  },
  {
    title: 'McMaster University',
    subtitle: 'Hamilton',
    paragraph: 'Since 1887, McMaster University has been dedicated to the cultivation of human potential, a commitment we demonstrate everyday through our ground-breaking approaches to teaching and learning and our world-class, interdisciplinary research. sapien eu leo laoreet, eget pellentesque purus laoreet.',
    imageUrl: 'https://brighterworld.mcmaster.ca/wp-content/uploads/sites/2/2018/07/20180706-152629-McMaster-University-Campus-0004-1.jpg',
    section1: '85th',
    section2: '4th',
  },
  {
    title: 'University of Montreal',
    subtitle: 'Montreal',
    paragraph: 'Deeply rooted in Montreal and dedicated to its international mission, University of Montreal is a leading research university.University of Montreal attracts over $680 million in research funding every year, making it the fourth largest research university in Canada.',
    imageUrl: 'https://www.timeshighereducation.com/sites/default/files/university_of_montreal.jpg',
    section1: '111th',
    section2: '5th',
  },
  {
    title: 'University of Alberta',
    subtitle: 'Edmonton',
    paragraph: 'Established in 1908 in Edmonton, the capital of Alberta, the University of Alberta is a public research university in Canada, located at the edge of the North Saskatchewan River valley.',
    imageUrl: 'https://study.ua/wp-content/uploads/2020/04/university-of-alberta-3.jpg',
    section1: '118th',
    section2: '6th',
  },
  {
    title: 'University of Waterloo',
    subtitle: 'Waterloo',
    paragraph: 'The University of Waterloo in Ontario, Canada was established in 1957. Originally hosting 74 engineering students, the university wanted to create an environment of co-operative education.',
    imageUrl: 'https://cdn.britannica.com/72/153872-050-927D410F/Mathematics-Computer-Building-University-of-Waterloo-Canada.jpg',
    section1: '201-250th',
    section2: '7th',
  },
  {
    title: 'University of Ottawa',
    subtitle: 'Ottawa',
    paragraph: 'Founded in 1848, the University of Ottawa is located in the heart of the capital of Canada — a G7 country — with ready access to major Canadian institutions. ',
    imageUrl: 'https://www.goodfreephotos.com/albums/canada/ontario/ottawa/tabaret-hall-university-of-ottawa-ontario-canada.jpg',
    section1: '=137th',
    section2: '8th',
  },
  {
    title: 'University of Calgary',
    subtitle: 'Calgary',
    paragraph: 'Founded in 1966 and situated close to the Rocky Mountains, the University of Calgary is a public research university based in the city of Calgary, in Alberta, Canada.',
    imageUrl: 'https://archello.s3.eu-central-1.amazonaws.com/images/2019/04/02/IMG-7304.1554182419.9907.jpg',
    section1: '201-250th',
    section2: '=9th',
  },
  {
    title: 'Western University',
    subtitle: '	London',
    paragraph: 'Western University is a global community of passionate individuals focused on making change in the world today. As a top Canadian research and teaching institution, we bring together diverse minds and disciplines to power individual purpose for collective impact.',
    imageUrl: 'https://www.theglobeandmail.com/resizer/HMDFSM3OPXjtGCLYsB9ihVm5PX4=/1200x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/5ODYPH32TFFJ3HIR64NKQM5V6U.JPG',
    section1: '201-250th',
    section2: '=9th',
  },
];

function CardListCAD() {
  return (
    <div className="crd-list">
      {cardData.map((data, index) => (
        <CardCAD
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

export default CardListCAD;
