// Вам необхідно написати функцію-декоратор retry(fn, maxAttempts), яка приймає на вхід функцію і додає можливість викликати функцію з максимальною кількістю спроб у разі помилки та повертає результат останнього виклику.

function retry(fn, maxAttempts) {
    return function (...args) {
        if (maxAttempts < 1) throw new Error(`Bad argument: ${maxAttempts} should be higher than 1`);
        let attempt = 1;
        let lastError;

        while (attempt <= maxAttempts) {
            try {
                return fn(...args);
            } catch (error) {
                lastError = error;
                attempt++;
                if (attempt > maxAttempts) {
                    throw new Error(`Exceeded maximum attempts (${maxAttempts}) for ${fn.name}: ${lastError.message}`);
                }
            }
        }
    };
}

function sendEmail(email) {
    if (Math.random() < 0.5) {
        throw new Error("Failed to send email");
    }
    console.log(`Email sent to ${email}`);
}

const retriedSendEmail = retry(sendEmail, 3);

try {
    retriedSendEmail("Sveta.Poliakova@test.com");
    console.log("Email successfully sent");
} catch (e) {
    console.error("Error:", e.message);
}