'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "64d42024f1a77ee5e61e4096bdebac78",
".git/config": "4748976379a23f9405de3b468b4e0c47",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4aab3a4540cdbe9534fec801c8117d1e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "402a5fccb21502f0d8da94b8d0ca8ca6",
".git/logs/refs/heads/master": "402a5fccb21502f0d8da94b8d0ca8ca6",
".git/objects/00/b662c5d69f1a081efb00488c21803e2c10c302": "b2addf0a37e39e4ee999813cb05f896a",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/02/d73e6deafba5aa7a8905486609a80b343bbca1": "4fab31d5d199bc990e05d2c52c1e9c6a",
".git/objects/0a/d08bbb37da3049c64beb06ae04042e1f5b3355": "93313c96ef4743697cd56c20aca41382",
".git/objects/0b/9eadaa9c489dbb6130535481036b2313badbc8": "0e7d63b8700ae5c0af690ea37f81341d",
".git/objects/0d/57f936c8bea0d4f7703f2258d8d32c4f1c26ae": "4c7681755ccd78908f87dabe4ffe087f",
".git/objects/0e/e5b529d85ae2db206810a215e482383fa80c22": "2b6f77f7338ef2218ad8c62220ef7723",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "6655e717f185770489b36816ed0d52de",
".git/objects/10/af8062af1b306789cb77dc1edc4ae718376454": "2627960205f7b4effbc7615c941b8ef8",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/14/163d46782cd0620d71e79916678f20aedea355": "952dbc5cabb1e2955dd69c406a916bd0",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1b/d21e179ee31430e04a094c5b2f7190128d739f": "05540cac5fb6a936bafb9fb2e49364e3",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/1d/9c6ee0c66d786a8ce761f5711441db600ca5a9": "51a8aafa2a6c4017b7233dcfec7ef055",
".git/objects/1e/3dd295bf4b83d4aed3e3393a1e7c9f5499c38d": "60058649afb3ea2d2830a7bda550eaab",
".git/objects/1e/6bd9528cba394e36a3c1e00283610558717543": "7fb25d1d0f69ec7dbf2d77691eb88bc1",
".git/objects/1e/d1727b194b924442d38111644466f5b7d6c0e0": "452a24825564e6750fcfc6d6c0d814e5",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/20/1358795b8304d88617d407c2ee6f1bcd20f5ae": "6020746091226babdc7310a716d90bb9",
".git/objects/20/8d8857840310a4b1d0287a6e8af90f3ae8f0c8": "6cb4cd0e485d6c7ea90a48013c2bbcf6",
".git/objects/21/162a3b818c5a9e14c97d761510fa2051c9f3bd": "de9536ba506b7a8ba3e603ea39090a55",
".git/objects/21/1bf685195d081d8ffc9a281a3fcf70dae6babf": "585166998f62345ac70a102ea006e224",
".git/objects/25/4c34088fe9ce471eee5765e8a173a1fecff9ba": "bd871d27284799fdbe0f18825c465dba",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/26/cb8c6c67a8f6815d27e63c0e606077c26cb606": "2a322058760a759bd2ffa4de0a93e58e",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/2a/d5bafbaf06ced61eab12c1f88be3f186ed7166": "2b506ea4515ef7d16f50076e6117cac1",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/07b0ed78c0b865add2ea5cb976de8f5ea09f46": "b1808fc106123376f7432a937f5495b7",
".git/objects/2d/4da3a6e2a5197fe039e41aaf27f60fe6a58409": "64d75ca7ed10dd24544efad0955dcfee",
".git/objects/2d/583c7dc55bc37f8d5298b0cd48c1e108adef52": "5b7df31ccc8494f4da0573cd4b1777bb",
".git/objects/2e/a4492773f165e9525502359a515334f327f4ef": "170df5eba49dbf0dcc8e33a4f598cf3f",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/2f/a8d7c21ea1563513ddb53e866022bf8906e7ae": "65b57405543a3986503a69a4a0822176",
".git/objects/32/9b460d3be034a18394166dfa2534e8365faad7": "6a736b93b2f4e9d39fbd1766b762937b",
".git/objects/33/967a1d194b5bbe4ed4087f507d331fa0dd085b": "3ba0195f9a41625c81ce8c4b27af6ee4",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/33/eba8b192384487f04951539f13bf1f8dd9f9cb": "8b147483b254a82db0bcaf9f71cd7f6b",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/36/db45dffd7afc2f923211fa13e2f6af8619362f": "8358e82f0c81a591cc1d33e44ef0d0f5",
".git/objects/37/eecce7010fe62b00ff7d0c3f782609d90795d9": "57e66c18bbbc93e30a7ad2bea1faf4d7",
".git/objects/39/ebba955401a7709183bab3c6422ab1d71f4491": "ab6104a580fdf0aadbe380965288d765",
".git/objects/3b/d1c648c459465bec25b5e0ff79a78b1b360183": "7a99683074c321b9192548fe934989bc",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3c/f5825302d72a4f0be85784f4524560a6a15ebe": "dfb37a1646e1467597b6e3e8b89c150d",
".git/objects/3c/fc2f3273121b6920275ad25052be2b8b562269": "bab22b5f62a8dd0b289f4486f47980ce",
".git/objects/3e/ef9e62502e5caf6613ed8dc5de54981c523b52": "92bc876fcc3e6239d908387a5a98d2b9",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/42/8b5bee5dfa11039958d985ddcb89310edcaaff": "f8074a080ad40a7bdd72c1f980bacde3",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/43/ad143ee4d50163153b276a14528cfff03fa9c1": "40bb3d7598cc9e802b877155c6c47fb3",
".git/objects/44/bc8e935571e4d0ac57837ffd3ae67092a703f4": "b5d3f51ab3bb328af6da362e1dc8a554",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/45/beab4f63f9a712e3beaf114ab51f9f45e58830": "c971d879cc237064f097720beea3c32e",
".git/objects/47/986e6f3379a0f4cbba6b264d8c4315de7da6dc": "96929d7fcb4d63ca01c72724b1bbe167",
".git/objects/49/0939f9513f5224155c082929fe3fb2f7d35c45": "408e432647bf58d721171b82d019bb49",
".git/objects/4a/5a7e99f492a3463a813554ed59bd3b29b993b1": "c73acd3db26803abcfa3df51a8278f63",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/4d/791b9626f829a9f0e9179f8f3bd01cf7376c41": "ee1b8a4a50023937581740ce8ea6c735",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/4f/40b2adc6102193b63bb22897f6dda1820b7ee9": "f0318a2c0f14023c14e437c594756d52",
".git/objects/4f/4c35992032bc0dd2a09b2d92f51759ebc82e67": "8572ab364405abec769ac345a80d5a09",
".git/objects/50/0e2794d9f1bb782464b441c9a28069a01aa879": "59426e781c253d6321defd028d3bbe8c",
".git/objects/50/7305270833888c4d7b2aa7e3289770654a26ce": "78d84d4b9ca83bdac54aa0362b8b501d",
".git/objects/50/88a8eafbdd1faaef59474029ddef305c30e92c": "a2fe7051ffdcb783754ff6563fa9a772",
".git/objects/51/3b13f618ccba12e988b407ac9a09613cdc2090": "32a80c198b50a0ceaf647af62acfcc20",
".git/objects/51/db7b06704b69c7579220024a9e4472b0efa4d4": "50dbff61cdd2418887daef62d5ba9580",
".git/objects/53/9f78aa4efc19651dd8fa4f5a3e1769d87d603d": "0ee30d7e137754cb44da075d28dda9f5",
".git/objects/58/18a71f2d9a0dd377346f5e88ec2b9ba2b911d2": "7b6a1b8de30525ef9fd61a56afb46c29",
".git/objects/58/4d8b1d1b1e71286425ef97c795fe263c22c648": "16ecd292973a210c7fc71677e3c2349d",
".git/objects/5b/ea5d8b0260905b6c1a734d9f651eb485abc266": "baa7275114bc4f506398b9a224fce8e9",
".git/objects/5c/141711822b4206d4251ef2c64a64da22518b1b": "2d068379ab2c4983dc46ce94be33b17d",
".git/objects/5e/35e65b7fd650df01ad1de21e4f13f1e10aa0fd": "578adb7e42efb86aa134b9d87d201d8d",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/62/a1397b2183a9246fa72e127a92103e9af188c1": "a65afbcf8e26b19995e3c3ace7b44091",
".git/objects/64/234b51dbf60103989bea11b5ba31f4c4ae9a17": "83e61f48d14baff1372370d39a6d7ccd",
".git/objects/67/459b35a36bfb2cef68878ce2fd30b2b597e91a": "4b3169cc71af36b237a1446130a7ba92",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
".git/objects/68/5d04b99ee90f69e8bc6cb56639de931247f869": "7f1fcf13a40e38c36c36f97be70e80f3",
".git/objects/68/640cab543fbabdfc6cd52621397d5b5d765762": "9fdf99fcf33d62b9d75a1472722ceca7",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/6b/33697dc38686654521d6e28d2a6ef810b2d2ce": "de7cf145bda01ed7cf0aabc7844741df",
".git/objects/6b/d9a63e5a834d23e554cd5a5b06f8aaf934db00": "710b6c151c49b8bd382cc9dee96bb75f",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6c/fa9d09b8a0f64981607bd444a500c4deca9e6a": "e42bf78de86a96ddbef153967c7dcdc1",
".git/objects/6d/7540343d08ff530ed5f552556d037c04446ca1": "c1c1594dae5887902be585dbac2cb0a8",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/70/e2a70d9cfe4233363a3bf19dcad239fdb58942": "c52311bb70912b457d1f56226fcaa773",
".git/objects/73/fe12a851545dbe402b4bca00889c2cf4676b7a": "f0ba6cc056faada297069c1e4a118299",
".git/objects/74/16a46a8590eaa70846ab37325c3639611d9733": "83237cc34c3adae7d41ab0b783147250",
".git/objects/74/40acd38824f4ab2c88b277edf68c56d666c46c": "bd541a85555599864de5d7694c9e8956",
".git/objects/75/a640ace9dfdb7fa534756c7415d37789cef412": "a18e07d845055d3b4d84ca9d23c58744",
".git/objects/75/dccf3156f77002f47e39d90de32d41645f7e32": "41c9684a59b97a88f8b4e45d6f24e6bf",
".git/objects/76/130a4090e7c0c47e1e71c92b54a48c9fa41b2a": "a083aa3a4343e1137a8c4bb51676fb1b",
".git/objects/76/97392e29cb47a2ac5979228ad621317a690ab8": "987f387590983031f8718aedaa08f503",
".git/objects/76/c5da731afb9bfd70dba60f32cb798456fef802": "12997b7f3844ffd11cbae65bb69af949",
".git/objects/78/16c9dac384e388cb402c918039253f18f5bc09": "e6e3776eb073db38b7f3b0748432b2fb",
".git/objects/78/1e4f20b003dfde2785b353690c650f53169f0c": "0612b6667402e4c3d88cce4bfede7665",
".git/objects/78/90fe66b39068e1249c8d02fd514f25fad9e805": "f021fd4799a3686863368a586e04abf2",
".git/objects/78/abd5560ae03acfbb128cf1b0bd22ad3ed5a7ab": "7fae6326c0059bb7d157ba7be9475f6e",
".git/objects/79/6a150e0b9d01371a976b7702936bf96f84b755": "4baf756156e3be156bb8d7109e24448a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/7cd37b4540d0bb662ac4a1286f26dd05fd987b": "efb7cc9e37b0fb902f020d16b1ceeef1",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/7c/06ec2f7f7de6aae443ce64d8a39316bfa18742": "5d2b79b8f3cd9cc38c1d919e5a5f12d4",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7e/ad719f21e704f02f1ffd8fa69f39e0b77e277e": "efdb25599abfccbc83c5ca14c1913f05",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
".git/objects/80/75117cc4c2f79c659b332397b5459260852c28": "e42c7d3565a2ec023cc6fe16bed68cce",
".git/objects/81/af2993f85e3c815439de7948c7e8003f68f2cb": "fe26c09dd99000704e3bb0bf33377745",
".git/objects/81/f6d5c668d255f43d05a94195c13e11acff85d1": "7e18c6fc180f3ba75221279ec5670aa9",
".git/objects/85/4354beb6a535f6b5d5c11538c35061b13232a7": "2a13e369db4a5b92c6408b554940dd09",
".git/objects/86/ba186f83349477d8c368649e549612d5e0200e": "220743a7a13706f6dcc086792c48b3e1",
".git/objects/86/c9a777ba4979dc48c7ec0b368682b94003838b": "52edc12ce95826cdcec84a70cab6fe7f",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/8c454fb6fe50c7f05cdc2db89df05001d7789a": "f59660eb83869db55bb29a29b3834420",
".git/objects/89/b9f9383d8173a395e7dbe37294f23782cdb210": "168f459c021f489e17c2b8fd5f930572",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8b/230a13844d73d819ee356e40deb5fdcf32ed4e": "64ded69fc74688fbc85c0138fce4e104",
".git/objects/8b/ca00f4ab6cac7f16aa18414f0a1fd285eb79ac": "04ca59b73119e1ca56fd86958cf639f5",
".git/objects/8d/c2b1e0bef4703f8e38263639d1b9978c2b1f37": "1896a921a0cf515ff1f31358b79aee76",
".git/objects/8e/10ea13526c14750b9e43d95f1e35fb637adbd7": "bb9212b10e3fde3335da7464ae513097",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/90/36c46e77638a69ebc5aee3bd85e81087e2e83c": "a03e7ca2d179d68cffe4578c61d1088c",
".git/objects/93/29be506b2ac73d3652266c3e3f93fb36b18600": "3da16e3d8802fca930f64bc41021c151",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
".git/objects/94/8f9ea494fbdd8b6acc84be11e054f78f8d87d3": "876a8a485acc118b74f05718a0951041",
".git/objects/94/eb3f9ce0d1e9053d4f46b68a762fb8908a7081": "b7044199a3003de97d817a8152398f8d",
".git/objects/95/5f072ec900eabbc1bbca6c67850f7cba7d6eeb": "a2a8f692840cf6259aa884e619fff569",
".git/objects/95/b3f7fec5c5feedcedfff58b6ad95634cfbbfd2": "aaaa8680773ebf8859778c20d83c0dc6",
".git/objects/96/fabd865df70de92f2a4bdc24d65306759fe726": "acee954947925b2d83e3eeda8a93eee1",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/99/6aae3248b6e9d2d43d2ad1bccb5c942f50402b": "36932321d8de5e3b0cfb48f4252c3d04",
".git/objects/99/e10258a9811579614fb1fa57767d4484e5136a": "e39d08a27234d8b5d0ab540a07273814",
".git/objects/9a/5283756799f81ccd112043db1174cf4cc8e9f2": "28014e10e802ddd5045f3ce80bb75ba9",
".git/objects/9a/660922fb27a27d0c3d82c7dea3c3f1c01fc652": "f6f307c69cde605592b84bb886138d78",
".git/objects/9b/72b3d21a4cd0e7dd63974643e58d5e8277e58f": "0e9a7ffa4971ef3c70748625fca41548",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/9e/937192c6a5eb99c82b70697f33d3f6b5f000f2": "dae9e65bb5239374099b0d288e0ccd28",
".git/objects/9f/7e49afc73f02f943b2ec7391a445f37ea15953": "538283e0d2dafabd392b45d7f99b291b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
".git/objects/a4/7ceceac25fbcf7acdf878111fe88ee6c02701a": "881e92e900351b67376250b66b94b5f5",
".git/objects/a8/67118deeb38ad6cc51ec412644a5eb828d62ed": "c1c42bb1814fc433b24e688f732d6488",
".git/objects/a8/aab0ea8f8e1716a6abda31d53c5f895868d4d6": "bd53e48449f5f842b5f0fadfa8236840",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b0/4ee2f529aac1992e6ed98e99a5f405784c2924": "b765255bfdd8ec84e04160fa9756c9ca",
".git/objects/b2/298bf1d8c41ea1516d358bcff57674fb2b93f0": "8faff0b25eb498b383c7d4dfb2770d6c",
".git/objects/b4/767e9a9782ef846346face75bb3dacf4a390ec": "c64db0247c24e3483c98c784549258ac",
".git/objects/b4/df5e44a9f7ccb1e41d4c16691818344e7e82df": "8fceeca69466139a7635f3bc0c8254c1",
".git/objects/b5/46b17544ba4386fee8dc1e7997a5caccbea6bf": "5ca02bbc15a07a9d30db0e400eb92db0",
".git/objects/b5/ad0d404617db29cb02cee63794d2a9d051c7b3": "b2daed000dd30a7a3cb7039af101df47",
".git/objects/b6/11200382c566cea2c07cfcf62d73680d4ae84d": "3efe20650b0eec5fd656a4e78777116b",
".git/objects/b6/3a14d6aeec11bce432820914e73db28e489634": "5396eaefc7f924544faf65ad35982038",
".git/objects/b6/b81563c6dc47fca7d5bfcd66855b6379a45167": "2c1b8e6cfbaeb6471623b700d6a28c94",
".git/objects/b7/1acd6de13d052945eb485c3ae2edc33bce0b67": "dcb8ff352ef18f1c8e44aa70c18eb892",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/55b52d7801667f53bd276b08f505da6c76341a": "4dabc14733d4c7a99f25f7642a67c60a",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/ba/b87db5c8da9aecba5ef860322d01bfcec39a55": "f317b363e27d0ce8289f1dace3f1c07d",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/be/7b4f32015c0cb6a4ff2a95aeb5f159faee894c": "c2afa942990caceb7c9ffd5e15a32f0f",
".git/objects/be/a88e1bb6680acedde5301d5f2d414f030a2bcc": "c63f99a3d1982c73c6995bc2dc1491d2",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c1/efe7ca0658e58eca6a9b5d57dd0e3fbd2f3b7c": "911d8df705329a0f73a391fb465a5358",
".git/objects/c2/c896c07b55313b84d7c7fd44ae21b0f69288a9": "6849a941a374d00d72b257091c8012fb",
".git/objects/c4/be64c60f70d0a68de1982afc8900152775cfac": "dffaec393af02b6d367bf12d874c6d19",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/c7/0cca75c9344c1652b59f184fe8d14286603b04": "3ce0412191be89cb707e329c41a15099",
".git/objects/c8/7050e23436a4aea9d1a3a7a70d394d58505965": "cd18d1d3df73e90fbc6513d1bcf36721",
".git/objects/c8/8f2be2d763c17bbcf00749f1cb4404d1eb391b": "8b44cd5a08a2db0bcf708a6fa95e9b30",
".git/objects/c8/a54b8d9dfe0d5b33d294110c7b6e43acc1b8cf": "187cb0b602b009013a2a0a5fcd58fbca",
".git/objects/c8/df92b853992397794e13e57140bbab28367e15": "4e587a7e4ba7acfc9ac1796c5c862e78",
".git/objects/c9/ec6d9923972809663152bfff5f2e0a813b8324": "ca6037737464bf5848b6e7cdcad4d5b3",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d2/6c784262dee2d64ec79df7ab5c008a94e49fca": "dee4b79a18476810123c4cdebc667d7b",
".git/objects/d3/280b0665d2b550ad05abc718425a18ffdaa6e3": "c40c9e78c59acbd92dd570a3eedd14f9",
".git/objects/d3/358bc4ce4b8044bdc05c8a29a786e8bc46fdac": "92fc068b8a839ec065f52cc9cab20420",
".git/objects/d6/8f78a89e8db6ff5b1eda91e9a468a67d209fd4": "b0a03cc7a1a8186749cbd3ffbe9df25e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/da/f9d6ed010d5cdce302b4c4030c29faf6afb78c": "749505431190cff2c1d9d681a7a152bc",
".git/objects/db/609d34ecc97fa1c854324f21c66cf911a7dda7": "ac92785d249702b7c9757eb6c1a9c7ea",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/6fcb9d61297cff9f716cdc9fbd4da6268d7815": "89a94c3f6717249989f0f50a0a2260c7",
".git/objects/df/dc5578b209ed29b30d7e21a181c22d5a45b7ed": "72e57f905c6bb529e2656e310b81340e",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/7548ca4e0a5f3f1b060faaf8e4c144010ca889": "1a7db3dcdaf6322c2c304b2f7212fabf",
".git/objects/e2/b05119fa464c6ce2f6d383f6647d2423684cbe": "6bdf94f93252b822a107b6d85635b5d2",
".git/objects/e4/1c820bf1bf5159c5de0898d44c1a835f428f80": "88f51391db0f49a84a65991da96928b5",
".git/objects/e4/7c33654e3ecf2677d9bd7ea2df812c7e65e2ff": "3c8183afdc3020be09070caeb3498881",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e8/5ff71ec37b2f78203159b16c6ad7dcc4f8d25c": "53877e30cdeca375db43c93b207d5ead",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/e8/a3419cad9003d1bcc92aaf005563ae37b26e33": "f94ce9504d656fa59c2e5c4b6701a8d4",
".git/objects/ea/a8fc6ce8df58ca06c3b5120a9240c0218be3f7": "8eb72b7dc2a11c22f3e86a38e2c2dde4",
".git/objects/eb/1c54ebb1a238bf0a69b21bbeebd05247bc14dc": "5396da112a7a463a78f0d181e0335c7b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/8becfdfafece9c2f4324eea53f0cd916e28051": "3a3fed21e7813e904c814357c28f9855",
".git/objects/ef/3ee41745e7248d73d246212060675863a67308": "12c3965a07c16ad04e8071a44585bc1a",
".git/objects/f3/612277ac2ce3436f3eec0b2ee357575a3efbd9": "aa3d50c22bf6c789e7ec423115fc670d",
".git/objects/f4/7514337a529e704bcad38763a549cd96817939": "5d1774ad10b1413db4d4a2c77c187b13",
".git/objects/f4/7b62966ea80bdb61666a7bf7c18e36897080f2": "257f55f134ebbdd0ecbaabc0eb565223",
".git/objects/f4/fd8ae290b2a0c2634b3740ed14b5923ffaf0fd": "87823977459e9e1750dda05222f590ca",
".git/objects/f5/6327ad570200044483d9f8f4ce5a3d6f5288d4": "a5092124a6680e177ab6f4d11dc5a71d",
".git/objects/f5/676f56ad684711f1dca1d4961703bd86527c23": "26813ce44a6e93fc088a863af73d4d77",
".git/objects/f5/8875a55e4cf764d1f04c4d188147937a794eb6": "bfd62d77a59607c24adcc366daf5562f",
".git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "50b1229f40423533da8629dc65d38889",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "8cd8693ced3c797431323a7707d38029",
".git/objects/fd/510907fd5cdc9a5f5da6abc3bfdf6e8ad5d9f2": "8ca018b938c7d9a9286c758a6b20e1ff",
".git/refs/heads/master": "fdbd620a9a03f9d7af5a6d560191c225",
"assets/AssetManifest.json": "7446a69f827f5db382d38ce1b2ba092e",
"assets/assets/animations/checking-out-online.json": "cd8a66c797ed824cecdd17c64812dc52",
"assets/assets/animations/driver-in-store.json": "2162ce2ca19633d6e2aac52a9137a535",
"assets/assets/animations/ecommerce-mob.json": "cd3b2f279757fa1e0c776d36f7c50a23",
"assets/assets/animations/ecommerce.json": "57dd919c76e862b91ffc5d5a2c0a558e",
"assets/assets/animations/grocery-basket.json": "0428ea564ae22b0e1f77706c13f4b4bb",
"assets/assets/animations/loading-cart.json": "891b52947baf38ff542d01b7ea6b9a59",
"assets/assets/animations/man-online-shopping.json": "a6245acfc49916e92cb0f15fb6e72784",
"assets/assets/animations/mobile-discount.json": "c26360c2bebf6f0812ae1dbf8016acbb",
"assets/assets/animations/moving-cart.json": "876bd8603789ea38d2a2356376fedd39",
"assets/assets/animations/shopping-green.json": "65f1673f701d86fa023d2e1ffaacb61e",
"assets/assets/animations/shopping-loader.json": "c755f92bb263a166d49324c7c65b6012",
"assets/assets/animations/speed-cart.json": "a4cb41105b0982b51035896cd6be6e22",
"assets/assets/animations/splash_cart.json": "a17182757fcd95c3f18f75f46d100694",
"assets/assets/fonts/Lato-Bold.ttf": "85d339d916479f729938d2911b85bf1f",
"assets/assets/fonts/Lato-Regular.ttf": "2d36b1a925432bae7f3c53a340868c6e",
"assets/assets/fonts/OpenSans-Bold.ttf": "0062c34665a3fc0f2278cd4e955702ec",
"assets/assets/fonts/OpenSans-Regular.ttf": "5a798cdadc7cd321e3f72425b70bface",
"assets/assets/fonts/Quicksand-Bold.ttf": "809cd8ab97c465b57cb1a44b1795f12c",
"assets/assets/fonts/Quicksand-Regular.ttf": "678b12a6a938c32eb5fa88f2f439c2df",
"assets/assets/html/payment.html": "4ace9cee360ae0b4afad11ef837b9daf",
"assets/assets/html/privacy.html": "f5b4d57136e2755df7721316f2a9c96c",
"assets/assets/icons/account_icon.svg": "9fd5785d6e465de8bb9243b51beabe84",
"assets/assets/icons/app_icon.svg": "79041eeb08a7a9ebea35588f31e2ef55",
"assets/assets/icons/app_icon_color.svg": "2128bc94f6da1a288e78e12e5357dca4",
"assets/assets/icons/arrow_right.svg": "9c492cd795858f3522b4debfb737cbad",
"assets/assets/icons/Back%2520ICon.svg": "48c3c4eb319f67f90296649fa8271cce",
"assets/assets/icons/Bell.svg": "536eb6601a35ddab0f7b6bdd6c3ff145",
"assets/assets/icons/Bill%2520Icon.svg": "100acc86a48a094da8902a47f3bab1b6",
"assets/assets/icons/Call.svg": "3745eeef13c1facd87afe4cbe208e300",
"assets/assets/icons/Camera%2520Icon.svg": "6c417b2027ec9b901f856099422fc258",
"assets/assets/icons/Cart%2520Icon.svg": "b58f308b0312e4358a04eeadc02575d5",
"assets/assets/icons/cart_icon.svg": "8554d32109b46eedf123b76906809d31",
"assets/assets/icons/Cash.svg": "a24a70772c290370387c0bb33730ce01",
"assets/assets/icons/Chat%2520bubble%2520Icon.svg": "997d4f0aa07c6094a4339040741b4bab",
"assets/assets/icons/Check%2520mark%2520rounde.svg": "e3ad560a09a1bf785b5505c21777ecee",
"assets/assets/icons/Close.svg": "6b3561c87a732bcdf1cfc4cefd9cd9f6",
"assets/assets/icons/Conversation.svg": "c23404da9004575ccff6f78b09be3b13",
"assets/assets/icons/Discover.svg": "b5e8150c8f0c20351b84b2241405c8b4",
"assets/assets/icons/Error.svg": "b69030d759140aaada89f2cc044a3c72",
"assets/assets/icons/explore_icon.svg": "3cc3f4ef8d28e697d57874d5f7d5ad44",
"assets/assets/icons/facebook-2.svg": "b16d4798a9c0f65ff3a7b12270cd7f7d",
"assets/assets/icons/favourite_icon.svg": "aa9032e318881c34dcc513aa5a8e9455",
"assets/assets/icons/Flash%2520Icon.svg": "fcde0c03f2836567e42a45ac08616a42",
"assets/assets/icons/Game%2520Icon.svg": "116bd2707a410cf3a2e8559962e1c2a3",
"assets/assets/icons/Gift%2520Icon.svg": "d109169b3e2ab8256445f626ae4c888c",
"assets/assets/icons/google-icon.svg": "af89e162738e95f20e41f175cf1e930e",
"assets/assets/icons/google.png": "10588e251874bf5c9655289014073350",
"assets/assets/icons/Heart%2520Icon.svg": "0dcf36056268963f7b582eb3bd80ec72",
"assets/assets/icons/Heart%2520Icon_2.svg": "fd7dce0eb7741375843bcda4c7f4e52d",
"assets/assets/icons/Location%2520point.svg": "5b1539e1fe1898b2155b6cc14b9f3c75",
"assets/assets/icons/location_icon.svg": "cfd8f05da9d4150d442776d0695f5e7b",
"assets/assets/icons/Lock.svg": "ea577ace50978a6344c26a10c6f27b49",
"assets/assets/icons/Log%2520out.svg": "d762ccf53dc6843df2e7fa55ca08dba0",
"assets/assets/icons/Mail.svg": "deba8f9b4446c04abcf1cdca0590833a",
"assets/assets/icons/order_accepted_icon.svg": "9b778993d222ede17803fafdd85552e5",
"assets/assets/icons/Parcel.svg": "17e6ca2305b1da7527281d69259c855a",
"assets/assets/icons/Phone.svg": "5fc702cf20c5fc37bd28a3bd5c8d8810",
"assets/assets/icons/Plus%2520Icon.svg": "8980578e97cd2cbad00b71be8183f91d",
"assets/assets/icons/Question%2520mark.svg": "b20151b891eb8e9c927f259dabd6e553",
"assets/assets/icons/receipt.svg": "6dd6b67fb2796be43a9b9d2b1ee803de",
"assets/assets/icons/remove.svg": "a3a85cd7bc1699150a2c86e850a90e60",
"assets/assets/icons/Search%2520Icon.svg": "e86ce3fdf2c8be303b1338a287062d69",
"assets/assets/icons/search_icon.svg": "554ab3dbe18f84f3f63eb70b28025e8e",
"assets/assets/icons/Settings.svg": "d8e321d2db0af3ee55c643d20312ba8a",
"assets/assets/icons/Shop%2520Icon.svg": "71cf1a5022470cbbd1e76a923d1d968f",
"assets/assets/icons/shop_icon.svg": "b94135d86d73765be140228a3d0d7367",
"assets/assets/icons/splash_screen_icon.svg": "88379d75824e983e5f9daab13c421b0b",
"assets/assets/icons/Star%2520Icon.svg": "a4c930c4bf5854048edb32d7d370aada",
"assets/assets/icons/Success.svg": "70f76d95e96ee6877ec6367b049fbc4d",
"assets/assets/icons/Trash.svg": "fe2725bc4781bace6708d522889456e7",
"assets/assets/icons/twitter.svg": "58e83cac5d93b6be707d27a9ffb5aa96",
"assets/assets/icons/User%2520Icon.svg": "3944ad12a2e9014c192fc5795e69a589",
"assets/assets/icons/User.svg": "da6c4fccfbbf6a07d6478cb5ac7e9f9f",
"assets/assets/images/app_logo.png": "8154e20e34766a2143ac7bcdfa6a78b1",
"assets/assets/images/baby_products.jpg": "b41ca79e0b047c6ff021258a069091d9",
"assets/assets/images/bankbg.png": "0294141fa07e35f122937705f321a26b",
"assets/assets/images/beverages.png": "e1f34826f21cc2b99c189681748e83a1",
"assets/assets/images/big-saving.jpg": "4ad1f4f005b0e12480c557a1f27e333d",
"assets/assets/images/body-care.jpg": "8e7e447b474191de540a875b82e9a360",
"assets/assets/images/ecomm.png": "c4653f2f78726ae6a8893adce16f1dbd",
"assets/assets/images/empty-cart.png": "b1b688e0095750d92bf3e2ae1ca56862",
"assets/assets/images/empty_shopping_cart.png": "8700ed0beef824a140c0d18eb81f46e6",
"assets/assets/images/everyday.jpg": "61e1407479f88e823e21365752dc7d4c",
"assets/assets/images/freshfruits.jpg": "05c120d0ad8c2b50f2e47fba579e84b0",
"assets/assets/images/grocery-brand.jpg": "8ec26d15f1f0ab98d9e7c18061fe073e",
"assets/assets/images/grocerycover.jpg": "0d7a5a5194b34114b59ce5386ef4a4b5",
"assets/assets/images/groceryStaples.jpg": "df83267ec69d28b4a973a9711fa785a0",
"assets/assets/images/image-not-found.jpg": "87b4129c1c20e239f7067a8da85e5dac",
"assets/assets/images/Instant_Drinks.jpg": "65c3da5d43097deb2e955751613ad774",
"assets/assets/images/lightening.png": "c5e298ec82f820da126dc228d8b81169",
"assets/assets/images/logo.png": "acc002a58005c630b80e2c1e6750aaa4",
"assets/assets/images/make-it-easy.jpg": "b960cb99cb13ccfbd11a4504a55f71a6",
"assets/assets/images/masalas-cover.jpg": "72fdc079c9f857e61fb061c5663005b8",
"assets/assets/images/mastercard-2.png": "03c20b63d4ffa13484f48fac9d2e32b2",
"assets/assets/images/oils.png": "03fde8155b7b795d3ea64e4fef1b574e",
"assets/assets/images/onboarding.png": "b41a2d966cdf37bf39a183c5159f24d3",
"assets/assets/images/Online_Groceries.png": "4d4fe333d8837045d94c1d4b9c16df5a",
"assets/assets/images/order_accepted_icon.svg": "9b778993d222ede17803fafdd85552e5",
"assets/assets/images/order_failed_image.png": "a7225a3f5470c2a17da11894749542b3",
"assets/assets/images/product-not-found.jpg": "1962a0e630c305dd2d3f94727366682c",
"assets/assets/images/splash-icon.png": "a5613050573455d02f11b2d6edc87886",
"assets/assets/images/visa.png": "e5102f3cf10261b0cf2ddb4c27e66f14",
"assets/assets/images/zigzag-pattern.jpg": "8af9721b40be1642649497bf71728d41",
"assets/FontManifest.json": "b457c9fe05c29f97e91ac3b03e2568ab",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "be94f868f40eb5cd0a0653b188f38f35",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "e430f2f229b1a9126b9b96896408ca3d",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "1ecd7ffea8e67189a1521fb2bd172e0f",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/android-chrome-192x192.png": "37d78193be3fdf58af0ec9cfa7360833",
"icons/android-chrome-512x512.png": "718dda0e0aee8f3ed3b0d0a757b63932",
"icons/apple-touch-icon.png": "86ce45d935efbb2d9609770da9c38615",
"icons/favicon-16x16.png": "bc06e0568324c5f4e1c5214fa502f11a",
"icons/favicon-32x32.png": "66d8edce008a7506bb1c05f6c3aa361d",
"icons/favicon.ico": "1ecd7ffea8e67189a1521fb2bd172e0f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7fa4dce2dd3e3222c8cd2b31249c8b80",
"/": "7fa4dce2dd3e3222c8cd2b31249c8b80",
"main.dart.js": "0ea8ec7b03e75a6e45d0c90de7765001",
"manifest.json": "fc31014387f9cfbde6bdf5c0c8e486ac",
"splash/img/dark-1x.png": "040339d71ce663a21c8961e5f4b02482",
"splash/img/dark-2x.png": "986fd6e6406476a7fa6004822859041d",
"splash/img/dark-3x.png": "b47e8a41a7705287e48e1c3cd6614a50",
"splash/img/dark-4x.png": "7ace9642c6eb8790bedab84f33e390c9",
"splash/img/light-1x.png": "040339d71ce663a21c8961e5f4b02482",
"splash/img/light-2x.png": "986fd6e6406476a7fa6004822859041d",
"splash/img/light-3x.png": "b47e8a41a7705287e48e1c3cd6614a50",
"splash/img/light-4x.png": "7ace9642c6eb8790bedab84f33e390c9",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "e8d9c30c72d727981866c939af8842ec",
"version.json": "edaebc6da95d1405c8737f78f65a32e1",
"web_interop.js": "4b2e2a1a69b034f2bbd6ae6f3145f664"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
