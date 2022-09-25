/**
# Total numbers 90;
# Total numbers in Tambola Slip = 15;
# Total number of columns = 9;
# Total number of rows = 3;
# required type of array = [[2, 5], [12, 17], [29, 23]]
**/



function nextTenRandomNumber(start) {
    return Math.floor(Math.random() * 10) + start;
}

function getUniqueNumbers() {
    let megaArray = [];
    let counter = 1;
    while (counter <= 90) {
        let column = [];
        // let randomLimitter = Math.floor(Math.random() * 3) + 1;

        for (let i = 0; i < 3; i++) {
            let randomNumber = nextTenRandomNumber(counter)

            if (!column.length) {
                column.push(randomNumber)
            } else if (column[i - 1] !== randomNumber) {
                column.push(randomNumber)
            } else {
                i--
            }
        }

        megaArray.push(column);
        column = [];
        counter += 10;

    }
    
    return megaArray
}


function createSlip() {
    const slipContainer = document.getElementById('slipContainer');
    let slipNumbers = getUniqueNumbers();
    
    slipContainer.innerHTML += `
        
        <div class="tambola-slip p-3">
        <div class="box-wrapper p-2 d-flex">

        ${slipNumbers.map(item => {
        return `
                <div class="rows d-flex flex-wrap justify-content-between mb-1">
                <div class="columns">
                ${item.map(num => {
            return `<span class="box d-flex align-items-center text-center justify-content-center"><h6>${num}</h6></span>`
        }).join(' ')
            }
                </div>
              </div>    
                `
    }).join(' ')
        }
        </div>
      </div>`
    slipNumbers.length = 0


}


function getSlipGenerated() {
    const slipGeneratorButton = document.getElementById('generateSlipBtn');
    slipGeneratorButton.addEventListener('click', createSlip)
}

getSlipGenerated();