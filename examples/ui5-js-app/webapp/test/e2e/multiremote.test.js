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

    it("check the metadata", async () => {
        const button = await browser.asControl({
            selector: {
                id: "openDialogButton",
                viewName: "test.Sample.view.Main"
            },
            forceSelect: true
        })
        const metadata = button[0].getControlInfo()

        expect(metadata.id).toEqual("container-Sample---Main--openDialogButton")
        expect(metadata.className).toEqual("sap.m.Button")
        expect(metadata.key).toEqual("openDialogButtontestSample.view.Main")

        button[0].press()
    })

    // it("should open two browser instances with ui5 running", async () => {
    // const browserTitle = await browser.getTitle()
    // expect(browserTitle).toEqual(["Sample UI5 Application", "Sample UI5 Application"])

    // 	const title = await browser.asControl(titleSelector)
    // 	const bindingInfo = await title.getBinding("text")
    // 	// bindingInfo is an object and it's oValue property can be accessed
    // 	const response = bindingInfo.oValue
    // 	expect(response).toEqual("UI5 demo")
    // })
})
