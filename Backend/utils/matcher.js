exports.matchAssessments = (userQuery, data) => {
  if (!userQuery || !Array.isArray(data)) return [];

  const keywords = userQuery.toLowerCase().split(" ");

  const results = [];

  for (let item of data) {
    if (!item.Query || !item.Assessment_url) continue;

    const queryText = item.Query.toLowerCase();

    // 🔍 keyword match
    const isMatch = keywords.some(word =>
      queryText.includes(word)
    );

    if (isMatch) {
      results.push({
        query: item.Query,
        assessment_url: item.Assessment_url
      });
    }
  }

  return results;
};
