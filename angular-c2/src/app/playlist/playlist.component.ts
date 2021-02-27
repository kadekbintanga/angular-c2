import { Component, OnInit } from '@angular/core';
import {PlayListComponent} from '../model/play-list.model';
import {Playlist} from '../model/play-list.model';
import {Song} from '../model/play-list.model';
import {MatTableDataSource} from '@angular/material/table';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  public playList: PlayListComponent = new PlayListComponent();
  dataPlay: Playlist[] = this.playList.playlists;

  ngOnInit(): void {
  }

}
