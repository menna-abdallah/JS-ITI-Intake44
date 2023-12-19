function start() {
    let playerName = prompt(`Hi, Say Your Name`);
    if (playerName != "" && playerName != null) {
      alert(`Hi, ${playerName} please answer the Following Questions`);
      let playerAge = Number(prompt(`How old Are You ?!`));
      if (playerAge > 18) {
        alert(`Ok! good enough to Complete`);
        let choice = prompt(
          `Reply by yes or No | do you think programming is good for you ?`
        ).toLowerCase();
        if (choice == `yes`) {
          alert(`${playerName}, Sorry to say it | but you Have A mental issues 🙂`);
        } 
        else if (choice == `no`) {
          alert(
            `Mee too , thank you for telling us , I will give you a somthing `
          );
          let choice2 = prompt(
            `reply by ( advise || info || thanks ) `
          ).toLowerCase();
          if (choice2 == `advise`) {
            alert(
              `${playerName}, the secret of getting a head is getting started , so start now 👌`
            );
          } else if (choice2 == `info`) {
            alert(
              `The human heart beats about 100,000 times a day! That means your ticker will beat around 36,500,000 times in a year. Count them if you don't believe us! Yes, we'll wait. 🤷‍♂️`
            );
          } else if (choice2 == `thanks`) {
            alert(`Thank you ${playerName}`);
          } else {
            alert(`😒😒😒`);
          }
        } else {
          alert(`I Said Reply by YES OR NO 😒`);
        }
      } else if (playerAge <= 18) 
      {
        alert(`sorry ! you are a child`);
      }
      else{
        alert(`Please Start Again and Say Your age`);
      }
    } else {
      alert(`Please Start Again and Say Your Name`);
    }
  }