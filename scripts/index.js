document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" })
    })
})

const allBtn = document.getElementsByClassName('seat-select')

let seatAdded = 0;
let seatLeft = 40;
let totalPrice = 0;
let grandTotal = 0;


for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {

        let seatNumber = e.target.innerText;
        let seat = document.createElement('div');
        seat = document.createTextNode(seatNumber);

        let classText = 'Economy';
        let busClass = document.createElement('div');
        busClass = document.createTextNode(classText);

        let price = '550';
        let ticketPrice = document.createElement('div');
        ticketPrice = document.createTextNode(price);


        let row1 = document.createElement('p')
        row1.appendChild(seat)

        let row2 = document.createElement('p')
        row2.appendChild(busClass)

        let row3 = document.createElement('p')
        row3.appendChild(ticketPrice)
        
        document.getElementById('tbody').appendChild(row1)
        document.getElementById('tbody').appendChild(row2)
        document.getElementById('tbody').appendChild(row3)


        if (e.target.classList.contains('btn-seat') == true) {
            e.target.classList.add('btn-alternative')
            e.target.classList.remove('btn-seat')
            seatAdded = seatAdded + 1;
            setText("seat-count", seatAdded)
            seatLeft = seatLeft - 1;
            setText("seat-left", seatLeft)
            totalPrice = totalPrice + 550;
            setText("total-price", totalPrice)
            grandTotal = grandTotal + 550;
            setText("grand-total", grandTotal)
        }
        else {
            e.target.classList.remove('btn-alternative')
            e.target.classList.add('btn-seat')
            seatAdded = seatAdded - 1;
            setText("seat-count", seatAdded)
            seatLeft = seatLeft + 1;
            setText("seat-left", seatLeft)
            totalPrice = totalPrice - 550;
            setText("total-price", totalPrice)
            grandTotal = grandTotal - 550;
            setText("grand-total", grandTotal)
        }
    

        document.getElementById('apply').addEventListener('click', function() {
            let grandTotal = parseFloat(document.getElementById('grand-total').textContent);
            let totalPrice = parseFloat(document.getElementById('total-price').textContent);
        
            if (seatAdded >= 4) {
                if (document.getElementById('coupon').value == 'NEW15') {
                    grandTotal = totalPrice - ((totalPrice * 15) / 100);
                } else if (document.getElementById('coupon').value == 'Couple20') {
                    grandTotal = totalPrice - ((totalPrice * 20) / 100);
                }
            }
        
            document.getElementById('grand-total').textContent = grandTotal.toFixed(2);
        });
        
        });
        
        };
    
        

function setText(id , value) {
    document.getElementById(id).innerText = value;
}





document.addEventListener('DOMContentLoaded', function() {
    const input1 = document.getElementById('name');
    const input2 = document.getElementById('number');
    const input3 = document.getElementById('email');
    const button = document.getElementById('next');


    function checkInputs() {
        const filled1 = input1.value.trim() !== '';
        const filled2 = input2.value.trim() !== '';
        const filled3 = input3.value.trim() !== '';
        return filled1 && filled2 && filled3;
    }

    function toggleButton() {
        button.disabled = !checkInputs();

    }


    input1.addEventListener('input', toggleButton);
    input2.addEventListener('input', toggleButton);
    input3.addEventListener('input', toggleButton);

    toggleButton();
});

document.getElementById('next').addEventListener('click', function() {
    document.getElementById('header').classList.add('hidden')
    document.getElementById('main').classList.add('hidden')
    document.getElementById('footer').classList.add('hidden')
    document.getElementById('thanks').classList.remove('hidden')
})
document.getElementById('continue').addEventListener('click', function() {
    document.getElementById('header').classList.remove('hidden')
    document.getElementById('main').classList.remove('hidden')
    document.getElementById('footer').classList.remove('hidden')
    document.getElementById('thanks').classList.add('hidden')
})