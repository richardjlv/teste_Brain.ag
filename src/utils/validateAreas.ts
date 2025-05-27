function validateAreas(totalArea: number, cultivableArea: number, vegetationArea: number): boolean {
    if (cultivableArea + vegetationArea > totalArea) {
        return false; // The sum of cultivable and vegetation areas exceeds the total area
    }
    return true; // The areas are valid
}

export default validateAreas;