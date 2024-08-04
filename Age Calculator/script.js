function calculateAge() {
    // Get input values
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value) - 1; // JavaScript months are 0-based
    const year = parseInt(document.getElementById('year').value);

    if (!day || !month || !year || isNaN(day) || isNaN(month) || isNaN(year)) {
        alert('Please enter valid date values.');
        return;
    }

    // Current date
    const today = new Date();
    const birthDate = new Date(year, month, day);

    // Calculate age
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Display the result
    document.getElementById('result').textContent = `You are ${age} years old.`;
}
