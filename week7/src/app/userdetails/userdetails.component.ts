import { CommonModule } from '@angular/common';
import { Component, OnInit,Input} from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss'],
  standalone:true,
  imports:[CommonModule],
})
export class UserdetailsComponent  implements OnInit {
  @Input() user?:User;
  constructor() { }

  ngOnInit() {}

}
