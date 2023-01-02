import MeetupDetail from '../../components/meetups/MeetupDetail';

export default function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      description={props.meetupData.description}
      address={props.meetupData.address}
      id={props.meetupData.id}
    />
  );
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export async function getStaticPaths() {
  const paths = [
    {
      params: {
        meetupId: 'm1',
      },
    },
    {
      params: {
        meetupId: 'm2',
      },
    },
  ];

  return {
    fallback: true,
    paths,
  };
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          'https://freedomhouse.org/sites/default/files/2020-02/Lithuania_Country_portal_shutterstock_1546827353-82.jpg',
        title: 'A First Meetup',
        id: meetupId,
        description: 'The Meetup Description',
        address: 'Some Street 5, Some City,Some body once told me',
      },
    },
  };
}
