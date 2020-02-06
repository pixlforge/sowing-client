import account from '~/lang/en-GB/account'
import accountCard from '~/lang/en-GB/accountCard'
import adviceToCreators from '~/lang/en-GB/adviceToCreators'
import alerts from '~/lang/en-GB/alerts'
import aria from '~/lang/en-GB/aria'
import buttons from '~/lang/en-GB/buttons'
import cart from '~/lang/en-GB/cart'
import categories from '~/lang/en-GB/categories'
import checkout from '~/lang/en-GB/checkout'
import comingSoon from '~/lang/en-GB/comingSoon'
import creditCards from '~/lang/en-GB/creditCards'
import dropzone from '~/lang/en-GB/dropzone'
import faq from '~/lang/en-GB/faq'
import footer from '~/lang/en-GB/footer'
import forms from '~/lang/en-GB/forms'
import home from '~/lang/en-GB/home'
import languages from '~/lang/en-GB/languages'
import login from '~/lang/en-GB/login'
import modals from '~/lang/en-GB/modals'
import navbar from '~/lang/en-GB/navbar'
import orders from '~/lang/en-GB/orders'
import passwordEmail from '~/lang/en-GB/passwordEmail'
import passwordReset from '~/lang/en-GB/passwordReset'
import streaks from '~/lang/en-GB/streaks'

export default {
  ...account,
  ...accountCard,
  ...adviceToCreators,
  ...alerts,
  ...aria,
  ...buttons,
  ...cart,
  ...categories,
  ...checkout,
  ...comingSoon,
  ...creditCards,
  ...dropzone,
  ...faq,
  ...footer,
  ...forms,
  ...home,
  ...languages,
  ...login,
  ...modals,
  ...navbar,
  ...orders,
  ...passwordEmail,
  ...passwordReset,
  ...streaks,

  /**
   * Pages
   */
  pages: {

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
