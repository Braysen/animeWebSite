import { Component, OnInit, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GenresMenuService } from '../../services/genres-menu.service';
import { GenderAnime } from '../../../core/interfaces/anime.interface'

@Component({
  selector: 'app-genres-menu',
  templateUrl: './genres-menu.component.html',
  standalone: true,
  styleUrls: ['./genres-menu.component.sass'],
  imports: [CommonModule, HttpClientModule, RouterModule]
})
export class GenresMenuComponent implements OnInit{
  @Input() amountOfDataToDisplay:number = 0;
  public genresAnimeList: GenderAnime[] = [];
  constructor(private genresMenuService: GenresMenuService){}

  async ngOnInit(): Promise<void>{
    await this.showAnimeGenres();
  }

  async showAnimeGenres(): Promise<void>{
    (await (this.genresMenuService.getAnimeGenres())).subscribe({
      next: (data) => {
        this.genresAnimeList = data.data
      },
      error: (error) => {
        return error;
      }
    })
  }
}
