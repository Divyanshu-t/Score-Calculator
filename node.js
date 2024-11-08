    // JavaScript function to calculate the percentage
    function calculateResult() {
        // Get the score values from each input
        const score1 = parseFloat(document.getElementById('subject1').value);
        const score2 = parseFloat(document.getElementById('subject2').value);
        const score3 = parseFloat(document.getElementById('subject3').value);
        const score4 = parseFloat(document.getElementById('subject4').value);
        const score5 = parseFloat(document.getElementById('subject5').value);

        // Validate input to ensure numbers are entered
        if (isNaN(score1) || isNaN(score2) || isNaN(score3) || isNaN(score4) || isNaN(score5)) {
            alert("Please enter scores for all subjects.");
            return;
        }

        // Calculate total score and percentage
        const totalScore = score1 + score2 + score3 + score4 + score5;
        const percentage = (totalScore / 500) * 100;

        // Display result
        document.getElementById('result').textContent = 
            `Total Score: ${totalScore} / 500\nPercentage: ${percentage.toFixed(2)}%`;
    }