import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WatchesService } from './watches.service';

@Controller('watch')
export class WatchesController {
  constructor(private readonly watchesService: WatchesService) {}

  // POST to add a new watch
  @Post('add')
async addWatch(@Body() watchData: any) {
  console.log('Received data:', watchData); // 👈 Add this
  return this.watchesService.addWatch(watchData);
}

  // GET all watches
  @Get('all')
  async getAllWatches() {
    return this.watchesService.getAllWatches(); // Fetch all watches from DB
  }

  @Patch('edit/:id')
async updateWatch(@Param('id') id: string, @Body() updateData: any) {
  return this.watchesService.updateWatch(id, updateData);
}

@Delete('delete/:id')
async deleteWatch(@Param('id') id: string) {
  return this.watchesService.deleteWatch(id);
}

@Get('single/:id')
async getWatchById(@Param('id') id: string) {
  return this.watchesService.getWatchById(id);
}



}
