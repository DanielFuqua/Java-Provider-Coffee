export const Equipment = (equipmentObject) => {
    return `
    <article>
        <h4>Equipment ID: ${equipmentObject.id}</h4>
        <div>Serial Number: ${equipmentObject.serialNumber}</div>
        <div>Model: ${equipmentObject.model}</div>
        <div>Functional: ${equipmentObject.isFunctional}</div>
        <div>Under Warranty: ${equipmentObject.isUnderWarrnty}</div>
    </article>
    `
}