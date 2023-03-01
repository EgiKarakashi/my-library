# Vështrim i përgjithshëm
Aplikacioni i menaxhimit të bibliotekës është një sistem i bazuar në web që u lejon bibliotekarëve të menaxhojnë librat, huamarrësit dhe huazimet në një bibliotekë. Sistemi është ndërtuar duke përdorur Node.js me Express për backend, dhe React për frontend. Aplikacioni përdor vërtetimin e tokenit JWT për autorizimin e përdoruesit dhe MongoDB si bazën e të dhënave.

# Veçoritë
Aplikacioni i menaxhimit të bibliotekës përfshin veçoritë e mëposhtme:

- Vërtetimi i përdoruesit: Përdoruesit mund të regjistrohen dhe të hyjnë në sistem duke përdorur emailin dhe fjalëkalimin e tyre. Fjalëkalimet hashohen përpara se të ruhen në bazën e të dhënave për arsye sigurie. Pas identifikimit, përdoruesi i lëshohet një token JWT, i cili përdoret për thirrjet e mëvonshme API.

- Menaxhimi i librave: Bibliotekarët mund të shtojnë, modifikojnë dhe fshijnë libra në bibliotekë. Çdo libër ka një identifikues unik, titull, autor dhe datë botimi. Bibliotekarët mund të shikojnë gjithashtu një listë të të gjithë librave në bibliotekë dhe të kërkojnë libra të veçantë bazuar në titullin ose autorin e tyre.

- Menaxhimi i huamarrësve: Bibliotekarët mund të shtojnë, modifikojnë dhe fshijnë huamarrës në bibliotekë. Çdo huamarrës ka një identifikues unik, emër, email dhe adresë. Bibliotekarët mund të shikojnë gjithashtu një listë të të gjithë huamarrësve në bibliotekë dhe të kërkojnë huamarrës të veçantë bazuar në emrin ose emailin e tyre.

- Menaxhimi i huasë: Bibliotekarët mund të krijojnë, modifikojnë dhe fshijnë huazime në bibliotekë. Çdo kredi shoqërohet me një huamarrës dhe një libër, dhe ka një datë afati. Bibliotekarët mund të shikojnë gjithashtu një listë të të gjitha huazimeve në bibliotekë dhe të kërkojnë hua specifike bazuar në emrin e huamarrësit ose titullin e librit.

- Rolet e përdoruesit: Aplikacioni ka dy role përdoruesi: bibliotekar dhe administrator. Bibliotekarët kanë leje për të menaxhuar librat, huamarrësit dhe huazimet në bibliotekë, ndërsa administratorët kanë leje për të menaxhuar përdoruesit, rolet dhe lejet.

# Arkitekturë
Aplikacioni i menaxhimit të bibliotekës është ndërtuar duke përdorur teknologjitë e mëposhtme:

- Backend: Node.js me Express
- Frontend: React
- Baza e të dhënave: MongoDB
- Aplikacioni ndjek një arkitekturë API RESTful, me frontend që bën thirrje API në backend për marrjen dhe manipulimin e të dhënave. Pikat përfundimtare të API sigurohen duke përdorur vërtetimin e tokenit JWT, i cili verifikon vërtetësinë dhe autorizimin e përdoruesit që bën kërkesën.

### Backend përbëhet nga disa module, duke përfshirë:

- Moduli i vërtetimit: Trajton vërtetimin e përdoruesit dhe lëshimin e tokenit
- Moduli i librit: Trajton krijimin, rikthimin, përditësimin dhe fshirjen e librit
- Moduli i huamarrësit: Trajton krijimin, rikthimin, përditësimin dhe fshirjen e huamarrësit
- Moduli i kredisë: Trajton krijimin, rikthimin, përditësimin dhe fshirjen e huasë
- Moduli i përdoruesit: Trajton krijimin, rikthimin, përditësimin dhe fshirjen e përdoruesve
- Moduli i roleve: Trajton krijimin, rikthimin, përditësimin dhe fshirjen e roleve
- Moduli i lejeve: Trajton krijimin, rikthimin, përditësimin dhe fshirjen e lejeve
- Pjesa e përparme përbëhet nga disa komponentë, duke përfshirë:

#### Komponenti i hyrjes: 
    Shfaq formularin e hyrjes dhe trajton vërtetimin e përdoruesit
#### Komponenti i menaxhimit të librit: 
    Shfaq një listë të të gjithë librave në bibliotekë dhe lejon bibliotekarët të shtojnë, 
    modifikojnë ose fshijnë libra
#### Komponenti i menaxhimit të huamarrësve: 
    Shfaq një listë të të gjithë huamarrësve në bibliotekë dhe lejon bibliotekarët të shtojnë,
    modifikojnë ose fshijnë huamarrësit
#### Komponenti i menaxhimit të huasë: 
    Shfaq një listë të të gjitha huazimeve në bibliotekë dhe u lejon bibliotekarëve të shtojnë,
    modifikojnë ose fshijnë huazime

# Konkluzioni
Aplikacioni i menaxhimit të bibliotekës është një sistem i fuqishëm që lejon bibliotekarët të menaxhojnë librat, huamarrësit dhe huazimet në një bibliotekë. 
Përdorimi i Node.js me kornizën Express për pjesën e pasme, dhe React për pjesën e përparme, ofron një arkitekturë të fuqishme dhe të shkallëzueshme. Përdorimi i vërtetimit të tokenit JWT siguron autorizim të sigurt të përdoruesit dhe përdorimi i MongoDB si bazë e të dhënave lejon menaxhimin dhe kërkimin efikas të të dhënave. Në përgjithësi, aplikacioni i menaxhimit të bibliotekës ofron 
një përvojë të pandërprerë të përdoruesit për bibliotekarët dhe huamarrësit njësoj.
