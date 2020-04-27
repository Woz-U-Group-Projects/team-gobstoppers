import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Bid } from "./models/bid";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BidService {
  // Java Spring Boot uses port 8080
  //apiUrl: string = "http://localhost:8080/tasks";

  // C# dotnetcore uses port 5000
  //apiUrl: string = "http://localhost:5000/api/tasks";

  // Express will use port 3000
  apiUrl: string = "http://localhost:3001/bids";

  constructor(private http: HttpClient) {}

  getBids(): Observable<Bid[]> {
    return this.http.get<Bid[]>(this.apiUrl);
  }

  addBid(bid): Observable<Bid> {
    return this.http.post<Bid>(this.apiUrl, bid);
  }
}
