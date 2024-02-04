import { Module } from '@nestjs/common';
import { SpotifyService } from './services/spotify.service';
import { SpotifyController } from './controllers/spotify.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [SpotifyController],
  providers: [SpotifyService],
})
export class SpotifyModule {}
