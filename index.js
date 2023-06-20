const home = {
	data() {
		return {
			articoli: [
				{
					title: "Cosa sono le <abbr title='Progressive Web Apps'>PWA</abbr>?",
					content:
						"<p>Le applicazioni specifiche per una piattaforma, o sistema operativo, sono particolarmente apprezzabili per la loro ricchezza di funzionabilità, affidabilità e il fatto di essere sempre disponibili, anche offline. <br/> D'altra parte, le applicazioni web, sono particolarmente note per la loro accessibilità e fruibilità, indipendentemente dalla piattaforma.</p> <p class='lead purple'>Come si posizionano quindi, le Progressive Web Apps, in questo contesto?</p> <p>Le <abbr title='Progressive Web Apps'>PWA</abbr> sono in grado di offrire il meglio di entrambi i mondi. <br/> Sono infatti costruite mediante tecnologie web moderne e quindi visualizzabili da qualunque browser ma, proprio come le applicazioni native, possono sfruttare delle API avanzate per accedere a funzionalità specifiche di sistema, quali fotocamera, GPS e notifiche push. <br/> Inoltre, le <abbr title='Progressive Web Apps'>PWA</abbr> offrono un'esperienza di installazione simile a quella delle applicazioni native, consentendo l'aggiunta di un'icona sui menù del dispositivo, e sono utilizzabili offline.</p>",
				},
				{
					title: "Il Web App Manifest",
					content:
						"<p>Il <strong>Manifest</strong> è un file di tipo JSON che include informazioni utili, riguardanti la Progressive Web App, che istruiscono il Browser su come l'app deve comportarsi quando viene <strong>installata</strong>. <br/> Tipicamente, un Manifest include informazioni come il nome dell'app, le icone, l'url da aprire quando questa viene lanciata e tanto altro.</p>\
            <!-- ##### COLLAPSABLE MANIFEST ##### -->\
            <div class='float-lg-start me-5' style='max-width: 400px'>\
              <p><button class='btn btn-primary collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#manifestExample' aria-expanded='false' aria-controls='manifestExample'>\
              Un esempio di Web App Manifest\
              </button></p>\
              <div class='collapse' id='manifestExample'>\
              <div class='card card-body'>\
              <code><pre>{<br/>\
  'short_name': 'Weather',<br/>\
  'name': 'Weather: Do I need an umbrella?',<br/>\
  'icons': [<br/>\
    {<br/>\
      'src': '/images/icons-vector.svg',<br/>\
      'type': 'image/svg+xml',<br/>\
      'sizes': '512x512'<br/>\
    },<br/>\
    {<br/>\
      'src': '/images/icons-192.png',<br/>\
      'type': 'image/png',<br/>\
      'sizes': '192x192'<br/>\
    },<br/>\
    {<br/>\
      'src': '/images/icons-512.png',<br/>\
      'type': 'image/png',<br/>\
      'sizes': '512x512'<br/>\
    }<br/>\
  ],<br/>\
  'id': '/?source=pwa',<br/>\
  'start_url': '/?source=pwa',<br/>\
  'background_color': '#3367D6',<br/>\
  'display': 'standalone',<br/>\
  'scope': '/',<br/>\
  'theme_color': '#3367D6',<br/>\
  'shortcuts': [<br/>\
    {<br/>\
      'name': 'How's weather today?',<br/>\
      'short_name': 'Today',<br/>\
      'description': 'View weather information for today',<br/>\
      'url': '/today?source=pwa',<br/>\
      'icons': [{'src': '/images/today.png', 'sizes': '192x192'}]<br/>\
    },<br/>\
    {<br/>\
      'name': 'How's weather tomorrow?',<br/>\
      'short_name': 'Tomorrow',<br/>\
      'description': 'View weather information for tomorrow',<br/>\
      'url': '/tomorrow?source=pwa',<br/>\
      'icons': [{'src': '/images/tomorrow.png', 'sizes': '192x192'}]<br/>\
    }<br/>\
  ],<br/>\
  'description': 'Weather forecast information',<br/>\
  'screenshots': [<br/>\
    {<br/>\
      'src': '/images/screenshot1.png',<br/>\
      'type': 'image/png',<br/>\
      'sizes': '540x720',<br/>\
      'form_factor': 'narrow'<br/>\
    },<br/>\
    {<br/>\
      'src': '/images/screenshot2.jpg',<br/>\
      'type': 'image/jpg',<br/>\
      'sizes': '720x540',<br/>\
      'form_factor': 'wide'<br/>\
    }<br/>\
  ]<br/>\
}</pre></code>\
              </div></div>\
            </div>\
            <!-- ##### COLLAPSABLE MANIFEST END ##### -->\
            <h3>Proprietà principali del manifest</h3>\
            <h4><code>name</code> / <code>short_name</code></h4>\
            <p>Specificare almeno una delle due proprietà tra <code>name</code> e <code>short_name</code> è necessario nella compilazione di un manifest. Se risultano specificate entrambe, il nome breve viene mostrato in luoghi dove lo spazio potrebbe essere limitato, come home screen o launcher; il nome invece viene utilizzato quando l'app è installata.</p>\
            <h4><code>icons</code></h4>\
            <p>La proprietà <code>icons</code> è un array di oggetti in cui è possibile definire un set di icone, che il browser può usare per vari ambienti come la home screen, il task switcher o altri, una volta che l'utente installa la <abbr title='Progressive Web App'>PWA</abbr>.</p>\
            <h4><code>start_url</code></h4>\
            <p>Lo <code>start_url</code> deve ridirezionare l'utente dritto al contenuto dell'app. È una proprietà obbligatoria e comunica al browser dove l'applicazione dovrebbe iniziare, quando l'app viene lanciata.</p>\
            <h4><code>id</code></h4>\
            <p>È la proprietà che definisce esplicitamente l'identificatore dell'applicazione. Specificare un <code>id</code> rimuove le dipendenze allo <code>start_url</code> o alla posizione del manifest, consentendo di aggiornarle nel futuro.</p>\
            <h4><code>background_color</code></h4>\
            <p>Proprietà che definisce un colore di background, che agisce da <strong>placeholder</strong> nel momento in cui l'app viene lanciata, intanto che viene caricato lo stylesheet.</p>\
            <h4><code>display</code></h4>\
            <p>Mediante questa proprietà, è possibile personalizzare quale UI del browser utilizzare nella tua app. Ad esempio, un app potrebbe voler nascondere la barra degli indirizzi, o un videogioco potrebbe anche essere avviato in full screen.</p>\
            <h4><code>scope</code></h4>\
            <p>Lo <strong>scope</strong> definisce una lista di URLs che il browser deve considerare <em>parte della tua applicazione</em>. Permette quindi di controllare quando un utente sta entrando o uscendo dall'app. Aggiungendo l'attributo <code>target='_blank'</code> al tag <code>&lt;a&gt;</code> è inoltre possibile specificare che quando l'utente apre un link fuori dallo <strong>scope</strong> questo si attesti in una nuova scheda del browser.</strong></p>",
				},
				{
					title: "I tre Pilastri delle app",
					content:
						"Alla base di ogni Progressive Web App ci sono tre pilastri fondamentali: <strong>capacità</strong>, <strong>affidabilità</strong> e <strong>installabilità</strong>. <br/> Queste caratteristiche fondali, sono quelle trasformano una semplice applicazione web, in un'esperienza del tutto paragonabile a quella delle applicazioni native. <h3>Capacità</h3> Le applicazioni su Web, ad oggi, possono contare su enormi capacità e funzionalità. <br/> È possibile creare applicazioni avanzate che fanno uso, tra le altre cose, di geolocalizzazione e notifiche push, grazie alle <strong>API</strong>. Con l'introduzione di <strong>WebAssembly</strong>, inoltre, si ha la possibilità di accedere altri ecosistemi quali C, C++ e Rust, incrementando di molto le possibilità e le funzionalità. <br/> Grazie a queste risorse, possiamo costruire delle <strong>Progressive Web Apps capaci</strong> e funzionali, in grado di accedere alle funzionalità specifiche dei dispositivi come l'archiviazione, controlli multimediali, notifiche push e supporto alla clipboard. <h3>Affidabilità</h3> La velocità di un applicazione è una caratteristica imprescindibile, nell'offrire una buona esperienza di utilizzo, in qualsiasi situazione. <br/> Ed è intorno a questo concetto che verte la progettazione di una <abbr title='Progressive Web App'>PWA</abbr>. Infatti, è importante che l'esperienza offerta sia fluida e reattiva, anche e soprattutto in condizioni di <strong>connessione instabile o assente.</strong> <br/> Le prestazioni di un applicazione, sia nel caricamento iniziale, sia nella fluidità dei feedback restituiti nell'interazione generale, influenzano altamente la percezione di qualità che si ha nei confronti dell'applicativo. <h3>Installabilità</h3> Le Progressive Web Apps devono essere <strong>installabili</strong>. <br/> Questo significa che, una volta installata e avviata l'app, questa si eseguirà in una finestra riservata, indipendente dal browser. <br/> Effettuando l'installazione, si aprono diverse nuove possibilità: la <abbr title='Progressive Web App'>PWA</abbr> può interagire con altre applicazioni di sistema, diventare app predefinita per gestire certi tipi di file, accedere a scorciatoie da tastiera e tanto altro. <br/> Un applicazione utilizzata in questo modo, viene percepita dall'utente in modo completamente diverso, come se fosse un applicazione nativa di sistema.",
				},
			],
		};
	},
	template: `
  <h1><span class="h2">Introduzione alle</span><br/>Progressive <span class="purple">Web</span> Apps</h1>
  <div class="row">
    <div class="col-10 offset-1 col-md-5 offset-md-1">
      <div id="contentTable" class="border border-dark p-2 my-3 mx-4">
        <h4>Tabella dei contenuti</h4>
        <ul>
          <li>Cosa sono le <abbr title='Progressive Web Apps'>PWA</abbr>?</li>
          <li>Il Web App Manifest</li>
          <li>I tre pilastri delle app
            <ul>
              <li>Capacità</li>
              <li>Affidabilità</li>
              <li>Installabilità</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-12 col-md-5">
      <img class="img-fluid mx-auto d-block" src="./img/pwa_img.png" alt="">
    </div>
  </div>
  <div class='row'>
    <div class='col-12'>
      <article v-for="articolo in articoli" class='pt-2 clearfix'>
        <h2 class="purple" v-html="articolo.title"></h2>
        <div v-html="articolo.content"></div>
      </article>
    </div>
  </div>
  `,
};

const features = {
	data() {
		return {
			articoli: [
				{
					title: "App Shortcuts",
					content:
						"<figure class='figure d-block'> \
            <img class='figure-img img-fluid mx-auto d-block' src='./img/shortcuts-header.avif' alt='' /> \
            <figcaption class='figure-caption text-center'>Immagine di web.dev</figcaption> \
          </figure> \
          <p>I collegamenti (o scorciatoie) delle app, consentono agli sviluppatori web di fornire un accesso più veloce alle azioni più frequenti tra gli utenti. <br/> Il menù delle scorciatoie è estremamente semplice da richiamare: su ambienti Desktop (come Windows o MacOS) basta un click destro sull'icona dell'applicazione, mentre su dispositivi mobili è sufficiente una pressione prolungata sull'icona. <br/> Questi menù vengono visualizzati solo per le Progressive Web Apps, che sono installate sul desktop o sul dispositivo mobile dell’utente</p> <h3>Definire le scorciatoie nel Manifest</h3>\
          <p>Il Manifest è un file, in formato JSON, che fornisce informazioni importanti al browser riguardanti la Web App, oltre a specificare come questo dovrebbe comportarsi quando la nostra app viene installata in un dispositivo, mobile o desktop. <br/> Nel Manifest vengono anche definite le scorciatoie dell'app, mediante uno specifico array contenente nomi, URL e altre informazioni su ogni scorciatoia.</p> <h3>Best Practices</h3>\
          <div class='row'><div class='col-12 col-md-5'><figure class='figure '> \
            <img class='figure-img img-fluid mx-auto d-inline-block' src='./img/shortcuts-android.avif' alt='' /> \
            <figcaption class='figure-caption text-center'>Menù delle shortcut in un dispositivo Android<span class='credit'>Immagine di web.dev</span></figcaption> \
          </figure></div> \
          <div class='d-none d-md-block col-md-5'><figure class='figure '> \
            <img class='figure-img img-fluid mx-auto d-inline-block' src='./img/shortcuts-windows.avif' alt='' /> \
            <figcaption class='figure-caption text-center'>Menù delle shortcut su Windows<span class='credit'>Immagine di web.dev</span></figcaption> \
          </figure></div></div> \
          <p>Esistono delle pratiche consigliate, da attuare quando si vogliono creare dei menù di shortcut nelle app. Tra queste, troviamo:\
            <ul>\
            <li>Ordinare per priorità: l'ordine delle shortcuts viene definito nel Manifest. È preferibile ordinarle in base alla priorità, in quanto il numero massimo consentito vria in base alla piattaforma. Ad esempio Chrome ed Edge su Windows limitano il numero di collegamenti alle app a 10, mentre Chrome per Android, solo 3.</li>\
            <li>Usare nomi specifici: è consigliabile non fare troppo affidamento alle icone, in quanto potrebbero, in alcuni casi, non essere visibili (ad esempio, MacOS non supporta le icone nelle shortcuts della sua Dock); è buona regola quindi assegnare alle scorciatoie dei nomi specifici e comprensibili.</li></p>",
				},
				{
					title: "Supporto alle icone adattive",
					content:
						"<figure class='figure d-block'> \
            <img class='figure-img img-fluid mx-auto' src='./img/maskable_icons.avif' alt='' /> \
            <figcaption class='figure-caption text-center'>Immagine di web.dev</figcaption> \
          </figure> \
          <p>Le icone adattive, o <strong>Maskable Icon</strong>, sono icone in grado di adattarsi alle diverse piattaforme. <br/> In una Progressive Web App installata su un telefono Android recente viene visualizzata l’icona a sfondo bianco.</p>\
          <div class='row d-md-none'>\
            <div class='col'></div>\
            <div class='col-7'>\
              <figure class='figure d-flex align-items-center'>\
                <div class=''>\
                  <video autoplay loop muted playsinline class='w-100'><source src='./img/maskable_icon.webm' type='video/webm'>\
                  </video>\
                </div>\
                <figcaption class='figure-caption text-center'>Le diverse forme specifiche per piattaforma.<span class='credit'>Video di web.dev</span></figcaption>\
              </figure>\
            </div>\
            <div class='col'></div>\
          </div>\
          <figure class='figure float-start text-center p-3 d-none d-md-block'>\
            <div>\
              <video autoplay loop muted playsinline style='width: 100px'><source src='./img/maskable_icon.webm' type='video/webm'>\
              </video>\
            </div>\
            <figcaption class='figure-caption text-center'>Le diverse forme specifiche per piattaforma.<span class='credit'>Video di web.dev</span></figcaption>\
          </figure>\
          <p>Il nuovo formato di maskable icons offre un controllo maggiore e permette alla <abbr title='Progressive Web App'>PWA</abbr> di usare icone adattive (introdotto da Android Oreo).<br/>Fornendo una maskable icon, essa può riempire l’intera forma ed avere un bell’aspetto su tutti i dispositivi Android. Firefox e Chrome hanno recentemente aggiunto il supporto per questo nuovo formato, che si può adattare alle app.</p> <lead class='purple'>Come posso essere sicuro che le mie icone siano pronte per una <abbr title='Progressive Web App'>PWA</abbr>?</lead> <p>Le <strong>Maskable Icon</strong>, dovendo supportare una serie di sagome, necessitano di un certo <em>padding</em> su cui il browser può contare per ritagliare l'immagine, adattandola alla forma richiesta.</p>\
          <p>La <em>Safe Zone</em> necessaria per le icone è un dato standard e ben definito; è quindi sufficiente che le nostre icone rispettino questa caratteristica.</p> <p>In particolare, la parte rilevante dell'immagine dovrebbe essere contenuta in un area circolare, al centro dell'icona, dal raggio equivalente al 40% della larghezza dell'icona. </p>",
				},
				{
					title:
						"Personalizzazione della title bar nelle <abbr title='Progressive Web Apps'>PWA</abbr>",
					content:
						"Personalizzare la title bar di una Progressive Web App può essere un'ottima strategia per rendere l'esperienza d'uso più <em>app-like</em> \
          <div style='width: 100%' class='text-center'><figure class='figure w-50'> \
            <img class='figure-img img-fluid mx-auto d-block' src='./img/title_bar_img.avif' alt='' /> \
            <figcaption class='figure-caption text-center'>Una title bar personalizzata e responsiva<span class='credit'>Immagine di web.dev</span></figcaption> \
          </figure></div> \
          Esistono però dei casi in cui questa funzionalità non è disponibile:\
          <ul>\
          <li>Il browser supporta tale funzionalità, ma l'app è utilizzata in una Tab del browser</li><li>Il browser non supporta tale funzionalità</li>\
          </ul>\
          <div style='width: 100%' class='text-center'><figure class='figure w-50'> \
            <img class='figure-img img-fluid mx-auto d-block' src='./img/title_bar_oldBrowser.avif' alt='' /> \
            <figcaption class='figure-caption text-center'>I controlli previsti per la title bar, in un browser non aggiornato<span class='credit'>Immagine di web.dev</span></figcaption> \
          </figure></div> \
          In entrambi i casi, esiste un comportamento di default, che fa in modo che i controlli della title bar vengano renderizzati come regolare contenuto HTML nel body della pagina.",
				},
			],
		};
	},
	template: `
  <h1><span class="h2">Funzionalità</span> <br/> esclusive <span class="purple">delle</span> <abbr title='Progressive Web Apps'>PWA</abbr></h1>
  <div id="contentTable" class="border border-dark p-2 my-3 mx-4">
    <h4>Tabella dei contenuti</h4>
    <ul>
      <li>Velocizzare i processi con le scorciatoie delle App</li>
      <li>Supporto alle icone adattive</li>
      <li>Personalizzazione della Title Bar nelle <abbr title='Progressive Web Apps'>PWA</abbr></li>
    </ul>
  </div>
  <div class='row'>
    <div class='col-12'>
      <article v-for="articolo in articoli" class='pt-2 clearfix'>
        <h2 class="purple" v-html="articolo.title"></h2>
        <div v-html="articolo.content"></div>
      </article>
    </div>
  </div>
  `,
};

const jsonApp = {
	data() {
		return {
			datiPWA: null, //array per memorizzare dati JSON
		};
	},
	methods: {
		getPWAs: function () {
			//acquisisce dati da JSON
			axios.get("./pwa.json").then(response => {
				this.datiPWA = response.data;
				console.log(this.datiPWA);
			});
		},
	},
	mounted() {
		this.getPWAs();
	},
	template: `
  <h1>P<span class='purple'>W</span>A Store</h1>
  <div class='row'>
    <div class='col-12'>
      <h2 class="purple">Dati PWA</h2>
      <div class='row'>
        <div id="appContainer" class="col-12 col-md-6 col-lg-4 my-4 align-items-center d-flex" v-for="(app, index) in datiPWA">
          <div class='row'>
            <div class='col-auto align-items-center d-flex'>
              <!-- ##### ACCESSIBILITÀ: :alt ##### -->
              <img class="mx-2 " id="icon" v-bind:src="app.icons" :alt="'icona di '+app.name"/>
            </div>
            <div class='col'>
              <h5>{{app.name}}</h5>
              <p class='text-muted'>{{app.description}}</p>
              <button type="button" class="btn btn-outline-primary btn-sm py-0 px-2">{{app.price}}</button>
            </div>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-outline-primary"><router-link to="/editApp">Modifica le App</router-link></button>
    </div>
  </div>
  `,
};

const editApp = {
	data() {
		return {
			datiPWA: null, //array per memorizzare dati JSON
			selected: 0, //index per la select
			newApp: {
				//oggetto per aggiunta nuova app
				name: "",
				description: "",
				price: "",
			},
		};
	},
	methods: {
		getPWA: function () {
			//acquisisce dati da JSON
			axios.get("./pwa.json").then(response => {
				this.datiPWA = response.data;
				console.log(this.datiPWA);
			});
		},
		deleteApp: function () {
			//elimina l'app selezionata: metodo assegnato a button
			this.datiPWA.splice(this.selected, 1);
		},
		pushApp: function () {
			//aggiunge nuova app con dati del form: metodo assegnato a button
			this.datiPWA.push(this.newApp);
			this.newApp = {
				name: "",
				description: "",
				price: "",
			};
		},
	},
	mounted() {
		this.getPWA();
	},
	template: `
  <h1>Modifica P<span class='purple'>W</span>A Store</h1>
  <!--### ELENCO APP ###-->
  <div class='row'>
    <div class='col-12'>
      <h2>Elenco P<span class='purple'>W</span>A</h2>
      <div class='row'>
        <div id="appContainer" class="col-12 col-md-6 col-lg-4 my-4 align-items-center d-flex" v-for="(app, index) in datiPWA">
          <div class='row'>
            <div class='col-auto align-items-center d-flex'>
              <!-- ##### ACCESSIBILITÀ: :alt ##### -->
              <img class="mx-2 " id="icon" v-bind:src="app.icons" :alt="'icona di '+app.name"/>
            </div>
            <div class='col'>
              <h5>{{app.name}}</h5>
              <p class='text-muted'>{{app.description}}</p>
              <button type="button" class="btn btn-outline-primary btn-sm py-0 px-2">{{app.price}}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--### MODIFICA APP ###-->
  <h2>Modifica App Store</h2>
  <label class="purple" for="appSelect">Seleziona l'app da modificare</label>
  <select id="appSelect" class="form-select" v-model="selected">
    <option disabled value="">Seleziona un'app</option>
    <option v-for="(app, index) in datiPWA" :value="index">{{app.name}}</option>
  </select>
  <div class='row'>
    <section v-if="datiPWA && datiPWA.length > 0" id="appContainer" class="my-4" aria-live="polite">
    <!-- ##### ACCESSIBILE GRAZIE A aria-live="polite" ##### -->
      <div class='row'>
        <div class='col-auto align-items-center d-flex'>
          <img class="mx-2" id="icon" v-bind:src="datiPWA[selected].icons" :alt="'icona di '+datiPWA[selected].name"/>
        </div>
        <div class='col'>
          <h5>{{datiPWA[selected].name}}</h5>
          <p>{{datiPWA[selected].description}}</p>
          <button type="button" class="btn btn-outline-primary btn-sm py-0 px-2">{{datiPWA[selected].price}}</button>
        </div>
      </div>
    </section>
    <div v-if="datiPWA && datiPWA.length > 0">
      <h2>Stai modificando <span class='purple'>{{ datiPWA[selected].name }}</span></h2>
      <form>
        <!-- ##### ACCESSIBILITA GARANTITA DA "aria-describedby" ##### -->
        <div class="form-floating mb-3">\
        <input v-model="datiPWA[selected].name" id="appName" type="text" class="form-control" aria-describedby="ariaAppName"/><label for="appName">Nome App:</label></div>
        <div id="ariaAppName" class="visually-hidden">Inserire un nuovo nome per l'app selezionata</div>
        <div class="form-floating mb-3">\
        <input v-model="datiPWA[selected].description" id="appDescription" type="text" class="form-control" aria-describedby="ariaAppDescription"/><label for="appDescription">Descrizione App:</label></div>
        <div id="ariaAppDescription" class="visually-hidden">Inserire una nuova descrizione per l'app selezionata</div>
        <div class="form-floating mb-3">\
        <input v-model="datiPWA[selected].price" id="appPrice" type="text" class="form-control" aria-describedby="ariaAppPrice"/><label for="appPrice">Prezzo:</label></div>
        <div id="ariaAppPrice" class="visually-hidden">Inserire un nuovo prezzo per l'app selezionata</div>
      </form>
      <button type="button" class="btn btn-outline-danger" @click='this.deleteApp()'>Rimuovi App</button>
    </div>
  </div>
  <!--### AGGIUNGI APP ###-->
  <div class="row">
    <div v-if="datiPWA && datiPWA.length > 0" class="mt-2">
      <h2>Aggiungi una P<span class='purple'>W</span>A</h2>
      <form>
        <!-- ##### ACCESSIBILITA GARANTITA DA "aria-describedby" ##### -->
        <div class="form-floating mb-3">\
        <input v-model="newApp.name" id="appName" type="text" class="form-control" aria-describedby="ariaNewName"/><label for="appName">Nome App:</label></div>
        <div id="ariaNewName" class="visually-hidden">Inserire un nome per la nuova App</div>
        <div class="form-floating mb-3">\
        <input v-model="newApp.description" id="appDescription" type="text" class="form-control" aria-describedby="ariaNewDescription"/><label for="appDescription">Descrizione App:</label></div>
        <div id="ariaNewDescription" class="visually-hidden">Inserire una descrizione per la nuova App</div>
        <div class="form-floating mb-3">\
        <input v-model="newApp.price" id="appPrice" type="text" class="form-control" aria-describedby="ariaNewPrice"/><label for="appPrice">Prezzo:</label></div>
        <div id="ariaNewPrice" class="visually-hidden">Inserire un prezzo per la nuova App</div>
      </form>
      <button type="button" class="btn btn-outline-primary" @click='this.pushApp()'>Aggiungi App</button>
    </div>
  </div>
  `,
};

const routes = [
	{
		path: "/",
		component: home,
	},
	{
		path: "/features",
		component: features,
	},
	{
		path: "/jsonApp",
		component: jsonApp,
	},
	{
		path: "/editApp",
		component: editApp,
	},
];

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes,
});

const vueApp = Vue.createApp({
	data() {
		return {};
	},
	methods: {
		mountOk: function () {
			console.log("mount ok");
		},
	},
	mounted() {
		this.mountOk();
	},
});

vueApp.use(router);
vueApp.mount("#vueApp");
