const Main = require("./pageObjects/Main")

const titleSelector = {
    selector: {
        id: "container-Sample---Main--Title::NoAction.h1"
    }
}

describe("Multi Remote", () => {
    before(async () => {
        await Main.open()
    })

    it("should open two browser instances with ui5 running", async () => {
        const browserTitle = await browser.getTitle()
        expect(browserTitle).toEqual(["Sample UI5 Application", "Sample UI5 Application"])
    })
})
