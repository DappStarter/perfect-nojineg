require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth rifle unhappy harvest industry flush general'; 
let testAccounts = [
"0x770facb01253be8799bc8ede0b6ccc114977595c4e199b37d54b72fab32d595c",
"0x6ab75f5d015c846fc67d040dca3484ef541aac5e0c1cca5787399086c433a4f7",
"0x0f829de9b2af1eba6ac22c76f1011301e22e0e0989add3e35ad84b6c3355b353",
"0x1578cb3aee8ad5b857aa4d648bd0d790a27cafe963f50f068882eab2fbd85d8b",
"0xf9d979f8cbaf9b102b79628257d0ed3c04e76f1c924fa54f40fcb4597b00b891",
"0xd101aec54f1c91c3e3497cd3a3bf8a4c9e848aadf2789b406be8c575baaf201c",
"0x1bb64f84f7fdd493417b125351eef2234414e075a5a97fe9a4792e88097b6660",
"0xdd00dc2f3d6a58dfcb1f514b5c22ab405bbb16c3222424f153eb2c0a57728cbe",
"0x7e7963b1613274b1f53040bb40f49887593a2ff1126b748661f9746bb4a7491d",
"0x5cee9929d6fa89d55218892b2a62fe89d2978c01a453e7cfc24ed33a65cb68f1"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
