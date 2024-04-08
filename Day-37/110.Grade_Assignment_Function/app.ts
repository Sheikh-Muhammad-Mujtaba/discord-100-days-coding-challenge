function assignGrade(score: number): string {
    // Check the score against grade thresholds
    if (score >= 90) {
      return "A"; // Return 'A' if score is 90 or above
    } else if (score >= 80) {
      return "B"; // Return 'B' if score is between 80 and 89
    } else if (score >= 70) {
      return "C"; // Return 'C' if score is between 70 and 79
    } else if (score >= 60) {
      return "D"; // Return 'D' if score is between 60 and 69
    } else {
      return "F"; // Return 'F' if score is below 60
    }
  }
  
  console.log(assignGrade(94)); // Outputs: A
  console.log(assignGrade(55)); // Outputs: F
  