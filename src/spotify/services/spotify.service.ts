import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { Auth, Token } from '../types/auth.type';
import { Artist } from '../types/artists.type';
import { Albums } from '../types/albums.type';
import { Tracks } from '../types/tracks.type';

@Injectable()
export class SpotifyService {
  private API_URL = this.config.get<string>('API_URL');
  private TOKEN: Token;

  constructor(
    private readonly httpService: HttpService,
    private readonly config: ConfigService,
  ) {}

  private async generateToken(): Promise<AxiosResponse<Auth>> {
    const URL = 'https://accounts.spotify.com/api/token';

    const body = {
      grant_type: 'client_credentials',
      client_id: this.config.get<string>('CLIENT_ID'),
      client_secret: this.config.get<string>('CLIENT_SECRET'),
    };

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    const response = await this.httpService.axiosRef.post(URL, body, {
      headers,
    });

    this.TOKEN = {
      access_token: response.data.access_token,
      created_at: new Date(),
    };

    return response.data as AxiosResponse<Auth>;
  }

  private async isTokenExpired(): Promise<AxiosResponse<Auth | void>> {
    if (!this.TOKEN) return this.generateToken();

    const oneHourLater = new Date(
      this.TOKEN.created_at.getTime() + 60 * 60 * 1000,
    );

    if (new Date() >= oneHourLater) return this.generateToken();
  }

  public async findArtistByID(id: string): Promise<AxiosResponse<Artist>> {
    await this.isTokenExpired();

    const URL = `${this.API_URL}/artists/${id}`;

    const headers = {
      Authorization: `Bearer ${this.TOKEN.access_token}`,
    };

    const response = await this.httpService.axiosRef.get(URL, { headers });

    return response.data as AxiosResponse<Artist>;
  }

  public async findArtistTopTracksByID(
    id: string,
  ): Promise<AxiosResponse<Tracks>> {
    await this.isTokenExpired();

    const URL = `${this.API_URL}/artists/${id}/top-tracks?market=BR`;

    const headers = {
      Authorization: `Bearer ${this.TOKEN.access_token}`,
    };

    const response = await this.httpService.axiosRef.get(URL, { headers });

    return response.data as AxiosResponse<Tracks>;
  }

  public async findAlbumsByIDs(ids: string[]): Promise<AxiosResponse<Albums>> {
    await this.isTokenExpired();

    const URL = `${this.API_URL}/albums?ids=${ids.join(',')}`;

    console.log(this.TOKEN);

    const headers = {
      Authorization: `Bearer ${this.TOKEN.access_token}`,
    };

    const response = await this.httpService.axiosRef.get(URL, { headers });

    return response.data as AxiosResponse<Albums>;
  }
}
