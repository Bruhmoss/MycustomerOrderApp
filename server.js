var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/'));

app.get('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = {};
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].id === customerId) {
           data = customers[i];
           break;
        }
    }  
    res.json(data);
});

app.get('/customers', function(req, res) {
    res.json(customers);
   
});

app.get('/orders', function(req, res) {
    var orders = [];
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].orders) {
            for (var j=0,ordersLen=customers[i].orders.length;j<ordersLen;j++) {
                orders.push(customers[i].orders[j]);   
            }
        }
    }  
    res.json(orders);
});

app.delete('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = { status: true };
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].id === customerId) {
           customers.splice(i,1);
           data = { status: true };
           break;
        }
    }  
    res.json(data);
});

app.listen(process.env.PORT || 8080);

console.log('Express listening on port 8080');

        var customers = [
            {
                id: 1, 
                joined: '2018-10-12', 
                name:'Ravi', 
                city:'Chandigarh', 
                orderTotal: 999.56,
                orders: [
                    {
                        id: 1,
                        product: 'Shoes',
                        total: 999.56
                    }
                ]
            }, 
            {
                id: 2, 
                joined: '2020-01-25',
                name:'Varun', 
                city:'Lucknow', 
                orderTotal: 19.99,
                orders: [
                    {
                        id: 2,
                        product: 'Ball',
                        total: 180
                    },
                    {
                        id: 3,
                        product: 'Bat',
                        total: 1595
                    }
                ]
            },
            {
                id: 3, 
                joined: '2016-06-15',
                name:'Palash', 
                city:'New Delhi', 
                orderTotal:440.99,
                orders: [
                    {
                        id: 4,
                        product: 'Headphones',
                        total: 440.99
                    }
                ]
            }, 
            {
                id: 4, 
                joined: '2011-03-28',
                name:'Deven', 
                city:'Pune', 
                orderTotal:101.50,
                orders: [
                    {
                        id: 5,
                        product: 'Sanitizer',
                        total: 101.50
                    }
                ]
            },
            {
                id: 5, 
                joined: '2016-05-21',
                name:'Abhay', 
                city:'Hyderabad', 
                orderTotal: 60.50,
                orders: [
                    {
                        id: 5,
                        product: 'Napkin',
                        total: 60.50
                    }
                ]
            },
            {
                id: 6, 
                joined: '2021-07-11',
                name:'Arushi', 
                city:'Kolkata', 
                orderTotal: 12899.83,
                orders: [
                    {
                        id: 5,
                        product: 'Smartphone',
                        total: 12899.83
                    }
                ]
            }







        ];