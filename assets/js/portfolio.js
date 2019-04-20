var portfolio = {
    works: [
        {
            name: "Hangman",
            author: "joshua-unseen",
            repoName: "hangman",
        },
        {
            name: "Star Wars Combat",
            author: "joshua-unseen",
            repoName: "unit-4-game",
        },
        {
            name: "Tacky Trivia",
            author: "joshua-unseen",
            repoName: "trivia-game",
        },
        {
            name: "Gif Grabber",
            author: "joshua-unseen",
            repoName: "peanutbutter",
        },
        {
            name: "R/P/S Smackdown",
            author: "joshua-unseen",
            repoName: "rps-multiplayer",
        },
        {
            name: "Color Spectron-O-Meter",
            author: "zenwattage",
            repoName: "project1",
        },
    ],

    BuildView() {
        for (var i = 0; i < this.works.length; i++) {
            var name = this.works[i].name;
            var repoURL = "https://github.com/" + this.works[i].author + "/" + this.works[i].repoName;
            var liveURL = "https://" + this.works[i].author + ".github.io/" + this.works[i].repoName;
            var imgURL = "assets/images/" + this.works[i].repoName + ".png";

            var newCard = $("<div class=\"card\">");
            $("<img src=\"" + imgURL + "\" class=\"card-img\" alt=\"" + name + "\">").appendTo(newCard);
            $("<div class=\"card-img-overlay d-flex align-items-end pb-1 pl-0 pr-0\">").html(
                "<div class=\"container bg-info text-light text-center\">" + name + "</div>"
            ).appendTo(newCard);
            $("#portfolio-div").prepend(newCard);
        }
    }
}