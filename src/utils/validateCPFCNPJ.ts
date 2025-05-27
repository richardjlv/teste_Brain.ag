function validateCPFCNPJ(input: string): boolean {
  const cpfPattern = /^\d{11}$/; // 11 digits for CPF
  const cnpjPattern = /^\d{14}$/; // 14 digits for CNPJ

  // Remove non-numeric characters
  const cleanedInput = input.replace(/\D/g, '');

  function isValidCPF(cpf: string): boolean {
    if (/^(\d)\1+$/.test(cpf)) return false; // all digits equal
    let sum = 0;
    for (let i = 0; i < 9; i++) sum += Number(cpf.charAt(i)) * (10 - i);
    let firstCheck = (sum * 10) % 11;
    if (firstCheck === 10 || firstCheck === 11) firstCheck = 0;
    if (firstCheck !== Number(cpf.charAt(9))) return false;

    sum = 0;
    for (let i = 0; i < 10; i++) sum += Number(cpf.charAt(i)) * (11 - i);
    let secondCheck = (sum * 10) % 11;
    if (secondCheck === 10 || secondCheck === 11) secondCheck = 0;
    return secondCheck === Number(cpf.charAt(10));
  }

  function isValidCNPJ(cnpj: string): boolean {
    if (/^(\d)\1+$/.test(cnpj)) return false; // all digits equal
    const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const weights2 = [6].concat(weights1);
    let sum = 0;
    for (let i = 0; i < 12; i++) sum += Number(cnpj.charAt(i)) * weights1[i];
    let firstCheck = sum % 11;
    firstCheck = firstCheck < 2 ? 0 : 11 - firstCheck;
    if (firstCheck !== Number(cnpj.charAt(12))) return false;

    sum = 0;
    for (let i = 0; i < 13; i++) sum += Number(cnpj.charAt(i)) * weights2[i];
    let secondCheck = sum % 11;
    secondCheck = secondCheck < 2 ? 0 : 11 - secondCheck;
    return secondCheck === Number(cnpj.charAt(13));
  }

  if (cpfPattern.test(cleanedInput)) {
    return isValidCPF(cleanedInput);
  } else if (cnpjPattern.test(cleanedInput)) {
    return isValidCNPJ(cleanedInput);
  }

  return false; // Invalid input
}

export default validateCPFCNPJ;