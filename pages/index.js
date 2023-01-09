import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import Head from 'next/head';

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name='description' content='Browse a huge list of highly active React meetups!'/>
      </Head>
      <MeetupList meetups={props.meetups} />;
    </>
  );
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

export async function getStaticProps() {
  //fetch data from an API
  const client = await MongoClient.connect(
    'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false'
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}
