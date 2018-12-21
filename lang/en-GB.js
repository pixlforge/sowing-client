export default {
  components: {
    cart: {
      labels: {
        price: "Price",
        quantity: "Quantity"
      }
    },
    category: {
      img: {
        alt: "Category image"
      },
      link: {
        see_all: "Show all products"
      }
    },
    footer: {
      titles: {
        categories: 'Categories',
        language: "Language",
        sell_on_sowing: "Sell on Sowing",
        about: "About",
        social_networks: "Social Networks"
      },
      links: {
        login: "Log in",
        your_own_store: "Your own store",
        new_vendors: "Newest vendors",
        terms: "Terms of use",
        payments: "Payment methods",
        shipments: "Shipments"
      },
      disclaimer: {
        rights: "All rights reserved",
        made_with: "Made with",
        by: "by"
      }
    },
    forms: {
      labels: {
        email: "Email",
        name: "Name",
        password: "Password",
        password_confirmation: "Confirm password",
        first_name: "First name",
        last_name: "Last name",
        company_name: "Company",
        address_line_1: "Address line 1",
        address_line_2: "Address line 2",
        postal_code: "Postal code",
        city: "City",
        country: "Country"
      },
      buttons: {
        connection: "Log in",
        register: "Create account",
        password_email: "Send a link to reset my password",
        password_reset: "Reset password",
        create: "Create",
        cancel: "Cancel"
      },
      select: "Select"
    },
    navbar: {
      buttons: {
        login: "Log in",
        register: "Create an account",
      },
      user: {
        logout: "Log out"
      }
    },
    products: {
      img: {
        alt: "Product image"
      },
      details: {
        remaining: "products in stock",
        out_of_stock: "Out of stock"
      }
    },
    streaks: {
      register: {
        title: "Sell today",
        body: "Launch your own store easily in a few clicks now.",
        button: "Create my store"
      },
      newsletter: {
        title: "Subscribe to our newsletter",
        body: "Quick, easy registration, no spam, and unsubscribe whenever you want.",
        button: "Subscribe",
        placeholder: "your.email@address.ch"
      },
    },
    variations: {
      labels: {
        quantity: "Quantity",
        selection: "Select",
      },
      buttons: {
        add_to_cart: "Add to cart"
      },
      select: {
        out_of_stock: "Out of stock"
      }
    }
  },
  pages: {
    cart: {
      title: "My cart",
      checkout: "Proceed to checkout"
    },
    checkout: {
      change_address: "Change address?",
      delivery: "Delivery",
      delivery_address: "Delivery address",
      delivery_method: "Delivery method",
      new_address: "New address",
      order: "Order",
      payment: "Payment",
      subtotal: "Subtotal",
      title: "Checkout",
      total: "Total"
    },
    home: {
      title: "Home",
      titles: {
        features: "All the Sowing advantages for you",
        shops: "Discover our new shops",
        categories: "Discover our products by category",
        reviews: "They gave their opinion",
      },
      features: {
        first: {
          title: "Sowing is unique in Switzerland",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam et facere quia aliquid perferendis optio, temporibus quasi error! Ad omnis qui nulla iste aspernatur dolorem dolores ullam tenetur est. Qui."
        },
        second: {
          title: "An unprecedented visibility for you",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam et facere quia aliquid perferendis optio, temporibus quasi error! Ad omnis qui nulla iste aspernatur dolorem dolores ullam tenetur est. Qui."
        },
        third: {
          title: "Sowing is independent",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam et facere quia aliquid perferendis optio, temporibus quasi error! Ad omnis qui nulla iste aspernatur dolorem dolores ullam tenetur est. Qui."
        },
        fourth: {
          title: "Your security, our mission",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam et facere quia aliquid perferendis optio, temporibus quasi error! Ad omnis qui nulla iste aspernatur dolorem dolores ullam tenetur est. Qui."
        },
      }
    },
    login: {
      title: "Log in to your Sowing account",
      links: {
        password: "Password forgotten?",
        register: "Register a Sowing account"
      }
    },
    password_email: {
      title: "Account recovery",
      paragraphs: {
        first: "Forgot your password?",
        second: "No problem, simply enter your e-mail address in the field below and we will send you an e-mail containing a link allowing you to set a new password for your account."
      }
    },
    password_reset: {
      title: "Password reset"
    },
    register: {
      title: "Registering your Sowing account",
      links: {
        terms: "terms of use"
      },
      terms: "I've read and I accept the"
    },
    register_success: {
      title: "Account created successfully!"
    }
  },
  toasts: {
    addresses: {
      created: "New address created successfully!",
      selected: "Address selected."
    },
    cart: {
      has_changed: "One or more items in your cart have been updated, please review them before ordering.",
      item_added_singular: "added to cart!",
      item_added_plural: "added to cart!",
      product_removed: "removed."
    },
    general_error: "An error has occurred. Please reload the page and try again, please.",
    logged_out: "You are now logged out.",
    validation: "The form contains errors. Please correct them and try again.",
    welcome: "Welcome back"
  }
}