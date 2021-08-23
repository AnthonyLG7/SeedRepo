import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ChildComponent } from './child/child.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [AppComponent, HeaderComponent, ChildComponent],
    bootstrap: [AppComponent]
})

export class AppModule {}
