import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Watches, WatchSchema } from './schemas/watch.schema';
import { WatchesController } from './watches.controller';
import { WatchesService } from './watches.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Watches.name, schema: WatchSchema }]),
      ],
      controllers: [WatchesController],
      providers: [WatchesService],
      exports: [WatchesService],
})
export class WatchesModule {}



