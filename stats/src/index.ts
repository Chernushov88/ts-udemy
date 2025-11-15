fetch('/football.csv')
  .then(res => res.text())
  .then(data => {
    const matches = data
    .split('\n')
    .map((row: string): string[] => {
     return row.split(',');      
    })

    enum MatchResult {
      HomeWin = 'H',
      AwayWin = 'A',
      Draw = 'D'
    }

    let manUnitedWins = 0;

    for (let match of matches) {
      if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {  
        manUnitedWins++;  
      } else if(match[2] ==='Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
      }
    }
    
    console.log(`Man United won ${manUnitedWins} games`);
  })
  .catch(err => console.error('Error fetching the CSV file:', err));