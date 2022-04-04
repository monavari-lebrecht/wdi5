import JSONModel from "sap/ui/model/json/JSONModel"
import BaseController from "./BaseController"
import MessageToast from "sap/m/MessageToast"
import Fragment from "sap/ui/core/Fragment"
import { jData } from "./jData"

/**
 * @namespace test.Sample.tsapp.controller
 */
export default class Main extends BaseController {
    dialog: any
    onInit(): void {
        const jData: jData = {
            inputValue: "test Input Value !!!",
            buttonText: "Don't press me !!! -> binded",
            checkbox: false,
            barcode: ""
        }
        const testModel = new JSONModel(jData)
        this.getView().setModel(testModel, "testModel")
    }
    onBoo(oEvent: any): void {
        MessageToast.show(`👻`)
    }

    onTest(oEvent: any): void {
        this.onBoo(oEvent)
    }
    onSelect(oEvent: any): void {
        const selectedProperty: boolean = oEvent.getSource().getProperty("selected")
        const selectedParameter: boolean = oEvent.getParameter("selected")
        MessageToast.show(`selectedProperty: ${selectedProperty} selectedParameter: ${selectedParameter}`)
    }

    async openDialog(): Promise<void> {
        if (!this.dialog) {
            this.dialog = await Fragment.load({ name: "test.Sample.tsapp.view.Dialog", controller: this })
            this.dialog.setModel(this.getView().getModel("i18n"), "i18n")
        }
        this.dialog.open()
    }

    close(): void {
        this.dialog.close()
    }
}
