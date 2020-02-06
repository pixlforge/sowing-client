import account from '~/lang/de-CH/account'
import accountCard from '~/lang/de-CH/accountCard'
import adviceToCreators from '~/lang/de-CH/adviceToCreators'
import alerts from '~/lang/de-CH/alerts'
import aria from '~/lang/de-CH/aria'
import buttons from '~/lang/de-CH/buttons'
import cart from '~/lang/de-CH/cart'
import categories from '~/lang/de-CH/categories'
import checkout from '~/lang/de-CH/checkout'
import comingSoon from '~/lang/de-CH/comingSoon'
import creditCards from '~/lang/de-CH/creditCards'
import dropzone from '~/lang/de-CH/dropzone'
import faq from '~/lang/de-CH/faq'
import footer from '~/lang/de-CH/footer'
import forms from '~/lang/de-CH/forms'
import home from '~/lang/de-CH/home'
import languages from '~/lang/de-CH/languages'
import login from '~/lang/de-CH/login'
import modals from '~/lang/de-CH/modals'
import navbar from '~/lang/de-CH/navbar'
import streaks from '~/lang/de-CH/streaks'

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
  ...streaks,

  /**
   * Pages
   */
  pages: {

    orders: {
      title: 'Meine Bestellungen',
      statuses: {
        completed: 'Abgeschlossen',
        pending: 'Anstehend',
        processing: 'Bearbeitung',
        payment_failed: 'Bezahlung fehlgeschlagen'
      }
    },
    password_email: {
      title: 'Konto wiederherstellen',
      paragraphs: {
        first: 'Passwort vergessen?',
        second: 'Kein Problem, geben Sie einfach Ihre E-Mail-Adresse in das Feld unten ein. Wir senden Ihnen eine E-Mail mit einem Link, über den Sie ein neues Passwort für Ihr Konto festlegen können.'
      }
    },
    password_reset: {
      title: 'Passwort zurücksetzen'
    },
    register: {
      title: 'Registrieren Sie Ihr Sowing Konto',
      links: {
        terms: 'Nutzungsbedingungen'
      },
      terms: 'Ich habe gelesen und akzeptiere die'
    },
    register_success: {
      title: 'Konto erfolgreich erstellt!',
      congratulations: 'Herzliche Glückwünsche!',
      account_created: 'Ihr Konto wurde erfolgreich erstellt!'
    },
    search: {
      title: 'Suche',
      description: 'Suchen Sie nach Produkten und Geschäften',
      placeholder: 'Suchen Sie nach Produkten und Geschäften',
      results_found: 'gefunden',
      products: 'Produkte',
      shops: 'Shops',
      no_product_found: 'Keine Produkte gefunden',
      no_shop_found: 'Kein Shop gefunden'
    },
    shop: {
      title: 'Verwaltung Ihres Shops',
      creation: 'Schaffung meines Shops',
      not_created_yet: 'Sie haben noch keinen Shop angelegt',
      creation_cta_line_1: 'Erstellen Sie noch heute Ihren eigenen Online-Shop!',
      creation_cta_line_2: 'Mit dem Assistenten für die Shop-Erstellung von Sowing ist das ganz einfach. Lassen Sie sich einfach führen.',
      management: {
        dashboard: {
          title: 'Instrumententafel'
        },
        details: {
          title: 'Details'
        },
        theme: {
          title: 'Thema'
        }
      },
      visit: 'Shop durchsuchen'
    },
    shop_details: {
      welcome: 'Herzlich Willkommen in unserem Shop',
      interested: 'Die Artikel dieses Shops interessieren mich!'
    },
    terms: {
      title: 'Nutzungsbedingungen',
      approve: 'Ich habe die Nutzungsbedingungen von Sowing gelesen und stimme ihnen zu',
      must_approve: 'Sie müssen die Bedingungen akzeptieren, bevor Sie fortfahren'
    },
    verify: {
      title: 'Bestätigung der E-Mail-Adresse',
      success: 'Überprüfung abgeschlossen!',
      fail: 'Oops...'
    }
  },

  /**
   * Products
   */
  products: {
    img: {
      alt: 'Produktbild'
    },
    details: {
      remaining: 'Produkte auf Lager',
      out_of_stock: 'Ausverkauft'
    },
    management: {
      index: {
        title: 'Produkte'
      },
      create: {
        add_category: 'Mit einer Kategorie verknüpfen',
        category_for: 'Kategorie für',
        name_and_description_for: 'Name und Beschreibung für',
        price_for: 'Preis für',
        tips: {
          category: 'Durch die Verknüpfung Ihres Produkts mit der entsprechenden Kategorie können Sowing-Besucher Ihr Produkt leichter finden.',
          name_and_description: 'Nennen und beschreiben Sie detailliert die Eigenschaften und Stärken Ihres Produkts. Das Übersetzen des Namens und der Beschreibung Ihres Produkts ist nicht obligatorisch, erhöht jedoch die Wahrscheinlichkeit, dass es bemerkt wird.',
          price: 'Sie können einen anderen Preis für Variationen Ihres Produkts festlegen.'
        },
        title: 'Produkt hinzufügen',
        unnamed: 'Neues Produkt ohne Namen'
      }
    },
    variations: {
      labels: {
        quantity: 'Menge',
        selection: 'Auswahl'
      },
      select: {
        out_of_stock: 'Ausverkauft'
      }
    }
  },

  /**
   * Shop Creator
   */
  shop_creator: {
    navigation: {
      name: 'Name',
      details: 'Einzelheiten',
      customize: 'Thema',
      connect: 'Händler',
      done: 'Erledigt!'
    },
    steps: {
      name: {
        title: 'Benennen Sie Ihren Shop',
        paragraph: 'Geben Sie Ihrem Shop einen eindeutigen Namen, der den Ton angibt und Besucher dazu anregt, sich für Ihre Produkte zu interessieren. Eine starke Identität ist eine gute Möglichkeit, ein attraktives und anerkanntes Shop aufzubauen.',
        placeholder: 'Der Name Ihres Shops'
      },
      details: {
        title: 'Details zu Ihrem Shop',
        paragraph: 'Erzählen Sie uns von Ihrem Geschäft. Wo liegt es Was hat es zu bieten? Beschreiben Sie es so gut wie möglich, um Ihrem Shop ein gutes Image zu geben und Ihre Besucher effektiv über Ihre Aktivitäten und Methoden zu informieren.',
        description_short_description: 'Beschreibung in einem Satz Ihres Shops. In der Regel wird der Titel Ihres Shops überall dort angezeigt, wo er angezeigt wird.',
        description_long_description: 'Detaillierte Beschreibung Ihres Shops. Dies wird nur auf der Profilseite Ihres Shops angezeigt.'
      },
      customization: {
        title: 'Personalisieren Sie Ihren Shop',
        paragraph: 'Personalisieren Sie Ihren Shop, um ihm eine einzigartige Identität zu verleihen!'
      },
      connect: {
        title: 'Erstellen Sie oder verknüpfen Sie Ihr Händlerkonto',
        paragraph: 'Erstellen oder verknüpfen Sie ein vorhandenes Stripe-Konto, auf das Sie den Umsatz aus Ihren Verkäufen übertragen möchten.'
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
    products: 'Produkte',
    shop: 'Geschäft'
  },

  /**
   * Stripe
   */
  stripe: {
    add_a_card: 'Fügen Sie eine Kredit- oder Debitkarte hinzu, indem Sie die entsprechenden Informationen unten eingeben.'
  },

  /**
   * Toasts
   */
  toasts: {
    account_confirmed: 'Vielen Dank! Ihr Konto ist jetzt verifiziert.',
    addresses: {
      created: 'Neue Adresse erfolgreich erstellt!',
      selected: 'Adresse ausgewählt.',
      updated: 'Adresse aktualisiert!',
      deleted: 'Adresse erfolgreich gelöscht'
    },
    cart: {
      has_changed: 'Ein oder mehrere Artikel in Ihrem Warenkorb wurden aktualisiert. Bitte überprüfen Sie sie vor der Bestellung.',
      item_added_singular: 'zum Warenkorb hinzugefügt',
      item_added_plural: 'zum Warenkorb hinzugefügt',
      product_removed: 'wurde entfernt.'
    },
    cc_added: 'Die Kredit- oder Debitkarte wurde erfolgreich Ihrem Konto hinzugefügt!',
    general_error: 'Ein Fehler ist aufgetreten. Bitte laden Sie die Seite neu und versuchen Sie es erneut.',
    is_already_in_use: 'wird bereits verwendet',
    is_available: 'ist verfügbar',
    logged_out: 'Sie sind jetzt ausgeloggt.',
    payment_methods: {
      updated: 'Karte wurde erfolgreich als Standard festgelegt.',
      deleted: 'Karte erfolgreich gelöscht.'
    },
    products: {
      created: 'Ihr Produkt wurde erfolgreich hinzugefügt.'
    },
    shop_avatar_updated: 'Der Avatar Ihres Shops wurde erfolgreich aktualisiert!',
    shop_cover_updated: 'Das Cover Ihres Shops wurde erfolgreich aktualisiert!',
    subscribed: 'Vielen Dank! Sie haben jetzt unseren Newsletter abonniert!',
    terms: 'Sie müssen zunächst den Nutzungsbedingungen zustimmen, bevor Sie fortfahren.',
    theme_updated: 'Das Thema Ihres Shops wurde aktualisiert!',
    validation: 'Das Formular enthält Fehler. Bitte korrigieren Sie sie und versuchen Sie es erneut.',
    welcome: 'Wilkommen'
  }
}
