export default {
  components: {
    cart: {
      labels: {
        price: "Preis",
        quantity: "Menge"
      }
    },
    category: {
      img: {
        alt: "Kategorie Bild"
      },
      link: {
        see_all: "Siehe all Produkte"
      }
    },
    footer: {
      titles: {
        categories: 'Kategorien',
        language: "Sprachen",
        sell_on_sowing: "Verkaufen auf Sowing",
        about: "Über Sowing",
        social_networks: "Soziale Netzwerke"
      },
      links: {
        login: "Einloggen",
        your_own_store: "Ihr eigenes Geschäft",
        new_vendors: "Neue Verkäufer",
        terms: "Nutzungsbedingungen",
        payments: "Zahlungsmethoden",
        shipments: "Sendungen"
      },
      disclaimer: {
        rights: "Alle Rechte vorbehalten",
        made_with: "Gemacht mit",
        by: "von"
      }
    },
    forms: {
      labels: {
        email: "Email",
        name: "Name",
        password: "Passwort",
        password_confirmation: "Passwort bestätigen",
        first_name: "Vorname",
        last_name: "Nachname",
        company_name: "Firma",
        address_line_1: "Anschrift Zeile 1",
        address_line_2: "Anschrift Zeile 2",
        postal_code: "Postleitzahl",
        city: "Ort",
        country: "Land"
      },
      buttons: {
        connection: "Einloggen",
        register: "Konto erstellen",
        password_email: "Senden Sie einen Link, um mein Passwort zurückzusetzen",
        password_reset: "Passwort zurücksetzen",
        create: "Erstellen",
        cancel: "Stornieren"
      },
      select: "Wählen"
    },
    navbar: {
      buttons: {
        login: "Einloggen",
        register: "Konto erstellen",
      },
      user: {
        logout: "Ausloggen"
      }
    },
    products: {
      img: {
        alt: "Produktbild"
      },
      details: {
        remaining: "Produkte auf Lager",
        out_of_stock: "Ausverkauft"
      }
    },
    streaks: {
      register: {
        title: "Verkaufen Sie heute",
        body: "Starten Sie jetzt mit wenigen Klicks Ihren persönlichen Shop.",
        button: "Schaffe meinen Shop"
      },
      newsletter: {
        title: "Melden Sie sich für unseren Newsletter an",
        body: "Schnelle und einfache Registrierung, kein Spam und jederzeit abbestellen.",
        button: "Anmeldung",
        placeholder: "ihre.email@adresse.ch"
      },
    },
    variations: {
      labels: {
        quantity: "Menge",
        selection: "Auswahl",
      },
      buttons: {
        add_to_cart: "Zum Warenkorb hinzufügen"
      },
      select: {
        out_of_stock: "Ausverkauft"
      }
    }
  },
  pages: {
    cart: {
      title: "Mein Warenkorb",
      checkout: "Zur Kasse"
    },
    checkout: {
      change_address: "Adresse ändern?",
      delivery: "Lieferung",
      delivery_address: "Lieferadresse",
      delivery_method: "Liefermethode",
      new_address: "Neue Adresse",
      order: "Bestellen",
      payment: "Zahlung",
      subtotal: "Zwischensumme",
      title: "Checkout",
      total: "Gesamt"
    },
    home: {
      title: "Startseite",
      titles: {
        features: "Alle Sowing Vorteile für Sie",
        shops: "Entdecken Sie unsere neuen Shops",
        categories: "Entdecken Sie unsere Produkte nach Kategorien",
        reviews: "Sie gaben ihre Meinung ab",
      },
      features: {
        first: {
          title: "Sowing ist einzigartig in der Schweiz",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam et facere quia aliquid perferendis optio, temporibus quasi error! Ad omnis qui nulla iste aspernatur dolorem dolores ullam tenetur est. Qui."
        },
        second: {
          title: "Eine beispiellose Sichtbarkeit für Sie",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam et facere quia aliquid perferendis optio, temporibus quasi error! Ad omnis qui nulla iste aspernatur dolorem dolores ullam tenetur est. Qui."
        },
        third: {
          title: "Sowing ist unabhängig",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam et facere quia aliquid perferendis optio, temporibus quasi error! Ad omnis qui nulla iste aspernatur dolorem dolores ullam tenetur est. Qui."
        },
        fourth: {
          title: "Ihre Sicherheit, unsere Mission",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam et facere quia aliquid perferendis optio, temporibus quasi error! Ad omnis qui nulla iste aspernatur dolorem dolores ullam tenetur est. Qui."
        },
      }
    },
    login: {
      title: "Melden Sie sich bei Ihrem Sowing Konto an",
      links: {
        password: "Passwort vergessen?",
        register: "Erstellen Sie ein Sowing Konto"
      }
    },
    password_email: {
      title: "Konto wiederherstellen",
      paragraphs: {
        first: "Passwort vergessen?",
        second: "Kein Problem, geben Sie einfach Ihre E-Mail-Adresse in das Feld unten ein. Wir senden Ihnen eine E-Mail mit einem Link, über den Sie ein neues Passwort für Ihr Konto festlegen können."
      }
    },
    password_reset: {
      title: "Passwort zurücksetzen"
    },
    register: {
      title: "Registrieren Sie Ihr Sowing Konto",
      links: {
        terms: "Nutzungsbedingungen"
      },
      terms: "Ich habe gelesen und akzeptiere die"
    },
    register_success: {
      title: "Konto erfolgreich erstellt!"
    }
  },
  toasts: {
    addresses: {
      created: "Neue Adresse erfolgreich erstellt!",
      selected: "Adresse ausgewählt."
    },
    cart: {
      has_changed: "Ein oder mehrere Artikel in Ihrem Warenkorb wurden aktualisiert. Bitte überprüfen Sie sie vor der Bestellung.",
      item_added_singular: "zum Warenkorb hinzugefügt",
      item_added_plural: "zum Warenkorb hinzugefügt",
    },
    general_error: "Ein Fehler ist aufgetreten. Bitte laden Sie die Seite neu und versuchen Sie es erneut.",
    logged_out: "Sie sind jetzt ausgeloggt.",
    validation: "Das Formular enthält Fehler. Bitte korrigieren Sie sie und versuchen Sie es erneut.",
    welcome: "Wilkommen"
  }
}