const { accounts, contract } = require('@openzeppelin/test-environment');
const {expect}=require('chai');
const { isTopic } = require('web3-utils')


const myContract = contract.fromArtifact('B');
const myContract2=contract.fromArtifact('A');

const myContract3=contract.fromArtifact('D');

let d_contract
let e_contract
let add;
describe('Set_Get', function () {
  const [owner, other] =  accounts;
  before(async function () {
    // The bundled BN library is the same one web3 uses under the hood
    e_contract= await myContract2.new();
    add=e_contract.address;
    d_contract = await myContract.new(add);
  });

  it('Making value is being set ', async function () {
    // Store a value - recall that only the owner account can do this!
    await d_contract.setAge(12, { from: owner });
    expect((await d_contract.getAge()).toString()).to.equal("12");
  });

})