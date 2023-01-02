
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First Meetup',
    image:
      'https://freedomhouse.org/sites/default/files/2020-02/Lithuania_Country_portal_shutterstock_1546827353-82.jpg',
    address: 'Lithuania',
    description: 'This is a first Meetup!',
  },
  {
    id: 'm2',
    title: 'First Meetup',
    image:
      'https://freedomhouse.org/sites/default/files/2020-02/Lithuania_Country_portal_shutterstock_1546827353-82.jpg',
    address: 'Lithuania',
    description: 'This is a first Meetup!',
  },
  {
    id: 'm3',
    title: 'First Meetup',
    image:
      'https://freedomhouse.org/sites/default/files/2020-02/Lithuania_Country_portal_shutterstock_1546827353-82.jpg',
    address: 'Lithuania',
    description: 'This is a first Meetup!',
  },
];

export default function HomePage(props) {
 

  return <MeetupList meetups={props.meetups} />;
}

// Could run code that uses credietials which should not run on client for security reasons
// export async function getServerSideProps(context){

//     const req = context.req;
//     const res = context.res;

//   //fetch data from an API
//   return {
//     props:{
//       meetups:DUMMY_MEETUPS
//     }
//   }
// }

export async function getStaticProps(){
  //fetch data from an API
  return {
    props:{
      meetups:DUMMY_MEETUPS
    },
    revalidate:10
  }
}