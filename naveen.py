class Book:
    def init(self, title, price):
        self.title = title
        self.price = price

class ShoppingCart:
    def init(self):
        self.items = []

    def add_item(self, book):
        self.items.append(book)
        print(f'Added {book.title} to your cart.')

    def view_cart(self):
        total = 0
        print("\nShopping Cart:")
        for book in self.items:
            print(f"{book.title}: ${book.price:.2f}")
            total += book.price
        print(f"Total: ${total:.2f}")
        return total

class PaymentProcessor:
    def process_payment(self, total_amount):
        # This is a mock payment process method
        print(f"\nProcessing payment of ${total_amount:.2f}...")
        # Simulate success
        return True

def main():
    # Create some sample books
    book1 = Book("The Great Gatsby", 10.99)
    book2 = Book("1984", 8.99)
    book3 = Book("To Kill a Mockingbird", 12.99)

    # Initialize the shopping cart
    cart = ShoppingCart()

    # Add books to the cart
    cart.add_item(book1)
    cart.add_item(book2)
    cart.add_item(book3)

    # View the items in the cart
    total_amount = cart.view_cart()

    # Process the payment
    payment_processor = PaymentProcessor()
    if payment_processor.process_payment(total_amount):
        print("Payment processed successfully!")
    else:
        print("Payment failed. Please try again.")

if name == "main":
    main()

