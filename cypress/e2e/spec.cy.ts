describe('My First Test', () => {

  it("Should app work", () => {
    cy.visit('/');

    cy.get("#upload-image").selectFile('../poster-thumbnail_v115.png', {action: 'drag-drop'})


    // check toolbar dropper work
    cy.get(".toolbar-dropper").click({force: true});

    let initialColor: string;
    cy.get(".color-value-hex").invoke("text").then(color => {
      initialColor = color.trim();
    });

    cy.get('[data-id="imgCanvas"]').should("be.visible").click("center");

    cy.get(".color-value-hex").invoke("text").then(color => {
      expect(color.trim()).not.to.equal(initialColor);
    });

    cy.get(".toolbar-dropper").click();


    //copies color to clipboard and shows success message
    cy.get('[data-copy="copy-button"]').click();
    cy.wait(2000);
    cy.get('.copied-message').should('not.exist');


    // change image
    cy.get('input[type=file]').selectFile('../monte.jpg', {force: true});
  })
})
