// /api/new-meetup
import { MongoClient } from 'mongodb';

export default async function handler(req,res) {
  if (req.method === 'POST') {
    const data = req.body;
    // const {title, image, address, description} = data;

    const client = await MongoClient.connect(
      'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false'
    );

    try {
      const db = client.db();
      const meetupsCollection = db.collection('meetups');
      const result = await meetupsCollection.insertOne(data);
      console.log(result);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Inserting meetup failed.' })
    }

 
    client.close();
    res.status(200).json({ message: 'Meetup inserted!' });
  }
}
