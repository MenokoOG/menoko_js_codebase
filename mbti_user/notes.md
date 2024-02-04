// Sample data structure representing web habits and MBTI types
const userWebHabits = [
  { mbti: 'INTJ', habits: ['browsing', 'researching', 'coding'] },
  { mbti: 'ESFP', habits: ['social_media', 'shopping', 'entertainment'] },
  // Add more data entries as needed
];

// Function to analyze web habits based on MBTI types
function analyzeWebHabits(mbtiType) {
  const usersWithSameType = userWebHabits.filter(user => user.mbti === mbtiType);
  
  // Perform statistical analysis on the habits of users with the same MBTI type
  
  console.log(`Analyzing web habits for users with MBTI type ${mbtiType}`);
  console.log(usersWithSameType);
}

// Example usage
analyzeWebHabits('INTJ');
