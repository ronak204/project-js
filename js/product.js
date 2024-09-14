const products = [];

        document.getElementById('productForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const title = document.getElementById('title').value;
            const price = document.getElementById('price').value;
            const image = document.getElementById('image').value;
            const category = document.getElementById('category').value;

            const product = {
                title,
                price,
                image,
                category
            };

            products.push(product);

            displayProducts();

            this.reset();
        });

        function displayProducts() {
            const productContainer = document.getElementById('productContainer');
            productContainer.innerHTML = '';

            products.forEach(product => {
                const productItem = document.createElement('div');
                productItem.classList.add('product-item');
                
                productItem.innerHTML = `
                    <h3>${product.title}</h3>
                    <p>Price: $${product.price}</p>
                    <p>Category: ${product.category}</p>
                    <img src="${product.image}" alt="${product.title}">
                `;

                productContainer.appendChild(productItem);
            });
        }
        