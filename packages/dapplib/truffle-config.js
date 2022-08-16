require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remain unusual hunt industry foster twelve'; 
let testAccounts = [
"0xc156d433a534ac11ca5acc6440a3e89aca0297f1d4754c0b839ec70f3006ab29",
"0xccc49382742822d81d858e118caeb0ef42701a55a208385da1aae855744f64ce",
"0xb2195a0dcf3e71bc45b83e2a49433038666ec5a7e518ca7e666c82e79d73f668",
"0x7d5965179996e95a65a9adc57687ab244c4eea3b4c57e413d2a197ed25b4000b",
"0x268c9859892584139a9644d39f3390354c1ae6e2fa6f779f48dfac0dd991e50c",
"0xe2a8331706af08b78fbac667c8e02d83d482391dad7d14efb7c69e60843b5c64",
"0x6292cb1e7354d680e0165d898e68a20e7f7843bc6436318afa75b641b00f98a3",
"0xa92058a875a450bf1773197cc826c9e8416409b2cfb6b92b6ba14fa13a3c4154",
"0xb3be1bc0da3ea18304d5578f4421522f1ea25b62459c93204bc838681d67dd3d",
"0xb36b6c653ff1cd5c4adf14e1b711888dff2281b6b9ef26ce606c389b4eaf6fa8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


