import axios from 'axios';

const payload = {
    userId: "123",
    invoiceId: "456",
    paymentBrand: "localhost",
    ccNumbre: "1234567890123456",
    ccv: "123",
    expirationDate: "12/23"
};

axios.post('http://localhost:3000/api/invoices/123/pay', payload).then(response => {
    console.log('petición enviada:', response.data);
})
.catch(error => {
    console.error('Error:', error);
});