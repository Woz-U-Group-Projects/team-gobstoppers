import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BidDisplayComponent } from "./auth/components/bid-display/bid-display.component";
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, BidDisplayComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, AuthModule, SharedModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
