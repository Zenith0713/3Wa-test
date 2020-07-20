-- Numero 7

SELECT orderNumber, orderDate, shippedDate, DATEDIFF(shippedDate, orderDate) AS DayGap, status 
FROM orders 
WHERE status = "Shipped" OR status = "In Process" OR DayGap > 10
ORDER BY DayGap DESC, orderDate

-- Numero 8

SELECT productName, MSRP 
FROM products 
WHERE productName LIKE "1960%"

-- Numero 9

SELECT AVG(buyPrice), productVendor 
FROM products 
GROUP BY productVendor 
ORDER BY AVG(buyPrice) DESC

-- Numero 10



