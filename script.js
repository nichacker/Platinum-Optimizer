// ============ CONFIGURAZIONE ============
const SUPPORTED_LANGUAGES = [
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'zh', name: '简体中文', flag: '🇨🇳' },
];

const DOWNLOAD_URL = "https://drive.usercontent.google.com/download?id=1qu5DZLI7lz4ReUo8TIR5ooJnEy-MXkJi&export=download&authuser=0&confirm=t&uuid=cb4522ca-e913-4bb9-9c5d-c6f6cfefdda4&at=ANTm3czNOZ4iDl247uekpRpU4heg:1768218754198";

// ============ CONTENUTI TRADUZIONI ============
const IT_CONTENT = {
    app: {
        hero: {
            headline: "Ottimizzazione reale. Prestazioni misurabili.",
            subheadline: "Platinum+ Optimizer Ã¨ un sistema avanzato di ottimizzazione Kernel progettato per ridurre la latenza e massimizzare le prestazioni hardware.",
            ctaDownloadExe: "Scarica Platinum+ Optimizer",
            ctaLearn: "Come funziona",
            imageLabelLeft: "Interfaccia di Platinum+ Optimizer 7.4",
            imageLabelRight: "Risultati dopo aver applicato Platinum+ Optimizer"
        },
        about: {
            title: "Che cos'Ã¨ Platinum+ Optimizer",
            description1: "Platinum+ Optimizer non Ã¨ un semplice programma, ma una suite di direttive ingegneristiche che intervengono sul Kernel di Windows per eliminare i colli di bottiglia software.",
            description2: "L'obiettivo Ã¨ garantire la massima reattivitÃ  massima fluiditÃ  del sistema operativo e garantire una vita un pÃ² piu linga delle componentistiche hardware del PC.",
        },
        virustotal: {
            title: "VirusTotal e Rilevamenti",
            subtitle: "Il file Ã¨ stato verificato su VirusTotal e risulta completamente sicuro.",
            detectionCount: "2/61",
            detectionLabel: "Rilevamenti",
            falsePositiveLabel: "Falso Positivo Confermato",
            statusTitle: "Stato",
            statusValue: "SICURO",
            hashTitle: "SHA-256",
            hashValue: "d1b8375923103a012268f738d6646db5e036eb134dd6474b5858513c8b72774e",
            falsePositiveTitle: "âš ï¸ PerchÃ© Ã¨ rilevato come falso positivo?",
            falsePositiveDescription: "Lo script esegue modifiche profonde al sistema, come tweak del registro, disabilitazione di servizi non essenziali e ottimizzazioni del kernel. Molti antivirus rilevano queste azioni come sospette, generando un falso positivo.",
            safeTitle: "âœ… Sicuro da usare",
            safeDescription: "Il software Ã¨ completamente open source e gratuito. I rilevamenti non indicano malware reale, solo interventi legittimi sul sistema che alcuni antivirus interpretano come rischiosi.",
            viewReport: "Visualizza Report Completo su VirusTotal"
        },
        target: {
            title: "Per chi Ã¨ pensato",
            subtitle: "Un'architettura d'Ã©lite per chi non scende a compromessi con la latenza.",
            items: [
                {
                    title: "Gamer Elite",
                    description: "Azzeramento Quasi totale dell'input lag e l'instabilitÃ  dei frame in qualsiasi Gioco/Programma.",
                    icon: "monitor-play"
                },
                {
                    title: "Professionisti Hi-End",
                    description: "Un ambiente di lavoro calibrato per carichi estremi, dove la potenza hardware incontra l'efficienza massima del software.",
                    icon: "layers"
                },
                {
                    title: "Entusiasti Tech",
                    description: "Controllo granulare sul cuore del sistema operativo, liberando la macchina da ogni vincolo invisibile.",
                    icon: "code-2"
                },
                {
                    title: "Ecosistema Desktop",
                    description: "Saturazione totale del bus di sistema per PC fissi e laptop, eliminando ogni collo di bottiglia termico o energetico.",
                    icon: "laptop"
                }
            ]
        },
        steps: {
            title: "Download & Avvio",
            subtitle: "L'eccellenza a pochi clic di distanza. Segui la procedura rapida per sbloccare il potenziale del tuo PC.",
            terminalTitle: "Terminale di Ottimizzazione",
            terminalDesc: "Interfaccia intuitiva e facile da usare",
            securityTitle: "Protocollo di Sicurezza",
            security1: "Punto di ripristino automatico",
            security2: "Modifiche sicure e testate",
            security3: "Rollback completo garantito",
            items: [
                {
                    number: 1,
                    title: "Scarica il Programma",
                    description: "Scarica l'eseguibile ufficiale dal pulsante dedicato."
                },
                {
                    number: 2,
                    title: "Esecuzione",
                    description: "Avvia Platinum+Optimizer come Amministratore per accedere all'interfaccia di scelta."
                },
                {
                    number: 3,
                    title: "Ottimizzazione",
                    description: "Esegui in ordine i tweak in base ai tuoi componenti e preferenze."
                }
            ]
        },
        changelog: {
            title: "Technical Changelog",
            subtitle: "Versione 7.4 - Technical Build",
            description: "Questa versione introduce ottimizzazioni radicali al kernel di Windows. Abbiamo rimosso servizi obsoleti e timer hardware inefficienti per dare prioritÃ  assoluta alla latenza dell'input e alla stabilitÃ  del framerate.",
            tabChanges: "Modifiche (Diff)",
            tabChanges: "Modifiche (Diff)",
            diff: [
                { type: 'comment', code: '@@ -1,100 +1,100 @@ Platinum+ Optimizer 7.4 Manifest' },

                { type: 'comment', code: ':: INTEL SAFE AND EXTREME' },
                { type: 'added', code: 'powercfg -setacvalueindex %ACTIVE_GUID% 54533251-82be-4824-96c1-47b60b740d00 be337238-0d82-4146-a960-4f3749d470c7 4', info: 'Ottimizzazione Intel Safe/Extreme' },
                { type: 'added', code: 'powercfg -setacvalueindex %ACTIVE_GUID% 54533251-82be-4824-96c1-47b60b740d00 0cc5b647-c1df-4637-891a-dec35c318583 0' },
                { type: 'added', code: 'powercfg -setacvalueindex %ACTIVE_GUID% 54533251-82be-4824-96c1-47b60b740d00 893dee8e-2bef-41e0-89c6-b55d0929964c 100' },
                { type: 'added', code: 'powercfg -setacvalueindex %ACTIVE_GUID% 54533251-82be-4824-96c1-47b60b740d00 bc5038f7-23e0-4960-96da-33abaf5935ec 100' },

                { type: 'comment', code: ':: BUG FIXES' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\PriorityControl" /v "Win32PrioritySeparation" /t REG_DWORD /d 26 /f', info: 'Fix Intel GHz Bug' },
                { type: 'added', code: 'powercfg -setacvalueindex %ACTIVE_GUID% SUB_PCIEXPRESS ASPM 0', info: 'Fix Bug Crash GPU AMD' },

                { type: 'comment', code: ' # End of technical diff' }
            ],
        },
        download: {
            version: "Platinum+ Optimizer 7.4"
        },
        faq: {
            title: "FAQ Tecniche",
            subtitle: "Risposte alle domande piÃ¹ comuni sull'ottimizzazione",
            items: [
                {
                    question: "Le modifiche sono reversibili?",
                    answer: "SÃ¬. Il software di ottimizzazione appena avviato ti chiede se creare un Punto di Ripristino. (Per sicurezza si consiglia di accettare) prima di iniziare ad applicare qualsiasi modifica al PC."
                },
                {
                    question: "Devo disattivare l'antivirus?",
                    answer: "Generalmente non Ã¨ necessario, ma se Windows Defender o altri antivirus bloccano l'esecuzione, potrebbe essere necessario aggiungere un'eccezione data la natura profonda delle ottimizzazioni."
                },
                {
                    question: "Migliora gli FPS in gioco?",
                    answer: "Assolutamente si!, rimuovendo i colli di bottiglia del sistema e ottimizzando Estremamente il sistema, la prioritÃ  della CPU ,GPU, RAM, SSD si nota un grande miglioramento e aumento della stabilitÃ  degli FPS (1% lows) e una riduzione drastica dell'input lag del 96% in molti casi."
                },
                {
                    question: "Hai bisogno di assistenza?",
                    answer: "In caso di problemi tecnici o dubbi, puoi contattare il nostro supporto ufficiale all'indirizzo email: PlatinumOptimizerHelp@gmail.com"
                }
            ]
        },
        footer: {
            copyright: "Â© 2026 Platinum+ Optimizer. Tutti i diritti riservati.",
            disclaimer: "L'uso di questo strumento Ã¨ a rischio e pericolo dell'utente. Non siamo responsabili per eventuali danni diretti o indiretti.",
            privacy: "Privacy Policy",
            legalDisclaimer: "Disclaimer",
            closeBtn: "Chiudi",
            credits: {
                host: "@STEFANO83223 â€” Web Host e Tweak Developer",
                designer: "@Aledect â€” Designer e Debugger",
                dev: "@nichacker6 â€” Sviluppatore Web e Designer"
            },
            telegramBtn: "Seguici su Telegram",
            donationsBtn: "Donazioni",
            visitorsLabel: "Visitatori"
        },
        nav: {
            home: "Pagina Iniziale",
            about: "Cosâ€™Ã¨",
            virustotal: "VirusTotal",
            changelog: "NovitÃ ",
            target: "Per chi Ã¨ pensato",
            howItWorks: "Guida",
            faq: "FAQ"
        },
        bugReport: {
            btnLabel: "Segnala bug"
        },
        platinum: {
            title: "Platinum Benchmark",
            back: "Torna Indietro",
            pageTitle: "ModalitÃ  Platinum Benchmark",
            pageSubtitle: "Questa Ã¨ una modalitÃ  creata per misurare le Prestazioni e StabilitÃ  del tuo dispositivo in tempo reale",
            testHeadline: "Pronto per il Test?",
            testSubtext: "Avvia il motore di ottimizzazione Platinum Benchmark e porta il tuo PC oltre ogni limite.",
            startButton: "AVVIA BENCHMARK",
            fpsLabel: "Frame Per Secondo",
            loaderText: "Compilazione Shader..."
        },
        android: {
            backToHome: "TORNA ALLA HOME",
            mobileEdition: "EDIZIONE MOBILE",
            fullTitle: "Platinum+ Optimizer Android",
            mainTitle: "Platinum+ Optimizer",
            androidTitle: "Android",
            subtitle: "Scatena il vero potere del tuo dispositivo mobile. Ottimizzazione a livello Kernel ora disponibile per l'ecosistema Android.",
            guideTitle: "Guida all'Installazione",
            step1: "Vai in <span class=\"text-aqua-400 font-medium\">impostazioni</span>, poi in <span class=\"text-aqua-400 font-medium\">opzioni sviluppatore</span> e abilita <span class=\"text-aqua-400 font-medium\">debug wireless</span>.",
            step2: "Installa <span class=\"text-aqua-400 font-medium\">Shizuku</span> e <span class=\"text-aqua-400 font-medium\">Termux</span> per Android (APK).",
            step3: "Sposta il file <code class=\"bg-white/5 px-2 py-0.5 rounded text-aqua-400 font-mono text-sm\">boost.sh</code> dalla cartella Download alla memoria interna (<span class=\"text-aqua-400 font-medium\">Storage Emulated</span>).",
            step4: "Apri <span class=\"text-aqua-400 font-medium\">Shizuku</span>, clicca su accoppia e una volta terminato clicca su <span class=\"text-aqua-400 font-medium\">avvia Shizuku server</span>. Minimizza l'app senza chiuderla.",
            step5: "Apri <span class=\"text-aqua-400 font-medium\">Termux</span> e incolla il seguente codice:",
            downloadBtn: "Scarica Platinum+ Android",
            copyright: "Â© 2026 Platinum+ Optimizer Android.",
            troubleshooting: "Se termux dice errore o se non trova il file verificare che il file .sh sia nella memoria interna in (Storage Emulated) o incollare di nuovo tutto il codice in una volta sola e premere invio nella tastiera. (Funzione android)"
        }
    },
    legal: {
        privacy: [
            "1. Raccolta Dati: Platinum+ Optimizer non raccoglie, memorizza o trasmette alcun dato personale dell'utente.",
            "2. Esecuzione Locale: Tutto il codice viene eseguito localmente sulla macchina dell'utente senza comunicazioni verso server esterni.",
            "3. Nessuna Telemetria: Il software non include moduli di telemetria, tracciamento o analisi comportamentale.",
            "4. Codice Sorgente: Essendo un tool di ottimizzazione, i comandi sono verificabili dal comportamento del sistema.",
            "5. Connessione Internet: Il programma non richiede una connessione internet attiva per funzionare, garantendo l'isolamento dei dati.",
            "6. Log di Sistema: Eventuali log generati sono salvati esclusivamente in locale e sono temporanei.",
            "7. Registro di Windows: Le modifiche al registro non accedono a chiavi contenenti dati sensibili dell'utente.",
            "8. Credenziali: Non vengono mai richieste nÃ© accessibili credenziali di accesso, password o token.",
            "9. Cookie: Il sito web e l'eseguibile non utilizzano cookie di profilazione.",
            "10. Terze Parti: Nessun dato viene condiviso con terze parti, partner pubblicitari o affiliati.",
            "11. ConformitÃ  GDPR: Sebbene operi localmente, il principio di 'Privacy by Design' Ã¨ rispettato integralmente.",
            "12. File Utente: Il programma non scansiona, modifica o cancela file personali (documenti, foto, ecc.).",
            "13. Periferiche: Non viene raccolto l'elenco delle periferiche o identificativi hardware univoci per fini di tracciamento.",
            "14. Indirizzo IP: Non viene effettuato alcun logging dell'indirizzo IP dell'utente.",
            "15. Geolocalizzazione: Il software non include funzionalitÃ  de tracciamento della posizione.",
            "16. Aggiornamenti: La ricerca di aggiornamenti Ã¨ manuale; non ci sono connessioni automatiche in background.",
            "17. PubblicitÃ : Il software Ã¨ privo di adware o inserzioni pubblicitarie.",
            "18. Minori: Non essendo raccolti dati, non vi Ã¨ rischio per la privacy dei minori.",
            "19. Sicurezza: L'assenza di comunicazioni di rete elimina vettori di attacco remoti tramite il software.",
            "20. Profilazione: Non viene creata alcuna profilazione dell'hardware o delle abitudini dell'utente."
        ],
        disclaimer: `LIMITAZIONE DI RESPONSABILITÃ€ (DISCLAIMER)

1. ACCETTAZIONE DEI RISCHI
L'utilizzo del software "Platinum+ Optimizer" (di seguito "Software") Ã¨ a totale discrezione e rischio dell'utente. Il Software viene fornito "COSÃŒ COM'Ãˆ", senza alcuna garanzia esplicita o implicita di funzionamento, stabilitÃ  o idoneitÃ  per uno scopo particolare.

2. MODIFICHE AL SISTEMA
Il Software apporta modifiche profonde al sistema operativo Microsoft Windows, inclusi ma non limitati a: Registro di Sistema, Servizi, Scheduler della CPU, Gestione della Memoria e Configurazioni di Rete. Sebbene progettate per migliorare le prestazioni, tali modifiche potrebbero causare instabilitÃ , incompatibilitÃ  software o comportamenti imprevisti in specifiche configurazioni hardware.

3. ESCLUSIONE DI DANNI
In nessun caso gli sviluppatori (un team di due persone indipendenti), i distributori o i collaboratori di Platinum+ Optimizer saranno responsabili per danni diretti, indiretti, incidentali, speciali, esemplari o consequenziali (inclusi, ma non limitati a: perdita di dati, corruzione del sistema operativo, guasti hardware, interruzione dell'attivitÃ  o perdita di profitti) derivanti dall'uso o dall'impossibilitÃ  di usare il Software.

4. PUNTI DI RIPRISTINO
Ãˆ responsabilitÃ  esclusiva dell'utente assicurarsi che venga creato un Punto di Ripristino del Sistema o un backup completo dei dati critici prima di eseguire il Software. Gli sviluppatori non garantiscono l'efficacia della funzione di ripristino nativa di Windows.

5. OVERCLOCK E HARDWARE
Le ottimizzazioni che rimuovono limiti energetici possono aumentare la temperatura operativa e il consumo energetico dei componenti (CPU/GPU). L'utente Ã¨ responsabile del monitoraggio delle temperature e della stabilitÃ  termica del proprio sistema.

6. VIOLAZIONE DI TERMINI DI TERZE PARTI
L'uso di tool di ottimizzazione potrebbe, in rari casi, essere interpretato come violazione dei Termini di Servizio di alcuni software anti-cheat o applicazioni aziendali. L'utente si assume la piena responsabilitÃ  della conformitÃ  con accordi di terze parti.

7. NON AFFILIAZIONE
Platinum+ Optimizer non Ã¨ affiliato, associato, autorizzato, approvato o in alcun modo ufficialmente collegato a Microsoft Corporation o a qualsiasi sua sussidiaria.

Eseguendo il programma, l'utente dichiara di aver letto, compreso e accettato integralmente i termini di questo disclaimer.`
    }
};

const EN_CONTENT = {
    app: {
        hero: {
            headline: "Real Optimization. Measurable Performance.",
            subheadline: "Platinum+ Optimizer is an advanced Kernel optimization system designed to reduce latency and maximize hardware performance.",
            ctaDownloadExe: "Download Platinum+ Optimizer",
            ctaLearn: "How it works",
            imageLabelLeft: "Platinum+ Optimizer 7.4 Interface",
            imageLabelRight: "Results after applying Platinum+ Optimizer"
        },
        about: {
            title: "What is Platinum+ Optimizer",
            description1: "Platinum+ Optimizer is not just a program, but a suite of engineering directives interacting with the Windows Kernel to eliminate software bottlenecks.",
            description2: "The goal is to ensure maximum responsiveness and maximum fluidity of the operating system and ensure a slightly longer life of the PC's hardware components.",
        },
        virustotal: {
            title: "VirusTotal and Detections",
            subtitle: "The file has been verified on VirusTotal and is completely safe.",
            detectionCount: "2/61",
            detectionLabel: "Detections",
            falsePositiveLabel: "Confirmed False Positive",
            statusTitle: "Status",
            statusValue: "SAFE",
            hashTitle: "SHA-256",
            hashValue: "d1b8375923103a012268f738d6646db5e036eb134dd6474b5858513c8b72774e",
            falsePositiveTitle: "âš ï¸ Why is it detected as a false positive?",
            falsePositiveDescription: "The script performs deep system changes, such as registry tweaks, disabling non-essential services, and kernel optimizations. Many antivirus programs detect these actions as suspicious, generating a false positive.",
            safeTitle: "âœ… Safe to use",
            safeDescription: "The software is completely open source and free. The detections do not indicate real malware, only legitimate system interventions that some antivirus programs interpret as risky.",
            viewReport: "View Full Report on VirusTotal"
        },
        target: {
            title: "Who is it for",
            subtitle: "An elite architecture for those who do not compromise on latency.",
            items: [
                {
                    title: "Elite Gamers",
                    description: "Almost total elimination of input lag and frame instability in any Game/Program.",
                    icon: "monitor-play"
                },
                {
                    title: "Hi-End Professionals",
                    description: "A workspace calibrated for extreme loads, where hardware power meets peak software efficiency.",
                    icon: "layers"
                },
                {
                    title: "Tech Enthusiasts",
                    description: "Granular control over the heart of the operating system, freeing the machine from all invisible constraints.",
                    icon: "code-2"
                },
                {
                    title: "Desktop Ecosystem",
                    description: "Total saturation of the system bus for desktops and laptops, eliminating any thermal or power bottlenecks.",
                    icon: "laptop"
                }
            ]
        },
        steps: {
            title: "Download & Run",
            subtitle: "Excellence is just a few clicks away. Follow the quick procedure to unlock your PC's potential.",
            terminalTitle: "Optimization Terminal",
            terminalDesc: "Intuitive and easy to use interface",
            securityTitle: "Security Protocol",
            security1: "Automatic restore point",
            security2: "Safe and tested modifications",
            security3: "Guaranteed full rollback",
            items: [
                {
                    number: 1,
                    title: "Download Program",
                    description: "Download the official executable from the dedicated button."
                },
                {
                    number: 2,
                    title: "Execution",
                    description: "Run Platinum+Optimizer as Administrator to access the selection interface."
                },
                {
                    number: 3,
                    title: "Optimization",
                    description: "Execute the tweaks in order based on your components and preferences."
                }
            ]
        },
        changelog: {
            title: "Technical Changelog",
            subtitle: "Version 7.4 - Technical Build",
            description: "This version introduces radical optimizations to the Windows kernel. We have removed obsolete services and inefficient hardware timers to give absolute priority to input latency and framerate stability.",
            tabChanges: "Changes (Diff)",
            tabChanges: "Changes (Diff)",
            diff: [
                { type: 'comment', code: '@@ -1,100 +1,100 @@ Platinum+ Optimizer 7.4 Manifest' },

                { type: 'comment', code: ':: INTEL SAFE AND EXTREME' },
                { type: 'added', code: 'powercfg -setacvalueindex %ACTIVE_GUID% 54533251-82be-4824-96c1-47b60b740d00 be337238-0d82-4146-a960-4f3749d470c7 4', info: 'Intel Safe/Extreme Optimization' },
                { type: 'added', code: 'powercfg -setacvalueindex %ACTIVE_GUID% 54533251-82be-4824-96c1-47b60b740d00 0cc5b647-c1df-4637-891a-dec35c318583 0' },
                { type: 'added', code: 'powercfg -setacvalueindex %ACTIVE_GUID% 54533251-82be-4824-96c1-47b60b740d00 893dee8e-2bef-41e0-89c6-b55d0929964c 100' },
                { type: 'added', code: 'powercfg -setacvalueindex %ACTIVE_GUID% 54533251-82be-4824-96c1-47b60b740d00 bc5038f7-23e0-4960-96da-33abaf5935ec 100' },

                { type: 'comment', code: ':: BUG FIXES' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\PriorityControl" /v "Win32PrioritySeparation" /t REG_DWORD /d 26 /f', info: 'Fix Intel GHz Bug' },
                { type: 'added', code: 'powercfg -setacvalueindex %ACTIVE_GUID% SUB_PCIEXPRESS ASPM 0', info: 'Fix AMD GPU Crash Bug' },

                { type: 'comment', code: ' # End of technical diff' }
            ],
        },
        download: {
            version: "Platinum+ Optimizer 7.4"
        },
        faq: {
            title: "Technical FAQ",
            subtitle: "Answers to the most common questions about optimization",
            items: [
                {
                    question: "Are changes reversible?",
                    answer: "Yes. The optimization software, once started, asks you if you want to create a Restore Point. (For security, it is recommended to accept) before starting to apply any modifications to the PC."
                },
                {
                    question: "Do I need to disable my antivirus?",
                    answer: "Generally not necessary, but if Windows Defender or other antivirus block execution, you may need to add an exception given the deep nature of the optimizations."
                },
                {
                    question: "Does it improve FPS in games?",
                    answer: "Absolutely yes!, by removing system bottlenecks and extremely optimizing the system, CPU, GPU, RAM, SSD priority, a great improvement and increase in FPS stability (1% lows) and a drastic reduction in input lag of 96% in many cases can be noticed."
                },
                {
                    question: "Need support?",
                    answer: "For any technical issues or specific questions, please contact our official support at: PlatinumOptimizerHelp@gmail.com"
                }
            ]
        },
        footer: {
            copyright: "Â© 2026 Platinum+ Optimizer. All rights reserved.",
            disclaimer: "Use of this software is at the user's own risk. We are not responsible for any direct or indirect damage.",
            privacy: "Privacy Policy",
            legalDisclaimer: "Disclaimer",
            closeBtn: "Close",
            credits: {
                host: "@STEFANO83223 â€” Web Host & Tweak Developer",
                designer: "@Aledect â€” Designer & Debugger",
                dev: "@nichacker6 â€” Web Developer & Designer"
            },
            telegramBtn: "Follow us on Telegram",
            donationsBtn: "Donations",
            visitorsLabel: "Visitors"
        },
        nav: {
            home: "Home",
            about: "What is",
            virustotal: "VirusTotal",
            changelog: "What's New",
            target: "For Whom",
            howItWorks: "Guide",
            faq: "FAQ"
        },
        bugReport: {
            btnLabel: "Report bug"
        },
        platinum: {
            title: "Platinum Benchmark",
            back: "Go Back",
            pageTitle: "Platinum Benchmark Mode",
            pageSubtitle: "This mode is designed to measure the Performance and Stability of your device in real-time",
            testHeadline: "Ready for the Test?",
            testSubtext: "Start the Platinum Benchmark optimization engine and push your PC beyond all limits.",
            startButton: "START BENCHMARK",
            fpsLabel: "Frames Per Second",
            loaderText: "Compiling Shaders..."
        },
        android: {
            backToHome: "BACK TO HOME",
            mobileEdition: "MOBILE EDITION",
            fullTitle: "Platinum+ Optimizer Android",
            mainTitle: "Platinum+ Optimizer",
            androidTitle: "Android",
            subtitle: "Unleash the true power of your mobile device. Kernel-level optimization now available for the Android ecosystem.",
            guideTitle: "Installation Guide",
            step1: "Go to <span class=\"text-aqua-400 font-medium\">settings</span>, then to <span class=\"text-aqua-400 font-medium\">developer options</span> and enable <span class=\"text-aqua-400 font-medium\">wireless debugging</span>.",
            step2: "Install <span class=\"text-aqua-400 font-medium\">Shizuku</span> and <span class=\"text-aqua-400 font-medium\">Termux</span> for Android (APK).",
            step3: "Move the file <code class=\"bg-white/5 px-2 py-0.5 rounded text-aqua-400 font-mono text-sm\">boost.sh</code> from the Download folder to internal storage (<span class=\"text-aqua-400 font-medium\">Storage Emulated</span>).",
            step4: "Open <span class=\"text-aqua-400 font-medium\">Shizuku</span>, click pair and once finished click on <span class=\"text-aqua-400 font-medium\">start Shizuku server</span>. Minimize the app without closing it.",
            step5: "Open <span class=\"text-aqua-400 font-medium\">Termux</span> and paste the following code:",
            downloadBtn: "Download Platinum+ Android",
            copyright: "Â© 2026 Platinum+ Optimizer Android.",
            troubleshooting: "If termux says error or can't find the file, verify that the .sh file is in internal storage (Storage Emulated) or paste all the code again at once and press enter on the keyboard. (Android function)"
        }
    },
    legal: {
        privacy: [
            "1. Data Collection: Platinum+ Optimizer does not collect, store, or transmit any personal user data.",
            "2. Local Execution: All code runs locally on the user's machine without communication to external servers.",
            "3. No Telemetry: The software includes no telemetry, tracking, or behavioral analysis modules.",
            "4. Source Code: As an optimization tool, operations are verifiable via system behavior.",
            "5. Internet Connection: The program does not require an active internet connection to function, ensuring data isolation.",
            "6. System Logs: Any generated logs are saved exclusively locally and are temporary.",
            "7. Windows Registry: Registry changes do not access keys containing sensitive user data.",
            "8. Credentials: Login credentials, passwords, or tokens are never requested or accessed.",
            "9. Cookies: The website and executable do not use profiling cookies.",
            "10. Third Parties: No data is shared with third parties, advertising partners, or affiliates.",
            "11. GDPR Compliance: Although operating locally, the 'Privacy by Design' principle is fully respected.",
            "12. User Files: The program does not scan, modify, or delete personal files (documents, photos, etc.).",
            "13. Peripherals: Peripheral lists or unique hardware identifiers are not collected for tracking purposes.",
            "14. IP Address: No logging of the user's IP address is performed.",
            "15. Geolocation: No geolocation functionality is present in the software.",
            "16. Updates: The search for updates is manual; there are no automatic background connections.",
            "17. Advertising: The software is free of adware or advertising insertions.",
            "18. Minors: Since no data is collected, there is no risk to the privacy of minors.",
            "19. Security: The absence of network communications eliminates remote attack vectors via the software.",
            "20. Profiling: No profiling of hardware or user habits is created."
        ],
        disclaimer: `LIMITATION OF LIABILITY (DISCLAIMER)

1. ACCEPTANCE OF RISKS
The use of the software "Platinum+ Optimizer" (hereinafter "Software") is at the user's sole discretion and risk. The Software is provided "AS IS", without any express or implied warranty of operation, stability, or fitness for a particular purpose.

2. SYSTEM MODIFICATIONS
The Software makes deep changes to the Microsoft Windows operating system, including but not limited to: System Registry, Services, CPU Scheduler, Memory Management, and Network Configurations. Although designed to improve performance, such changes could cause instability, software incompatibility, or unexpected behavior in specific hardware configurations.

3. EXCLUSION OF DAMAGES
In no event shall the developers (a team of two independent people), distributors, or collaborators of Platinum+ Optimizer be liable for direct, indirect, incidental, special, exemplary, or consequential damages (including, but not limited to: loss of data, OS corruption, hardware failure, business interruption, or loss of profits) arising from the use or inability to use the Software.

4. RESTORE POINTS
It is the user's sole responsibility to ensure that a System Restore Point or a full backup of critical data is created before running the Software. The developers do not guarantee the effectiveness of the native Windows restore function.

5. OVERCLOCK AND HARDWARE
Optimizations that remove power limits may increase the operating temperature and power consumption of components (CPU/GPU). The user is responsible for monitoring temperatures and thermal stability of their system.

6. VIOLATION OF THIRD-PARTY TERMS
The use of optimization scripts could, in rare cases, be interpreted as a violation of the Terms of Service of some anti-cheat software or corporate applications. The user assumes full responsibility for compliance with third-party agreements.

7. NON-AFFILIATION
Platinum+ Optimizer is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Microsoft Corporation or any of its subsidiaries.

By executing the program, the user declares to have read, understood, and fully accepted the terms of this disclaimer.`
    }
};

const ZH_CONTENT = {
    app: {
        hero: {
            headline: "真正的优化，可量化的性能。",
            subheadline: "Platinum+ Optimizer 是一套高级内核级优化系统，用于降低延迟并最大化硬件性能。",
            ctaDownloadExe: "下载 Platinum+ Optimizer",
            ctaLearn: "工作原理",
            imageLabelLeft: "Platinum+ Optimizer 7.4 界面",
            imageLabelRight: "应用 Platinum+ Optimizer 之后的效果"
        },
        about: {
            title: "什么是 Platinum+ Optimizer",
            description1: "Platinum+ Optimizer 不只是一个程序，而是一组针对 Windows 内核的工程级优化指令，用来消除软件层面的瓶颈。",
            description2: "目标是让系统拥有最高的响应速度与流畅度，并在一定程度上延长电脑硬件的使用寿命。"
        },
        virustotal: {
            title: "VirusTotal 与检测结果",
            subtitle: "该文件已经在 VirusTotal 上完成扫描，结果完全安全。",
            detectionCount: "2/61",
            detectionLabel: "检测数",
            falsePositiveLabel: "已确认的误报",
            statusTitle: "状态",
            statusValue: "安全",
            hashTitle: "SHA-256",
            hashValue: "d1b8375923103a012268f738d6646db5e036eb134dd6474b5858513c8b72774e",
            falsePositiveTitle: "⚠️ 为什么会被当成误报？",
            falsePositiveDescription: "脚本会对系统做较深层的修改，例如注册表优化、禁用非必要服务以及内核级优化。很多杀毒软件会将这些行为视为可疑，从而产生误报。",
            safeTitle: "✅ 安全可用",
            safeDescription: "本软件完全开源且免费。这些“检测”并不代表真实恶意软件，只是一些杀软把合法的系统调整误判为风险操作。",
            viewReport: "在 VirusTotal 查看完整报告"
        },
        target: {
            title: "适用人群",
            subtitle: "为不愿在延迟上妥协的用户打造的顶级架构。",
            items: [
                {
                    title: "发烧级玩家",
                    description: "在任何游戏 / 程序中，几乎彻底消除输入延迟与帧率不稳定。",
                    icon: "monitor-play"
                },
                {
                    title: "高端专业用户",
                    description: "为极限负载而校准的工作环境，让硬件性能与软件效率完美匹配。",
                    icon: "layers"
                },
                {
                    title: "技术爱好者",
                    description: "对操作系统核心进行更精细的掌控，释放整台机器的隐藏性能。",
                    icon: "code-2"
                },
                {
                    title: "桌面生态",
                    description: "为台式机与笔记本充分压榨系统总线带宽，消除一切热与供电瓶颈。",
                    icon: "laptop"
                }
            ]
        },
        steps: {
            title: "下载与启动",
            subtitle: "距离极致体验只差几次点击。按照简易步骤解锁你电脑的全部潜能。",
            terminalTitle: "优化终端",
            terminalDesc: "直观易用的界面",
            securityTitle: "安全机制",
            security1: "自动创建还原点",
            security2: "安全且经过测试的修改",
            security3: "支持完整回滚",
            items: [
                {
                    number: 1,
                    title: "下载程序",
                    description: "通过专用按钮下载官方可执行文件。"
                },
                {
                    number: 2,
                    title: "运行程序",
                    description: "以管理员身份运行 Platinum+Optimizer 以进入选择界面。"
                },
                {
                    number: 3,
                    title: "开始优化",
                    description: "根据你的硬件与偏好按顺序执行各项优化。"
                }
            ]
        },
        changelog: {
            title: "技术更新日志",
            subtitle: "版本 7.4 - 技术构建",
            description: "本版本对 Windows 内核进行了深度优化。我们移除了过时的服务与低效的硬件计时器，以绝对优先级保障输入延迟与帧率稳定性。",
            tabChanges: "变更（Diff）",
            tabChanges: "变更（Diff）",
            diff: EN_CONTENT.app.changelog.diff
        },
        download: {
            version: "Platinum+ Optimizer 7.4"
        },
        faq: {
            title: "技术常见问题",
            subtitle: "关于优化最常见问题的解答",
            items: [
                {
                    question: "这些更改可以撤销吗？",
                    answer: "可以。优化程序启动后会询问你是否创建系统还原点（强烈建议开启），以便在需要时回退所有更改。"
                },
                {
                    question: "需要关闭杀毒软件吗？",
                    answer: "通常不需要。但如果 Windows Defender 或其它杀毒软件阻止运行，你可能需要为此程序添加信任 / 例外，因为优化会深入修改系统。"
                },
                {
                    question: "真的能提升游戏 FPS 吗？",
                    answer: "完全可以！通过消除系统瓶颈、极限优化系统与 CPU / GPU / 内存 / SSD 的优先级，很多情况下可以明显提升 FPS 稳定度（尤其是 1% low）并大幅降低输入延迟。"
                },
                {
                    question: "遇到问题怎么联系支持？",
                    answer: "如遇到任何技术问题或有特殊需求，请联系官方支持邮箱：PlatinumOptimizerHelp@gmail.com"
                }
            ]
        },
        footer: {
            copyright: "© 2026 Platinum+ Optimizer. 保留所有权利。",
            disclaimer: "本软件的使用由用户自行承担风险。我们不对任何直接或间接损失负责。",
            privacy: "隐私政策",
            legalDisclaimer: "免责声明",
            closeBtn: "关闭",
            credits: {
                host: "@STEFANO83223 — 站点托管与优化开发",
                designer: "@Aledect — 设计与调试",
                dev: "@nichacker6 — 网页开发与设计"
            },
            telegramBtn: "关注我们的 Telegram",
            donationsBtn: "捐赠",
            visitorsLabel: "访问人数"
        },
        nav: {
            home: "首页",
            about: "简介",
            virustotal: "VirusTotal",
            changelog: "更新日志",
            target: "适用人群",
            howItWorks: "使用指南",
            faq: "常见问题"
        },
        bugReport: {
            btnLabel: "报告问题"
        },
        platinum: {
            title: "Platinum Benchmark",
            back: "返回",
            pageTitle: "Platinum 基准测试模式",
            pageSubtitle: "此模式用于实时测量你设备的性能与稳定性。",
            testHeadline: "准备好接受测试了吗？",
            testSubtext: "启动 Platinum Benchmark 优化引擎，把你的电脑推向极限。",
            startButton: "开始基准测试",
            fpsLabel: "每秒帧数（FPS）",
            loaderText: "正在编译着色器..."
        },
        android: {
            backToHome: "返回主页",
            mobileEdition: "移动版",
            fullTitle: "Platinum+ Optimizer Android",
            mainTitle: "Platinum+ Optimizer",
            androidTitle: "Android",
            subtitle: "释放你移动设备的真正性能。现在将内核级优化带到 Android 生态。",
            guideTitle: "安装向导",
            step1: "进入 <span class=\"text-aqua-400 font-medium\">设置</span>，打开 <span class=\"text-aqua-400 font-medium\">开发者选项</span> 并启用 <span class=\"text-aqua-400 font-medium\">无线调试</span>。",
            step2: "安装 <span class=\"text-aqua-400 font-medium\">Shizuku</span> 与 <span class=\"text-aqua-400 font-medium\">Termux</span>（APK）。",
            step3: "将 <code class=\"bg-white/5 px-2 py-0.5 rounded text-aqua-400 font-mono text-sm\">boost.sh</code> 文件从下载目录移动到内部存储（<span class=\"text-aqua-400 font-medium\">Storage Emulated</span>）。",
            step4: "打开 <span class=\"text-aqua-400 font-medium\">Shizuku</span>，点击配对，完成后点击 <span class=\"text-aqua-400 font-medium\">启动 Shizuku 服务</span>，然后最小化应用但不要关闭。",
            step5: "打开 <span class=\"text-aqua-400 font-medium\">Termux</span> 并粘贴以下代码：",
            downloadBtn: "下载 Platinum+ Android",
            copyright: "© 2026 Platinum+ Optimizer Android。",
            troubleshooting: "如果 Termux 报错或找不到文件，请确认 .sh 文件位于内部存储（Storage Emulated），或者一次性重新粘贴所有代码并回车执行。（Android 功能）"
        }
    },
    legal: {
        privacy: EN_CONTENT.legal.privacy.map(p =>
            p.replace("Platinum+ Optimizer", "Platinum+ Optimizer")
        ),
        disclaimer: EN_CONTENT.legal.disclaimer
    }
};

const RU_CONTENT = {
    app: {
        hero: {
            headline: "Ð ÐµÐ°Ð»ÑŒÐ½Ð°Ñ Ð¾Ð¿Ñ‚Ð¸Ð¼Ð¸Ð·Ð°Ñ†Ð¸Ñ. Ð˜Ð·Ð¼ÐµÑ€Ð¸Ð¼Ð°Ñ Ð¿Ñ€Ð¾Ð¸Ð·Ð²Ð¾Ð´Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾ÑÑ‚ÑŒ.",
            subheadline: "Platinum+ Optimizer â€” ÑÑ‚Ð¾ Ð¿Ñ€Ð¾Ð´Ð²Ð¸Ð½ÑƒÑ‚Ð°Ñ ÑÐ¸ÑÑ‚ÐµÐ¼Ð° Ð¾Ð¿Ñ‚Ð¸Ð¼Ð¸Ð·Ð°Ñ†Ð¸Ð¸ Ð¯Ð´Ñ€Ð°, Ñ€Ð°Ð·Ñ€Ð°Ð±Ð¾Ñ‚Ð°Ð½Ð½Ð°Ñ Ð´Ð»Ñ ÑÐ½Ð¸Ð¶ÐµÐ½Ð¸Ñ Ð·Ð°Ð´ÐµÑ€Ð¶ÐºÐ¸ Ð¸ Ð¼Ð°ÐºÑÐ¸Ð¼Ð¸Ð·Ð°Ñ†Ð¸Ð¸ Ð¿Ñ€Ð¾Ð¸Ð·Ð²Ð¾Ð´Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾ÑÑ‚Ð¸ Ð¾Ð±Ð¾Ñ€ÑƒÐ´Ð¾Ð²Ð°Ð½Ð¸Ñ.",
            ctaDownloadExe: "Ð¡ÐºÐ°Ñ‡Ð°Ñ‚ÑŒ Platinum+ Optimizer",
            ctaLearn: "ÐšÐ°Ðº ÑÑ‚Ð¾ Ñ€Ð°Ð±Ð¾Ñ‚Ð°ÐµÑ‚",
            imageLabelLeft: "Ð˜Ð½Ñ‚ÐµÑ€Ñ„ÐµÐ¹Ñ Platinum+ Optimizer 7.4",
            imageLabelRight: "Ð ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ñ‹ Ð¿Ð¾ÑÐ»Ðµ Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ Platinum+ Optimizer"
        },
        about: {
            title: "Ð§Ñ‚Ð¾ Ñ‚Ð°ÐºÐ¾Ðµ Platinum+ Optimizer",
            description1: "Platinum+ Optimizer â€” ÑÑ‚Ð¾ Ð½Ðµ Ð¿Ñ€Ð¾ÑÑ‚Ð¾ Ð¿Ñ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼Ð°, Ð° Ð½Ð°Ð±Ð¾Ñ€ Ð¸Ð½Ð¶ÐµÐ½ÐµÑ€Ð½Ñ‹Ñ… Ð´Ð¸Ñ€ÐµÐºÑ‚Ð¸Ð², Ð²Ð·Ð°Ð¸Ð¼Ð¾Ð´ÐµÐ¹ÑÑ‚Ð²ÑƒÑŽÑ‰Ð¸Ñ… Ñ ÑÐ´Ñ€Ð¾Ð¼ Windows Ð´Ð»Ñ ÑƒÑÑ‚Ñ€Ð°Ð½ÐµÐ½Ð¸Ñ Ð¿Ñ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼Ð½Ñ‹Ñ… ÑƒÐ·ÐºÐ¸Ñ… Ð¼ÐµÑÑ‚.",
            description2: "Ð¦ÐµÐ»ÑŒ ÑÐ¾ÑÑ‚Ð¾Ð¸Ñ‚ Ð² Ñ‚Ð¾Ð¼, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð¾Ð±ÐµÑÐ¿ÐµÑ‡Ð¸Ñ‚ÑŒ Ð¼Ð°ÐºÑÐ¸Ð¼Ð°Ð»ÑŒÐ½ÑƒÑŽ Ð¾Ñ‚Ð·Ñ‹Ð²Ñ‡Ð¸Ð²Ð¾ÑÑ‚ÑŒ Ð¸ Ð¼Ð°ÐºÑÐ¸Ð¼Ð°Ð»ÑŒÐ½ÑƒÑŽ Ð¿Ð»Ð°Ð²Ð½Ð¾ÑÑ‚ÑŒ Ñ€Ð°Ð±Ð¾Ñ‚Ñ‹ Ð¾Ð¿ÐµÑ€Ð°Ñ†Ð¸Ð¾Ð½Ð½Ð¾Ð¹ ÑÐ¸ÑÑ‚ÐµÐ¼Ñ‹ Ð¸ Ð¾Ð±ÐµÑÐ¿ÐµÑ‡Ð¸Ñ‚ÑŒ Ñ‡ÑƒÑ‚ÑŒ Ð±Ð¾Ð»ÐµÐµ Ð´Ð¾Ð»Ð³Ð¸Ð¹ ÑÑ€Ð¾Ðº ÑÐ»ÑƒÐ¶Ð±Ñ‹ Ð°Ð¿Ð¿Ð°Ñ€Ð°Ñ‚Ð½Ñ‹Ñ… ÐºÐ¾Ð¼Ð¿Ð¾Ð½ÐµÐ½Ñ‚Ð¾Ð² ÐŸÐš.",
        },
        virustotal: {
            title: "VirusTotal Ð¸ Ð¾Ð±Ð½Ð°Ñ€ÑƒÐ¶ÐµÐ½Ð¸Ñ",
            subtitle: "Ð¤Ð°Ð¹Ð» Ð¿Ñ€Ð¾Ð²ÐµÑ€ÐµÐ½ Ð½Ð° VirusTotal Ð¸ Ð¿Ð¾Ð»Ð½Ð¾ÑÑ‚ÑŒÑŽ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐµÐ½.",
            detectionCount: "2/61",
            detectionLabel: "ÐžÐ±Ð½Ð°Ñ€ÑƒÐ¶ÐµÐ½Ð¸Ñ",
            falsePositiveLabel: "ÐŸÐ¾Ð´Ñ‚Ð²ÐµÑ€Ð¶Ð´Ñ‘Ð½ Ð»Ð¾Ð¶Ð½Ñ‹Ð¹ Ð¿Ð¾Ð»Ð¾Ð¶Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ð¹",
            statusTitle: "Ð¡Ñ‚Ð°Ñ‚ÑƒÑ",
            statusValue: "Ð‘Ð•Ð—ÐžÐŸÐÐ¡ÐÐž",
            hashTitle: "SHA-256",
            hashValue: "d1b8375923103a012268f738d6646db5e036eb134dd6474b5858513c8b72774e",
            falsePositiveTitle: "âš ï¸ ÐŸÐ¾Ñ‡ÐµÐ¼Ñƒ ÑÑ‚Ð¾ Ð¾Ð±Ð½Ð°Ñ€ÑƒÐ¶Ð¸Ð²Ð°ÐµÑ‚ÑÑ ÐºÐ°Ðº Ð»Ð¾Ð¶Ð½Ñ‹Ð¹ Ð¿Ð¾Ð»Ð¾Ð¶Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ð¹?",
            falsePositiveDescription: "Ð¡ÐºÑ€Ð¸Ð¿Ñ‚ Ð²Ñ‹Ð¿Ð¾Ð»Ð½ÑÐµÑ‚ Ð³Ð»ÑƒÐ±Ð¾ÐºÐ¸Ðµ Ð¸Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ ÑÐ¸ÑÑ‚ÐµÐ¼Ñ‹, Ñ‚Ð°ÐºÐ¸Ðµ ÐºÐ°Ðº Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ¸ Ñ€ÐµÐµÑÑ‚Ñ€Ð°, Ð¾Ñ‚ÐºÐ»ÑŽÑ‡ÐµÐ½Ð¸Ðµ Ð½ÐµÑÑƒÑ‰ÐµÑÑ‚Ð²ÐµÐ½Ð½Ñ‹Ñ… ÑÐ»ÑƒÐ¶Ð± Ð¸ Ð¾Ð¿Ñ‚Ð¸Ð¼Ð¸Ð·Ð°Ñ†Ð¸Ð¸ ÑÐ´Ñ€Ð°. ÐœÐ½Ð¾Ð³Ð¸Ðµ Ð°Ð½Ñ‚Ð¸Ð²Ð¸Ñ€ÑƒÑÑ‹ Ð¾Ð±Ð½Ð°Ñ€ÑƒÐ¶Ð¸Ð²Ð°ÑŽÑ‚ ÑÑ‚Ð¸ Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ñ ÐºÐ°Ðº Ð¿Ð¾Ð´Ð¾Ð·Ñ€Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ðµ, Ð³ÐµÐ½ÐµÑ€Ð¸Ñ€ÑƒÑ Ð»Ð¾Ð¶Ð½Ñ‹Ð¹ Ð¿Ð¾Ð»Ð¾Ð¶Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ð¹.",
            safeTitle: "âœ… Ð‘ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒ",
            safeDescription: "ÐŸÑ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼Ð½Ð¾Ðµ Ð¾Ð±ÐµÑÐ¿ÐµÑ‡ÐµÐ½Ð¸Ðµ Ð¿Ð¾Ð»Ð½Ð¾ÑÑ‚ÑŒÑŽ Ñ Ð¾Ñ‚ÐºÑ€Ñ‹Ñ‚Ñ‹Ð¼ Ð¸ÑÑ…Ð¾Ð´Ð½Ñ‹Ð¼ ÐºÐ¾Ð´Ð¾Ð¼ Ð¸ Ð±ÐµÑÐ¿Ð»Ð°Ñ‚Ð½Ð¾. ÐžÐ±Ð½Ð°Ñ€ÑƒÐ¶ÐµÐ½Ð¸Ñ Ð½Ðµ ÑƒÐºÐ°Ð·Ñ‹Ð²Ð°ÑŽÑ‚ Ð½Ð° Ñ€ÐµÐ°Ð»ÑŒÐ½Ð¾Ðµ Ð²Ñ€ÐµÐ´Ð¾Ð½Ð¾ÑÐ½Ð¾Ðµ ÐŸÐž, Ñ‚Ð¾Ð»ÑŒÐºÐ¾ Ð·Ð°ÐºÐ¾Ð½Ð½Ñ‹Ðµ ÑÐ¸ÑÑ‚ÐµÐ¼Ð½Ñ‹Ðµ Ð²Ð¼ÐµÑˆÐ°Ñ‚ÐµÐ»ÑŒÑÑ‚Ð²Ð°, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ðµ Ð½ÐµÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ðµ Ð°Ð½Ñ‚Ð¸Ð²Ð¸Ñ€ÑƒÑÑ‹ Ð¸Ð½Ñ‚ÐµÑ€Ð¿Ñ€ÐµÑ‚Ð¸Ñ€ÑƒÑŽÑ‚ ÐºÐ°Ðº Ñ€Ð¸ÑÐºÐ¾Ð²Ð°Ð½Ð½Ñ‹Ðµ.",
            viewReport: "ÐŸÐ¾ÑÐ¼Ð¾Ñ‚Ñ€ÐµÑ‚ÑŒ Ð¿Ð¾Ð»Ð½Ñ‹Ð¹ Ð¾Ñ‚Ñ‡ÐµÑ‚ Ð½Ð° VirusTotal"
        },
        target: {
            title: "Ð”Ð»Ñ ÐºÐ¾Ð³Ð¾ ÑÑ‚Ð¾",
            subtitle: "Ð­Ð»Ð¸Ñ‚Ð½Ð°Ñ Ð°Ñ€Ñ…Ð¸Ñ‚ÐµÐºÑ‚ÑƒÑ€Ð° Ð´Ð»Ñ Ñ‚ÐµÑ…, ÐºÑ‚Ð¾ Ð½Ðµ Ð¸Ð´ÐµÑ‚ Ð½Ð° ÐºÐ¾Ð¼Ð¿Ñ€Ð¾Ð¼Ð¸ÑÑÑ‹ Ñ Ð·Ð°Ð´ÐµÑ€Ð¶ÐºÐ¾Ð¹.",
            items: [
                {
                    title: "Ð­Ð»Ð¸Ñ‚Ð½Ñ‹Ðµ Ð³ÐµÐ¹Ð¼ÐµÑ€Ñ‹",
                    description: "ÐŸÐ¾Ñ‡Ñ‚Ð¸ Ð¿Ð¾Ð»Ð½Ð¾Ðµ ÑƒÑÑ‚Ñ€Ð°Ð½ÐµÐ½Ð¸Ðµ Ð·Ð°Ð´ÐµÑ€Ð¶ÐºÐ¸ Ð²Ð²Ð¾Ð´Ð° Ð¸ Ð½ÐµÑÑ‚Ð°Ð±Ð¸Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸ ÐºÐ°Ð´Ñ€Ð¾Ð² Ð² Ð»ÑŽÐ±Ð¾Ð¹ Ð¸Ð³Ñ€Ðµ/Ð¿Ñ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼Ðµ.",
                    icon: "monitor-play"
                },
                {
                    title: "Hi-End ÐŸÑ€Ð¾Ñ„ÐµÑÑÐ¸Ð¾Ð½Ð°Ð»Ñ‹",
                    description: "Ð Ð°Ð±Ð¾Ñ‡Ð°Ñ ÑÑ€ÐµÐ´Ð°, Ð¾Ñ‚ÐºÐ°Ð»Ð¸Ð±Ñ€Ð¾Ð²Ð°Ð½Ð½Ð°Ñ Ð´Ð»Ñ ÑÐºÑÑ‚Ñ€ÐµÐ¼Ð°Ð»ÑŒÐ½Ñ‹Ñ… Ð½Ð°Ð³Ñ€ÑƒÐ·Ð¾Ðº, Ð³Ð´Ðµ Ð°Ð¿Ð¿Ð°Ñ€Ð°Ñ‚Ð½Ð°Ñ Ð¼Ð¾Ñ‰Ð½Ð¾ÑÑ‚ÑŒ Ð²ÑÑ‚Ñ€ÐµÑ‡Ð°ÐµÑ‚ÑÑ Ñ ÑÑ„Ñ„ÐµÐºÑ‚Ð¸Ð²Ð½Ð¾ÑÑ‚ÑŒÑŽ Ð¿Ñ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼ Ð·Ð° Ð³Ñ€Ð°Ð½ÑŒÑŽ Ð²Ð¾Ð·Ð¼Ð¾Ð¶Ð½Ð¾Ð³Ð¾.",
                    icon: "layers"
                },
                {
                    title: "Ð¢ÐµÑ…Ð½Ð¾-ÑÐ½Ñ‚ÑƒÐ·Ð¸Ð°ÑÑ‚Ñ‹",
                    description: "Ð“Ñ€Ð°Ð½ÑƒÐ»ÑÑ€Ð½Ñ‹Ð¹ ÐºÐ¾Ð½Ñ‚Ñ€Ð¾Ð»ÑŒ Ð½Ð°Ð´ ÑÐµÑ€Ð´Ñ†ÐµÐ¼ Ð¾Ð¿ÐµÑ€Ð°Ñ†Ð¸Ð¾Ð½Ð½Ð¾Ð¹ ÑÐ¸ÑÑ‚ÐµÐ¼Ñ‹, Ð¾ÑÐ²Ð¾Ð±Ð¾Ð¶Ð´Ð°ÑŽÑ‰Ð¸Ð¹ Ð¼Ð°ÑˆÐ¸Ð½Ñƒ Ð¾Ñ‚ Ð»ÑŽÐ±Ñ‹Ñ… Ð½ÐµÐ²Ð¸Ð´Ð¸Ð¼Ñ‹Ñ… Ð¾ÐºÐ¾Ð².",
                    icon: "code-2"
                },
                {
                    title: "Ð”ÐµÑÐºÑ‚Ð¾Ð¿Ð½Ð°Ñ Ð­ÐºÐ¾ÑÐ¸ÑÑ‚ÐµÐ¼Ð°",
                    description: "ÐŸÐ¾Ð»Ð½Ð¾Ðµ Ð½Ð°ÑÑ‹Ñ‰ÐµÐ½Ð¸Ðµ ÑÐ¸ÑÑ‚ÐµÐ¼Ð½Ð¾Ð¹ ÑˆÐ¸Ð½Ñ‹ Ð´Ð»Ñ ÐŸÐš Ð¸ Ð½Ð¾ÑƒÑ‚Ð±ÑƒÐºÐ¾Ð², ÑƒÑÑ‚Ñ€Ð°Ð½ÑÑŽÑ‰ÐµÐµ Ð»ÑŽÐ±Ñ‹Ðµ Ñ‚ÐµÐ¼Ð¿ÐµÑ€Ð°Ñ‚ÑƒÑ€Ð½Ñ‹Ðµ Ð¸Ð»Ð¸ ÑÐ½ÐµÑ€Ð³ÐµÑ‚Ð¸Ñ‡ÐµÑÐºÐ¸Ðµ ÑƒÐ·ÐºÐ¸Ðµ Ð¼ÐµÑÑ‚Ð°.",
                    icon: "laptop"
                }
            ]
        },
        steps: {
            title: "Ð¡ÐºÐ°Ñ‡Ð¸Ð²Ð°Ð½Ð¸Ðµ Ð¸ Ð·Ð°Ð¿ÑƒÑÐº",
            subtitle: "Ð¡Ð¾Ð²ÐµÑ€ÑˆÐµÐ½ÑÑ‚Ð²Ð¾ Ð½Ð° Ñ€Ð°ÑÑÑ‚Ð¾ÑÐ½Ð¸Ð¸ Ð½ÐµÑÐºÐ¾Ð»ÑŒÐºÐ¸Ñ… ÐºÐ»Ð¸ÐºÐ¾Ð². Ð¡Ð»ÐµÐ´ÑƒÐ¹Ñ‚Ðµ Ð±Ñ‹ÑÑ‚Ñ€Ð¾Ð¹ Ð¿Ñ€Ð¾Ñ†ÐµÐ´ÑƒÑ€Ðµ, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ñ€Ð°Ð·Ð±Ð»Ð¾ÐºÐ¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð¿Ð¾Ñ‚ÐµÐ½Ñ†Ð¸Ð°Ð» Ð²Ð°ÑˆÐµÐ³Ð¾ ÐŸÐš.",
            terminalTitle: "Ð¢ÐµÑ€Ð¼Ð¸Ð½Ð°Ð» Ð¾Ð¿Ñ‚Ð¸Ð¼Ð¸Ð·Ð°Ñ†Ð¸Ð¸",
            terminalDesc: "Ð˜Ð½Ñ‚ÑƒÐ¸Ñ‚Ð¸Ð²Ð½Ð¾ Ð¿Ð¾Ð½ÑÑ‚Ð½Ñ‹Ð¹ Ð¸ Ð¿Ñ€Ð¾ÑÑ‚Ð¾Ð¹ Ð² Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸Ð¸ Ð¸Ð½Ñ‚ÐµÑ€Ñ„ÐµÐ¹Ñ",
            securityTitle: "ÐŸÑ€Ð¾Ñ‚Ð¾ÐºÐ¾Ð» Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸",
            security1: "ÐÐ²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ°Ñ Ñ‚Ð¾Ñ‡ÐºÐ° Ð²Ð¾ÑÑÑ‚Ð°Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ñ",
            security2: "Ð‘ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ñ‹Ðµ Ð¸ Ð¿Ñ€Ð¾Ñ‚ÐµÑÑ‚Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð½Ñ‹Ðµ Ñ‚Ð²Ð¸ÐºÐ¸",
            security3: "Ð“Ð°Ñ€Ð°Ð½Ñ‚Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð½Ñ‹Ð¹ Ð¿Ð¾Ð»Ð½Ñ‹Ð¹ Ð¾Ñ‚ÐºÐ°Ñ‚",
            items: [
                {
                    number: 1,
                    title: "Ð¡ÐºÐ°Ñ‡Ð°Ñ‚ÑŒ Ð¿Ñ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼Ñƒ",
                    description: "Ð¡ÐºÐ°Ñ‡Ð°Ð¹Ñ‚Ðµ Ð¾Ñ„Ð¸Ñ†Ð¸Ð°Ð»ÑŒÐ½Ñ‹Ð¹ Ð¸ÑÐ¿Ð¾Ð»Ð½ÑÐµÐ¼Ñ‹Ð¹ Ñ„Ð°Ð¹Ð» Ñ Ð¿Ð¾Ð¼Ð¾Ñ‰ÑŒÑŽ Ð²Ñ‹Ð´ÐµÐ»ÐµÐ½Ð½Ð¾Ð¹ ÐºÐ½Ð¾Ð¿ÐºÐ¸."
                },
                {
                    number: 2,
                    title: "Ð—Ð°Ð¿ÑƒÑÐº",
                    description: "Ð—Ð°Ð¿ÑƒÑÑ‚Ð¸Ñ‚Ðµ Platinum+Optimizer Ð¾Ñ‚ Ð¸Ð¼ÐµÐ½Ð¸ Ð°Ð´Ð¼Ð¸Ð½Ð¸ÑÑ‚Ñ€Ð°Ñ‚Ð¾Ñ€Ð°, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð¾Ñ‚ÐºÑ€Ñ‹Ñ‚ÑŒ Ð¸Ð½Ñ‚ÐµÑ€Ñ„ÐµÐ¹Ñ Ð²Ñ‹Ð±Ð¾Ñ€Ð°."
                },
                {
                    number: 3,
                    title: "ÐžÐ¿Ñ‚Ð¸Ð¼Ð¸Ð·Ð°Ñ†Ð¸Ñ",
                    description: "ÐŸÐ¾ÑÐ»ÐµÐ´Ð¾Ð²Ð°Ñ‚ÐµÐ»ÑŒÐ½Ð¾ Ð²Ñ‹Ð¿Ð¾Ð»Ð½ÑÐ¹Ñ‚Ðµ Ñ‚Ð²Ð¸ÐºÐ¸ Ð² Ð·Ð°Ð²Ð¸ÑÐ¸Ð¼Ð¾ÑÑ‚Ð¸ Ð¾Ñ‚ Ð²Ð°ÑˆÐ¸Ñ… ÐºÐ¾Ð¼Ð¿Ð¾Ð½ÐµÐ½Ñ‚Ð¾Ð² Ð¸ Ð¿Ñ€ÐµÐ´Ð¿Ð¾Ñ‡Ñ‚ÐµÐ½Ð¸Ð¹."
                }
            ]
        },
        changelog: {
            title: "Technical Changelog",
            subtitle: "Ð’ÐµÑ€ÑÐ¸Ñ 7.4 â€” Technical Build",
            description: "Ð­Ñ‚Ð° Ð²ÐµÑ€ÑÐ¸Ñ Ð²Ð½Ð¾ÑÐ¸Ñ‚ Ñ€Ð°Ð´Ð¸ÐºÐ°Ð»ÑŒÐ½Ñ‹Ðµ Ð¾Ð¿Ñ‚Ð¸Ð¼Ð¸Ð·Ð°Ñ†Ð¸Ð¸ Ð² ÑÐ´Ñ€Ð¾ Windows. ÐœÑ‹ ÑƒÐ´Ð°Ð»Ð¸Ð»Ð¸ ÑƒÑÑ‚Ð°Ñ€ÐµÐ²ÑˆÐ¸Ðµ ÑÐ»ÑƒÐ¶Ð±Ñ‹ Ð¸ Ð½ÐµÑÑ„Ñ„ÐµÐºÑ‚Ð¸Ð²Ð½Ñ‹Ðµ Ð°Ð¿Ð¿Ð°Ñ€Ð°Ñ‚Ð½Ñ‹Ðµ Ñ‚Ð°Ð¹Ð¼ÐµÑ€Ñ‹, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð¾Ñ‚Ð´Ð°Ñ‚ÑŒ Ð°Ð±ÑÐ¾Ð»ÑŽÑ‚Ð½Ñ‹Ð¹ Ð¿Ñ€Ð¸Ð¾Ñ€Ð¸Ñ‚ÐµÑ‚ Ð·Ð°Ð´ÐµÑ€Ð¶ÐºÐµ Ð²Ð²Ð¾Ð´Ð° Ð¸ ÑÑ‚Ð°Ð±Ð¸Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸ Ñ‡Ð°ÑÑ‚Ð¾Ñ‚Ñ‹ ÐºÐ°Ð´Ñ€Ð¾Ð².",
            tabChanges: "Ð˜Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ (Diff)",
            tabChanges: "Ð˜Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ (Diff)",
            diff: [
                { type: 'comment', code: '@@ -1,100 +1,100 @@ Platinum+ Optimizer 7.4 Manifest' },

                { type: 'comment', code: ':: INTEL SAFE AND EXTREME' },
                { type: 'added', code: 'powercfg -setacvalueindex %ACTIVE_GUID% 54533251-82be-4824-96c1-47b60b740d00 be337238-0d82-4146-a960-4f3749d470c7 4', info: 'ÐžÐ¿Ñ‚Ð¸Ð¼Ð¸Ð·Ð°Ñ†Ð¸Ñ Intel Safe/Extreme' },
                { type: 'added', code: 'powercfg -setacvalueindex %ACTIVE_GUID% 54533251-82be-4824-96c1-47b60b740d00 0cc5b647-c1df-4637-891a-dec35c318583 0' },
                { type: 'added', code: 'powercfg -setacvalueindex %ACTIVE_GUID% 54533251-82be-4824-96c1-47b60b740d00 893dee8e-2bef-41e0-89c6-b55d0929964c 100' },
                { type: 'added', code: 'powercfg -setacvalueindex %ACTIVE_GUID% 54533251-82be-4824-96c1-47b60b740d00 bc5038f7-23e0-4960-96da-33abaf5935ec 100' },

                { type: 'comment', code: ':: BUG FIXES' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\PriorityControl" /v "Win32PrioritySeparation" /t REG_DWORD /d 26 /f', info: 'Ð˜ÑÐ¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¸Ðµ Ð±Ð°Ð³Ð° Intel GHz' },
                { type: 'added', code: 'powercfg -setacvalueindex %ACTIVE_GUID% SUB_PCIEXPRESS ASPM 0', info: 'Ð˜ÑÐ¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¸Ðµ ÑÐ±Ð¾Ñ AMD GPU' },

                { type: 'comment', code: ' # End of technical diff' }
            ],
        },
        download: {
            version: "Platinum+ Optimizer 7.4"
        },
        faq: {
            title: "Ð¢ÐµÑ…Ð½Ð¸Ñ‡ÐµÑÐºÐ¸Ðµ FAQ",
            subtitle: "ÐžÑ‚Ð²ÐµÑ‚Ñ‹ Ð½Ð° ÑÐ°Ð¼Ñ‹Ðµ Ñ€Ð°ÑÐ¿Ñ€Ð¾ÑÑ‚Ñ€Ð°Ð½ÐµÐ½Ð½Ñ‹Ðµ Ð²Ð¾Ð¿Ñ€Ð¾ÑÑ‹ Ð¾Ð± Ð¾Ð¿Ñ‚Ð¸Ð¼Ð¸Ð·Ð°Ñ†Ð¸Ð¸",
            items: [
                {
                    question: "ÐžÐ±Ñ€Ð°Ñ‚Ð¸Ð¼Ñ‹ Ð»Ð¸ Ð¸Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ?",
                    answer: "Ð”Ð°. ÐŸÑ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼Ð° Ð¾Ð¿Ñ‚Ð¸Ð¼Ð¸Ð·Ð°Ñ†Ð¸Ð¸ Ð¿Ð¾ÑÐ»Ðµ Ð·Ð°Ð¿ÑƒÑÐºÐ° ÑÐ¿Ñ€Ð°ÑˆÐ¸Ð²Ð°ÐµÑ‚, Ð½ÑƒÐ¶Ð½Ð¾ Ð»Ð¸ ÑÐ¾Ð·Ð´Ð°Ñ‚ÑŒ Ñ‚Ð¾Ñ‡ÐºÑƒ Ð²Ð¾ÑÑÑ‚Ð°Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ñ. (Ð”Ð»Ñ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸ Ñ€ÐµÐºÐ¾Ð¼ÐµÐ½Ð´ÑƒÐµÑ‚ÑÑ Ð¿Ñ€Ð¸Ð½ÑÑ‚ÑŒ) Ð¿ÐµÑ€ÐµÐ´ Ð½Ð°Ñ‡Ð°Ð»Ð¾Ð¼ Ð²Ð½ÐµÑÐµÐ½Ð¸Ñ Ð»ÑŽÐ±Ñ‹Ñ… Ð¸Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ð¹ Ð² ÐŸÐš."
                },
                {
                    question: "ÐÑƒÐ¶Ð½Ð¾ Ð»Ð¸ Ð¾Ñ‚ÐºÐ»ÑŽÑ‡Ð°Ñ‚ÑŒ Ð°Ð½Ñ‚Ð¸Ð²Ð¸Ñ€ÑƒÑ?",
                    answer: "ÐžÐ±Ñ‹Ñ‡Ð½Ð¾ Ð½ÐµÑ‚, Ð½Ð¾ ÐµÑÐ»Ð¸ Windows Defender or other antivirus block execution, you may need to add an exception considering the deep nature of the optimizations."
                },
                {
                    question: "Ð£Ð»ÑƒÑ‡ÑˆÐ°ÐµÑ‚ Ð»Ð¸ ÑÑ‚Ð¾ FPS Ð² Ð¸Ð³Ñ€Ð°Ñ…?",
                    answer: "Ð‘ÐµÐ·ÑƒÑÐ»Ð¾Ð²Ð½Ð¾, Ð´Ð°! Ð‘Ð»Ð°Ð³Ð¾Ð´Ð°Ñ€Ñ ÑƒÑÑ‚Ñ€Ð°Ð½ÐµÐ½Ð¸ÑŽ Â«ÑƒÐ·ÐºÐ¸Ñ… Ð¼ÐµÑÑ‚Â» ÑÐ¸ÑÑ‚ÐµÐ¼Ñ‹ Ð¸ ÑÐºÑÑ‚Ñ€ÐµÐ¼Ð°Ð»ÑŒÐ½Ð¾Ð¹ Ð¾Ð¿Ñ‚Ð¸Ð¼Ð¸Ð·Ð°Ñ†Ð¸Ð¸ ÑÐ¸ÑÑ‚ÐµÐ¼Ñ‹, Ð¿Ñ€Ð¸Ð¾Ñ€Ð¸Ñ‚ÐµÑ‚Ð¾Ð² Ð¿Ñ€Ð¾Ñ†ÐµÑÑÐ¾Ñ€Ð°, Ð²Ð¸Ð´ÐµÐ¾ÐºÐ°Ñ€Ñ‚Ñ‹, Ð¾Ð¿ÐµÑ€Ð°Ñ‚Ð¸Ð²Ð½Ð¾Ð¹ Ð¿Ð°Ð¼ÑÑ‚Ð¸ Ð¸ SSD Ð·Ð°Ð¼ÐµÑ‚Ð½Ð¾ Ð·Ð½Ð°Ñ‡Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾Ðµ ÑƒÐ»ÑƒÑ‡ÑˆÐµÐ½Ð¸Ðµ Ð¸ Ð¿Ð¾Ð²Ñ‹ÑˆÐµÐ½Ð¸Ðµ ÑÑ‚Ð°Ð±Ð¸Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸ FPS (1% lows), Ð° Ñ‚Ð°ÐºÐ¶Ðµ Ñ€ÐµÐ·ÐºÐ¾Ðµ ÑÐ½Ð¸Ð¶ÐµÐ½Ð¸Ðµ Ð·Ð°Ð´ÐµÑ€Ð¶ÐºÐ¸ Ð²Ð²Ð¾Ð´Ð° Ð½Ð° 96% Ð²Ð¾ Ð¼Ð½Ð¾Ð³Ð¸Ñ… ÑÐ»ÑƒÑ‡Ð°ÑÑ…."
                },
                {
                    question: "ÐÑƒÐ¶Ð½Ð° Ð¿Ð¾Ð¼Ð¾Ñ‰ÑŒ?",
                    answer: "Ð’ ÑÐ»ÑƒÑ‡Ð°Ðµ Ñ‚ÐµÑ…Ð½Ð¸Ñ‡ÐµÑÐºÐ¸Ñ… Ð¿Ñ€Ð¾Ð±Ð»ÐµÐ¼ Ð¸Ð»Ð¸ Ð²Ð¾Ð¿Ñ€Ð¾ÑÐ¾Ð² Ð¿Ñ€Ð¸ ÑƒÑÑ‚Ð°Ð½Ð¾Ð²ÐºÐµ Ð¾Ð±Ñ€Ð°Ñ‰Ð°Ð¹Ñ‚ÐµÑÑŒ Ð² Ð½Ð°ÑˆÑƒ Ð¾Ñ„Ð¸Ñ†Ð¸Ð°Ð»ÑŒÐ½ÑƒÑŽ ÑÐ»ÑƒÐ¶Ð±Ñƒ Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶ÐºÐ¸: PlatinumOptimizerHelp@gmail.com"
                }
            ]
        },
        footer: {
            copyright: "Â© 2026 Platinum+ Optimizer. Ð’ÑÐµ Ð¿Ñ€Ð°Ð²Ð° Ð·Ð°Ñ‰Ð¸Ñ‰ÐµÐ½Ñ‹.",
            disclaimer: "Ð˜ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸Ðµ ÑÑ‚Ð¾Ð³Ð¾ Ð¿Ñ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼Ð½Ð¾Ð³Ð¾ Ð¾Ð±ÐµÑÐ¿ÐµÑ‡ÐµÐ½Ð¸Ñ Ð¾ÑÑƒÑ‰ÐµÑÑ‚Ð²Ð»ÑÐµÑ‚ÑÑ Ð½Ð° ÑÑ‚Ñ€Ð°Ñ… Ð¸ Ñ€Ð¸ÑÐº Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»Ñ. ÐœÑ‹ Ð½Ðµ Ð½ÐµÑÐµÐ¼ Ð¾Ñ‚Ð²ÐµÑ‚ÑÑ‚Ð²ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸ Ð·Ð° Ð»ÑŽÐ±Ð¾Ð¹ Ð¿Ñ€ÑÐ¼Ð¾Ð¹ Ð¸Ð»Ð¸ ÐºÐ¾ÑÐ²ÐµÐ½Ð½Ñ‹Ð¹ ÑƒÑ‰ÐµÑ€Ð±.",
            privacy: "ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸",
            legalDisclaimer: "ÐžÑ‚ÐºÐ°Ð· Ð¾Ñ‚ Ð¾Ñ‚Ð²ÐµÑ‚ÑÑ‚Ð²ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸",
            closeBtn: "Ð—Ð°ÐºÑ€Ñ‹Ñ‚ÑŒ",
            credits: {
                host: "@STEFANO83223 â€” Ð’ÐµÐ±-Ñ…Ð¾ÑÑ‚Ð¸Ð½Ð³ Ð¸ Ñ€Ð°Ð·Ñ€Ð°Ð±Ð¾Ñ‚Ñ‡Ð¸Ðº Ñ‚Ð²Ð¸ÐºÐ¾Ð²",
                designer: "@Aledect â€” Ð”Ð¸Ð·Ð°Ð¹Ð½ÐµÑ€ Ð¸ Ð¾Ñ‚Ð»Ð°Ð´Ñ‡Ð¸Ðº",
                dev: "@nichacker6 â€” Ð’ÐµÐ±-Ñ€Ð°Ð·Ñ€Ð°Ð±Ð¾Ñ‚Ñ‡Ð¸Ðº Ð¸ Ð´Ð¸Ð·Ð°Ð¹Ð½ÐµÑ€"
            },
            telegramBtn: "ÐŸÐ¾Ð´Ð¿Ð¸ÑÑ‹Ð²Ð°Ð¹Ñ‚ÐµÑÑŒ Ð½Ð° Ð½Ð°Ñ Ð² Telegram",
            donationsBtn: "Ð”Ð¾Ð½Ð°Ñ‚Ñ‹",
            visitorsLabel: "ÐŸÐ¾ÑÐµÑ‚Ð¸Ñ‚ÐµÐ»Ð¸"
        },
        nav: {
            home: "Ð“Ð»Ð°Ð²Ð½Ð°Ñ",
            about: "Ð§Ñ‚Ð¾ Ñ‚Ð°ÐºÐ¾Ðµ",
            virustotal: "Ð’ÑÐµÐ³Ð¾ Ð²Ð¸Ñ€ÑƒÑÐ¾Ð²",
            changelog: "Ð§Ñ‚Ð¾ Ð½Ð¾Ð²Ð¾Ð³Ð¾",
            target: "Ð”Ð»Ñ ÐºÐ¾Ð³Ð¾",
            howItWorks: "Ð˜Ð½ÑÑ‚Ñ€ÑƒÐºÑ†Ð¸Ñ",
            faq: "FAQ"
        },
        bugReport: {
            btnLabel: "Ð¡Ð¾Ð¾Ð±Ñ‰Ð¸Ñ‚ÑŒ Ð¾Ð± Ð¾ÑˆÐ¸Ð±ÐºÐµ"
        },
        platinum: {
            title: "Platinum Benchmark",
            back: "ÐÐ°Ð·Ð°Ð´",
            pageTitle: "Ð ÐµÐ¶Ð¸Ð¼ Platinum Benchmark",
            pageSubtitle: "Ð­Ñ‚Ð¾Ñ‚ Ñ€ÐµÐ¶Ð¸Ð¼ Ð¿Ñ€ÐµÐ´Ð½Ð°Ð·Ð½Ð°Ñ‡ÐµÐ½ Ð´Ð»Ñ Ð¸Ð·Ð¼ÐµÑ€ÐµÐ½Ð¸Ñ Ð¿Ñ€Ð¾Ð¸Ð·Ð²Ð¾Ð´Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾ÑÑ‚Ð¸ Ð¸ ÑÑ‚Ð°Ð±Ð¸Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸ Ð²Ð°ÑˆÐµÐ³Ð¾ ÑƒÑÑ‚Ñ€Ð¾Ð¹ÑÑ‚Ð²Ð° Ð² Ñ€ÐµÐ¶Ð¸Ð¼Ðµ Ñ€ÐµÐ°Ð»ÑŒÐ½Ð¾Ð³Ð¾ Ð²Ñ€ÐµÐ¼ÐµÐ½Ð¸",
            testHeadline: "Ð“Ð¾Ñ‚Ð¾Ð²Ñ‹ Ðº Ñ‚ÐµÑÑ‚Ñƒ?",
            testSubtext: "Ð—Ð°Ð¿ÑƒÑÑ‚Ð¸Ñ‚Ðµ Ð´Ð²Ð¸Ð¶Ð¾Ðº Ð¾Ð¿Ñ‚Ð¸Ð¼Ð¸Ð·Ð°Ñ†Ð¸Ð¸ Platinum Benchmark Ð¸ Ð²Ñ‹Ð¶Ð¼Ð¸Ñ‚Ðµ Ð¸Ð· ÑÐ²Ð¾ÐµÐ³Ð¾ ÐŸÐš Ð¼Ð°ÐºÑÐ¸Ð¼ÑƒÐ¼.",
            startButton: "Ð—ÐÐŸÐ£Ð¡Ð¢Ð˜Ð¢Ð¬ Ð‘Ð•ÐÐ§ÐœÐÐ Ðš",
            fpsLabel: "ÐšÐ°Ð´Ñ€Ð¾Ð² Ð² ÑÐµÐºÑƒÐ½Ð´Ñƒ",
            loaderText: "ÐšÐ¾Ð¼Ð¿Ð¸Ð»ÑÑ†Ð¸Ñ ÑˆÐµÐ¹Ð´ÐµÑ€Ð¾Ð²..."
        },
        android: {
            backToHome: "ÐÐÐ—ÐÐ” ÐÐ Ð“Ð›ÐÐ’ÐÐ£Ð®",
            mobileEdition: "ÐœÐžÐ‘Ð˜Ð›Ð¬ÐÐžÐ• Ð˜Ð—Ð”ÐÐÐ˜Ð•",
            fullTitle: "Platinum+ Optimizer Android",
            mainTitle: "Platinum+ Optimizer",
            androidTitle: "Android",
            subtitle: "Ð Ð°ÑÐºÑ€Ð¾Ð¹Ñ‚Ðµ Ð¸ÑÑ‚Ð¸Ð½Ð½ÑƒÑŽ Ð¼Ð¾Ñ‰ÑŒ Ð²Ð°ÑˆÐµÐ³Ð¾ Ð¼Ð¾Ð±Ð¸Ð»ÑŒÐ½Ð¾Ð³Ð¾ ÑƒÑÑ‚Ñ€Ð¾Ð¹ÑÑ‚Ð²Ð°. ÐžÐ¿Ñ‚Ð¸Ð¼Ð¸Ð·Ð°Ñ†Ð¸Ñ Ð½Ð° ÑƒÑ€Ð¾Ð²Ð½Ðµ ÑÐ´Ñ€Ð° Ñ‚ÐµÐ¿ÐµÑ€ÑŒ Ð´Ð¾ÑÑ‚ÑƒÐ¿Ð½Ð° Ð´Ð»Ñ ÑÐºÐ¾ÑÐ¸ÑÑ‚ÐµÐ¼Ñ‹ Android.",
            guideTitle: "Ð ÑƒÐºÐ¾Ð²Ð¾Ð´ÑÑ‚Ð²Ð¾ Ð¿Ð¾ ÑƒÑÑ‚Ð°Ð½Ð¾Ð²ÐºÐµ",
            step1: "ÐŸÐµÑ€ÐµÐ¹Ð´Ð¸Ñ‚Ðµ Ð² <span class=\"text-aqua-400 font-medium\">Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ¸</span>, Ð·Ð°Ñ‚ÐµÐ¼ Ð² <span class=\"text-aqua-400 font-medium\">Ð¿Ð°Ñ€Ð°Ð¼ÐµÑ‚Ñ€Ñ‹ Ñ€Ð°Ð·Ñ€Ð°Ð±Ð¾Ñ‚Ñ‡Ð¸ÐºÐ°</span> Ð¸ Ð²ÐºÐ»ÑŽÑ‡Ð¸Ñ‚Ðµ <span class=\"text-aqua-400 font-medium\">Ð±ÐµÑÐ¿Ñ€Ð¾Ð²Ð¾Ð´Ð½ÑƒÑŽ Ð¾Ñ‚Ð»Ð°Ð´ÐºÑƒ</span>.",
            step2: "Ð£ÑÑ‚Ð°Ð½Ð¾Ð²Ð¸Ñ‚Ðµ <span class=\"text-aqua-400 font-medium\">Shizuku</span> Ð¸ <span class=\"text-aqua-400 font-medium\">Termux</span> Ð´Ð»Ñ Android (APK).",
            step3: "ÐŸÐµÑ€ÐµÐ¼ÐµÑÑ‚Ð¸Ñ‚Ðµ Ñ„Ð°Ð¹Ð» <code class=\"bg-white/5 px-2 py-0.5 rounded text-aqua-400 font-mono text-sm\">boost.sh</code> Ð¸Ð· Ð¿Ð°Ð¿ÐºÐ¸ Download Ð²Ð¾ Ð²Ð½ÑƒÑ‚Ñ€ÐµÐ½Ð½ÑŽÑŽ Ð¿Ð°Ð¼ÑÑ‚ÑŒ (<span class=\"text-aqua-400 font-medium\">Storage Emulated</span>).",
            step4: "ÐžÑ‚ÐºÑ€Ð¾Ð¹Ñ‚Ðµ <span class=\"text-aqua-400 font-medium\">Shizuku</span>, Ð½Ð°Ð¶Ð¼Ð¸Ñ‚Ðµ Â«ÑÐ²ÑÐ·Ð°Ñ‚ÑŒÂ» Ð¸ Ð¿Ð¾ÑÐ»Ðµ Ð·Ð°Ð²ÐµÑ€ÑˆÐµÐ½Ð¸Ñ Ð½Ð°Ð¶Ð¼Ð¸Ñ‚Ðµ <span class=\"text-aqua-400 font-medium\">Ð·Ð°Ð¿ÑƒÑÑ‚Ð¸Ñ‚ÑŒ ÑÐµÑ€Ð²ÐµÑ€ Shizuku</span>. Ð¡Ð²ÐµÑ€Ð½Ð¸Ñ‚Ðµ Ð¿Ñ€Ð¸Ð»Ð¾Ð¶ÐµÐ½Ð¸Ðµ, Ð½Ðµ Ð·Ð°ÐºÑ€Ñ‹Ð²Ð°Ñ ÐµÐ³Ð¾.",
            step5: "ÐžÑ‚ÐºÑ€Ð¾Ð¹Ñ‚Ðµ <span class=\"text-aqua-400 font-medium\">Termux</span> Ð¸ Ð²ÑÑ‚Ð°Ð²ÑŒÑ‚Ðµ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰Ð¸Ð¹ ÐºÐ¾Ð´:",
            downloadBtn: "Ð¡ÐºÐ°Ñ‡Ð°Ñ‚ÑŒ Platinum+ Android",
            copyright: "Â© 2026 Platinum+ Optimizer Android.",
            troubleshooting: "Ð•ÑÐ»Ð¸ termux Ð²Ñ‹Ð´Ð°ÐµÑ‚ Ð¾ÑˆÐ¸Ð±ÐºÑƒ Ð¸Ð»Ð¸ Ð½Ðµ Ð¼Ð¾Ð¶ÐµÑ‚ Ð½Ð°Ð¹Ñ‚Ð¸ Ñ„Ð°Ð¹Ð», ÑƒÐ±ÐµÐ´Ð¸Ñ‚ÐµÑÑŒ, Ñ‡Ñ‚Ð¾ Ñ„Ð°Ð¹Ð» .sh Ð½Ð°Ñ…Ð¾Ð´Ð¸Ñ‚ÑÑ Ð²Ð¾ Ð²Ð½ÑƒÑ‚Ñ€ÐµÐ½Ð½ÐµÐ¹ Ð¿Ð°Ð¼ÑÑ‚Ð¸ (Storage Emulated) Ð¸Ð»Ð¸ Ð²ÑÑ‚Ð°Ð²ÑŒÑ‚Ðµ Ð²ÐµÑÑŒ ÐºÐ¾Ð´ ÑÐ½Ð¾Ð²Ð° Ð·Ð° Ð¾Ð´Ð¸Ð½ Ñ€Ð°Ð· Ð¸ Ð½Ð°Ð¶Ð¼Ð¸Ñ‚Ðµ enter Ð½Ð° ÐºÐ»Ð°Ð²Ð¸Ð°Ñ‚ÑƒÑ€Ðµ. (Ð¤ÑƒÐ½ÐºÑ†Ð¸Ñ Android)"
        }
    },
    legal: {
        privacy: [
            "1. Ð¡Ð±Ð¾Ñ€ Ð´Ð°Ð½Ð½Ñ‹Ñ…: Platinum+ Optimizer Ð½Ðµ ÑÐ¾Ð±Ð¸Ñ€Ð°ÐµÑ‚, Ð½Ðµ Ñ…Ñ€Ð°Ð½Ð¸Ñ‚ Ð¸ Ð½Ðµ Ð¿ÐµÑ€ÐµÐ´Ð°ÐµÑ‚ Ð»Ð¸Ñ‡Ð½Ñ‹Ðµ Ð´Ð°Ð½Ð½Ñ‹Ðµ Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»Ñ.",
            "2. Ð›Ð¾ÐºÐ°Ð»ÑŒÐ½Ð¾Ðµ Ð²Ñ‹Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ðµ: Ð’ÐµÑÑŒ ÐºÐ¾Ð´ Ð²Ñ‹Ð¿Ð¾Ð»Ð½ÑÐµÑ‚ÑÑ Ð»Ð¾ÐºÐ°Ð»ÑŒÐ½Ð¾ Ð½Ð° Ð¼Ð°ÑˆÐ¸Ð½Ðµ Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»Ñ Ð±ÐµÐ· ÑÐ²ÑÐ·Ð¸ Ñ Ð²Ð½ÐµÑˆÐ½Ð¸Ð¼Ð¸ ÑÐµÑ€Ð²ÐµÑ€Ð°Ð¼Ð¸.",
            "3. ÐžÑ‚ÑÑƒÑ‚ÑÑ‚Ð²Ð¸Ðµ Ñ‚ÐµÐ»ÐµÐ¼ÐµÑ‚Ñ€Ð¸Ð¸: ÐŸÑ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼Ð½Ð¾Ðµ Ð¾Ð±ÐµÑÐ¿ÐµÑ‡ÐµÐ½Ð¸Ðµ Ð½Ðµ Ð²ÐºÐ»ÑŽÑ‡Ð°ÐµÑ‚ Ð¼Ð¾Ð´ÑƒÐ»Ð¸ Ñ‚ÐµÐ»ÐµÐ¼ÐµÑ‚Ñ€Ð¸Ð¸, Ð¾Ñ‚ÑÐ»ÐµÐ¶Ð¸Ð²Ð°Ð½Ð¸Ñ Ð¸Ð»Ð¸ Ð°Ð½Ð°Ð»Ð¸Ð·Ð° Ð¿Ð¾Ð²ÐµÐ´ÐµÐ½Ð¸Ñ.",
            "4. Ð˜ÑÑ…Ð¾Ð´Ð½Ñ‹Ð¹ ÐºÐ¾Ð´: Ð‘ÑƒÐ´ÑƒÑ‡Ð¸ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚Ð¾Ð¼ Ð¾Ð¿Ñ‚Ð¸Ð¼Ð¸Ð·Ð°Ñ†Ð¸Ð¸, Ð¾Ð¿ÐµÑ€Ð°Ñ†Ð¸Ð¸ Ð¿Ñ€Ð¾Ð²ÐµÑ€ÑÐµÐ¼Ñ‹ Ñ‡ÐµÑ€ÐµÐ· Ð¿Ð¾Ð²ÐµÐ´ÐµÐ½Ð¸Ðµ ÑÐ¸ÑÑ‚ÐµÐ¼Ñ‹.",
            "5. Ð˜Ð½Ñ‚ÐµÑ€Ð½ÐµÑ‚-ÑÐ¾ÐµÐ´Ð¸Ð½ÐµÐ½Ð¸Ðµ: ÐŸÑ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼Ð° Ð½Ðµ Ñ‚Ñ€ÐµÐ±ÑƒÐµÑ‚ Ð°ÐºÑ‚Ð¸Ð²Ð½Ð¾Ð³Ð¾ Ð¿Ð¾Ð´ÐºÐ»ÑŽÑ‡ÐµÐ½Ð¸Ñ Ðº Ð¸Ð½Ñ‚ÐµÑ€Ð½ÐµÑ‚Ñƒ Ð´Ð»Ñ Ñ€Ð°Ð±Ð¾Ñ‚Ñ‹, Ñ‡Ñ‚Ð¾ Ð³Ð°Ñ€Ð°Ð½Ñ‚Ð¸Ñ€ÑƒÐµÑ‚ Ð¸Ð·Ð¾Ð»ÑÑ†Ð¸ÑŽ Ð´Ð°Ð½Ð½Ñ‹Ñ….",
            "6. Ð¡Ð¸ÑÑ‚ÐµÐ¼Ð½Ñ‹Ðµ Ð»Ð¾Ð³Ð¸: Ð›ÑŽÐ±Ñ‹Ðµ ÑÐ³ÐµÐ½ÐµÑ€Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð½Ñ‹Ðµ Ð»Ð¾Ð³Ð¸ ÑÐ¾Ñ…Ñ€Ð°Ð½ÑÑŽÑ‚ÑÑ Ð¸ÑÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾ Ð»Ð¾ÐºÐ°Ð»ÑŒÐ½Ð¾ Ð¸ ÑÐ²Ð»ÑÑŽÑ‚ÑÑ Ð²Ñ€ÐµÐ¼ÐµÐ½Ð½Ñ‹Ð¼Ð¸.",
            "7. Ð ÐµÐµÑÑ‚Ñ€ Windows: Ð˜Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ Ñ€ÐµÐµÑÑ‚Ñ€Ð° Ð½Ðµ Ð·Ð°Ñ‚Ñ€Ð°Ð³Ð¸Ð²Ð°ÑŽÑ‚ ÐºÐ»ÑŽÑ‡Ð¸, ÑÐ¾Ð´ÐµÑ€Ð¶Ð°Ñ‰Ð¸Ðµ ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ñ‹Ðµ Ð´Ð°Ð½Ð½Ñ‹Ðµ Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»Ñ.",
            "8. Ð£Ñ‡ÐµÑ‚Ð½Ñ‹Ðµ Ð´Ð°Ð½Ð½Ñ‹Ðµ: Ð”Ð°Ð½Ð½Ñ‹Ðµ Ð´Ð»Ñ Ð²Ñ…Ð¾Ð´Ð°, Ð¿Ð°Ñ€Ð¾Ð»Ð¸ Ð¸Ð»Ð¸ Ñ‚Ð¾ÐºÐµÐ½Ñ‹ Ð½Ð¸ÐºÐ¾Ð³Ð´Ð° Ð½Ðµ Ð·Ð°Ð¿Ñ€Ð°ÑˆÐ¸Ð²Ð°ÑŽÑ‚ÑÑ Ð¸ Ð½Ðµ Ð´Ð¾ÑÑ‚ÑƒÐ¿Ð½Ñ‹.",
            "9. ÐšÑƒÐºÐ¸: Ð’ÐµÐ±-ÑÐ°Ð¹Ñ‚ Ð¸ Ð¸ÑÐ¿Ð¾Ð»Ð½ÑÐµÐ¼Ñ‹Ð¹ Ñ„Ð°Ð¹Ð» Ð½Ðµ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÑŽÑ‚ ÐºÑƒÐºÐ¸ Ð´Ð»Ñ Ð¿Ñ€Ð¾Ñ„Ð¸Ð»Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ñ.",
            "10. Ð¢Ñ€ÐµÑ‚ÑŒÐ¸ ÑÑ‚Ð¾Ñ€Ð¾Ð½Ñ‹: ÐÐ¸ÐºÐ°ÐºÐ¸Ðµ Ð´Ð°Ð½Ð½Ñ‹Ðµ Ð½Ðµ Ð¿ÐµÑ€ÐµÐ´Ð°ÑŽÑ‚ÑÑ Ñ‚Ñ€ÐµÑ‚ÑŒÐ¸Ð¼ Ð»Ð¸Ñ†Ð°Ð¼, Ñ€ÐµÐºÐ»Ð°Ð¼Ð½Ñ‹Ð¼ Ð¿Ð°Ñ€Ñ‚Ð½ÐµÑ€Ð°Ð¼ Ð¸Ð»Ð¸ Ð°Ñ„Ñ„Ð¸Ð»Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð½Ñ‹Ð¼ Ð»Ð¸Ñ†Ð°Ð¼.",
            "11. Ð¡Ð¾Ð¾Ñ‚Ð²ÐµÑ‚ÑÑ‚Ð²Ð¸Ðµ GDPR: Ð¥Ð¾Ñ‚Ñ Ð¿Ñ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼Ð° Ñ€Ð°Ð±Ð¾Ñ‚Ð°ÐµÑ‚ Ð»Ð¾ÐºÐ°Ð»ÑŒÐ½Ð¾, Ð¿Ñ€Ð¸Ð½Ñ†Ð¸Ð¿ 'ÐšÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚ÑŒ Ð¿Ñ€Ð¸ Ñ€Ð°Ð·Ñ€Ð°Ð±Ð¾Ñ‚ÐºÐµ' Ð¿Ð¾Ð»Ð½Ð¾ÑÑ‚ÑŒÑŽ ÑÐ¾Ð±Ð»ÑŽÐ´Ð°ÐµÑ‚ÑÑ.",
            "12. ÐŸÐ¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»ÑŒÑÐºÐ¸Ðµ Ñ„Ð°Ð¹Ð»Ñ‹: ÐŸÑ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼Ð° Ð½Ðµ ÑÐºÐ°Ð½Ð¸Ñ€ÑƒÐµÑ‚, Ð½Ðµ Ð¸Ð·Ð¼ÐµÐ½ÑÐµÑ‚ Ð¸ Ð½Ðµ ÑƒÐ´Ð°Ð»ÑÐµÑ‚ Ð»Ð¸Ñ‡Ð½Ñ‹Ðµ Ñ„Ð°Ð¹Ð»Ñ‹ (Ð´Ð¾ÐºÑƒÐ¼ÐµÐ½Ñ‚Ñ‹, Ñ„Ð¾Ñ‚Ð¾Ð³Ñ€Ð°Ñ„Ð¸Ð¸ Ð¸ Ñ‚.Ð´.).",
            "13. ÐŸÐµÑ€Ð¸Ñ„ÐµÑ€Ð¸Ð¹Ð½Ñ‹Ðµ ÑƒÑÑ‚Ñ€Ð¾Ð¹ÑÑ‚Ð²Ð°: Ð¡Ð¿Ð¸ÑÐ¾Ðº Ð¿ÐµÑ€Ð¸Ñ„ÐµÑ€Ð¸Ð¹Ð½Ñ‹Ñ… ÑƒÑÑ‚Ñ€Ð¾Ð¹ÑÑ‚Ð² Ð¸Ð»Ð¸ ÑƒÐ½Ð¸ÐºÐ°Ð»ÑŒÐ½Ñ‹Ðµ Ð¸Ð´ÐµÐ½Ñ‚Ð¸Ñ„Ð¸ÐºÐ°Ñ‚Ð¾Ñ€Ñ‹ Ð¾Ð±Ð¾Ñ€ÑƒÐ´Ð¾Ð²Ð°Ð½Ð¸Ñ Ð½Ðµ ÑÐ¾Ð±Ð¸Ñ€Ð°ÑŽÑ‚ÑÑ Ð´Ð»Ñ Ñ†ÐµÐ»ÐµÐ¹ Ð¾Ñ‚ÑÐ»ÐµÐ¶Ð¸Ð²Ð°Ð½Ð¸Ñ.",
            "14. IP-Ð°Ð´Ñ€ÐµÑ: Ð›Ð¾Ð³Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ðµ IP-Ð°Ð´Ñ€ÐµÑÐ° Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»Ñ Ð½Ðµ Ð¿Ñ€Ð¾Ð¸Ð·Ð²Ð¾Ð´Ð¸Ñ‚ÑÑ.",
            "15. Ð“ÐµÐ¾Ð»Ð¾ÐºÐ°Ñ†Ð¸Ñ: Ð’ Ð¿Ñ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼Ð½Ð¾Ð¼ Ð¾Ð±ÐµÑÐ¿ÐµÑ‡ÐµÐ½Ð¸Ð¸ Ð¾Ñ‚ÑÑƒÑ‚ÑÑ‚Ð²ÑƒÑŽÑ‚ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¸ Ð¾Ñ‚ÑÐ»ÐµÐ¶Ð¸Ð²Ð°Ð½Ð¸Ñ Ð¼ÐµÑÑ‚Ð¾Ð¿Ð¾Ð»Ð¾Ð¶ÐµÐ½Ð¸Ñ.",
            "16. ÐžÐ±Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ñ: ÐŸÐ¾Ð¸ÑÐº Ð¾Ð±Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ð¹ Ð¾ÑÑƒÑ‰ÐµÑÑ‚Ð²Ð»ÑÐµÑ‚ÑÑ Ð²Ñ€ÑƒÑ‡Ð½ÑƒÑŽ; Ð½ÐµÑ‚ Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¸Ñ… Ñ„Ð¾Ð½Ð¾Ð²Ñ‹Ñ… Ð¿Ð¾Ð´ÐºÐ»ÑŽÑ‡ÐµÐ½Ð¸Ð¹.",
            "17. Ð ÐµÐºÐ»Ð°Ð¼Ð°: ÐŸÑ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼Ð½Ð¾Ðµ Ð¾Ð±ÐµÑÐ¿ÐµÑ‡ÐµÐ½Ð¸Ðµ Ð½Ðµ ÑÐ¾Ð´ÐµÑ€Ð¶Ð¸Ñ‚ Ñ€ÐµÐºÐ»Ð°Ð¼Ð½Ð¾Ð³Ð¾ ÐŸÐž Ð¸Ð»Ð¸ Ñ€ÐµÐºÐ»Ð°Ð¼Ð½Ñ‹Ñ… Ð²ÑÑ‚Ð°Ð²Ð¾Ðº.",
            "18. ÐÐµÑÐ¾Ð²ÐµÑ€ÑˆÐµÐ½Ð½Ð¾Ð»ÐµÑ‚Ð½Ð¸Ðµ: ÐŸÐ¾ÑÐºÐ¾Ð»ÑŒÐºÑƒ Ð´Ð°Ð½Ð½Ñ‹Ðµ Ð½Ðµ ÑÐ¾Ð±Ð¸Ñ€Ð°ÑŽÑ‚ÑÑ, Ð½ÐµÑ‚ Ñ€Ð¸ÑÐºÐ° Ð´Ð»Ñ ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸ Ð½ÐµÑÐ¾Ð²ÐµÑ€ÑˆÐµÐ½Ð½Ð¾Ð»ÐµÑ‚Ð½Ð¸Ñ….",
            "19. Ð‘ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚ÑŒ: ÐžÑ‚ÑÑƒÑ‚ÑÑ‚Ð²Ð¸Ðµ ÑÐµÑ‚ÐµÐ²Ñ‹Ñ… ÐºÐ¾Ð¼Ð¼ÑƒÐ½Ð¸ÐºÐ°Ñ†Ð¸Ð¹ Ð¸ÑÐºÐ»ÑŽÑ‡Ð°ÐµÑ‚ ÑƒÐ´Ð°Ð»ÐµÐ½Ð½Ñ‹Ðµ Ð²ÐµÐºÑ‚Ð¾Ñ€Ñ‹ Ð°Ñ‚Ð°Ðº Ñ‡ÐµÑ€ÐµÐ· Ð¿Ñ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼Ð½Ð¾Ðµ Ð¾Ð±ÐµÑÐ¿ÐµÑ‡ÐµÐ½Ð¸Ðµ.",
            "20. ÐŸÑ€Ð¾Ñ„Ð¸Ð»Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ðµ: ÐÐµ ÑÐ¾Ð·Ð´Ð°ÐµÑ‚ÑÑ Ð¿Ñ€Ð¾Ñ„Ð¸Ð»Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ðµ Ð¾Ð±Ð¾Ñ€ÑƒÐ´Ð¾Ð²Ð°Ð½Ð¸Ñ Ð¸Ð»Ð¸ Ð¿Ñ€Ð¸Ð²Ñ‹Ñ‡ÐµÐº Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»Ñ."
        ],
        disclaimer: `ÐžÐ“Ð ÐÐÐ˜Ð§Ð•ÐÐ˜Ð• ÐžÐ¢Ð’Ð•Ð¢Ð¡Ð¢Ð’Ð•ÐÐÐžÐ¡Ð¢Ð˜ (ÐžÐ¢ÐšÐÐ— ÐžÐ¢ ÐžÐ¢Ð’Ð•Ð¢Ð¡Ð¢Ð’Ð•ÐÐÐžÐ¡Ð¢Ð˜)

1. ÐŸÐ Ð˜ÐÐ¯Ð¢Ð˜Ð• Ð Ð˜Ð¡ÐšÐžÐ’
Ð˜ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸Ðµ Ð¿Ñ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼Ð½Ð¾Ð³Ð¾ Ð¾Ð±ÐµÑÐ¿ÐµÑ‡ÐµÐ½Ð¸Ñ "Platinum+ Optimizer" (Ð´Ð°Ð»ÐµÐµ "ÐŸÑ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼Ð°") Ð¾ÑÑƒÑ‰ÐµÑÑ‚Ð²Ð»ÑÐµÑ‚ÑÑ Ð¸ÑÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾ Ð½Ð° ÑƒÑÐ¼Ð¾Ñ‚Ñ€ÐµÐ½Ð¸Ðµ Ð¸ Ñ€Ð¸ÑÐº Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»Ñ. ÐŸÑ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼Ð° Ð¿Ñ€ÐµÐ´Ð¾ÑÑ‚Ð°Ð²Ð»ÑÐµÑ‚ÑÑ "ÐšÐÐš Ð•Ð¡Ð¢Ð¬", Ð±ÐµÐ· ÐºÐ°ÐºÐ¸Ñ…-Ð»Ð¸Ð±Ð¾ ÑÐ²Ð½Ñ‹Ñ… Ð¸Ð»Ð¸ Ð¿Ð¾Ð´Ñ€Ð°Ð·ÑƒÐ¼ÐµÐ²Ð°ÐµÐ¼Ñ‹Ñ… Ð³Ð°Ñ€Ð°Ð½Ñ‚Ð¸Ð¹ Ñ€Ð°Ð±Ð¾Ñ‚Ñ‹, ÑÑ‚Ð°Ð±Ð¸Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸ Ð¸Ð»Ð¸ Ð¿Ñ€Ð¸Ð³Ð¾Ð´Ð½Ð¾ÑÑ‚Ð¸ Ð´Ð»Ñ ÐºÐ¾Ð½ÐºÑ€ÐµÑ‚Ð½Ð¾Ð¹ Ñ†ÐµÐ»Ð¸.

2. Ð˜Ð—ÐœÐ•ÐÐ•ÐÐ˜Ð¯ Ð’ Ð¡Ð˜Ð¡Ð¢Ð•ÐœÐ•
ÐŸÑ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼Ð° Ð²Ð½Ð¾ÑÐ¸Ñ‚ Ð³Ð»ÑƒÐ±Ð¾ÐºÐ¸Ðµ Ð¸Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ Ð² Ð¾Ð¿ÐµÑ€Ð°Ñ†Ð¸Ð¾Ð½Ð½ÑƒÑŽ ÑÐ¸ÑÑ‚ÐµÐ¼Ñƒ Microsoft Windows, Ð²ÐºÐ»ÑŽÑ‡Ð°Ñ, Ð½Ð¾ Ð½Ðµ Ð¾Ð³Ñ€Ð°Ð½Ð¸Ñ‡Ð¸Ð²Ð°ÑÑÑŒ: Ð¡Ð¸ÑÑ‚ÐµÐ¼Ð½Ñ‹Ð¹ Ñ€ÐµÐµÑÑ‚Ñ€, Ð¡Ð»ÑƒÐ¶Ð±Ñ‹, ÐŸÐ»Ð°Ð½Ð¸Ñ€Ð¾Ð²Ñ‰Ð¸Ðº Ð¦ÐŸ, Ð£Ð¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¸Ðµ Ð¿Ð°Ð¼ÑÑ‚ÑŒÑŽ Ð¸ ÐšÐ¾Ð½Ñ„Ð¸Ð³ÑƒÑ€Ð°Ñ†Ð¸Ð¸ ÑÐµÑ‚Ð¸. Ð¥Ð¾Ñ‚Ñ ÑÑ‚Ð¸ Ð¸Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ Ð¿Ñ€ÐµÐ´Ð½Ð°Ð·Ð½Ð°Ñ‡ÐµÐ½Ñ‹ Ð´Ð»Ñ Ð¿Ð¾Ð²Ñ‹ÑˆÐµÐ½Ð¸Ñ Ð¿Ñ€Ð¾Ð¸Ð·Ð²Ð¾Ð´Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾ÑÑ‚Ð¸, Ð¾Ð½Ð¸ Ð¼Ð¾Ð³ÑƒÑ‚ Ð²Ñ‹Ð·Ð²Ð°Ñ‚ÑŒ Ð½ÐµÑÑ‚Ð°Ð±Ð¸Ð»ÑŒÐ½Ð¾ÑÑ‚ÑŒ, Ð½ÐµÑÐ¾Ð²Ð¼ÐµÑÑ‚Ð¸Ð¼Ð¾ÑÑ‚ÑŒ Ð¿Ñ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼Ð½Ð¾Ð³Ð¾ Ð¾Ð±ÐµÑÐ¿ÐµÑ‡ÐµÐ½Ð¸Ñ Ð¸Ð»Ð¸ Ð½ÐµÐ¿Ñ€ÐµÐ´Ð²Ð¸Ð´ÐµÐ½Ð½Ð¾Ðµ Ð¿Ð¾Ð²ÐµÐ´ÐµÐ½Ð¸Ðµ Ð² Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»ÐµÐ½Ð½Ñ‹Ñ… Ð°Ð¿Ð¿Ð°Ñ€Ð°Ñ‚Ð½Ñ‹Ñ… ÐºÐ¾Ð½Ñ„Ð¸Ð³ÑƒÑ€Ð°Ñ†Ð¸ÑÑ….

3. Ð˜Ð¡ÐšÐ›Ð®Ð§Ð•ÐÐ˜Ð• Ð£Ð‘Ð«Ð¢ÐšÐžÐ’
ÐÐ¸ Ð¿Ñ€Ð¸ ÐºÐ°ÐºÐ¸Ñ… Ð¾Ð±ÑÑ‚Ð¾ÑÑ‚ÐµÐ»ÑŒÑÑ‚Ð²Ð°Ñ… Ñ€Ð°Ð·Ñ€Ð°Ð±Ð¾Ñ‚Ñ‡Ð¸ÐºÐ¸ (ÐºÐ¾Ð¼Ð°Ð½Ð´Ð° Ð¸Ð· Ð´Ð²ÑƒÑ… Ð½ÐµÐ·Ð°Ð²Ð¸ÑÐ¸Ð¼Ñ‹Ñ… Ð»Ð¸Ñ†), Ñ€Ð°ÑÐ¿Ñ€Ð¾ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ‚ÐµÐ»Ð¸ Ð¸Ð»Ð¸ ÑÐ¾Ñ‚Ñ€ÑƒÐ´Ð½Ð¸ÐºÐ¸ Platinum+ Optimizer Ð½Ðµ Ð½ÐµÑÑƒÑ‚ Ð¾Ñ‚Ð²ÐµÑ‚ÑÑ‚Ð²ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸ Ð·Ð° Ð¿Ñ€ÑÐ¼Ñ‹Ðµ, ÐºÐ¾ÑÐ²ÐµÐ½Ð½Ñ‹Ðµ, ÑÐ»ÑƒÑ‡Ð°Ð¹Ð½Ñ‹Ðµ, ÑÐ¿ÐµÑ†Ð¸Ð°Ð»ÑŒÐ½Ñ‹Ðµ, Ð¿Ñ€Ð¸Ð¼ÐµÑ€Ð½Ñ‹Ðµ Ð¸Ð»Ð¸ ÐºÐ¾ÑÐ²ÐµÐ½Ð½Ñ‹Ðµ ÑƒÐ±Ñ‹Ñ‚ÐºÐ¸ (Ð²ÐºÐ»ÑŽÑ‡Ð°Ñ, Ð½Ð¾ Ð½Ðµ Ð¾Ð³Ñ€Ð°Ð½Ð¸Ñ‡Ð¸Ð²Ð°ÑÑÑŒ: Ð¿Ð¾Ñ‚ÐµÑ€ÑŽ Ð´Ð°Ð½Ð½Ñ‹Ñ…, Ð¿Ð¾Ð²Ñ€ÐµÐ¶Ð´ÐµÐ½Ð¸Ðµ Ð¾Ð¿ÐµÑ€Ð°Ñ†Ð¸Ð¾Ð½Ð½Ð¾Ð¹ ÑÐ¸ÑÑ‚ÐµÐ¼Ñ‹, Ð¾Ñ‚ÐºÐ°Ð· Ð¾Ð±Ð¾Ñ€ÑƒÐ´Ð¾Ð²Ð°Ð½Ð¸Ñ, Ð¿ÐµÑ€ÐµÑ€Ñ‹Ð² Ð² Ñ€Ð°Ð±Ð¾Ñ‚Ðµ Ð¸Ð»Ð¸ Ð¿Ð¾Ñ‚ÐµÑ€ÑŽ Ð¿Ñ€Ð¸Ð±Ñ‹Ð»Ð¸), Ð²Ð¾Ð·Ð½Ð¸ÐºÐ°ÑŽÑ‰Ð¸Ðµ Ð² Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ðµ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸Ñ Ð¸Ð»Ð¸ Ð½ÐµÐ²Ð¾Ð·Ð¼Ð¾Ð¶Ð½Ð¾ÑÑ‚Ð¸ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸Ñ ÐŸÑ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼Ñ‹.

4. Ð¢ÐžÐ§ÐšÐ˜ Ð’ÐžÐ¡Ð¡Ð¢ÐÐÐžÐ’Ð›Ð•ÐÐ˜Ð¯
Ð˜ÑÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð°Ñ Ð¾Ñ‚Ð²ÐµÑ‚ÑÑ‚Ð²ÐµÐ½Ð½Ð¾ÑÑ‚ÑŒ Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»Ñ â€” ÑƒÐ±ÐµÐ´Ð¸Ñ‚ÑŒÑÑ, Ñ‡Ñ‚Ð¾ Ð¿ÐµÑ€ÐµÐ´ Ð·Ð°Ð¿ÑƒÑÐºÐ¾Ð¼ ÐŸÑ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼Ñ‹ ÑÐ¾Ð·Ð´Ð°Ð½Ð° Ð¢Ð¾Ñ‡ÐºÐ° Ð²Ð¾ÑÑÑ‚Ð°Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ñ ÑÐ¸ÑÑ‚ÐµÐ¼Ñ‹ Ð¸Ð»Ð¸ Ð¿Ð¾Ð»Ð½Ð°Ñ Ñ€ÐµÐ·ÐµÑ€Ð²Ð½Ð°Ñ ÐºÐ¾Ð¿Ð¸Ñ ÐºÑ€Ð¸Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¸Ñ… Ð´Ð°Ð½Ð½Ñ‹Ñ…. Ð Ð°Ð·Ñ€Ð°Ð±Ð¾Ñ‚Ñ‡Ð¸ÐºÐ¸ Ð½Ðµ Ð³Ð°Ñ€Ð°Ð½Ñ‚Ð¸Ñ€ÑƒÑŽÑ‚ ÑÑ„Ñ„ÐµÐºÑ‚Ð¸Ð²Ð½Ð¾ÑÑ‚ÑŒ Ð²ÑÑ‚Ñ€Ð¾ÐµÐ½Ð½Ð¾Ð¹ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¸ Ð²Ð¾ÑÑÑ‚Ð°Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ñ Windows.

5. Ð ÐÐ—Ð“ÐžÐ Ð˜ ÐžÐ‘ÐžÐ Ð£Ð”ÐžÐ’ÐÐÐ˜Ð•
ÐžÐ¿Ñ‚Ð¸Ð¼Ð¸Ð·Ð°Ñ†Ð¸Ð¸, ÑÐ½Ð¸Ð¼Ð°ÑŽÑ‰Ð¸Ðµ Ð¾Ð³Ñ€Ð°Ð½Ð¸Ñ‡ÐµÐ½Ð¸Ñ Ð¿Ð¾ Ð¿Ð¸Ñ‚Ð°Ð½Ð¸ÑŽ, Ð¼Ð¾Ð³ÑƒÑ‚ ÑƒÐ²ÐµÐ»Ð¸Ñ‡Ð¸Ñ‚ÑŒ Ñ€Ð°Ð±Ð¾Ñ‡ÑƒÑŽ Ñ‚ÐµÐ¼Ð¿ÐµÑ€Ð°Ñ‚ÑƒÑ€Ñƒ Ð¸ Ð¿Ð¾Ñ‚Ñ€ÐµÐ±Ð»ÐµÐ½Ð¸Ðµ ÑÐ½ÐµÑ€Ð³Ð¸Ð¸ ÐºÐ¾Ð¼Ð¿Ð¾Ð½ÐµÐ½Ñ‚Ð¾Ð² (Ð¦ÐŸ/Ð“ÐŸ). ÐŸÐ¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»ÑŒ Ð½ÐµÑÐµÑ‚ Ð¾Ñ‚Ð²ÐµÑ‚ÑÑ‚Ð²ÐµÐ½Ð½Ð¾ÑÑ‚ÑŒ Ð·Ð° Ð¼Ð¾Ð½Ð¸Ñ‚Ð¾Ñ€Ð¸Ð½Ð³ Ñ‚ÐµÐ¼Ð¿ÐµÑ€Ð°Ñ‚ÑƒÑ€ Ð¸ Ñ‚ÐµÐ¿Ð»Ð¾Ð²Ð¾Ð¹ ÑÑ‚Ð°Ð±Ð¸Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸ ÑÐ²Ð¾ÐµÐ¹ ÑÐ¸ÑÑ‚ÐµÐ¼Ñ‹.

6. ÐÐÐ Ð£Ð¨Ð•ÐÐ˜Ð• Ð£Ð¡Ð›ÐžÐ’Ð˜Ð™ Ð¢Ð Ð•Ð¢Ð¬Ð˜Ð¥ Ð›Ð˜Ð¦
Ð˜ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸Ðµ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚Ð¾Ð² Ð¾Ð¿Ñ‚Ð¸Ð¼Ð¸Ð·Ð°Ñ†Ð¸Ð¸ Ð² Ñ€ÐµÐ´ÐºÐ¸Ñ… ÑÐ»ÑƒÑ‡Ð°ÑÑ… Ð¼Ð¾Ð¶ÐµÑ‚ Ð±Ñ‹Ñ‚ÑŒ Ð¸ÑÑ‚Ð¾Ð»ÐºÐ¾Ð²Ð°Ð½Ð¾ ÐºÐ°Ðº Ð½Ð°Ñ€ÑƒÑˆÐµÐ½Ð¸Ðµ Ð£ÑÐ»Ð¾Ð²Ð¸Ð¹ Ð¾Ð±ÑÐ»ÑƒÐ¶Ð¸Ð²Ð°Ð½Ð¸Ñ Ð½ÐµÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ñ… Ð°Ð½Ñ‚Ð¸Ñ‡Ð¸Ñ‚-Ð¿Ñ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼ Ð¸Ð»Ð¸ ÐºÐ¾Ñ€Ð¿Ð¾Ñ€Ð°Ñ‚Ð¸Ð²Ð½Ñ‹Ñ… Ð¿Ñ€Ð¸Ð»Ð¾Ð¶ÐµÐ½Ð¸Ð¹. ÐŸÐ¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»ÑŒ Ð¿Ñ€Ð¸Ð½Ð¸Ð¼Ð°ÐµÑ‚ Ð½Ð° ÑÐµÐ±Ñ Ð¿Ð¾Ð»Ð½ÑƒÑŽ Ð¾Ñ‚Ð²ÐµÑ‚ÑÑ‚Ð²ÐµÐ½Ð½Ð¾ÑÑ‚ÑŒ Ð·Ð° ÑÐ¾Ð±Ð»ÑŽÐ´ÐµÐ½Ð¸Ðµ ÑÐ¾Ð³Ð»Ð°ÑˆÐµÐ½Ð¸Ð¹ Ñ Ñ‚Ñ€ÐµÑ‚ÑŒÐ¸Ð¼Ð¸ Ð»Ð¸Ñ†Ð°Ð¼Ð¸.

7. ÐžÐ¢Ð¡Ð£Ð¢Ð¡Ð¢Ð’Ð˜Ð• Ð¡Ð’Ð¯Ð—Ð˜
Platinum+ Optimizer Ð½Ðµ ÑÐ²ÑÐ·Ð°Ð½, Ð½Ðµ Ð°Ñ„Ñ„Ð¸Ð»Ð¸Ñ€Ð¾Ð²Ð°Ð½, Ð½Ðµ Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð¾Ð²Ð°Ð½, Ð½Ðµ Ð¾Ð´Ð¾Ð±Ñ€ÐµÐ½ Ð¸ Ð½Ð¸ÐºÐ°Ðº Ð¾Ñ„Ð¸Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ Ð½Ðµ ÑÐ²ÑÐ·Ð°Ð½ Ñ Microsoft Corporation Ð¸Ð»Ð¸ Ð»ÑŽÐ±Ñ‹Ð¼Ð¸ ÐµÐµ Ð´Ð¾Ñ‡ÐµÑ€Ð½Ð¸Ð¼Ð¸ ÐºÐ¾Ð¼Ð¿Ð°Ð½Ð¸ÑÐ¼Ð¸.

Ð—Ð°Ð¿ÑƒÑÐºÐ°Ñ Ð¿Ñ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼Ñƒ, Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»ÑŒ Ð·Ð°ÑÐ²Ð»ÑÐµÑ‚, Ñ‡Ñ‚Ð¾ Ð¿Ñ€Ð¾Ñ‡Ð¸Ñ‚Ð°Ð», Ð¿Ð¾Ð½ÑÐ» Ð¸ Ð¿Ð¾Ð»Ð½Ð¾ÑÑ‚ÑŒÑŽ Ð¿Ñ€Ð¸Ð½ÑÑ‚ ÑƒÑÐ»Ð¾Ð²Ð¸Ñ Ð´Ð°Ð½Ð½Ð¾Ð³Ð¾ Ð¾Ñ‚ÐºÐ°Ð·Ð° Ð¾Ñ‚ Ð¾Ñ‚Ð²ÐµÑ‚ÑÑ‚Ð²ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸.`
    }
};

// ============ FUNZIONI UTILITY ============
function getAppContent(lang) {
    switch (lang) {
        case 'it': return IT_CONTENT.app;
        case 'en': return EN_CONTENT.app;
        case 'ru': return RU_CONTENT.app;
        case 'zh': return ZH_CONTENT.app;
        default: return EN_CONTENT.app;
    }
}

function getLegalContent(lang) {
    switch (lang) {
        case 'it': return IT_CONTENT.legal;
        case 'en': return EN_CONTENT.legal;
        case 'ru': return RU_CONTENT.legal;
        case 'zh': return ZH_CONTENT.legal;
        default: return EN_CONTENT.legal;
    }
}

function getNestedValue(obj, path) {
    return path.split('.').reduce((prev, curr) => prev ? prev[curr] : null, obj);
}

// ============ VARIABILI GLOBALI ============
let currentLang = 'en';
let isScrolled = false;
let mobileMenuOpen = false;


// ============ INIZIALIZZAZIONE ============
document.addEventListener('DOMContentLoaded', () => {
    // Aggressive visibility restoration (Anti-FOUC)
    document.documentElement.style.visibility = 'visible';
    document.documentElement.style.opacity = '1';

    // Recupera lingua salvata o usa default
    const savedLang = localStorage.getItem('preferred_lang');
    if (savedLang) {
        currentLang = savedLang;
        // Aggiorna anche il selettore visivo all'avvio
        const langObj = SUPPORTED_LANGUAGES.find(l => l.code === currentLang);
        if (langObj) {
            const flagEl = document.getElementById('current-lang-flag');
            const codeEl = document.getElementById('current-lang-code');
            if (flagEl) flagEl.textContent = langObj.flag;
            if (codeEl) codeEl.textContent = langObj.code.toUpperCase();
        }
    }

    // Render iniziale
    updateLanguage(currentLang);
    lucide.createIcons();

    // Listener per scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY > 50;
        if (scrolled !== isScrolled) {
            isScrolled = scrolled;
            const nav = document.getElementById('navbar');
            if (scrolled) {
                nav.classList.add('py-4');
                nav.classList.remove('py-6');
            } else {
                nav.classList.remove('py-4');
                nav.classList.add('py-6');
            }
        }
    });

    // Animazione grid
    initGridAnimation();
});

// ============ GESTIONE LINGUA ============
window.setLanguage = (lang) => {
    const langObj = SUPPORTED_LANGUAGES.find(l => l.code === lang);
    if (!langObj) return;

    currentLang = lang;
    localStorage.setItem('preferred_lang', lang);
    updateLanguage(lang);

    // Call page-specific updaters if they exist
    if (typeof updateAndroidLanguage === 'function') updateAndroidLanguage(lang);
    if (typeof updateBenchmarkLanguage === 'function') updateBenchmarkLanguage(lang);

    // Aggiorna l'interfaccia visiva (Flag e Codice)
    const flagEl = document.getElementById('current-lang-flag');
    const codeEl = document.getElementById('current-lang-code');

    if (flagEl) flagEl.textContent = langObj.flag;
    if (codeEl) codeEl.textContent = langObj.code.toUpperCase();
};

function updateLanguage(lang) {
    const content = getAppContent(lang);
    const legalContent = getLegalContent(lang);

    // Aggiorna testi semplici
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = getNestedValue(content, key);
        if (value) el.textContent = value;
    });

    // Changelog
    const changelogContainer = document.getElementById('changelog-items-container');
    if (changelogContainer && content.changelog) {
        const c = content.changelog;
        changelogContainer.innerHTML = `
            <div class="changelog-container">
                <!-- Windows Shell -->
                <div class="terminal-window large shadow-2xl">
                    <div class="terminal-header">
                        <div class="terminal-title">
                            <i data-lucide="terminal" class="w-4 h-4 text-electric-400"></i>
                            <span>PowerShell - platinum_optimizer</span>
                        </div>
                        <div class="terminal-controls">
                            <span>&minus;</span>
                            <span>&square;</span>
                            <span class="hover:text-red-500 hover:opacity-100">&times;</span>
                        </div>
                    </div>
                    <div class="terminal-tabs">
                        <div class="terminal-tab active">
                            <i data-lucide="git-branch" class="w-3 h-3"></i>
                            <span>${c.tabChanges}</span>
                        </div>
                    </div>
                    <div class="terminal-body custom-scrollbar">
                        <div id="terminal-content-diff">
                            ${c.diff.map((line, index) => {
            let cls = '';
            let pref = '';
            const isInteractive = line.info ? 'interactive' : '';

            if (line.type === 'added') { cls = 'diff-added'; pref = '+'; }
            else if (line.type === 'removed') { cls = 'diff-removed'; pref = '-'; }
            else { cls = 'text-platinum-300/50'; pref = ' '; }

            let html = `
                                    <div class="diff-line ${cls} ${isInteractive} rounded px-2" 
                                         ${line.info ? `onclick="toggleDiff(${index})"` : ''}
                                         id="diff-line-${index}">
                                        <span class="diff-prefix select-none opacity-50">${pref}</span>
                                        <span>${line.code}</span>
                                        ${line.info ? `<i data-lucide="chevron-right" class="w-3 h-3 ml-auto opacity-30 transition-transform"></i>` : ''}
                                    </div>
                                `;

            if (line.info) {
                html += `
                                        <div class="diff-dropdown" id="diff-dropdown-${index}">
                                            <div class="flex items-center gap-2 text-electric-400 font-bold mb-1">
                                                <i data-lucide="info" class="w-4 h-4"></i>
                                                <span>Documentation</span>
                                            </div>
                                            ${line.info}
                                        </div>
                                    `;
            }
            return html;
        }).join('')}
                        </div>
                    </div>
                </div>
                
                <!-- Brief Description -->
                <div class="changelog-info space-y-8">
                    <div>
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-bold uppercase tracking-widest mb-4">
                            Technical Update
                        </div>
                        <h4 class="text-white font-bold text-3xl tracking-tight mb-6">Optimization Architecture</h4>
                        <p class="text-platinum-300 font-light leading-relaxed text-lg">
                            ${c.description}
                        </p>
                    </div>

                    <div class="p-6 bg-platinum-900/50 border border-white/5 rounded-2xl">
                        <h5 class="text-white font-bold mb-4 flex items-center gap-2">
                            <i data-lucide="shield-check" class="w-5 h-5 text-electric-500"></i>
                            Key Changes
                        </h5>
                        <ul class="space-y-3 text-sm text-platinum-300">
                             <li class="flex items-center gap-3">
                                <span class="w-1.5 h-1.5 rounded-full bg-electric-500"></span>
                                Kernel Dispatcher Refinement
                             </li>
                             <li class="flex items-center gap-3">
                                <span class="w-1.5 h-1.5 rounded-full bg-electric-500"></span>
                                Hardware Timer Override
                             </li>
                             <li class="flex items-center gap-3">
                                <span class="w-1.5 h-1.5 rounded-full bg-electric-500"></span>
                                Network Stack Hardening
                             </li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }

    // Target Audience
    const targetContainer = document.getElementById('target-items-container');
    targetContainer.innerHTML = content.target.items.map(item => `
        <div class="group relative bg-platinum-900/40 p-8 border border-white/5 hover:border-electric-500/50 transition-all duration-500 hover:-translate-y-2 rounded-2xl shadow-2xl backdrop-blur-sm overflow-hidden">
            <div class="absolute -right-8 -top-8 w-32 h-32 bg-electric-500/5 rounded-full group-hover:bg-electric-500/10 transition-colors duration-500"></div>
            <div class="relative z-10">
                <div class="w-14 h-14 bg-gradient-to-br from-electric-500/20 to-electric-600/5 rounded-xl flex items-center justify-center mb-8 text-electric-400 group-hover:scale-110 transition-transform duration-500 border border-electric-500/20 group-hover:shadow-glow">
                    <i data-lucide="${item.icon}" class="w-7 h-7" stroke-width="1.5"></i>
                </div>
                <h3 class="text-2xl font-serif font-bold mb-4 text-white tracking-tight">${item.title}</h3>
                <p class="text-platinum-300 font-light leading-relaxed text-base">${item.description}</p>
            </div>
            <div class="absolute bottom-0 left-0 h-1 w-0 bg-electric-500 transition-all duration-500 group-hover:w-full"></div>
        </div>
    `).join('');

    // Steps
    const stepsList = document.getElementById('steps-list');
    stepsList.innerHTML = content.steps.items.map((step, idx) => {
        const icons = ['download', 'play', 'terminal'];
        return `
            <div class="step-card group cursor-pointer" ${idx === 0 ? 'onclick="scrollToSection(\'hero-section\')"' : ''}>
                <div class="step-number">${step.number}</div>
                <div class="step-icon-wrapper">
                    <i data-lucide="${icons[idx] || 'check'}" class="w-5 h-5"></i>
                </div>
                <div class="step-content">
                    <h4 class="text-lg font-bold text-white mb-0.5 group-hover:text-electric-400 transition-colors tracking-tight">${step.title}</h4>
                    <p class="text-platinum-300 font-light leading-tight text-xs md:text-sm">${step.description}</p>
                </div>
            </div>
        `;
    }).join('');

    // FAQ
    const faqList = document.getElementById('faq-list');
    faqList.innerHTML = content.faq.items.map((item, index) => `
        <div class="group border border-white/5 bg-platinum-950/40 backdrop-blur-md rounded-2xl transition-all duration-500 hover:border-electric-500/30 hover:bg-platinum-900/60 overflow-hidden shadow-lg">
            <button onclick="toggleAccordion(event, ${index})" 
                    class="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none group">
                <span id="faq-q-${index}" 
                      class="text-lg md:text-xl font-medium tracking-tight text-platinum-100 group-hover:text-white transition-colors duration-300">${item.question}</span>
                <div class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-electric-500/20 transition-all duration-300">
                    <i id="faq-icon-${index}" data-lucide="chevron-down" 
                       class="w-5 h-5 text-platinum-400 group-hover:text-electric-400 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"></i>
                </div>
            </button>
            <div id="faq-ans-${index}" 
                 class="grid grid-rows-[0fr] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] opacity-0 overflow-hidden">
                <div class="min-h-0">
                    <div class="px-8 pb-8 pt-2 text-platinum-300/90 leading-relaxed font-light text-base md:text-lg border-t border-white/5 mx-8">
                        ${item.answer}
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Modals Content
    const privacyContent = document.getElementById('modal-content-privacy');
    if (Array.isArray(legalContent.privacy)) {
        privacyContent.innerHTML = `<ul class="space-y-4">${legalContent.privacy.map(p => `
            <li class="flex gap-4"><span class="text-platinum-50 font-medium">${p}</span></li>
        `).join('')}</ul>`;
    }

    const disclaimerContent = document.getElementById('modal-content-disclaimer');
    disclaimerContent.textContent = legalContent.disclaimer;

    // Re-inizializza icone
    lucide.createIcons();
}

// ============ FUNZIONI INTERAZIONE ============
window.scrollToSection = (id) => {
    if (mobileMenuOpen) toggleMobileMenu();
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

window.toggleMobileMenu = () => {
    mobileMenuOpen = !mobileMenuOpen;
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-menu-icon');

    if (mobileMenuOpen) {
        menu.classList.remove('hidden');
        menu.classList.add('flex');
        icon.setAttribute('data-lucide', 'x');
    } else {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
        icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
};

window.openModal = (type) => {
    const modal = document.getElementById(`modal-${type}`);
    const modalContent = modal.querySelector('.liquid-glass-modal');
    const triggerBtn = event.currentTarget.tagName === 'BUTTON' ? event.currentTarget : event.target.closest('button');

    if (!triggerBtn) return;

    // Memorizza il pulsante per la chiusura
    modal.dataset.triggerId = triggerBtn.id;

    // Calcola posizione e dimensioni iniziali del tasto
    const rect = triggerBtn.getBoundingClientRect();
    const startX = rect.left + rect.width / 2 - window.innerWidth / 2;
    const startY = rect.top + rect.height / 2 - window.innerHeight / 2;
    const startScale = rect.width / (window.innerWidth * 0.9); // Rapporto dimensionale approssimativo

    // Passa le coordinate al CSS
    modalContent.style.setProperty('--start-x', `${startX}px`);
    modalContent.style.setProperty('--start-y', `${startY}px`);
    modalContent.style.setProperty('--start-scale', `${startScale.toFixed(4)}`);

    // Nascondi il tasto gradualmente (effetto app iOS)
    triggerBtn.style.opacity = '0';
    triggerBtn.style.pointerEvents = 'none';

    // Reset animazione apertura - PiÃ¹ veloce (User request)
    modalContent.style.animation = 'none';
    modalContent.offsetHeight;
    modalContent.style.animation = 'liquid-drop-entry 0.55s cubic-bezier(0.23, 1, 0.32, 1) forwards';

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Attiva stato "Modal" per lo sfondo 3D
    if (window.bgAnimation) window.bgAnimation.modalActive = true;

    // Effetto "Ripple Goccia" all'apertura (User request)
    const ripple = document.createElement('div');
    ripple.className = 'liquid-ripple';
    modalContent.appendChild(ripple);
    setTimeout(() => ripple.remove(), 1000);
};

window.closeModal = (type) => {
    const modal = document.getElementById(`modal-${type}`);
    const modalContent = modal.querySelector('.liquid-glass-modal');
    const triggerBtn = document.getElementById(modal.dataset.triggerId);

    // Disattiva stato "Modal" per lo sfondo 3D
    if (window.bgAnimation) window.bgAnimation.modalActive = false;

    // Stop Video if it's the video modal
    if (type === 'video-intro') {
        const iframe = document.getElementById('intro-video-frame');
        if (iframe) iframe.src = '';
    }

    // Chaining: If closing Discord Promo, start Video Intro
    if (type === 'discord-promo') {
        setTimeout(() => {
            initVideoIntro();
        }, 500); // Wait for exit animation
    }

    // Animazione di chiusura - PiÃ¹ veloce e scattante (User request)
    modalContent.style.animation = 'liquid-drop-exit 0.45s cubic-bezier(0.4, 0, 1, 1) forwards';

    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'unset';

        // Fai riapparire il tasto con una transizione fluida
        if (triggerBtn) {
            triggerBtn.style.opacity = '1';
            triggerBtn.style.pointerEvents = 'all';
        }
    }, 400);
};

window.toggleAccordion = (event, index) => {
    const ans = document.getElementById(`faq-ans-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);
    const question = document.getElementById(`faq-q-${index}`);

    const isOpen = ans.classList.contains('grid-rows-[1fr]');

    if (!isOpen) {
        // Chiudi tutti gli altri prima di aprire quello nuovo
        document.querySelectorAll('[id^="faq-ans-"]').forEach((el) => {
            if (el.classList.contains('grid-rows-[1fr]')) {
                const otherIndex = el.id.replace('faq-ans-', '');
                el.classList.replace('grid-rows-[1fr]', 'grid-rows-[0fr]');
                el.classList.replace('opacity-100', 'opacity-0');
                document.getElementById(`faq-icon-${otherIndex}`)?.classList.remove('rotate-180', 'text-electric-400');
                document.getElementById(`faq-q-${otherIndex}`)?.classList.remove('text-electric-400');
            }
        });

        // Apri l'elemento richiesto con effetto rimbalzo
        ans.classList.replace('grid-rows-[0fr]', 'grid-rows-[1fr]');
        ans.classList.replace('opacity-0', 'opacity-100');

        // Effetto Ripple Goccia dinamico (parte dal tocco del mouse)
        const rect = event.currentTarget.getBoundingClientRect();
        const ripple = document.createElement('div');
        ripple.className = 'liquid-ripple';
        ripple.style.left = `${event.clientX - rect.left}px`;
        ripple.style.top = `${event.clientY - rect.top}px`;
        ripple.style.setProperty('--glow-color', 'rgba(0, 242, 255, 0.4)');
        event.currentTarget.closest('.group').appendChild(ripple);
        setTimeout(() => ripple.remove(), 800);

        icon.classList.add('rotate-180', 'text-electric-400');
        question.classList.add('text-electric-400');
    } else {
        // Se Ã¨ giÃ  aperto, lo chiudiamo semplicemente
        ans.classList.replace('grid-rows-[1fr]', 'grid-rows-[0fr]');
        ans.classList.replace('opacity-100', 'opacity-0');
        icon.classList.remove('rotate-180', 'text-electric-400');
        question.classList.remove('text-electric-400');
    }
};

window.toggleDiff = (index) => {
    const line = document.getElementById(`diff-line-${index}`);
    const dropdown = document.getElementById(`diff-dropdown-${index}`);
    const icon = line.querySelector('.lucide-chevron-right');

    const isOpen = line.classList.contains('active');

    if (isOpen) {
        line.classList.remove('active');
        if (icon) icon.classList.remove('rotate-90');
    } else {
        line.classList.add('active');
        if (icon) icon.classList.add('rotate-90');
    }
};



window.handleDownload = () => {
    const link = document.createElement('a');
    link.href = DOWNLOAD_URL;
    link.setAttribute('download', 'Platinum+Optimizer.exe');
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

// ============ ANIMAZIONI ============
// ============ ANIMAZIONI ============
// ============ ANIMAZIONI ============
// ============ ANIMAZIONI ============
function initGridAnimation(theme = 'platinum') {
    const container = document.getElementById('global-animation-container');
    if (!container) return;

    class ThreeAnimation {
        constructor(container, theme) {
            this.container = container;
            this.theme = theme;
            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000);
            this.renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true,
                powerPreference: "high-performance",
                precision: "highp",
                stencil: false,
                depth: true
            });

            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            this.container.appendChild(this.renderer.domElement);

            this.camera.position.z = 1000;
            this.shapes = [];
            this.orbs = [];
            this.connections = null; // Container per i fasci di luce
            this.time = 0;
            this.mouse = new THREE.Vector2(-9999, -9999);
            this.raycaster = new THREE.Raycaster();
            this.modalActive = false;
            this.modalFactor = 0; // Per transizioni fluide tra stati

            this.init();
        }

        init() {
            this.addLights();
            this.createShapes();
            this.createOrbs();
            this.createLineSystem(); // Inizializza il sistema di connessione
            this.setupListeners();
            this.animate();
        }

        addLights() {
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
            this.scene.add(ambientLight);

            const lightColor = this.theme === 'red' ? 0xff0000 : 0x00f2ff; // Rosso puro per le luci dello sfondo
            this.mainPointLight = new THREE.PointLight(lightColor, 5, 1500);
            this.scene.add(this.mainPointLight);

            // Luce che segue il mouse (Flashlight Effect)
            this.cursorLight = new THREE.PointLight(lightColor, 12, 1000);
            this.scene.add(this.cursorLight);

            // Sprite visivo per il "punto di luce" sul mouse
            const canvas = document.createElement('canvas');
            canvas.width = 64;
            canvas.height = 64;
            const ctx = canvas.getContext('2d');
            const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);

            if (this.theme === 'red') {
                gradient.addColorStop(0, 'rgba(255, 50, 0, 0.8)'); // Bagliore rosso
                gradient.addColorStop(0.5, 'rgba(150, 0, 0, 0.2)');
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            } else {
                gradient.addColorStop(0, 'rgba(0, 242, 255, 0.8)');
                gradient.addColorStop(0.5, 'rgba(31, 111, 255, 0.2)');
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            }

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 64, 64);
            const texture = new THREE.CanvasTexture(canvas);
            const material = new THREE.SpriteMaterial({ map: texture, transparent: true, blending: THREE.AdditiveBlending });
            this.cursorGlow = new THREE.Sprite(material);
            this.cursorGlow.scale.set(100, 100, 1);
            this.scene.add(this.cursorGlow);
        }

        createOrbs() {
            // Texture per le luci circolari soffuse
            const canvas = document.createElement('canvas');
            canvas.width = 128;
            canvas.height = 128;
            const ctx = canvas.getContext('2d');
            const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);

            if (this.theme === 'red') {
                gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
                gradient.addColorStop(0.2, 'rgba(255, 0, 0, 0.8)'); // Rosso vivido
                gradient.addColorStop(0.5, 'rgba(153, 27, 27, 0.4)'); // Rosso profondo traslucido
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            } else {
                gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
                gradient.addColorStop(0.2, 'rgba(0, 242, 255, 0.6)');
                gradient.addColorStop(0.5, 'rgba(31, 111, 255, 0.2)');
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            }

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 128, 128);

            const texture = new THREE.CanvasTexture(canvas);
            const material = new THREE.SpriteMaterial({
                map: texture,
                transparent: true,
                blending: THREE.AdditiveBlending,
                opacity: 0.8
            });

            for (let i = 0; i < 8; i++) {
                const sprite = new THREE.Sprite(material);
                const scale = Math.random() * 400 + 300;
                sprite.scale.set(scale, scale, 1);

                const orb = {
                    sprite: sprite,
                    pos: new THREE.Vector3(
                        (Math.random() - 0.5) * 2000,
                        (Math.random() - 0.5) * 1500,
                        (Math.random() - 0.5) * 500
                    ),
                    vel: new THREE.Vector3(
                        (Math.random() - 0.5) * 1.5,
                        (Math.random() - 0.5) * 1.5,
                        (Math.random() - 0.5) * 0.5
                    ),
                    phase: Math.random() * Math.PI * 2
                };

                sprite.position.copy(orb.pos);
                this.scene.add(sprite);
                this.orbs.push(orb);
            }
        }

        createShapes() {
            const geometries = [
                new THREE.IcosahedronGeometry(80, 0),
                new THREE.OctahedronGeometry(70, 0),
                new THREE.TorusKnotGeometry(60, 15, 64, 12),
                new THREE.TetrahedronGeometry(90, 0),
                new THREE.DodecahedronGeometry(70, 0)
            ];

            for (let i = 0; i < 20; i++) { // Aumentato il numero per coprire meglio lo sfondo
                const geo = geometries[i % geometries.length].clone();
                const mainColor = this.theme === 'red' ? 0xffa500 : 0x00f2ff;
                const emissiveColor = this.theme === 'red' ? 0xff4500 : 0x1F6FFF;

                const material = new THREE.MeshPhysicalMaterial({
                    color: mainColor,
                    wireframe: true,
                    transparent: true,
                    opacity: this.theme === 'red' ? 0.7 : 0.25,
                    emissive: emissiveColor,
                    emissiveIntensity: this.theme === 'red' ? 1.0 : 0.3,
                    clearcoat: 1.0,
                    clearcoatRoughness: 0,
                    reflectivity: 1.0,
                    side: THREE.DoubleSide
                });

                const mesh = new THREE.Mesh(geo, material);
                const originalPositions = geo.attributes.position.array.slice();

                const shape = {
                    mesh: mesh,
                    originalPositions: originalPositions,
                    rotationSpeed: {
                        x: (Math.random() - 0.5) * 0.005,
                        y: (Math.random() - 0.5) * 0.005,
                        z: (Math.random() - 0.5) * 0.005
                    },
                    velocity: new THREE.Vector3(
                        (Math.random() - 0.5) * 0.4,
                        (Math.random() - 0.5) * 0.4,
                        (Math.random() - 0.5) * 0.25
                    ),
                    floatOffset: Math.random() * Math.PI * 2,
                    alterationFactor: 0,
                    entranceFactor: 0, // Inizia invisibile per comparsa graduale
                    phase: Math.random() * 10
                };

                mesh.position.set(
                    (Math.random() - 0.5) * 2500,
                    (Math.random() - 0.5) * 1800,
                    (Math.random() - 0.5) * 1000
                );

                this.scene.add(mesh);
                this.shapes.push(shape);
            }
        }

        createLineSystem() {
            const geometry = new THREE.BufferGeometry();
            const lineColor = this.theme === 'red' ? 0xff8c00 : 0x00f2ff; // Arancione per le linee
            const material = new THREE.LineBasicMaterial({
                color: lineColor,
                transparent: true,
                opacity: 0.2,
                blending: THREE.AdditiveBlending
            });
            this.connections = new THREE.LineSegments(geometry, material);
            this.scene.add(this.connections);
        }

        setupListeners() {
            window.addEventListener('resize', () => {
                this.camera.aspect = window.innerWidth / window.innerHeight;
                this.camera.updateProjectionMatrix();
                this.renderer.setSize(window.innerWidth, window.innerHeight);
            });

            window.addEventListener('mousemove', (e) => {
                this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
                this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
            });
        }

        update() {
            // Transizione fluida per lo stato modal
            this.modalFactor += ((this.modalActive ? 1 : 0) - this.modalFactor) * 0.05;

            // Rallenta il tempo globale se il modal Ã¨ aperto
            const timeStep = 0.005 * (1 - this.modalFactor * 0.8);
            this.time += timeStep;

            // Aggiorna colore luce principale (rispetto al tema)
            const baseColor = this.theme === 'red' ? new THREE.Color(0xff0000) : new THREE.Color(0x00f2ff);
            const modalColor = this.theme === 'red' ? new THREE.Color(0x990000) : new THREE.Color(0x0044ff);
            this.mainPointLight.color.copy(baseColor).lerp(modalColor, this.modalFactor);
            this.mainPointLight.intensity = 5 * (1 - this.modalFactor * 0.3);

            // Posizionamento luce mouse (Flashlight effect)
            this.raycaster.setFromCamera(this.mouse, this.camera);
            const lightPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -200);
            const lightTarget = new THREE.Vector3();
            this.raycaster.ray.intersectPlane(lightPlane, lightTarget);

            // Segue il mouse con una leggera inerzia
            this.cursorLight.position.lerp(lightTarget, 0.1);
            this.cursorGlow.position.copy(this.cursorLight.position);

            // Pulsazione della sorgente - Effetto "Respiro" lento e potente
            const pulseIntensity = 18 + Math.sin(this.time * 1.2) * 8; // PiÃ¹ intensa e lenta
            this.cursorLight.intensity = pulseIntensity * (1 - this.modalFactor * 0.5);

            const pulseOpacity = 0.7 + Math.sin(this.time * 1.2) * 0.3;
            this.cursorGlow.material.opacity = pulseOpacity * (1 - this.modalFactor * 0.3);

            const pulseScale = 140 + Math.sin(this.time * 1.2) * 40;
            this.cursorGlow.scale.setScalar(pulseScale);

            // Aggiorna Orbi (Luci Dinamiche)
            this.orbs.forEach(o => {
                // Rallenta il movimento degli orbi
                const velocityScale = 1 - this.modalFactor * 0.85;
                o.pos.x += o.vel.x * velocityScale;
                o.pos.y += o.vel.y * velocityScale;
                o.pos.z += o.vel.z * velocityScale;

                // Bounce/Wrap
                if (Math.abs(o.pos.x) > 1200) o.vel.x *= -1;
                if (Math.abs(o.pos.y) > 900) o.vel.y *= -1;
                if (Math.abs(o.pos.z) > 600) o.vel.z *= -1;

                o.sprite.position.copy(o.pos);
                o.sprite.position.y += Math.sin(this.time + o.phase) * 1.5;
                o.sprite.material.opacity = (0.5 + Math.sin(this.time * 2 + o.phase) * 0.2) * (1 - this.modalFactor * 0.4);
            });

            const linePositions = [];
            const lineColors = [];

            // Calcolo del raggio del mouse
            this.raycaster.setFromCamera(this.mouse, this.camera);

            this.shapes.forEach((s, i) => {
                // Interazione basata sulla profonditÃ : troviamo dove il raggio del mouse incrocia il piano della forma
                const planeZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), -s.mesh.position.z);
                const mouseAtDepth = new THREE.Vector3();
                this.raycaster.ray.intersectPlane(planeZ, mouseAtDepth);

                const distToMouse = s.mesh.position.distanceTo(mouseAtDepth);
                const isNearMouse = distToMouse < 600;
                const proximity = Math.max(0, 1 - distToMouse / 600);

                // Nuova logica di velocitÃ : rallenta avvicinandosi, ma mantiene un "moto lento" se vicinissimo
                let speedMultiplier = 1;
                if (isNearMouse) {
                    // Rallenta fino al 10% alla distanza media, poi risale al 25% se vicinissimo per moto fluido
                    const baseSlowdown = 1 - proximity * 0.9;
                    const reactiveMove = proximity > 0.7 ? (proximity - 0.7) * 0.5 : 0;
                    speedMultiplier = baseSlowdown + reactiveMove;
                }

                // Movimento continuo fluido
                s.mesh.position.x += s.velocity.x * speedMultiplier;
                s.mesh.position.y += s.velocity.y * speedMultiplier;
                s.mesh.position.z += s.velocity.z * speedMultiplier;

                // Wrapping logico dello spazio 3D
                if (s.mesh.position.x > 1500) { s.mesh.position.x = -1500; s.entranceFactor = 0; }
                else if (s.mesh.position.x < -1500) { s.mesh.position.x = 1500; s.entranceFactor = 0; }
                if (s.mesh.position.y > 1000) { s.mesh.position.y = -1000; s.entranceFactor = 0; }
                else if (s.mesh.position.y < -1000) { s.mesh.position.y = 1000; s.entranceFactor = 0; }
                if (s.mesh.position.z > 500) { s.mesh.position.z = -1000; s.entranceFactor = 0; }
                else if (s.mesh.position.z < -1000) { s.mesh.position.z = 500; s.entranceFactor = 0; }

                if (s.entranceFactor < 1) s.entranceFactor += 0.005;

                // Fade-out graduale ai bordi
                const margin = 350;
                const distEdgeX = 1500 - Math.abs(s.mesh.position.x);
                const distEdgeY = 1000 - Math.abs(s.mesh.position.y);
                const distEdgeZ = s.mesh.position.z > -250 ? 500 - s.mesh.position.z : s.mesh.position.z - (-1000);
                const exitFactor = Math.min(1, Math.max(0, distEdgeX / margin), Math.max(0, distEdgeY / margin), Math.max(0, distEdgeZ / margin));

                // Effetto Rotazione: Ruota lentamente di base, accelera gradualmente col mouse vicino (User request)
                const rotationBoost = isNearMouse ? (1 + proximity * 2.5) : 1; // Accelera fino a 3.5x la velocitÃ  base
                s.mesh.rotation.x += s.rotationSpeed.x * rotationBoost;
                s.mesh.rotation.y += s.rotationSpeed.y * rotationBoost;

                // Calcolo attrazione magnetica e scomposizione (Animazione fluida)
                const targetAlteration = isNearMouse ? Math.pow(proximity, 1.5) * 3 : 0;
                s.alterationFactor += (targetAlteration - s.alterationFactor) * 0.04;

                const autoCycle = Math.max(0, Math.sin(this.time * 0.4 + s.phase));
                const totalFactor = Math.min(2.0, s.alterationFactor + autoCycle * 0.3);

                const positions = s.mesh.geometry.attributes.position.array;
                const meshMatrixInv = s.mesh.matrixWorld.clone().invert();
                const localMouse = mouseAtDepth.clone().applyMatrix4(meshMatrixInv);

                for (let j = 0; j < positions.length; j += 3) {
                    const ox = s.originalPositions[j];
                    const oy = s.originalPositions[j + 1];
                    const oz = s.originalPositions[j + 2];

                    const norm = Math.sqrt(ox * ox + oy * oy + oz * oz);

                    // Scomposizione classica (ridotto moltiplicatore da 140 a 70)
                    let vx = (ox / norm) * 70 * totalFactor;
                    let vy = (oy / norm) * 70 * totalFactor;
                    let vz = (oz / norm) * 70 * totalFactor;

                    // "Mouse Gravity Pull" - Altera i vertici verso la posizione del mouse
                    if (s.alterationFactor > 0.1) {
                        const pullX = (localMouse.x - ox) * 0.15 * s.alterationFactor;
                        const pullY = (localMouse.y - oy) * 0.15 * s.alterationFactor;
                        const pullZ = (localMouse.z - oz) * 0.15 * s.alterationFactor;
                        vx += pullX; vy += pullY; vz += pullZ;
                    }

                    positions[j] = ox + vx;
                    positions[j + 1] = oy + vy;
                    positions[j + 2] = oz + vz;
                }
                s.mesh.geometry.attributes.position.needsUpdate = true;

                // Connessione Vertici -> Mouse (Animazione Animata Fluida)
                if (isNearMouse && this.mouse.x !== -9999) {
                    const vertices = [];
                    for (let k = 0; k < positions.length; k += 6) {
                        vertices.push(new THREE.Vector3(positions[k], positions[k + 1], positions[k + 2]).applyMatrix4(s.mesh.matrixWorld));
                    }
                    // Troviamo il punto di interazione 3D reale al Z della mesh
                    vertices.sort((a, b) => a.distanceToSquared(mouseAtDepth) - b.distanceToSquared(mouseAtDepth));

                    const connectionCount = Math.min(4, vertices.length);
                    for (let n = 0; n < connectionCount; n++) {
                        const v = vertices[n];
                        linePositions.push(mouseAtDepth.x, mouseAtDepth.y, mouseAtDepth.z, v.x, v.y, v.z);
                    }
                    // Muoviamo la luce principale verso il punto di interazione (User request: interazione globale)
                    this.mainPointLight.position.lerp(mouseAtDepth, 0.1);
                }

                // Connessione Shape -> Shape (Interazione globale migliorata)
                let shapeConnections = 0;
                for (let k = i + 1; k < this.shapes.length; k++) {
                    const other = this.shapes[k];
                    const d = s.mesh.position.distanceTo(other.mesh.position);
                    if (d < 500 && shapeConnections < 4) {
                        linePositions.push(s.mesh.position.x, s.mesh.position.y, s.mesh.position.z);
                        linePositions.push(other.mesh.position.x, other.mesh.position.y, other.mesh.position.z);
                        shapeConnections++;
                    }
                }

                const baseOpacity = 0.12 + (1 - Math.min(1, totalFactor)) * 0.25;
                const visibility = s.entranceFactor * exitFactor;
                s.mesh.material.opacity = baseOpacity * visibility;
                // Scala piÃ¹ contenuta: non supera mai 1.1x per interazione
                s.mesh.scale.setScalar((0.5 + 0.5 * visibility) * (1 + s.alterationFactor * 0.04));
            });

            // Aggiorna la geometria delle linee di connessione
            this.connections.geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
            this.connections.geometry.attributes.position.needsUpdate = true;
            this.connections.material.opacity = Math.min(0.2, linePositions.length / 40);
        }

        animate() {
            requestAnimationFrame(() => this.animate());
            this.update();
            this.renderer.render(this.scene, this.camera);
        }
    }

    window.bgAnimation = new ThreeAnimation(container, theme);
}


// ============ CLICK EFFECT (Cyber Ripple) ============
function initClickExplosion() {
    window.addEventListener('mousedown', (e) => {
        // Rimuove l'effetto per il tasto Platinum Bench Mode
        if (e.target.closest('#platinum-bench-btn') || e.target.closest('#platinum-bench-btn-mobile')) return;

        const container = document.createElement('div');
        container.className = 'click-ripple-container';
        container.style.left = `${e.clientX}px`;
        container.style.top = `${e.clientY}px`;
        document.body.appendChild(container);

        // Scintille Tech (Sparks)
        const sparkCount = 8;
        for (let i = 0; i < sparkCount; i++) {
            const spark = document.createElement('div');
            spark.className = 'ripple-spark';

            const angle = (i / sparkCount) * 360 + (Math.random() * 20 - 10);
            const dist = 40 + Math.random() * 30;
            const duration = 0.6 + Math.random() * 0.4;
            const delay = Math.random() * 0.05;

            spark.style.setProperty('--angle', `${angle}deg`);
            spark.style.setProperty('--dist', `${dist}px`);
            spark.style.animation = `spark-flight ${duration}s cubic-bezier(0.15, 0.8, 0.25, 1) ${delay}s forwards`;

            container.appendChild(spark);
        }

        // Pulizia
        setTimeout(() => {
            container.remove();
        }, 1500);
    });
}

// ============ SCROLL ANIMATIONS (New) ============
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll, .scale-up-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// ============ LIQUID GLASS MORPHING (iOS 26 Ultra-Fluid) ============
function initLiquidScroll() {
    // Selezioniamo tutto: menu, icone, tasti e container
    const targets = document.querySelectorAll('.glass, .liquid-glass, section, .modern-frame, i, button, img, nav, [class*="rounded-"]');

    // Forziamo l'accellerazione hardware iniziale
    targets.forEach(el => {
        el.style.willChange = 'transform, border-radius';
        el.style.backfaceVisibility = 'hidden';
    });

    let currentScroll = window.pageYOffset;
    let scrollVelocity = 0;

    // Variabili per l'interpolazione (Damping)
    let lerpVelocity = 0;

    function update() {
        const newScroll = window.pageYOffset;
        scrollVelocity = (newScroll - currentScroll);
        currentScroll = newScroll;

        // Interpolazione per fluiditÃ  estrema (elasticitÃ )
        lerpVelocity += (scrollVelocity - lerpVelocity) * 0.18;
        const absVel = Math.abs(lerpVelocity);

        // Calcolo parametri "Goccia d'Acqua" (IntensitÃ  ridotta significativamente)
        // Stretch verticale, Compressione orizzontale
        const stretchY = 1 + Math.min(0.08, absVel * 0.0004);
        const compressX = 1 / stretchY;

        // Warping dei bordi (piÃ¹ contenuto)
        const radiusWarp = Math.min(10, absVel * 0.06);

        // Distorsione prospettica (piÃ¹ leggera)
        const skew = Math.max(-2, Math.min(2, lerpVelocity * 0.012));

        targets.forEach(el => {
            const rect = el.getBoundingClientRect();
            // Ottimizzazione: solo se visibile
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                // Effetto Liquid Glass: Trasformazione + Border Radius dinamico
                el.style.transform = `
                    skewY(${skew.toFixed(2)}deg) 
                    scaleX(${compressX.toFixed(3)}) 
                    scaleY(${stretchY.toFixed(3)})
                    translateY(${(lerpVelocity * -0.08).toFixed(2)}px)
                `;

                // Se l'elemento non Ã¨ un'icona tonda, applichiamo il warping ai bordi
                if (!el.classList.contains('rounded-full')) {
                    el.style.borderRadius = `${30 + radiusWarp}px ${30 + radiusWarp}px ${30 - radiusWarp}px ${30 - radiusWarp}px / ${30 - radiusWarp}px ${30 - radiusWarp}px ${30 + radiusWarp}px ${30 + radiusWarp}px`;
                }

                // Effetto Rifrazione Alpha: le icone e i menu diventano piÃ¹ "liquidi" in modo discreto
                if (el.tagName === 'I' || el.tagName === 'BUTTON') {
                    el.style.filter = `blur(${Math.min(1, absVel * 0.01)}px) brightness(${1 + absVel * 0.0005})`;
                }
            }
        });

        requestAnimationFrame(update);
    }

    update();
}

// ============ VISITOR COUNTER ============
async function initVisitorCounter() {
    const counterEl = document.getElementById('visit-count');
    const containerEl = document.getElementById('visitor-counter');
    if (!counterEl) return;

    const namespace = "platinum-plus-optimizer-v7";
    const key = "visits";
    let lastCount = 0;

    async function fetchCount(isFirstLoad = false) {
        // Verifica se l'utente ha giÃ  visitato il sito in questa sessione
        const hasVisited = sessionStorage.getItem('has_visited_platinum');
        const mode = (isFirstLoad && !hasVisited) ? 'up' : 'get';
        const url = `https://api.counterapi.dev/v1/${namespace}/${key}/${mode}`;

        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                const count = data.count || 0;

                if (isFirstLoad) {
                    animateCount(counterEl, 0, count, 2000);
                    if (!hasVisited) sessionStorage.setItem('has_visited_platinum', 'true');
                } else if (count > lastCount) {
                    // Flash effect per aggiornamento reale
                    containerEl.classList.add('ring-2', 'ring-electric-400/50');
                    animateCount(counterEl, lastCount, count, 1000);
                    setTimeout(() => containerEl.classList.remove('ring-2', 'ring-electric-400/50'), 1500);
                }
                lastCount = count;
            }
        } catch (error) {
            console.error("Counter API Error:", error);
        }
    }

    // Primo caricamento
    await fetchCount(true);

    // Aggiornamento reale ogni 10 secondi
    setInterval(() => fetchCount(false), 10000);
}

function animateCount(el, start, end, duration) {
    let startTime = null;
    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        el.innerText = current.toString().padStart(7, '0');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    }
    window.requestAnimationFrame(step);
}

// Inizializza tutto al caricamento
document.addEventListener('DOMContentLoaded', () => {
    initClickExplosion();
    initVisitorCounter();
    initGridAnimation();
    initScrollAnimations();
    initLiquidScroll();
    initBackgroundMusic();
    initNavBlob();
    initDiscordPromo(); // Starts the chain
});

// ============ VIDEO INTRO ============
// ============ VIDEO INTRO & PROMOS ============
function initVideoIntro() {
    // 2. Then show Video Intro (only if not seen)
    const modal = document.getElementById('modal-video-intro');
    const iframe = document.getElementById('intro-video-frame');
    const modalContent = modal ? modal.querySelector('.liquid-glass-modal') : null;

    if (!modal || !iframe || !modalContent) return;

    const hasSeen = sessionStorage.getItem('has_seen_intro');
    if (hasSeen) return;
    sessionStorage.setItem('has_seen_intro', 'true');

    setTimeout(() => {
        iframe.src = "https://www.youtube.com/embed/-k4MUq3Ehv8?autoplay=1&mute=1&controls=1&playsinline=1&modestbranding=1&rel=0";

        modalContent.style.setProperty('--start-x', '0px');
        modalContent.style.setProperty('--start-y', '0px');
        modalContent.style.setProperty('--start-scale', '0.8');

        modalContent.style.animation = 'none';
        modalContent.offsetHeight;
        modalContent.style.animation = 'liquid-drop-entry 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards';

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        if (window.bgAnimation) window.bgAnimation.modalActive = true;
    }, 300);
}

function initDiscordPromo() {
    // 1. Show Discord Promo first (if not seen)
    const modal = document.getElementById('modal-discord-promo');
    const modalContent = modal ? modal.querySelector('.liquid-glass-modal') : null;

    if (!modal || !modalContent) {
        // Fallback if missing
        initVideoIntro();
        return;
    }

    const hasSeen = sessionStorage.getItem('has_seen_discord_promo');
    if (hasSeen) {
        // If already seen promo, try video intro directly
        initVideoIntro();
        return;
    }
    sessionStorage.setItem('has_seen_discord_promo', 'true');

    setTimeout(() => {
        modalContent.style.setProperty('--start-x', '0px');
        modalContent.style.setProperty('--start-y', '0px');
        modalContent.style.setProperty('--start-scale', '0.8');

        modalContent.style.animation = 'none';
        modalContent.offsetHeight;
        modalContent.style.animation = 'liquid-drop-entry 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards';

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        if (window.bgAnimation) window.bgAnimation.modalActive = true;
    }, 500);
}
// ============ NAVBAR LIQUID BLOB ============
function initNavBlob() {
    const container = document.getElementById('nav-menu-container');
    const blob = document.getElementById('nav-blob');
    if (!container || !blob) return;

    const menuItems = container.querySelectorAll('button, .platinum-switch-container, .android-btn-nav');
    let lastX = 0;

    menuItems.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            const rect = btn.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            const left = rect.left - containerRect.left;
            const top = rect.top - containerRect.top;
            blob.style.left = `${left}px`;
            blob.style.top = `${top}px`;
            blob.style.width = `${rect.width}px`;
            blob.style.height = `${rect.height}px`;
            blob.style.opacity = '1';
            blob.style.transform = 'scale(1)';

            const currentX = left;
            const delta = currentX - lastX;
            if (Math.abs(delta) > 5) {
                if (delta > 0) { blob.style.borderRadius = '60% 40% 60% 40% / 40% 60% 40% 60%'; }
                else { blob.style.borderRadius = '40% 60% 40% 60% / 60% 40% 60% 40%'; }
                blob.style.transform = `scaleX(${1 + Math.abs(delta) * 0.002}) scaleY(${1 - Math.abs(delta) * 0.001})`;
                setTimeout(() => {
                    blob.style.borderRadius = '999px';
                    blob.style.transform = 'scale(1)';
                }, 300);
            }
            lastX = currentX;
        });
    });

    container.addEventListener('mouseleave', () => {
        blob.style.opacity = '0';
        blob.style.transform = 'scale(0.8)';
        setTimeout(() => { blob.style.borderRadius = '999px'; }, 300);
    });
}

// ============ PLATINUM BENCHMARK TRANSITION ============
document.addEventListener('DOMContentLoaded', () => {
    const desktopTrigger = document.getElementById('platinum-mode-trigger');
    const mobileTrigger = document.getElementById('platinum-mode-trigger-mobile');
    const pageTransition = document.getElementById('page-transition');

    const startTransition = () => {
        // Delay per far vedere l'effetto fiamme sul tasto
        setTimeout(() => {
            if (pageTransition) {
                pageTransition.classList.remove('android-mode'); // Reset background to default (Red/Black)

                const logoImg = pageTransition.querySelector('.transition-logo');
                if (logoImg) {
                    logoImg.src = "./image/platinum-mode.jpg";
                }

                pageTransition.classList.add('active');
                // Minimo 5 secondi di caricamento per l'effetto ventola+fuoco
                setTimeout(() => {
                    window.location.href = 'pc-1.html';
                }, 5000);
            }
        }, 600);
    };

    if (desktopTrigger) {
        desktopTrigger.addEventListener('change', (e) => {
            if (e.target.checked) startTransition();
        });
    }
    if (mobileTrigger) {
        mobileTrigger.addEventListener('change', (e) => {
            if (e.target.checked) startTransition();
        });
    }

    const androidButtons = document.querySelectorAll('.android-btn-nav');
    androidButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetHref = btn.getAttribute('href');

            if (pageTransition) {
                // Rimuoviamo eventuali classi residue
                pageTransition.classList.remove('active');

                // Aggiungiamo la modalitÃ  Android (Sfondo Aqua)
                pageTransition.classList.add('android-mode');

                const logoImg = pageTransition.querySelector('.transition-logo');
                if (logoImg) {
                    logoImg.src = "./image/Platinum+ Optimizer Android Logo.png";
                }

                const statusText = pageTransition.querySelector('.status-text');
                if (statusText) {
                    statusText.textContent = "Inizializzazione Sistema Android...";
                }

                // Avviamo la transizione
                pageTransition.classList.add('active');

                setTimeout(() => {
                    window.location.href = targetHref;
                }, 4000); // 4 secondi per apprezzare meglio l'effetto aqua
            }
        });
    });
});

// ============ WATER DROP RIPPLE EFFECT ============
document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.ripple-trigger');
    if (trigger) {
        const rippleContainer = document.createElement('div');
        rippleContainer.className = 'click-ripple-container';
        document.body.appendChild(rippleContainer);

        const ripple = document.createElement('div');
        ripple.className = 'ripple-ring';
        ripple.style.left = e.clientX + 'px';
        ripple.style.top = e.clientY + 'px';

        // Personalizzazione colore per Platinum Bench (Rosso)
        if (trigger.id === 'platinum-bench-btn') {
            ripple.style.borderColor = '#dc2626';
            ripple.style.boxShadow = '0 0 30px #991b1b, inset 0 0 15px #dc2626';
        }

        rippleContainer.appendChild(ripple);

        setTimeout(() => {
            rippleContainer.remove();
        }, 1200);
    }
});

// ============ BACKGROUND MUSIC SYSTEM ============
function initBackgroundMusic() {
    // 1. Create Audio Element
    const audio = new Audio('sound/music.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    window.bgMusic = audio;

    // 2. Inject UI Button into Navbar and Mobile Menu
    const containers = document.querySelectorAll('#nav-menu-container, #mobile-menu');
    containers.forEach(container => {
        // Prevent duplicate buttons
        if (container.querySelector('.music-toggle')) return;

        const musicBtn = document.createElement('button');
        musicBtn.className = 'music-toggle';
        if (container.id === 'mobile-menu') {
            musicBtn.style.margin = '1rem auto';
            musicBtn.style.width = '100%';
            musicBtn.style.borderRadius = '1rem';
        }

        musicBtn.innerHTML = `
            <i data-lucide="music"></i>
            <span class="music-label hidden">Sottofondo Musicale</span>
            <div class="music-waves">
                <div class="music-bar"></div>
                <div class="music-bar"></div>
                <div class="music-bar"></div>
            </div>
        `;

        if (container.id === 'mobile-menu') {
            musicBtn.querySelector('.music-label').classList.remove('hidden');
            container.appendChild(musicBtn);
        } else {
            // Desktop Navbar logic
            const group = container.querySelector('.group');
            if (group) {
                container.insertBefore(musicBtn, group);
            } else {
                const backBtn = container.querySelector('button[onclick="goBack()"]');
                if (backBtn) {
                    container.insertBefore(musicBtn, backBtn);
                } else {
                    container.appendChild(musicBtn);
                }
            }
        }

        musicBtn.addEventListener('click', toggleMusic);
    });

    // 3. Persistence Logic
    const savedTime = localStorage.getItem('bg_music_time');
    const isPlaying = localStorage.getItem('bg_music_playing') === 'true';

    // Start with last time if available
    if (savedTime) {
        audio.currentTime = parseFloat(savedTime);
    }

    function toggleMusic() {
        if (audio.paused) {
            playMusic();
        } else {
            pauseMusic();
        }
    }

    function playMusic() {
        audio.play().then(() => {
            document.querySelectorAll('.music-toggle').forEach(btn => btn.classList.add('playing'));
            localStorage.setItem('bg_music_playing', 'true');
        }).catch(err => {
            console.log("Auto-play blocked, waiting for interaction.");
            // Wait for first click to start
            const startOnInteraction = () => {
                playMusic();
                document.removeEventListener('click', startOnInteraction);
            };
            document.addEventListener('click', startOnInteraction);
        });
    }

    function pauseMusic() {
        audio.pause();
        document.querySelectorAll('.music-toggle').forEach(btn => btn.classList.remove('playing'));
        localStorage.setItem('bg_music_playing', 'false');
    }

    // Update time in localStorage
    audio.addEventListener('timeupdate', () => {
        localStorage.setItem('bg_music_time', audio.currentTime);
    });

    // Handle initial play (browsers requirement) - if it was previously playing, try to resume
    if (isPlaying) {
        const startPlay = () => {
            playMusic();
            document.removeEventListener('mousedown', startPlay);
            document.removeEventListener('keydown', startPlay);
        };
        // Add listeners to document to capture the first user interaction
        document.addEventListener('mousedown', startPlay);
        document.addEventListener('keydown', startPlay);
    }

    // Refresh Lucide icons for the new button
    if (window.lucide) {
        window.lucide.createIcons();
    }
}