function buildDriveHomepage(event) {
    var card = CardService.newCardBuilder();

    var credSection = CardService.newCardSection();

    var image1 = CardService.newImage().setImageUrl(buildDriveImage1);
    var image2 = CardService.newImage().setImageUrl(buildDriveImage2);

    credSection.addWidget(image1);
    credSection.addWidget(image2);

    card.addSection(credSection);

    return card.build();
}
