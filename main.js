function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || income < expenses) {
    return "Invalid Input";
  }

  const remainMoney = income - expenses;
  const remainAfterVat = remainMoney * 0.2;

  return remainAfterVat;
}



function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  }

  const emailBody = email.split("@");
  const notification = emailBody[0] + " sent you an email from " + emailBody[1];
  return notification;
}



function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }

  for (const x of name) {
    if (!isNaN(Number(x))) {
      return true;
    }
  }

  return false;
}



function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input";
  }

  const testScore = obj.testScore;
  const schoolGrade = obj.schoolGrade;
  const isFFfamily = obj.isFFamily;

  let totalScore = testScore + schoolGrade;

  if (isFFfamily) {
    totalScore += 20;
  }

  return totalScore >= 80 ? true : false;
}




function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }

  let totalTime = 0;

  for (const x of waitingTimes) {
    totalTime += x;
  }

  const avgTime = Math.round(totalTime / waitingTimes.length);

  const serial = serialNumber - 1 - waitingTimes.length;

  const leftTime = avgTime * serial;

  return leftTime;
}
