import MongoClient, {ObjectID} from 'mongodb';
import chalk from 'chalk';
import {MOCK_TVSERIES} from './mocks';
import { TVSeries, MongoSchema, TVSeriesView, Studio } from './types';

const url = 'mongodb://localhost:27017';
const dbName = 'serials';

class SerialsDb {
  private db:  MongoClient.Db | null;
  private collection: MongoClient.Collection<TVSeries>;

  constructor() {
    MongoClient.connect(url, (err, client) => {
      if (err) {
        console.log(err);
        return;
      }
    
      console.log(chalk.magenta("Connected successfully to MongoDB server"));
     
      this.db = client.db(dbName);
      this.collection = this.db.collection('serials');
    });
  };

  async saveMocks() {
    try {
      // const result = await this.collection.insertMany(MOCK_TVSERIES);
      const result = await this.collection.insertMany(MOCK_TVSERIES);
      console.log(result);
    } catch (err){
      console.log(err);
    }
  }

  async saveTvSerial(tvSerial: TVSeries) {
    try {
      await this.collection.insert(tvSerial);
    } catch (err) {
      console.log(err);
    }
  }

  async getSerialsListByTitle(pattern?: string): Promise<TVSeriesView[]> {
    const findParams = pattern ? {title: new RegExp(pattern)} : {};

    try {
      return await this.collection.find(findParams, {
        projection: {
          title: true,
          genre: true,
          lastTitle: true,
          startDate: true,
          ageLimits: true
        }
      }).toArray();
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async getSerialsById(id: string): Promise<any> {
    try {
      return await (await this.collection.findOne({_id: new ObjectID(id)}));
    } catch (err) {
      console.log(err);
      return []
    }
  }
}

const SerialsModel = new SerialsDb();

export default SerialsModel;

