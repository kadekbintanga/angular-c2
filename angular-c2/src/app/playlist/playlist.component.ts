import { Component, OnInit } from '@angular/core';
import {PlayListComponent} from '../model/play-list.model';
import {Playlist} from '../model/play-list.model';
import {Song} from '../model/play-list.model';
import {MatTableDataSource} from '@angular/material/table';
import {MatSnackBar} from '@angular/material/snack-bar';
import { PlaylistDetailComponent } from './playlist-detail/playlist-detail.component';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  public playList: PlayListComponent = new PlayListComponent();
  dataPlay: Playlist[] = this.playList.playlists;

  constructor(
    public dialog: MatDialog
  ){}

  ngOnInit(): void {
  }

  playlistDetail(data: any,idx:any) {
    let dialog=this.dialog.open(PlaylistDetailComponent, {
      width : '80%',
      data:data
    });
    dialog.afterClosed().subscribe(res=>{
      if(res)
      {
        if(idx==-1) this.dataPlay.push(res);
        else this.dataPlay[idx] = res;
      }
    })
  }

}
