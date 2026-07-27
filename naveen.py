class Book:
    def __init__(self, title, price):
        self.title = title
        self.price = price


class ShoppingCart:
    def __init__(self):
        self.items = []

    def add_item(self, book):
        self.items.append(book)
        print(f"Added {book.title} to your cart.")

    def view_cart(self):
        total = 0
        print("\nShopping Cart:")
        for book in self.items:
            print(f"{book.title}: ${book.price:.2f}")
            total += book.price
        print(f"Total: ${total:.2f}")
        return total


class PaymentProcessor:
    def process_payment(self, total_amount, card_number):
        if total_amount <= 0:
            print("Payment failed: total must be greater than zero.")
            return False

        if len(card_number) != 16 or not card_number.isdigit():
            print("Payment failed: invalid card number.")
            return False

        print(f"\nProcessing payment of ${total_amount:.2f}...")
        print("Payment successful!")
        return True


def main():
    book1 = Book("The Great Gatsby", 10.99)
    book2 = Book("1984", 8.99)
    book3 = Book("To Kill a Mockingbird", 12.99)

    cart = ShoppingCart()
    cart.add_item(book1)
    cart.add_item(book2)
    cart.add_item(book3)

    total_amount = cart.view_cart()

    payment_processor = PaymentProcessor()
    card_number = "4242424242424242"

    if payment_processor.process_payment(total_amount, card_number):
        print("Order placed successfully!")
    else:
        print("Payment failed. Please try again.")


if __name__ == "__main__":
    main()

# payment is added to the code. It checks for valid card number and total amount before processing the payment.