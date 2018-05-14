import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model'
import { Observable } from 'rxjs/Observable'
import { Observer } from 'rxjs/Observer'
import 'rxjs/Rx'

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

    public oferta: Oferta  
    
    constructor(
      private router: ActivatedRoute, 
      private ofertasService: OfertasService
    ){ }

  ngOnInit() {
    this.ofertasService.getOfertasPorId(this.router.snapshot.params['id'])
  .then( (ofertas: Oferta) =>{
    this.oferta = ofertas
  })

  }

}
