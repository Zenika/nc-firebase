import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  contributors: any[] = [
    {
      fullname: "Aurelien Loyer",
      twitter: "@AurelienLoyer",
      abstract:
        "Consultant | Formateur Web - Javascript / @Angular / @Nodejs / @VueJs | 🇨🇦 @ZenikaMontreal ex 🥖 @ZenikaLille | 🤖 Domotic Fan |🐧Penguin lover",
      image: "https://bulma.io/images/placeholders/96x96.png"
    },
    {
      fullname: "Emmanuel Demey",
      twitter: "@EmmanuelDemey",
      abstract:
        "CTO at @ZenikaLille - Google Developer Expert @GoogleDevExpert - Web Specialist - Speaker and Trainer, Organizer of #DevFestLille - @GDGLille - Lille",
      image: "https://bulma.io/images/placeholders/96x96.png"
    },
    {
      fullname: "Logan HAUSPIE",
      twitter: "@LHauspie",
      abstract:
        "Dev back @ZenikaLille. 🖥️⌨️🖱️ Born to Code, Tech aficionado et Speaker à mes heures perdues.",
      image: "https://bulma.io/images/placeholders/96x96.png"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
