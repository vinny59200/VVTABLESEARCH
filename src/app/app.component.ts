import { Component, OnInit } from '@angular/core';
import { Shipment } from './models';
import { ShipmentListComponent } from './shipment-list/shipment-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'VVTABLESEARCH';

  shipmentsSource: Shipment[];

  ngOnInit(): void {
    let spt1: Shipment = { content: "Texas Corporation", packages: "5", weight: "3kg" };
    let spt2: Shipment = { content: "Nashville & Co", packages: "2", weight: "1kg" };
    let spt3: Shipment = { content: "GeorgeTown Facilities", packages: "10", weight: "2kg" };
    let spt4: Shipment = { content: "New York Real Estate", packages: "20", weight: "5kg" };
    let spt5: Shipment = { content: "London Plaza", packages: "1", weight: "1kg" };
    let spt6: Shipment = { content: "Valladolid Station", packages: "3", weight: "3kg" };
    let spt7: Shipment = { content: "Dortmund Terraces", packages: "2", weight: "6kg" };
    let spt8: Shipment = { content: "Brisbane Beach", packages: "7", weight: "3kg" };
    this.shipmentsSource=[spt1,spt2,spt3,spt4,spt5,spt6,spt7,spt8];
  }
}
