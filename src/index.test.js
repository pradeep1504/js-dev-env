import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe("our first test ",()=> {
    it("Should Pass", ()=> {
        expect(true).to.equal(true);
    });
});

describe("index.html ",()=> {
    it("Should have hello", (done)=> {
        const index = fs.readFileSync('./src/index.html','UTF-8');
        jsdom.env(index, function(err, window){
                const h1 = window.document.getElementsByTagName('h1')[0];
                expect(h1.innerHTML).to.equal('Hello World !!');
                done();
                window.close();
        });
    });
});