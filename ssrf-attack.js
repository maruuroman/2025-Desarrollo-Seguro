import axios from 'axios';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzU4NzI4MTIyLCJleHAiOjE3NTg3MzE3MjIsImlzcyI6IjIwMjUtREVzYXJyb2xsb1NlZ3VybyJ9.8cfJ3Bh3G4K4P83TnfWLVtvu76O6PCe5uNqokTgptVs';
console.log(token);
const payload = {
    userId: "123",
    invoiceId: "456",
    paymentBrand: "172.17.0.1:8000",
    ccNumber: "1234567890123456",
    ccv: "123",
    expirationDate: "12/23"
};

axios.post('http://localhost:3000/api/invoices/123/pay', payload,
{
    headers: {
        'Authorization': `Bearer ${token}`
    }
}).then(response => {
    console.log('petición enviada:', response.data);
})
.catch(error => {
    console.error('Error:', error);
});