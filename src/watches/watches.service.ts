import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { WatchDocument, Watches } from './schemas/watch.schema';
import { Model } from 'mongoose';

@Injectable()
export class WatchesService {
  constructor(
    @InjectModel(Watches.name) private watchesModel: Model<WatchDocument>,
  ) {}

//   add watch
  async addWatch(watchData: any) {
    const newWatch = new this.watchesModel(watchData); 
    return newWatch.save();
  }

//   get all watches

  async getAllWatches() {
    return this.watchesModel.find().exec();
  }

//   edit 

  async updateWatch(id: string, updateData: Partial<Watches>) {
    return this.watchesModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
  }

  //   delete watch by id

  async deleteWatch(id: string) {
    return this.watchesModel.findByIdAndDelete(id).exec();
  }

//   get a single watch by _id

  async getWatchById(id: string) {
    return this.watchesModel.findById(id).exec();
  }




}
