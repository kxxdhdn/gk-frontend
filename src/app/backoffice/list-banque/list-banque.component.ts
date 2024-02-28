import { Component } from '@angular/core';
import { BanqueService } from '../../services/banque.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-banque',
  templateUrl: './list-banque.component.html',
  styleUrl: './list-banque.component.css'
})
export class ListBanqueComponent {
  constructor(private service: BanqueService, private router: Router) { }
  banques:any;
  ngOnInit() {
    this.refreshListBanques();
  }
  refreshListBanques() {
    this.service.getAllBanques().subscribe(
      (response:any) => {
        this.banques = response;
        console.log(this.banques);
      }
    );
  }

  addBanque(){
    this.router.navigate(['/dashboard/addBanque']);
  }
}
