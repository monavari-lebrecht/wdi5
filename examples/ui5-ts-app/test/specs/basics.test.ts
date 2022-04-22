describe("basics", async () => {
    it("should have the right title", async () => {
        const title = await browser.getTitle()
        expect(title).toEqual("UI5 Application tsapp")
    })

    // #118
    it("should use a control selector with dots and colons (wdi5)", async () => {
        const selector = {
            selector: {
                id: "Title::NoAction.h1",
                viewName: "test.Sample.tsapp.view.Main"
            }
        }

        // ui5
        const titleWUi5 = await browser.asControl(selector).getText()
        expect(titleWUi5).toEqual("UI5 demo - Typescript")
    })
})
