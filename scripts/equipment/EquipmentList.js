import { useEquipment } from "./equipmentDataProvider.js";
import { Equipment } from "./Equipment.js";

const contentTarget = document.querySelector(".container__equipment")
export const EquipmentList = () => {
    contentTarget.innerHTML = "<h2>Equipment</h2>"
    const equipmentArray = useEquipment()
    for (const equipmentObject of equipmentArray) {
        const equipmentHTML = Equipment(equipmentObject)
        contentTarget.innerHTML += equipmentHTML
    }
}