



const test = document.getElementsByClassName('my-btn-class')

let count = 0;
let count1 = 1;

let mulByNum = 1;
let totalPrice = 0;
const applyButton = document.getElementById('apply-button');


for (const tests of test) {

    tests.addEventListener(('click'), function () {

        if (count === 4) {


            return;
        }

        else {


            const divPlace = document.getElementById('added-div');
            const newDiv = document.createElement('div');
            newDiv.classList.add('flex', 'justify-between', 'mb-2');

            const h11 = document.createElement('h1');
            const h12 = document.createElement('h1');
            h12.classList.add('pl-11')
            const h13 = document.createElement('h1');

            h11.innerText = tests.innerText;
            h12.innerText = 'Economy';
            h13.innerText = '550';


            newDiv.appendChild(h11);
            newDiv.appendChild(h12);
            newDiv.appendChild(h13);
            divPlace.appendChild(newDiv);


            setBackgroundColorById(tests.innerText);

            const currentSeat = getTextElemenValueById('seat-number');
            const newSeat = currentSeat - 1;

            setElementById('seat-number', newSeat);


            const listedSeat = getTextElemenValueById('total-seat');
            const newAdd = listedSeat + 1;

            setElementById('total-seat', newAdd);



            if (mulByNum <= 4) {

                totalPrice = 550 * mulByNum;
                getTextElemenValueById('total-price');
                setElementById('total-price', totalPrice);

                getTextElemenValueById('grand-total');
                setElementById('grand-total', totalPrice);

            }

            mulByNum++;


            const pnNmbr = document.getElementById('phn-number').addEventListener('keyup', function (event) {

                const phnNumber = parseInt(event.target.value);

                const nextButton = document.getElementById('next-button');

                if (count >= 1 && isNaN(phnNumber) === false) {

                    nextButton.removeAttribute('disabled');

                }

                else {

                    nextButton.setAttribute('disabled', true);

                }
            })


            if (count1 == 4) {

                applyButton.removeAttribute('disabled');

            }

            else {

                applyButton.setAttribute('disabled', true);

            }


            count1++;

        }

        count++;

        discountCoupon();
        applyBtn();
        return totalPrice;


    });


}


function discountCoupon() {


    document.getElementById('my-coupon').addEventListener('keyup', function (event) {

        const couponValue = event.target.value;


        if (couponValue === 'Couple 20' || couponValue === 'NEW15') {

            applyButton.removeAttribute('disabled');

            if (couponValue === 'NEW15') {

                const totalGrand = totalPrice - (totalPrice * 15 / 100);
                setElementById('grand-total', totalGrand);

            }

            else {
                const totalGrand = totalPrice - (totalPrice * 20 / 100);
                setElementById('grand-total', totalGrand);
            }

        }

        else {

            applyButton.setAttribute('disabled', true);

        }



    });
}




function applyBtn() {

    document.getElementById('apply-button').addEventListener('click', function () {
        hideElementById('apply-label');

    })

}
