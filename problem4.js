function calculateFinalScore(obj) {
    if (typeof obj !== 'object') {
        console.log('Sajmul Hossain');
        return 'Invalid Input';
    }


    const testScore = obj.testScore;
    const schoolGrade = obj.schoolGrade;
    const isFFfamily = obj.isFFamily;



    let totalScore = testScore + schoolGrade;


    if(isFFfamily) {
        totalScore += 20;
    }

    return totalScore >= 80 ? true : false;

}

const result = calculateFinalScore({ name: "Rajib", testScore: 50,  schoolGrade: 25, isFFamily : true  });
console.log(result);