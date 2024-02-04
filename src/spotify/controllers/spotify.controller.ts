import { Controller, Get } from '@nestjs/common';
import { SpotifyService } from '../services/spotify.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Spotify')
@Controller('spotify')
export class SpotifyController {
  constructor(private readonly spotifyService: SpotifyService) {}

  @Get()
  findAll() {
    return this.spotifyService.findArtistTopTracksByID(
      '460m2YG30duLCuHwFdiLgX',
    );
  }
}
