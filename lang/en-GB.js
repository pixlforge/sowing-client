/**
 * Components
 */
import accountCard from '~/lang/en-GB/components/accountCard'
import alerts from '~/lang/en-GB/components/alerts'
import aria from '~/lang/en-GB/components/aria'
import buttons from '~/lang/en-GB/components/buttons'
import cart from '~/lang/en-GB/components/cart'
import categories from '~/lang/en-GB/components/categories'
/**
 * Pages
 */
import adviceToCreators from '~/lang/en-GB/pages/adviceToCreators'
import comingSoon from '~/lang/en-GB/pages/comingSoon'

export default {
  /**
   * Components
   */
  ...accountCard,
  ...alerts,
  ...aria,
  ...buttons,
  ...cart,
  ...categories,
  /**
   * Pages
   */
  ...adviceToCreators,
  ...comingSoon,

  /**
   * Credit Cards
   */
  credit_cards: {
    ending_in: 'Ending in',
    card_added_on: 'Card added on'
  },

  /**
   * Dropzone
   */
  dropzone: {
    dict_remove_file: 'Remove',
    dict_cancel_upload: 'Cancel',
    dict_cancel_upload_confirmation: 'Are you sure you want to cancel the upload?',
    dict_default_message: 'Drag and drop an image here to download or click to choose your image.',
    dict_fallback_message: 'Your browser is too old or incompatible.',
    dict_file_too_big: 'This file is too large.'
  },

  /**
   * Footer
   */
  footer: {
    titles: {
      categories: 'Categories',
      language: 'Language',
      sell_on_sowing: 'Sell on Sowing',
      about: 'About',
      social_networks: 'Social Networks'
    },
    links: {
      login: 'Log in',
      your_own_store: 'Your own store',
      advice_to_creators: 'Advice to creators',
      new_vendors: 'Newest vendors',
      terms: 'Terms of use',
      payments: 'Payment methods',
      shipments: 'Shipments',
      faq: 'FAQ'
    },
    disclaimer: {
      rights: 'All rights reserved',
      made_with: 'Made with',
      by: 'by'
    }
  },

  /**
   * Forms
   */
  forms: {
    labels: {
      address_line_1: 'Address line 1',
      address_line_2: 'Address line 2',
      avatar: 'Avatar',
      category: 'Category',
      city: 'City',
      company_name: 'Company',
      country: 'Country',
      cover_image: 'Cover image',
      default_address: 'This address is my default address',
      description: 'Description',
      description_short: 'Short description',
      description_long: 'Detailed description',
      email: 'Email address',
      first_name: 'First name',
      last_name: 'Last name',
      name: 'Name',
      password: 'Password',
      password_confirmation: 'Confirm password',
      postal_code: 'Postal code',
      price: 'Price',
      theme_selection: 'Theme selection'
    },
    select: 'Select'
  },

  /**
   * Home page
   */
  home: {
    title: 'Home',
    titles: {
      features: 'All the Sowing advantages for you',
      shops: 'Discover our new shops',
      categories: 'Discover our products by category',
      reviews: 'They gave their opinion'
    },
    features: {
      first: {
        title: 'Sowing is unique in Switzerland',
        body: 'This platform dedicated to handmade and craft is available in 4 languages. Each creator can create his own shop for free and customize it to make it unique.'
      },
      second: {
        title: 'An unprecedented visibility for you',
        body: 'Taking part in the Sowing community is multiplying your chances of being visible on the web. Alongside other creators, you have a springboard to promote your creations throughout Switzerland and elsewhere.'
      },
      third: {
        title: 'Sowing is independent',
        body: 'And you are too! You are free to propose the articles you want, you can put your shop in pause, you make a supplement of income according to your desires in all freedom.'
      },
      fourth: {
        title: 'Your security, our mission',
        body: 'We make every effort to ensure the utmost security regarding your personal information and your transactions. Everything is done to ensure maximum comfort.'
      }
    }
  },

  /**
   * Languages
   */
  languages: {
    french: 'french',
    english: 'english',
    german: 'german',
    italian: 'italian'
  },

  /**
   * Navbar
   */
  navbar: {
    user: {
      logout: 'Log out'
    }
  },

  /**
   * Modals
   */
  modals: {
    addresses: {
      delete: {
        title: 'Delete an address',
        body: 'Are you sure you want to delete this address?'
      }
    },
    payment_methods: {
      delete: {
        title: 'Delete a payment method',
        body: 'Are you sure you want to delete this payment method?'
      }
    }
  },

  /**
   * Pages
   */
  pages: {
    account: {
      title: 'My account',
      description: 'Set up your Sowing account as you see fit.',
      dashboard: {
        title: 'Dashboard'
      },
      profile: {
        title: 'Profile',
        updated: 'Your profile was updated successfully!'
      },
      password: {
        title: 'Password'
      },
      addresses: {
        titles: {
          index: 'Addresses',
          show: 'My address',
          create: 'New address',
          edit: 'Update my address'
        },
        is_default: 'This is your default address.',
        no_address_found: 'You have no address yet.'
      },
      payment_methods: {
        edit: {
          paragraph: 'Set this card as your new default payment method.'
        },
        titles: {
          index: 'Payment methods',
          create: 'Add a payment method',
          show: 'My card in details',
          edit: 'Update my card'
        },
        is_default: 'This is your default payment method.',
        no_payment_method_found: "You don't have any payment method saved, yet."
      }
    },
    cart: {
      title: 'My cart',
      checkout: 'Proceed to checkout',
      in_your_cart: 'Your cart contains',
      products: 'products',
      for: 'for',
      cart_is_empty: 'Your cart is empty',
      add_something: 'Add something to it!'
    },
    checkout: {
      add_address: 'Add an address',
      change_address: 'Change address?',
      delivery: 'Delivery',
      delivery_address: 'Delivery address',
      delivery_method: 'Delivery method',
      new_address: 'New address',
      order: 'Order',
      payment: 'Payment',
      subtotal: 'Subtotal',
      title: 'Checkout',
      total: 'Total'
    },
    faq: {
      title: 'Frequently Asked Questions'
    },
    login: {
      title: 'Log in to your Sowing account',
      links: {
        password: 'Password forgotten?',
        register: 'Register a Sowing account'
      }
    },
    orders: {
      title: 'My orders',
      statuses: {
        completed: 'Completed',
        pending: 'Pending',
        processing: 'Processing',
        payment_failed: 'Payment Failed'
      }
    },
    password_email: {
      title: 'Account recovery',
      paragraphs: {
        first: 'Forgot your password?',
        second: 'No problem, simply enter your e-mail address in the field below and we will send you an e-mail containing a link allowing you to set a new password for your account.'
      }
    },
    password_reset: {
      title: 'Password reset'
    },
    register: {
      title: 'Registering your Sowing account',
      links: {
        terms: 'terms of use'
      },
      terms: "I've read and I accept the"
    },
    register_success: {
      title: 'Account created successfully!',
      congratulations: 'Congratulations!',
      account_created: 'Your account has been successfully created!'
    },
    search: {
      title: 'Search',
      description: 'Search for products and shops',
      placeholder: 'Search for products and shops',
      results_found: 'found',
      products: 'Products',
      shops: 'Shops',
      no_product_found: 'No product found',
      no_shop_found: 'No shop found'
    },
    shop: {
      title: 'Management of my shop',
      creation: 'Creation of my shop',
      not_created_yet: "You haven't created a shop yet",
      creation_cta_line_1: 'Create your own online shop for free today!',
      creation_cta_line_2: "It's very easy with the Sowing shop creation assistant, just let yourself be guided.",
      management: {
        dashboard: {
          title: 'Dashboard'
        },
        details: {
          title: 'Details'
        },
        theme: {
          title: 'Theme'
        }
      },
      visit: 'Browse shop'
    },
    shop_details: {
      welcome: 'Welcome to our shop',
      interested: 'The articles of this shop interest me!'
    },
    terms: {
      title: 'Terms of use',
      approve: 'I have read and agree to the Sowing terms of use',
      must_approve: 'You must accept the terms before proceeding'
    },
    verify: {
      title: 'Email address verification',
      success: 'Verification completed!',
      fail: 'Oops...'
    }
  },

  /**
   * Products
   */
  products: {
    img: {
      alt: 'Product image'
    },
    details: {
      remaining: 'products in stock',
      out_of_stock: 'Out of stock'
    },
    management: {
      index: {
        title: 'Products'
      },
      create: {
        add_category: 'Associate with a category',
        category_for: 'Category for',
        name_and_description_for: 'Name and description for',
        price_for: 'Price for',
        tips: {
          category: 'Linking your product to the corresponding category makes it easier for Sowing visitors to find your product.',
          name_and_description: 'Name and describe in detail the features and strengths of your product. Translating the name and description of your product is not mandatory but increases the likelihood that it will be noticed.',
          price: 'You are free to set a different price for variations of your product.'
        },
        title: 'Add a product',
        unnamed: 'New unnamed product'
      }
    },
    variations: {
      labels: {
        quantity: 'Quantity',
        selection: 'Select'
      },
      select: {
        out_of_stock: 'Out of stock'
      }
    }
  },

  /**
   * Shop Creator
   */
  shop_creator: {
    navigation: {
      name: 'Name',
      details: 'Details',
      customize: 'Theme',
      connect: 'Merchant',
      done: 'Done!'
    },
    steps: {
      name: {
        title: 'Name your shop',
        paragraph: 'Give your store a unique name that sets the tone and encourages visitors to take an interest in your products. A strong identity is a good way to build an attractive and recognized shop.',
        placeholder: 'The name of your shop'
      },
      details: {
        title: 'Details of your shop',
        paragraph: 'Tell us about your shop. Where is it located? What does it have to offer? Describe it as best you can to give your shop a good image, in addition to effectively inform your visitors of your activities and methods.',
        description_short_description: 'Description in one sentence of your shop. It usually accompanies the title of your shop wherever it is displayed.',
        description_long_description: 'Detailed description of your shop. This is displayed only on the profile page of your shop.'
      },
      customization: {
        title: 'Customize your shop',
        paragraph: 'Customize your shop to give it a unique identity!'
      },
      connect: {
        title: 'Create or link your merchant account',
        paragraph: 'Create or link an existing Stripe account on which to transfer revenue from your sales.'
      },
      done: {
        title: 'Terminé!',
        paragraph: 'Vous avez maintenant terminé la création de votre boutique. Félicitations!',
        provision_shop: 'Vous pouvrez dès à présent approvisionner votre boutique en y ajoutant des produits.'
      }
    }
  },

  /**
   * Side menu
   */
  side_menu: {
    products: 'Products',
    shop: 'Shop'
  },

  /**
   * Streaks
   */
  streaks: {
    register: {
      title: 'Sell today',
      body: 'Launch your own store easily in a few clicks now.'
    },
    newsletter: {
      title: 'Subscribe to our newsletter',
      body: 'Quick, easy registration, no spam, and unsubscribe whenever you want.',
      placeholder: 'your.email@address.ch'
    }
  },

  /**
   * Stripe
   */
  stripe: {
    add_a_card: 'Add a credit or debit card by entering the corresponding information below.'
  },

  /**
   * Toasts
   */
  toasts: {
    account_confirmed: 'Thank you! Your account is now verified.',
    addresses: {
      created: 'New address created successfully!',
      selected: 'Address selected.',
      updated: 'Address updated!',
      deleted: 'Address deleted successfully.'
    },
    cart: {
      has_changed: 'One or more items in your cart have been updated, please review them before ordering.',
      item_added_singular: 'added to cart!',
      item_added_plural: 'added to cart!',
      product_removed: 'removed.'
    },
    cc_added: 'The credit or debit card has been added to your account successfully!',
    general_error: 'An error has occurred. Please reload the page and try again, please.',
    is_already_in_use: 'is already in use',
    is_available: 'is available',
    logged_out: 'You are now logged out.',
    payment_methods: {
      updated: 'Card set as default successfully.',
      deleted: 'Card deleted successfully.'
    },
    products: {
      created: 'Your product has been added successfully.'
    },
    shop_avatar_updated: 'The avatar of your shop has been updated successfully!',
    shop_cover_updated: 'The cover of your shop has been updated successfully!',
    subscribed: 'Thank you! You are now subscribed to our newsletter!',
    terms: 'You must first agree to the terms and conditions before going forward.',
    theme_updated: 'The theme of your shop has been updated!',
    validation: 'The form contains errors. Please correct them and try again.',
    welcome: 'Welcome back'
  }
}
