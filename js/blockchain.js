const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;

addresses = ["0x3454E652Bd19ebA7447eDE7bD089EA48eCBfF33A","0x77474B23d4Bb07c8c2Ea460fe860b4C1f7C59317","0x302d55da40cF9C8745aFEC33665252990eEF75D4", "0xdE1010667E014FcDdb0D51099baEbaC6F8A73252", "0xf9BA5169F86b95e749Eed1B8c9E2D5df216d500A", "0x7aCE02973285eb3ea1C7a15A4478876f5D18cc5c", "0xF8b23a8741EA6C1B68ec0fC17E20EcdcFa167B9", "0x2DE2E55DC60606d60D33714A9F2a520E42339b72", "0x9f882a76cf23c29291b84f44d2fa3f11f3bdddd5", "0x48a78A1a2D5E02302285cd3d41336D1e54E2F018", "0xb33E319eF314919c71EE7007eE11eB3ABCBBf64b", "0x7d27b7b65484110ff195FE2466A994395CA794bD", "0x991D8fD15D403b1bCb2e23a787fF175DE007174E", "0x0DAAca4935e7eA2c1ee0F592c6210277e37157f2", "0xc3553bea38a129D813cf5579C18A64f3768c954D", "0x2bcab535eE6A5B6112e9fE2B9D2156Fcf16aDD44", "0x70aEF514Fdd4F25d59a4c55dc89DEA66ffdf71F3", "0xE95E68a661aF1027B9EbFdd4D4E1D62d38b8E6b7", "0x86a26f01cAFf39c28cf5d8dF1bAADC81749063eB", "0x1D399E3Cd8F0dC4a237b929b8f92755aB001FbEC", "0xE7Dab36d61E34430Bf1b58530fc3AC8075DF5d95", "0x057158CCdbB8328419da83E773050743593B7a6f", "0x4571fBd924FB2a4c813b89E166956651d7bFD29E", "0xb7CB9Ad04693b61b960077c41054e95F679B838e", "0x953321C0bf7Bf48d1c4a2E9FC94d3389405692dD", "0x47Ab1940F66E91948cA41f1D22a70fBC984a6591", "0xA7E016CB0743703E81A398be13Cf1a2Be075DC29", "0x9Be3220Bc76247ED56eaEA3F341671B7Be2FeB33", "0x6778B89f205C4fA2460d9Ae74a5C635A93c66BE3", "0x73f0e2bCd38149a9DEf8AA6b2456E372eC1c93ab", "0x4D6B8e20a7683Bc83A15Fa9d8DfaB78De4648562", "0xb359f84d87050191751401A93577b604255947a2", "0x4F9cC76f6E607F35a6a2F1C4bdce0608Bfb003d3", "0xB13995C33a9b7419F3cE5D55A9464d41594A3d52", "0xFF3C247d176c0F2E55b42b3DC985eC36E1041Fc7", "0x1d98a031E38bD9B372CCe52a0296b7f30e2995fb", "0x3C1a4D0A74DA4BCe4CF07A0789af288E4C109e68", "0xeC2C8979459602BEa74b3EBae1ACf9AdDb2D0C98", "0xB8140A80b441333A04f8caCeFa6Ac0f6d437a95D", "0x22002972784A44Cc263776D6f536bD8051C8e0cC", "0x778cB85B6D8a48817C25E6714d3e0E03517e5C3b", "0x0d824A61089A8B5f3B98Db8381FC7001D6185E13", "0x0db1042C5427056707709b6A66d4f3345F74AF65", "0xF1eB336A6147Fed91B5d3Cc52489bC9eCAdDad04", "0x9DD01C00816164843Df9f152E21daCc10658a053", "0xf23E360A36c6f35c27ddB05e30DD015b215585a1", "0x501ee490f74a9BA52d2f2c92C3a4ebb788048F4d", "0x8dE0cfe895025761A0f022F6B66B9b4AE583b5d9", "0x816C97F00CE32c86307ec8166cA8fB9db25aA802", "0xC8f58367e948926f27B7B09C0BA29088Abb24300", "0x1C254044D79E6D68d0Db89f420e50D3148e377dD", "0xA58d3D328aD66dE6F4acD7A6383a4d242A3DC00c", "0xF5385af5F6ebBB8655C0b3948029F6E43a71f2BD", "0xdF269915Bc019A4305237007F1b418351252B43c", "0x95Cb432823277aBeB69D13CAc2d329EefE92bfe9", "0xaEd3Bb323BE4338663df75F13A38A45765455E64", "0x58B2ED71a0797eC53De076F27D3403a522b61F11", "0x0431c4dA984e997e3f7657d37d2D356c3DD95FEa", "0x99B9Ce7Bc4878E5f54281aa24d0Bc65202b8C124", "0x14abea23F7eb79597dA574cDD3C3976555CFe82f", "0xAd523ED532358A11516b8B43c2055d4Da6049856", "0x5A13f029200D3Ff72C8B9fFC82Bcb4cbe016484F", "0x1347B7Dd50aECa28dbdAA98b4b3b2d45E870A450", "0xC3830AE7640CED892f8a86f436aa75DFB745Bba3", "0xdf3934C6820b57eAE901A1E8eC95BCcB44473276", "0x862A8D7467CD146E307bcC41e3Ea064068cd5Fb9", "0x5354AA60ff53F2FEf521891F6fD4641744ae74eF", "0xeEe8720a0291cf7B4f006385B41d27EbB3aa1D15", "0x597cB4ecFDD4BE69EC1dD28713C64376D7d682BE", "0x96F145A70638957060816a7845bD4159561A230C", "0x7Cfd7B011AEc95be3f0D8bA94483276574645d1A", "0x23d614c0774e2461eaF7876B66b6f98481e450b4", "0x23ef4f7fe27c07274e818164c6A2B1Ceb44A9B92", "0x47bdA6D693cBC6d24d0598b90b1621d7F95E7Bee", "0xEe2F9B80EdF4a7DEB8922C1b6bf9e9F5E226D1e1", "0x85678B2B6692F73FDd7747358c693852FB411227", "0x1d7C4d0833590d88a31448F279914cc878CA3dA0", "0x591be8d5268f2f9d6b62a6604d58f325eb7c84bc", "0x467bCc52290ED722C91bfe4fDC878Fc3BA8657BA", "0x0684518BFe8014a5A72E1695DF4cB6b3f7274bB1", "0x726C115582F744D175a2211585BEC37526a5e155", "0x178952D122Fec552c826Fa8C0e82dff044AcB949", "0xE206a304516dD71D76c7ea0a433B263B81707324", "0x547486014c096bF8eBd43d9B2090db6DAeEF2B23", "0x19a05efa9c0f78d86baad8c0a2f1749dacd7e0c6", "0xb123b174a74390a32beee7a5a0138f89b5b5ef70", "0x952F3C482D3A7Ff3B6dEFC6b40DB7B9A0580a0B7", "0x08a7bcC503C5a2bF49f320F7C298C958DBD09Fa1", "0xf3d7920fcc2dbf9aa219f6a751028c06cf61133f", "0xe8F46Fd8F567c67D793d0c86dd6434e9E68029BA", "0xD3F9AaF681b5a7EC3A513FC5A813c136F581C365", "0x5AEDe59255E77CcfaB97fDE9E4E914921fb245fA", "0xF2BB22c3708b9F33Ec94c584A61E3FaCF573B4DF", "0x977B6179277a993E49cc65695dDbFED5c47Af416", "0xa4be1474A761bb0155F79C25233872e9bD139E29", "0x0fd8eb397c2aae7c35222dd6623e08f239cebf8f", "0x02D4BEf35A186396E7238d5Baa30518E0623B120", "0x409802058a3abf19a75d98772c1c1d7365516771", "0xe6660Fd8d59F97443ab21905D8CD8E8C5A12Ad21", "0x5cc016319002f05249861b29c41c445104ccc493", "0xBFAaf96BFD2b860A09e2168a3605a01a76bC0d0E", "0x204432aE0eDbe60C6F46bFA5E9a245374C50341B", "0xa7ea3b0f677262ea896b9040c258d2e7ff3ffc66", "0xf6803179f07aec32ac85c56420554632aafff830", "0xBdDC60FA07bab3036aeCe628e6bc85751faf2Fc4", "0xe6D5199ebca5f42A064E0D0a1f50F8eA75ae7e07", "0xD60e90AD81d7a2491BFc88DCeD0e70383738772A", "0x8c3a76220d2541598d4d7ae4e9e2c0867f542a1a", "0x8e9f35d4a1821dB05445a63524Fc2103aa0600f9", "0x4d65f67808bbd98cc7bc58e51cfd07d62b74ba79", "0x54a0b1b46702750cdca9f604aed573980d196c91", "0x39adae38cea67916bb5ae2eeb91df0e5b3a6ffa4", "0xB91015aF5164c2C8940785164C50064771414Aa8", "0xc52b6acb7bee4715093b53880451be02283d5aba", "0x2eb39e7f48fb27d59c05158bcf274bada4ca668b", "0x42FF9Ed7d0a256c912515e5b4F0D7A5212A56b97", "0xc456E918889145eeAEff958B7a54168865552198", "0xA882fB71aA1967A6a8aa11375F8abd5FeE5BDD6a", "0xc9Ee5b6870D74F3fd1Ad903e7716bf576A806CB9", "0xde12a1587703c494dF896a69ff9E2AE674F371a8", "0x4Ef648ad96DB020111a3A0e7Bce4Ff6e1Af3dA68", "0xFEB4bEF92a27426aB7cba42ed28bf25C3401cCC3", "0x4C9DbaeF7899BaDC3c236121004E7A5E87412859", "0x75DDCceCC1006D9Beb1efFbce831e25a2705197a", "0x1FB42B3AdECaaac6443011A20e15a2C56ca4C1f5", "0x22080792a43c0D34C7D83fdCE5D9B5186B4Eaf64", "0xDaA1509B5A11fb2D34Fec741A7b8283124A94A3E", "0xb39935B0A32BEDDb0cA53944ddEb183E39026805", "0x13DB859760F5647d13a13a3cE0cbB6AA5201b91f", "0xe073D561bE2f874Eddb1832A9bF269E2320dC2A2", "0xc2F5b4d75E6f742526C4684Ef5CA02Ee5dC552F5", "0x4d0F7f2D039c9D9D48C058F63015B8bd0577FA74", "0xB272488eB1a6876040efe4750134E098A5d6df6A", "0x5E03cf638687BA700eD00539C2Fcb8C6D396b07D", "0xC4478f19E7f33E3A7f27c5430E68b38B2Df49524", "0x06400c5dA4cD2CC8892CaC8B660157D29a67598d", "0x54aAC0996423d06123a4E6Cc4e9d64aB92dB01c0", "0xc7F60C9100A43ff4b6676FcFd64a818318581A02", "0xBfEFe33D8EF42894e109780416f8dC3807505f8f", "0x38C63A8b7419511670C4A90B7E3413f0627A64Bb", "0x21D978b8e72976932a9a475fd0D75321B4BB43BA", "0x694Aa1578A3719355E251690e9CB72Ef1527F4bA", "0x04a5e8C4A44780d115aDdA776B04Bcf1C4F3254E", "0xDE8D5aE4c54e4De86AFeF3B9FE35B40D88194d61", "0xd7A481069fe91E8b8C2A44e62e128f4edB32681E", "0x27cb9Ceba8C6ABBaF43Fa447361d66444be110e3", "0x4E76BC52d46a5cA4fc2F1987B9214bd8d96d85B0", "0xaBA151F56a5eA0D32935a57daf5D7eDF2Fd989F4", "0x5aE55a6336C3BD88d08B42e5283eAEd59cC36480", "0x544cBD3CFcfef555bD735538c482Eb29Dab7058c", "0x1AEe6a32945C1cbdf2884F709F99f3f6A2a4c117", "0x7031A0faa27cCf5bC8f155B529bF402A6b40eAb8", "0x7b760228a70C5AF8eBdbAA4EFc2b2C663FC12FFA", "0xb92f134efad02e0204c8fbfaab374d766d42b0ac", "0x4D651265704fE4F38C903F3a2439B867901c8A88", "0xbf20064C795362e7A87F6d21fe3C57Bd99e4a9A5", "0xbFA250d8c5c6D455f0FBaA048f78fDC52BbE4d45", "0xfc89dCfcD82C343502B8881cBB0596935163cb2A", "0x9698F3f2B4620CCDC524B8E97149E2784738846A", "0x60afdb1eBbBdA0631Fb1F314CE75Ca9bE5B6fdb6", "0x6d1B1055b024600a547491deC85B1c426dC34f23", "0x4B6A535DfbBd7Bc4618F002Cd5441602F6004896", "0x06C81cC02f69f4A90ecEd90cC3B55B043126ca9f", "0xBA19E542285366443578607D7BD57b01D6C7791D", "0x87fc6034B5c9bBADd44C4F705b3C1b7C21a58C67", "0xf6DD849a1C72E4FBd9c8c1d06de5660C0aF3e67E", "0xe4aF69ee15dE386cf692FFb34307E34762b54fF4", "0xCf7f51347E9420268375dF12C6BaD832df233146", "0xF518eE482E8FEA2AD3B669FE59247E8091d4d28D", "0x9d03BCd4cA2c5F118CB28e2DF59114F260b3aE8a", "0x06859Cf8D2feCdC74D386f4c2B83a5d5EEbFC41c", "0xf94B610bA2f8D8D35930554726381fFdF9d7aaA3", "0x6fdFBA1d60007B2396d03564c4e4fD4afd2F2D44", "0xCA9e0d152C2E23d17551b115F026A11C4A9bC025", "0x4d75f5Bbd5E09fdEFf89930d976473d9c00F20c5", "0xf98f3FAABC33Db5d781BA5A2da687a1332D1781D", "0x8B3979Edd867bfc4Ca2f67ef0056Cc456E615A78", "0xF56b5D8E3A553633c0D801bA279f7Ee711943AA9", "0x31fEae14fEc2ffc5B24979f2Dd4b794758768858", "0x1d935f516D5008Ff3153ab789258Bf5d8cF604f5", "0x25f1445f719ca72b778f3f2631ecf6d80E1eCc70", "0x1EB4E259EAc3d97ceD2d88923eB3CCa5139019F7", "0xd247e3Cb4b8917529fd85BB303cB92eafa7432F6", "0x4062CFA41b1be30dB8820F87eeC2102Bbd64aBd7", "0xE1E9A5b0E05267F5EC4305EFD3389EBE2B93d954", "0x942147d2b710386A093280C611Ed53D8aabe67DF", "0x15Bf29f4F34F0FD47F64A053F533b9097c915615", "0x553C18a1AAE64148d56e00b7fd863C76B5dE2F04", "0xc13a80fd29cddf5290d2e301b3121df0b73b4401", "0x1327f35216e3a6785a2943a70de6b159f28809d3", "0x385040576a54e16a4f2edeff473b2952b8a06e5f", "0x0c9109c22765BD7523782eC9F65561f6fd3896C0", "0x63cd73eb6Eada6B768A90BD6a4fbb69C9Cd2f4e2", "0x0b6bd3824df70132d1d1ab77a2b5187fee84e2cf", "0x401207a7C91d239E104d929E1bB3D3C402239f87", "0x5c483dce9436623ce994e9b8d7294e312a122de5", "0x4e5ec0aa6660e46846256ea4cbbd20622d3add28", "0x2a15f1FEd563C9C815eB510dcb4A3475a087894d", "0x3734d84Cf06959700E946C05f72AadAd3ebB8046", "0x45878D7561Df43f1878c93209cFc3cA218841D90", "0xa70b35315171e03ffEfB4CE8Ce46612B0cd1FC34", "0xCD1bc72f91E74B67E713D7Cddb31e0c65C6aEFb2", "0xB235Ba58e93BA482b19e81d66eB001CD6fFD601b", "0xFEF647Ecc3D815bc6479DB3c74De98968B6048E1", "0x82BA88f263E001780cAF874F1772CC2a76De8497", "0x122de4b91F617dc5fe2930E2ecC8fEdb7A0A013D", "0x8fEfB8221B991D473cf7b695f4f08CD539d32BE6", "0x7F9652Ee2E07DB0ebED4309563698B1d30e14018", "0xb7Df7d1F7838885Ed712A967c77bCFec93F6647d", "0x2061b245593A51cdAdE206366C6fb1A85CE50121", "0x460A8beb9a585D81e9d7526EF3f1C10443ded892", "0xC9483dc485CB9b389137a0f522D7F97D6b38dCD3", "0xDF702A8cb7781afA9a7248C9E7FD7a07f9750e77", "0x8688bD5b4EF956Ec84e3A75c77012D47950588e1", "0x5F0D8F0c3bF55a468dD3427A37930314ee0720c9", "0xb6cD0414027fE776B685Aec39a7Fd8f37C67b1A3", "0xA86B44ec770dfA0Dc0659bDb03CF3FE616655CD0", "0x0BAB9a5Ca29727b112Cd5dcE487A89FD6b7366Bd", "0x69d7E0dA01BE1a6D70C1Dc1d7f6527514E1c3a53", "0x7F0b62d311B92CfF902e4788fa31506aA0d4D0Bf", "0x96058Fd3a91945Ba5AAbfFA8A898169F61d87a4c", "0xFA1bEc96D2F6BE05645e68DF0Ba98f1b089865C1", "0x29B054f84Eb52D4ac2079C173A4C33a808fd91A2", "0x4076CC526d3230279BDe5Aef92eC8377a92C615c", "0x04d7d1531e05368834d60ee8079ff93bcc0773ef", "0xDdDC3d4b581924739ab9C45cb3a4A303C35cC387", "0x372700b5a65BF05Ac3059725d5EaC5467c0Ba24C", "0x969F9647B8Bf131120A107e7307626801b3E1Ab2", "0x005459ada4f40373c539582341054ac4410fe723", "0x8A394afb9927496dF0eAf6EFA3cA1Ac3DcA21F2A", "0x0C981ACe32fbFe0940A12b760Fe3C69e635Bc5Ef", "0x6037AFE4180c2F111ac1eCbA4bD7920c8bD929a5", "0x70cC3dBf976a17d1109a90dA0613d030942e0977", "0x72335505da876c924748efec5a2d3003ae9d38d6", "0x5c15e2815a7cf1ef8f506a0a4657f98462bbb19b", "0x0CCfA1c3441F3fEbDcEE067bd1Cbe3af7BBB614b", "0x827af0562c9DFcc3976d091D57F6cd3bAF05800E", "0x263Ae3B6B019dE70f521480d54Fd72117B1b60E5", "0x59b0c2870b3346148724A8496720A856B1844188", "0xFc053afECf2904336Cc71C069549B724B3CD46Bc", "0x694907C6aeeeF4C3cD3fbFFf0E92E6741A68467C", "0xC3452e4F0097E98Cad7392Db2cAfd2f0de24B4e1", "0xDB5Df77973d383cdd8873Def4e89dC779aA36c85", "0x7f522989A221fD02fC60Cc32faAE4400c496729d", "0x946f74dc70567e1a91ee0614d8f6326aea1370ec", "0x357f99befe99cb3b284d29abef0947360af9dbdb", "0x5c2260103bA960D23603a7b824c80a24EAe159b9", "0x4a10c1458f0b24669167396db85fb0372c04d853", "0xc9cdee460c767cadc3318fb4dfdeb4f00bb07a9f", "0x3541E846b3a4E3D67cE7D4342025A92285c2e291", "0xAEdB7036c82426ce9799Aaf5ce0D8a9eD645FAf5", "0x30f1BA8EAcD9746f070a067E122914beC854C756", "0x82fc1558D236131FdFEDaEe3045936A8D358D2f1", "0xa12d957c3ed4a0276b9cded74225bcd64c41712d", "0xc8960ea5cacbc7c9ce9a09559113d1bd9672c277", "0x2807d2b5b277fd09b3fe25e1a94fa3ab8c08fdac", "0x96680098842C6d3A80963E1BD2543EAf705D1079", "0x4Ece0c22746cdF2f3de5a3AF6D7BcaC68331fCaa", "0x5EE4b22c44e4e598ae0805400d947E693C48BC2E", "0x2432C6687df72fCB5cbe35439594D8967c5a17B2", "0x4322829Babc72C1F9F60B4A29F39e474672164A9", "0x9E958CBCB2005b73440eCD92F2162b0aa299183d", "0xFf78aa70124DcdC3Ea434AaF0B9EcbF51391fd4d", "0xF01Dc44cA43C2475448F735F94d4bc1Bd0827c54", "0x3ba75C7cCfe8d3353DfcaE0e13271Ab0ac228dDD", "0x88529E5fDB07eA8a0375edd3B1E4E9f7b3f77446", "0x0B5C326d1a1846256613F57c9742f8b8d37578D5", "0xDE7b08A4E6f8987e79E70197B751B94C5e23f1Dc", "0x88B55C9B0f03f40e3a455B8836019740f037E4D7", "0xa7ea3B0F677262EA896b9040c258D2E7fF3ffC66", "0x09e4560469666b2019ab38f4173fa160c2c5bee6", "0xAe0051B1E44aa2035BaEFF406D6Ad39F18e40866", "0xca434Cf098aEAecdBca8A813177a3f9D2A901B7c", "0x37E89707cd5F4979f190ABc5DF0D1406E65E2eB3", "0x4b8433F1A8623DE97cCB42f26F61Fb829f1C6e4d", "0x10c45c8B122916Cb0C4B01f3DF54E34b46B0Bc9b", "0x5986554fd85E8c4A40B03C95c44FF2b3f408967C", "0xF53a9e06623b2AD2AydbA75cDcA7fcfca5595A227", "0x21A5CDd09b314Df37295D461f7f8E329F2F2Ce0F", "0xe9153f613dDF952551b656A8d55bBCFBaC321955", "0x3bFDAfE279E0ED631E2ff49088CEc4037D13ef52", "0x9aee8D94c27d79042312eC7b8d38e44A96312784", "0xBc1f4e815De7f90d37D19D216ccD95B8c8dB34db", "0xA34b1d36d7376D117352C9a621482441EaA08bA9", "0x25d0c6d2eC0aC0aDE28A5e457E33Ef82Ea6B635A", "0xaFd56Aa1412ceD162cE93bb2E4091207567F2171", "0x6C7F0B3f86e16e725F6c283E5f1F00591FFA8061", "0x3CC8a2Bf8E27C6841D1e723622F8edbDbcC1a810", "0x092bc528eD13441b929181148B5Aa9EDceB56e03", "0xe479DC6f25edc396075C5419A7d73ef02D9790a7", "0xec817d2Ea507c7DB78304fCee0a736e2D37373E5", "0x56faDE21f0BbbE41dC124f7386738Ea7a37D65eA", "0x7D2ba1e2044637C921C7918438A5AB48bFA54bb1", "0x9A4796c8d59D2f156B6521FC1C885B8F1e2Ceccc", "0x461685f49020475451dd72EDb478EE1Da8B7191a", "0x32Ad402b8961486ea1F8761c12F729A7011858C1", "0x1dce420F915916d5848e24142073c200A170023A", "0x58d4AafeFAbe165d1078F050895eb15aA4BF312b", "0xB5D61cA27E8Fec19b8433C03cC5C6603206cf214", "0x3406Ca40fa09F6abf4f18Ef5C861fB49Acb910E4", "0x5B3bfB479771B87106056d198CbADE3c60eeb7e7", "0x44B8863B776700248eAb6E274B994a83072947B7", "0x02BFCDE3D64f249042264e9E3DE02Ecb284d6a84", "0xa858Ea02845071dBe09b4b5C3BBea49529bEaadB", "0xa48F8CD494E1dbC196b8a38aae5248660441AC2F", "0xf2DdfB330845ed0C69c3C88C4Ba494D1531f5f42", "0x0967f2DFb9F230c31cDe4408D30F1CF8d13152f0", "0x61800f311Bf4F5A08EdCb966664d64974ecc3478", "0x3Ab83c2cad486EB61EC3AA20B0532b7abBC896ad", "0x316808F098BF728570edB18e894A2e27c92F945F", "0x34E296A8980D4e85fA1E6d39CAD1cB67833326C2", "0xa294BC0613E9ACB9EF74ADeF07F2a0bcdC9471fB", "0xd3d97fb4f6714f02bc70ce272ad0f041445987a3", "0x551545C6aa92Cd6ED0E2fe9487008AC2bD91056A", "0x9322C6CcbCE9fCC9BDC45fe2830704907330454D", "0xD551076646DDAeCa92810c31bC42da56204310B0", "0x26848a9D7E69C020d2B8732A090Abc927147C8B0", "0x51C42dD097305eea7EFF02B271B56A66D855bE1d", "0x642C7d19B7b2C28346B92e6C0ef4bdC85ad2d29e", "0x0a3b151beeb0ACb8a16CDaD2E186bc6685b821B0", "0xeD7aD5c39f972bA55cd1010eC41c6412e04e3AcA", "0xd26f7F6B3bDACF9B34AA3884962FF0d4F151c7B0", "0x0b830DF3D03B0190f60e330642152583CB9B0403", "0x8C08c935483e02Ed5b0285Ce4a7bCd92B61dAe9e", "0x84c53eB896F8469e99E42044FedEa7190Cb9e11c", "0x638877cf3bddfd8c841ac6e7d9357428d7c9422d", "0x0F0Fb9aFD70CfF14C9e5E443f11b4f5585297c0D", "0xe553181d4607d758938838aff31184AF1A03270B", "0xe553181d4607d758938838aff31184AF1A03270B", "0x3C04182610360586237ba23BEF2dfeB146962eb2", "0x28944257E11dbBbA3E0B9e0FDE7A9B4fbf8e572b", "0xe80D8bB2B526cE9ccca3610ba59dC39697391803", "0x7d0926b33ECaecD95be2C6616D95683b8E9C5BD4", "0x15361667C046462665e958d33F0cF6366d6F0deB", "0x25F89e72c8b362BA2063B72A60F27acf76e37406", "0x0b403AC50ecd4B179694634Bf17723e8F822a6Ae", "0x88bF32b54b2ba0724DFDB31bA47616d91a5eF0f0", "0xf8dD77D7b550073b6E08B738b9E068d351c7c3B7", "0xbA2b4240Ac736382b3549CfFE317Ef6868b5CFf1", "0xB28Ac17023Bf5fB99E0d38BE0247b6613C92dCE6", "0x6152FAc2394226bA5AE1B69254f0f2bc32C0EA49", "0xc696A13CF9012812cbd805407804704D038217b0", "0x84B8Da634d034Ff8067503CEA37828c77A9CBEab", "0x180c06dE66E2d5bC1bC13ad17634B992F76eA90C", "0xFd100FFFe8fb419B445008941F1Ea0522f5562a7", "0xD463475bbD405FB1D65dAE76E37573A3a1FD73D6", "0x4F26D9ABe11E7e01865F60b6a48810Ba0756851F", "0x83D384B3d4e5291ECF0008A17539E4f45C9D7731", "0x6Dc7aC639D56d8665b992fbC3d79fAe4ec591156", "0xb2Bb8b3F92Ac850BAFd0FE7FAedA18BFB8aCBac3", "0x699Df7d739B7C9434dbC3E9Cf12F63ef4525104a", "0x4C45B35c61aBd51DCc9a20826E104E9642e89051", "0x8e1e5d25f24fD2CE7442065Ba6532f1Fff73A2A7", "0x689584dc649d085e0Ff2B6177cfeFaBa83a863c0", "0xC39DC17b8924B1f3404Dc0C3597e78510a707aBB", "0x843D881BE7BB6940d50A9b40C5940Ac3dBc32214", "0x72B4887a661701C3Df22550075a98c11D175F602", "0xE7Dab36d61E34430Bf1b58530fc3AC8075DF5d95", "0xf63B8996c168af4e07e73f2A1D2F6dFc23a9Aa2A", "0x41219269b238A7bb1e617bEBDba2cCA0026Fa6d4", "0x9ce225896C24d6609009D66f0C58098132Bb6451", "0xbC8744370bCb6D5AbF5dE8B4086ecfBB4C5629C3", "0x6df01853fC014065201d5b9Ca57135f76142882d", "0x386d86f26D85bF89308D14227f6a6207Ff376Ca0", "0x462233f988488D2C459DAF53C6a9C98a3D2a484c", "0x9f89fa91440Dd9084182d22ce044d46695Ec5536", "0x23B1aa55351213532DE3698eC6041611ee001A0b", "0xC90Cfac3d1e07B08847d3FB0ea6A0200Cc0F690A", "0x2DE4EFcCdCBb8b59223Fd5a4Ec17BFD0074974Dd", "0x9E0154c935F8624B5FCE5577d4FBc3AF4aBa0eF7", "0x2b0dcb480FfEBdE7D95b4d0D2A83266Ad6644e3D", "0x59C6d5a1bd9D7D990d808d930539c800eda67A21", "0xb56cFf21601ee75870aD52a0FeFE6F62eEbBD54f", "0x23B1aa55351213532DE3698eC6041611ee001A0b", "0xC90Cfac3d1e07B08847d3FB0ea6A0200Cc0F690A", "0x2DE4EFcCdCBb8b59223Fd5a4Ec17BFD0074974Dd", "0x9E0154c935F8624B5FCE5577d4FBc3AF4aBa0eF7", "0x2b0dcb480FfEBdE7D95b4d0D2A83266Ad6644e3D", "0x9f89fa91440Dd9084182d22ce044d46695Ec5536", "0x86CA7Dab45b7E07D462ddA3bB1802Cde705b7Fc7", "0x2eB8aa11450E331ED1603097c1BEe5c97dBEd92f"]

const leaves = addresses.map(x => keccak256(x));
const tree = new MerkleTree(leaves, keccak256, {
    sortPairs: true
})
const buf2hex = x => "0x" + x.toString("hex")





        const ABI = [{
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "inputs": [],
                "name": "ApprovalCallerNotOwnerNorApproved",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "ApprovalQueryForNonexistentToken",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "ApprovalToCurrentOwner",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "ApproveToCaller",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "BalanceQueryForZeroAddress",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "MintToZeroAddress",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "MintZeroQuantity",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "OwnerQueryForNonexistentToken",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "TransferCallerNotOwnerNorApproved",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "TransferFromIncorrectOwner",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "TransferToNonERC721ReceiverImplementer",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "TransferToZeroAddress",
                "type": "error"
            },
            {
                "anonymous": false,
                "inputs": [{
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "approved",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [{
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "ApprovalForAll",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [{
                        "indexed": true,
                        "internalType": "address",
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [{
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "inputs": [],
                "name": "MAX_SUPPLY",
                "outputs": [{
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "PUBLIC_MINT_MAX_SUPPLY",
                "outputs": [{
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "WHITELIST_MINT_MAX_SUPPLY",
                "outputs": [{
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [{
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [{
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }],
                "name": "balanceOf",
                "outputs": [{
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "baseExtension",
                "outputs": [{
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "baseURI",
                "outputs": [{
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [{
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }],
                "name": "getApproved",
                "outputs": [{
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [{
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    }
                ],
                "name": "isApprovedForAll",
                "outputs": [{
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "isPublicMintActive",
                "outputs": [{
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "isWhitelistMintActive",
                "outputs": [{
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "maxMintPerTx",
                "outputs": [{
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "name",
                "outputs": [{
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "owner",
                "outputs": [{
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [{
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }],
                "name": "ownerOf",
                "outputs": [{
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "provenanceHash",
                "outputs": [{
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [{
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }],
                "name": "publicMint",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "publicMintCost",
                "outputs": [{
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [{
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "_address",
                        "type": "address"
                    }
                ],
                "name": "reserve",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [{
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [{
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "_data",
                        "type": "bytes"
                    }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [{
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "setApprovalForAll",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [{
                    "internalType": "string",
                    "name": "_baseExtension",
                    "type": "string"
                }],
                "name": "setBaseExtension",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [{
                    "internalType": "string",
                    "name": "_newBaseURI",
                    "type": "string"
                }],
                "name": "setBaseURI",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [{
                    "internalType": "bool",
                    "name": "_isPublicMintActive",
                    "type": "bool"
                }],
                "name": "setIsPublicMintActive",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [{
                    "internalType": "bool",
                    "name": "_isWhitelistMintActive",
                    "type": "bool"
                }],
                "name": "setIsWhitelistMintActive",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [{
                    "internalType": "uint256",
                    "name": "_maxMintPerTx",
                    "type": "uint256"
                }],
                "name": "setMaxMintPerTx",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [{
                    "internalType": "uint256",
                    "name": "_publicMintCost",
                    "type": "uint256"
                }],
                "name": "setPublicMintCost",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [{
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }],
                "name": "setPublicMintMaxSupply",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [{
                    "internalType": "bytes32",
                    "name": "_whitelistMerkleRoot",
                    "type": "bytes32"
                }],
                "name": "setSeedMerkleRoot",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [{
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }],
                "name": "setWhitelistMaxSupply",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [{
                    "internalType": "uint256",
                    "name": "_whitelistMintCost",
                    "type": "uint256"
                }],
                "name": "setWhitelistMintCost",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [{
                    "internalType": "bytes4",
                    "name": "interfaceId",
                    "type": "bytes4"
                }],
                "name": "supportsInterface",
                "outputs": [{
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "symbol",
                "outputs": [{
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [{
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                }],
                "name": "tokenURI",
                "outputs": [{
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "totalSupply",
                "outputs": [{
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [{
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [{
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }],
                "name": "transferOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "whitelistMerkleRoot",
                "outputs": [{
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [{
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32[]",
                        "name": "_merkleProof",
                        "type": "bytes32[]"
                    }
                ],
                "name": "whitelistMint",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "whitelistMintCost",
                "outputs": [{
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "withdraw",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            }
        ]

        let contractAddress = "0x5Ac778D48be0c0FE99ba38279c0BB1f63C5D7B9b";

        let chainData

        let web3Modal

        let provider;

        let selectedAccount = null;

        let mintstatus = false

        let web3;

        function init() {
            const providerOptions = {
                walletconnect: {
                    package: WalletConnectProvider,
                    options: {
                        infuraId: "0x5Ac778D48be0c0FE99ba38279c0BB1f63C5D7B9b",
                    }
                }
            };
            web3Modal = new Web3Modal({

                providerOptions, // required

            });
            console.log("Web3Modal instance is", web3Modal);

        }


        async function fetchAccountData() {

            web3 = new Web3(provider);
            console.log("Web3 instance is", web3);
            const chainId = await web3.eth.getChainId();
            chainData = evmChains.getChain(chainId);
            const accounts = await web3.eth.getAccounts();
            console.log("Got accounts", accounts);
            if (chainId != 1) {
                document.getElementById("btn-connect").innerHTML = "Switch to Eth Mainnet"
                mintstatus = false
            } else {
                document.getElementById("btn-connect").innerHTML = "Mint"
                mintstatus = true


            }
            selectedAccount = accounts[0];

        }


        async function refreshAccountData() {
            await fetchAccountData(provider);
        }

        async function onConnect() {



            console.log("Opening a dialog", web3Modal);
            try {
                if (selectedAccount == null) {
                    provider = await web3Modal.connect();
                    document.querySelector("#btn-connect").addEventListener("click", mintAllowlist);


                } else {
                    document.querySelector("#btn-connect").addEventListener("click", mintAllowlist);

                }
            } catch (e) {
                console.log("Could not get a wallet connection", e);
                return;
            }

            // Subscribe to accounts change
            provider.on("accountsChanged", (accounts) => {
                fetchAccountData();
            });

            // Subscribe to chainId change
            provider.on("chainChanged", (chainId) => {
                fetchAccountData();
            });

            // Subscribe to networkId change
            provider.on("networkChanged", (networkId) => {
                fetchAccountData();
            });

            await refreshAccountData();
        }



        async function onDisconnect() {

            console.log("Killing the wallet connection", provider);

            if (provider.close) {
                await provider.close();
                await web3Modal.clearCachedProvider();
                provider = null;
            }

            selectedAccount = null;

        }


        async function mintAllowlist() {
            console.log("Root: ", buf2hex(tree.getRoot()))
            if (mintstatus) {
                const ethersProvider = new ethers.providers.Web3Provider(provider);
                const signer = ethersProvider.getSigner()
                const contract = new ethers.Contract(contractAddress, ABI, signer);
                document.getElementById("btn-connect").innerHTML = "Minting..."

                let overrides = {
                    value: ethers.utils.parseEther("0.00")
                };
                try {
                    leaf = keccak256(selectedAccount)
                    proof = tree.getProof(leaf).map(x => buf2hex(x.data))

                    let name = await contract.whitelistMint(1, proof, overrides)
                    name.wait()
                    document.getElementById("btn-connect").innerHTML = "Success"

                } catch (err) {
                    console.log(err)

                    document.getElementById("btn-connect").innerHTML = "Failed, Try again..."
                    if (err.code == "INSUFFICIENT_FUNDS") {
                        document.getElementById("btn-connect").innerHTML = "Not Enough Eth"
                    } else if (err.error["message"] == "execution reverted: ERROR: max mints per allowlist exceeded") {
                        document.getElementById("btn-connect").innerHTML = "Max Minted for your wallet"


                    } else if (err.error["message"] == "execution reverted: Whitelist merkle proof is invalid") {
                        document.getElementById("btn-connect").innerHTML = "Not in WL"


                    } else {
                        document.getElementById("btn-connect").innerHTML = err.error["message"]

                    }
                }
            }

        }



        async function mint() {
            if (mintstatus) {
                const ethersProvider = new ethers.providers.Web3Provider(provider);
                const signer = ethersProvider.getSigner()
                const contract = new ethers.Contract(contractAddress, ABI, signer);
                document.getElementById("btn-connect").innerHTML = "Minting..."

                let overrides = {
                    value: ethers.utils.parseEther("0.02")
                };
                try {

                    let name = await contract.publicMint(1, overrides)
                    name.wait()
                    document.getElementById("btn-connect").innerHTML = "Success"

                } catch (err) {
                    console.log(err.error["message"])

                    document.getElementById("btn-connect").innerHTML = "Failed, Try again..."
                    if (err.code == "INSUFFICIENT_FUNDS") {
                        document.getElementById("btn-connect").innerHTML = "Not Enough Eth"
                    } else if (err.error["message"] == "execution reverted: ERROR: max mints per allowlist exceeded") {
                        document.getElementById("btn-connect").innerHTML = "Max Minted for your wallet"


                    } else if (err.error["message"] == "execution reverted: ERROR: not in allowlist") {
                        document.getElementById("btn-connect").innerHTML = "Not in WL"


                    } else {
                        document.getElementById("btn-connect").innerHTML = err.error["message"]

                    }
                }
            }

        }


        window.addEventListener('load', async () => {
            init();

            document.querySelector("#btn-connect").addEventListener("click", onConnect);


            // document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
        });
