function validateCPFCNPJ(input: string): boolean {
    const cpfPattern = /^\d{11}$/; // 11 digits for CPF
    const cnpjPattern = /^\d{14}$/; // 14 digits for CNPJ

    // Remove non-numeric characters
    const cleanedInput = input.replace(/\D/g, '');

    if (cpfPattern.test(cleanedInput)) {
        // CPF validation logic can be added here
        return true; // Placeholder for actual CPF validation
    } else if (cnpjPattern.test(cleanedInput)) {
        // CNPJ validation logic can be added here
        return true; // Placeholder for actual CNPJ validation
    }

    return false; // Invalid input
}

export default validateCPFCNPJ;