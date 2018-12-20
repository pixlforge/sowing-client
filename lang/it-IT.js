export default {
  components: {
    cart: {
      labels: {
        price: "Prezzo",
        quantity: "Quantità"
      }
    },
    category: {
      img: {
        alt: "Immagine della categoria"
      },
      link: {
        see_all: "Vedi tutti i prodotti"
      }
    },
    footer: {
      titles: {
        categories: 'Categorie',
        language: "Lingua",
        sell_on_sowing: "Vendere su Sowing",
        about: "Informazioni",
        social_networks: "Reti sociali"
      },
      links: {
        login: "Log in",
        your_own_store: "Il vostro negozio",
        new_vendors: "Nuovi venditori",
        terms: "Condizioni d'uso",
        payments: "Metodi di pagamento",
        shipments: "Spedizioni"
      },
      disclaimer: {
        rights: "Tutti i diritti riservati",
        made_with: "Fatto con",
        by: "da"
      }
    },
    forms: {
      labels: {
        email: "Email",
        name: "Nome",
        password: "Password",
        password_confirmation: "Conferma password",
        first_name: "Nome",
        last_name: "Cognome",
        company_name: "Società",
        address_line_1: "Indirizzo linea 1",
        address_line_2: "Indirizzo linea 2",
        postal_code: "Codice postale",
        city: "Città",
        country: "Paese"
      },
      buttons: {
        connection: "Accedi",
        register: "Crea un account",
        password_email: "Invia un link per reimpostare la mia password",
        password_reset: "Reimpostare la password",
        create: "Creare",
        cancel: "Annulla"
      },
      select: "Selezionare"
    },
    navbar: {
      buttons: {
        login: "Accesso",
        register: "Crea un account",
      },
      user: {
        logout: "Disconnettersi"
      }
    },
    products: {
      img: {
        alt: "Immagine del prodotto"
      },
      details: {
        remaining: "prodotti in magazzino",
        out_of_stock: "Esaurito"
      }
    },
    streaks: {
      register: {
        title: "Vendi oggi",
        body: "Avvia facilmente il vostro negozio personale in pochi clic.",
        button: "Crea il mio negozio"
      },
      newsletter: {
        title: "Iscrivitevi alla nostra newsletter",
        body: "Registrazione rapida, semplice, senza spam e annullamento dell'iscrizione quando vuoi.",
        button: "Iscrizione",
        placeholder: "vostro.email@indirizzo.ch"
      },
    },
    variations: {
      labels: {
        quantity: "Quantità",
        selection: "Selezione",
      },
      buttons: {
        add_to_cart: "Aggiungi al carrello"
      },
      select: {
        out_of_stock: "Esaurito"
      }
    }
  },
  pages: {
    cart: {
      title: "Il mio carrello",
      checkout: "Procedere al checkout"
    },
    checkout: {
      change_address: "Cambia indirizzo?",
      delivery: "Consegna",
      delivery_address: "Indirizzo di consegna",
      delivery_method: "Metodo di consegna",
      new_address: "Nuovo indirizzo",
      order: "Ordinare",
      payment: "Pagamento",
      subtotal: "Totale parziale",
      title: "Checkout",
      total: "Totale"
    },
    home: {
      title: "Pagina iniziale",
      titles: {
        features: "Tutti i vantaggi Sowing per voi",
        shops: "Scoprite i nostri nuovi negozi",
        categories: "Scopri i nostri prodotti per categoria",
        reviews: "Hanno dato la loro opinione",
      },
      features: {
        first: {
          title: "Sowing è unico in Svizzera",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam et facere quia aliquid perferendis optio, temporibus quasi error! Ad omnis qui nulla iste aspernatur dolorem dolores ullam tenetur est. Qui."
        },
        second: {
          title: "Una visibilità senza precedenti per voi",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam et facere quia aliquid perferendis optio, temporibus quasi error! Ad omnis qui nulla iste aspernatur dolorem dolores ullam tenetur est. Qui."
        },
        third: {
          title: "Sowing è indipendente",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam et facere quia aliquid perferendis optio, temporibus quasi error! Ad omnis qui nulla iste aspernatur dolorem dolores ullam tenetur est. Qui."
        },
        fourth: {
          title: "La vostra sicurezza, la nostra missione",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam et facere quia aliquid perferendis optio, temporibus quasi error! Ad omnis qui nulla iste aspernatur dolorem dolores ullam tenetur est. Qui."
        },
      }
    },
    login: {
      title: "Accedite al vostro Sowing account",
      links: {
        password: "Password dimenticata?",
        register: "Crea un Sowing account"
      }
    },
    password_email: {
      title: "Recupero dell'account",
      paragraphs: {
        first: "Hai dimenticato la password?",
        second: "Nessun problema, inserite semplicemente il vostro indirizzo e-mail nel campo sottostante e vi invieremo una e-mail contenente un link che vi permetterà di impostare una nuova password per il vostro account."
      }
    },
    password_reset: {
      title: "Reimpostare la password"
    },
    register: {
      title: "Registrazione del vostro account Sowing",
      links: {
        terms: "condizioni d'uso"
      },
      terms: "Ho letto e accetto le"
    },
    register_success: {
      title: "Account creato con successo!"
    }
  },
  toasts: {
    addresses: {
      created: "Nuovo indirizzo creato con successo!",
      selected: "Indirizzo selezionato."
    },
    cart: {
      has_changed: "Uno o più articoli nel vostro carrello sono stati aggiornati, vi preghiamo di verificarli prima di ordinare.",
      item_added_singular: "aggiunto al carrello!",
      item_added_plural: "aggiunti al carrello!",
    },
    general_error: "C'è stato un errore. Si prega, per favore, di ricaricare la pagina e riprovare.",
    logged_out: "Ora siete disconnessi.",
    validation: "Il modulo contiene errori. Si prega di correggerli e riprovare.",
    welcome: "Benvenuto"
  }
}