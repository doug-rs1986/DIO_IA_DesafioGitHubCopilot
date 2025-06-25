/**
 * Validates a credit card number and determines the card brand.
 * @param {string} cardNumber - The credit card number to validate.
 * @returns {Object} An object containing validation result and card brand.
 */
function validateCreditCard(cardNumber) {
    // Remove any non-digit characters
    const sanitizedNumber = cardNumber.replace(/\D/g, '');
    
    // Check if the input contains only digits and has appropriate length
    if (!/^\d+$/.test(sanitizedNumber) || sanitizedNumber.length < 13 || sanitizedNumber.length > 19) {
        return { valid: false, brand: 'unknown' };
    }
    
    // Apply Luhn algorithm for basic validation
    let sum = 0;
    let shouldDouble = false;
    
    for (let i = sanitizedNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(sanitizedNumber.charAt(i));
        
        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        
        sum += digit;
        shouldDouble = !shouldDouble;
    }
    
    const isValid = sum % 10 === 0;
    
    // Determine card brand based on the card number patterns
    let brand = 'unknown';
    
    if (isValid) {
        // Card brand patterns as an array of objects
        const cardPatterns = [
            { brand: 'visa', regex: /^4/ },
            { brand: 'mastercard', regex: /^5[1-5]/ },
            { brand: 'mastercard', regex: /^2(2[2-9][1-9]|2[3-9]\d|[3-6]\d{2}|7([01]\d|20))/ },
            { brand: 'amex', regex: /^3[47]/ },
            { brand: 'discover', regex: /^6011/ },
            { brand: 'discover', regex: /^65/ },
            { brand: 'discover', regex: /^64[4-9]/ },
            { brand: 'discover', regex: /^622(12[6-9]|1[3-9]|[2-8]|9[0-1][0-9]|92[0-5])/ },
            { brand: 'diners', regex: /^3(0[0-5]|[68-9])/ },
            { brand: 'jcb', regex: /^(2131|1800|35)/ },
            { brand: 'elo', regex: /^(4011(78|79)|43(1274|8935)|45(1416|7393|763(1|2))|50(4175|6699|67[0-7][0-9]|9000)|50(9[0-9][0-9][0-9])|627780|63(6297|6368)|650(03([^4])|04([0-9])|05(0|1)|05([7-9])|06([0-9])|07([0-9])|08([0-9])|4([0-3][0-9]|8[5-9]|9[0-9])|5([0-9][0-9]|3[0-8])|9([0-6][0-9]|7[0-8])|7([0-2][0-9])))/ },
            { brand: 'hipercard', regex: /^(606282|3841)/ }
        ];

        for (const pattern of cardPatterns) {
            if (pattern.regex.test(sanitizedNumber)) {
                brand = pattern.brand;
                break;
            }
        }
    }
    
    return { 
        valid: isValid, 
        brand: brand,   
        number: sanitizedNumber
    };
}           

/**
 * Processes the credit card information from an image (simulated)
 * In a real implementation, this would use OCR to extract data from base.jpg
 * @param {string} imagePath - Path to the credit card image
 * @returns {Object} Credit card information including brand
 */
function processCreditCardFromImage(imagePath) {
    // In a real implementation, we would:
    // 1. Use an OCR library to extract text from the image
    // 2. Identify and extract the credit card number
    // 3. Validate the number and determine the brand
    
    console.log(`Processing credit card image from: ${imagePath}`);
    
    // This is a placeholder for OCR functionality
    // In a real application, you would replace this with actual OCR code
    
    return {
        message: `To implement actual OCR functionality, you would need to use a library like Tesseract.js or a cloud OCR service.`,
        imagePath: imagePath,
        note: "The validateCreditCard function above can be used once you extract the card number from the image."
    };
}

// Example usage
const exampleCard = "5379 5625 8396 2700"; 
let exampleCardNumber = exampleCard.trim();
const validationResult = validateCreditCard(exampleCardNumber);
console.log(validationResult);

// Example of how you would use the image processing function
const imageProcessingResult = processCreditCardFromImage("base.jpg");
console.log(imageProcessingResult);

module.exports = {
    validateCreditCard,
    processCreditCardFromImage
};