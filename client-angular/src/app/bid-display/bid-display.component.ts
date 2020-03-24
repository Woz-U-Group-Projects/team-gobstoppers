import { Component, OnInit } from "@angular/core";
import { BidService } from "../bid.service";
import { Bid } from "../models/bid";

@Component({
  selector: "app-bid-display",
  templateUrl: "./bid-display.component.html",
  styleUrls: ["./bid-display.component.css"]
})
export class BidDisplayComponent implements OnInit {
  constructor(private bidService: BidService) {}
  newBid: Bid = new Bid();
  bids: Bid[] = [];

  getBids() {
    this.bidService.getBids().subscribe(bids => (this.bids = bids));
  }

  addBid() {
    this.bidService.addBid(this.newBid).subscribe(result => {
      this.getBids();
      this.newBid = new Bid();
    });
  }

  ngOnInit() {
    this.getBids();
  }
}
